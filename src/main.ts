import { Client } from "./client.ts";
import { characters } from "./items/characters.ts"
import { weapons } from "./items/weapons.ts"
import { attacks } from "./items/attacks.ts"
import { pictos } from "./items/pictos.ts"
import { luminas } from "./items/luminas.ts"

const app = document.querySelector<HTMLDivElement>("#root");
if (!app) throw new Error("#app not found");

app.innerHTML = `
  <div style="padding:24px;font-family:system-ui">
    <h1>Clair Obscur: Expedition 33 Damage Calculator</h1>
    <p id="status">Status: initializing...</p>

    <div style="margin-top:12px">
      <details open>
        <summary><strong>Characters</strong></summary>
        <span id="characters"></span>
      </details>

      <details open>
        <summary><strong>Weapons</strong></summary>
        <span id="weapons"></span>
      </details>

      <details open>
        <summary><strong>Attacks</strong></summary>
        <span id="attacks"></span>
      </details>

      <details open>
        <summary class="section-header">
          <strong>Pictos</strong>
          <span id="pictosCount">(0/0)</span>
        </summary>
        <span id="pictos"></span>
      </details>
      
      <details open>
        <summary class="section-header">
          <strong>Luminas</strong>
          <span id="luminaPoints">(0/0)</span>
          <button id="lpMinus" type="button">−</button>
          <button id="lpPlus" type="button">+</button>
        </summary>
        <span id="luminas"></span>
      </details>
    </div>

    <div style="margin-top:24px">
      <button id="execute" style="margin-left:8px">Calculate</button>
    </div>

    <div style="margin-top:24px">
      <h2>Damage: </h2>
      <span id="out"></span>
    </div>
  </div>
`;

const statusEl = document.querySelector<HTMLParagraphElement>("#status")!;
const charactersEl = document.querySelector<HTMLSpanElement>("#characters")!;
const weaponsEl = document.querySelector<HTMLSpanElement>("#weapons")!;
const attacksEl = document.querySelector<HTMLSpanElement>("#attacks")!;
const pictosEl = document.querySelector<HTMLSpanElement>("#pictos")!;
const pictosCountEl = document.querySelector<HTMLParagraphElement>("#pictosCount")!;
const luminasEl = document.querySelector<HTMLSpanElement>("#luminas")!;
const luminaPointsEl = document.querySelector<HTMLParagraphElement>("#luminaPoints")!;
const lpMinusEl = document.querySelector<HTMLButtonElement>("#lpMinus")!;
const lpPlusEl  = document.querySelector<HTMLButtonElement>("#lpPlus")!;
const executeEl = document.querySelector<HTMLButtonElement>("#execute")!;
const outEl = document.querySelector<HTMLPreElement>("#out")!;

type Character = (typeof characters)[number];
type Weapon = (typeof weapons)[number];
type Attack = (typeof attacks)[number];
type Picto = (typeof pictos)[number];
type Lumina = (typeof luminas)[number];

let selectedCharacter: Character | null = characters[0] ?? null;
let selectedWeapon: Weapon | null = null;
let selectedAttack: Attack | null = null;
let selectedPictos: Picto[] = [];
let selectedLuminas: Lumina[] = [];

function getCharacterKeyFromSelected(): string | null {
  return selectedCharacter?.name.toUpperCase() ?? null;
}

function getWeaponsForSelectedCharacter(): Weapon[] {
  const key = getCharacterKeyFromSelected();
  if (!key) return [];
  return weapons.filter((w) => w.character === key);
}

function getAttacksForSelectedCharacter(): Attack[] {
  const key = getCharacterKeyFromSelected();
  if (!key) return [];
  return attacks.filter((a) => a.character === "ALL" || a.character === key);
}

function getLuminaPointsAvailable(): number {
  if (!selectedCharacter) return 0;
  return selectedCharacter.lumina_points + selectedCharacter.lumina_points_added;
}

function getLuminaPointsUsed(): number {
  return selectedLuminas.reduce((sum, l) => sum + (l.cost ?? 0), 0);
}

