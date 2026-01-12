import init, * as _wasm from "../wasm/compute/compute.js";
import wasmUrl from "../wasm/compute/compute_bg.wasm?url";

let initPromise: Promise<unknown> | null = null;
function ensureReady() {
  if (!initPromise) initPromise = init(wasmUrl);
  return initPromise;
}

type Req =
  | { id: number; type: "calc"; data: any };

type Res =
  | { id: number; ok: true; result: any }
  | { id: number; ok: false; error: string };

self.onmessage = async (ev: MessageEvent<Req>) => {
  const msg = ev.data;
  try {
    await ensureReady();

    if (msg.type === "calc") {
      self.postMessage("Not Implemented");
      return;
    }

    throw new Error("Unknown task");
  } catch (e: any) {
    const res: Res = { id: msg.id, ok: false, error: e?.message ?? String(e) };
    self.postMessage(res);
  }
};