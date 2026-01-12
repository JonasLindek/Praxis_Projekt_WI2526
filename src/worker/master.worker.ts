type MasterReq =
  | { id: number; type: "ping" }
  | { id: number; type: "calc"; data: number[]; poolSize: number };

type MasterRes =
  | { id: number; ok: true; result: any }
  | { id: number; ok: false; error: string };

/*
type ChildPayload =
  | { type: "calc"; data: number[] };

type ChildReq = ChildPayload & { id: number };

type ChildRes =
  | { id: number; ok: true; result: any }
  | { id: number; ok: false; error: string };

class ChildPool {
  private workers: Worker[] = [];
  private busy = new Set<number>();
  private queue: Array<{
    req: ChildReq;
    resolve: (v: any) => void;
    reject: (e: any) => void;
  }> = [];

  private nextWorker = 0;
  private nextMsgId = 1;
  private pending = new Map<number, { resolve: (v: any) => void; reject: (e: any) => void }>();

  constructor(size: number) {
    const n = Math.max(1, Math.floor(size));
    for (let i = 0; i < n; i++) {
      const w = new Worker(new URL("./child.worker.ts", import.meta.url), { type: "module" });
      w.onmessage = (ev: MessageEvent<ChildRes>) => {
        const msg = ev.data;
        const p = this.pending.get(msg.id);
        if (!p) return;
        this.pending.delete(msg.id);

        msg.ok ? p.resolve(msg.result) : p.reject(new Error(msg.error));
      };
      w.onerror = (e) => {
        console.error("Child worker error", e);
      };
      this.workers.push(w);
    }
  }

  terminate() {
    for (const w of this.workers) w.terminate();
    this.workers = [];
    this.queue = [];
    this.pending.clear();
    this.busy.clear();
  }

  exec(payload: ChildPayload): Promise<any> {
    return new Promise((resolve, reject) => {
      const id = this.nextMsgId++;
      const req: ChildReq= { id, ...payload };

      const task = { req, resolve, reject };
      const workerIndex = this.pickFreeWorker();
      if (workerIndex === -1) {
        this.queue.push(task);
      } else {
        this.runOnWorker(workerIndex, task);
      }
    });
  }

  private pickFreeWorker(): number {
    const n = this.workers.length;
    for (let k = 0; k < n; k++) {
      const i = (this.nextWorker + k) % n;
      if (!this.busy.has(i)) {
        this.nextWorker = (i + 1) % n;
        return i;
      }
    }
    return -1;
  }

  private runOnWorker(workerIndex: number, task: { req: ChildReq; resolve: any; reject: any }) {
    this.busy.add(workerIndex);

    this.pending.set(task.req.id, {
      resolve: (v) => {
        this.busy.delete(workerIndex);
        task.resolve(v);
        this.drain(workerIndex);
      },
      reject: (e) => {
        this.busy.delete(workerIndex);
        task.reject(e);
        this.drain(workerIndex);
      },
    });

    this.workers[workerIndex].postMessage(task.req);
  }

  private drain(workerIndex: number) {
    const next = this.queue.shift();
    if (next) this.runOnWorker(workerIndex, next);
  }
}
*/

self.onmessage = async (ev: MessageEvent<MasterReq>) => {
  const msg = ev.data;

  try {
    if (msg.type === "ping") {
        const res: MasterRes = { id: msg.id, ok: true, result: "master-ready" };
        self.postMessage(res);
        return;
    }

    if (msg.type === "calc") {
        self.postMessage("No Implemented");
        return;
    }

    throw new Error("Unknown master message");
  } catch (e: any) {
        const res: MasterRes = { id: msg.id ?? -1, ok: false, error: e?.message ?? String(e) };
        self.postMessage(res);
  }
};