function getBlockedLuminaNamesBySelectedPictos(): Set<string> {
  const s = new Set<string>();
  for (const p of selectedPictos) {
    if (p.lumina?.name) s.add(p.lumina.name);
  }
  return s;
}

function isLuminaBlocked(l: Lumina): boolean {
  return getBlockedLuminaNamesBySelectedPictos().has(l.name);
}

function canAddLumina(l: Lumina): boolean {
  if (isLuminaBlocked(l)) return false;

  const available = getLuminaPointsAvailable();
  const used = getLuminaPointsUsed();
  return used + (l.cost ?? 0) <= available;
}

function cleanupLuminaSelectionAfterPictoChange() {
  const blocked = getBlockedLuminaNamesBySelectedPictos();
  selectedLuminas = selectedLuminas.filter(l => !blocked.has(l.name));

  trimLuminasToFitPoints();
}

function trimLuminasToFitPoints() {
  const available = getLuminaPointsAvailable();
  let used = 0;
  const kept: Lumina[] = [];
  const sorted = [...selectedLuminas].sort(
    (a, b) => (b.cost ?? 0) - (a.cost ?? 0)
  );
  for (const l of sorted) {
    const c = l.cost ?? 0;
    if (used + c <= available) {
      kept.push(l);
      used += c;
    }
  }
  selectedLuminas = kept;
}

function onCharacterChanged() {
  const wList = getWeaponsForSelectedCharacter();
  const aList = getAttacksForSelectedCharacter();
  selectedWeapon = wList[0] ?? null;
  selectedAttack = aList[0] ?? null;

  cleanupLuminaSelectionAfterPictoChange();
  trimLuminasToFitPoints();
}

function renderAll() {
  // Characters
  renderSingleSelect(
    charactersEl,
    characters,
    selectedCharacter,
    (c) => c.name,
    (c) => {
      selectedCharacter = c;
      onCharacterChanged();
      renderAll();
    }
  );

  // Weapons
  const weaponList = getWeaponsForSelectedCharacter();
  renderSingleSelect(
    weaponsEl,
    weaponList,
    selectedWeapon,
    (w) => w.name,
    (w) => {
      selectedWeapon = w;
      renderAll();
    }
  );

  // Attacks
  const attackList = getAttacksForSelectedCharacter();
  renderSingleSelect(
    attacksEl,
    attackList,
    selectedAttack,
    (a) => a.name,
    (a) => {
      selectedAttack = a;
      renderAll();
    }
  );

  //Pictos
  renderPictos();
  renderPictoCount();
  
  //Luminas
  renderLuminas();
  renderLuminaPoints();
}

function renderSingleSelect<T>(
  mount: HTMLElement,
  items: T[],
  selected: T | null,
  getLabel: (item: T) => string,
  onSelect: (item: T) => void
) {
  mount.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.style.display = "flex";
  wrap.style.flexWrap = "wrap";
  wrap.style.gap = "8px";
  wrap.style.marginTop = "8px";

  for (const item of items) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = getLabel(item);

    btn.style.padding = "8px 12px";
    btn.style.borderRadius = "10px";
    btn.style.border = "1px solid #ccc";
    btn.style.cursor = "pointer";

    const isSelected = selected === item;
    btn.style.background = isSelected ? "#1f6feb" : "white";
    btn.style.color = isSelected ? "white" : "#111";
    btn.style.borderColor = isSelected ? "#1f6feb" : "#ccc";

    btn.onclick = () => onSelect(item);
    outEl.textContent = "";

    wrap.appendChild(btn);
  }

  mount.appendChild(wrap);
}

function renderPictos() {
  pictosEl.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.style.display = "flex";
  wrap.style.flexWrap = "wrap";
  wrap.style.gap = "8px";
  wrap.style.marginTop = "8px";

  for (const p of pictos) {
    const isSelected = selectedPictos.includes(p);
    const wouldExceed = !isSelected && selectedPictos.length >= 3;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = p.name;

    btn.style.padding = "8px 12px";
    btn.style.borderRadius = "10px";
    btn.style.border = "1px solid #ccc";
    btn.style.cursor = wouldExceed ? "not-allowed" : "pointer";
    btn.disabled = wouldExceed;

    if (isSelected) {
      btn.style.background = "#1f6feb";
      btn.style.color = "white";
      btn.style.borderColor = "#1f6feb";
    } else {
      btn.style.background = "white";
      btn.style.color = "#111";
      btn.style.opacity = wouldExceed ? "0.5" : "1";
    }

    btn.onclick = () => {
      if (isSelected) {
        selectedPictos = selectedPictos.filter(x => x !== p);
      } else {
        if (selectedPictos.length >= 3) return;
        selectedPictos = [...selectedPictos, p];
      }

      outEl.textContent = ""; 
      cleanupLuminaSelectionAfterPictoChange();
      renderAll();
    };

    wrap.appendChild(btn);
  }

  pictosEl.appendChild(wrap);
}

function renderPictoCount() {
  const used = selectedPictos.length
  pictosCountEl.textContent = `${used}/3`;
}

function renderLuminas() {
  luminasEl.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.style.display = "flex";
  wrap.style.flexWrap = "wrap";
  wrap.style.gap = "8px";
  wrap.style.marginTop = "8px";

  for (const l of luminas) {
    const isSelected = selectedLuminas.includes(l);
    const blocked = isLuminaBlocked(l);
    const affordable = isSelected || canAddLumina(l);
    const disabled = blocked || !affordable;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = `${l.name} (${l.cost})`;

    btn.style.padding = "8px 12px";
    btn.style.borderRadius = "10px";
    btn.style.border = "1px solid #ccc";
    btn.style.cursor = disabled ? "not-allowed" : "pointer";
    btn.disabled = disabled;

    if (isSelected) {
      btn.style.background = "#1f6feb";
      btn.style.color = "white";
      btn.style.borderColor = "#1f6feb";
    } else {
      btn.style.background = "white";
      btn.style.color = "#111";
      btn.style.opacity = disabled ? "0.5" : "1";
    }

    if (blocked) btn.title = "Blocked: already provided by selected Picto";
    else if (!affordable) btn.title = "Not enough Lumina Points";

    btn.onclick = () => {
      if (isSelected) {
        selectedLuminas = selectedLuminas.filter(x => x !== l);
      } else {
        if (!canAddLumina(l)) return;
        selectedLuminas = [...selectedLuminas, l];
      }

      outEl.textContent = "";
      renderAll();
    };

    wrap.appendChild(btn);
  }

  luminasEl.appendChild(wrap);
}

function renderLuminaPoints() {
  if (!selectedCharacter) return;
  const used = getLuminaPointsUsed();
  const available = getLuminaPointsAvailable();
  const bonus = selectedCharacter.lumina_points_added;
  luminaPointsEl.textContent = `${used}/${available} (+${bonus})`;
}

lpPlusEl.onclick = () => {
  if (!selectedCharacter) return;
  selectedCharacter.lumina_points_added += 1;
  trimLuminasToFitPoints();
  renderAll();
};

lpMinusEl.onclick = () => {
  if (!selectedCharacter) return;
  selectedCharacter.lumina_points_added = Math.max(
    0,
    selectedCharacter.lumina_points_added - 1
  );
  trimLuminasToFitPoints();
  renderAll();
};

onCharacterChanged();
renderAll();

const client = new Client();

client.ping()
  .then(() => (statusEl.textContent = "Status: ready"))
  .catch((e) => {
    statusEl.textContent = "Status: failed";
    outEl.textContent = String(e);
  });

executeEl.onclick = async () => {
  outEl.textContent = "";

  try {
    const input = {
      character: selectedCharacter,
      weapon: selectedWeapon,
      attack: selectedAttack,
      pictos: selectedPictos,
      luminas: selectedLuminas
    }
    const r = await client.calculate(input);
    outEl.textContent = JSON.stringify(r, null, 2);
  } catch (e: any) {
    outEl.textContent = `Error: ${e?.message ?? String(e)}`;
  }
};

window.addEventListener("beforeunload", () => client.terminate());