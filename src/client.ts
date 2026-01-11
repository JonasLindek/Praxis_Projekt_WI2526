type PingPayload = { type: "ping" };
type CalcPayload = { type: "calc"; data: number[]; poolSize: number };

type Payload = PingPayload | CalcPayload;
type Req = Payload & { id: number };

type Res =
  | { id: number; ok: true; result: any }
  | { id: number; ok: false; error: string };

export class Client {
  private w: Worker;
  private id = 0;
  private pending = new Map<number, { resolve: (v: any) => void; reject: (e: any) => void }>();

  constructor() {
    this.w = new Worker(new URL("./worker/master.worker.ts", import.meta.url), { type: "module" });

    this.w.onmessage = (ev: MessageEvent<Res>) => {
      const msg = ev.data;
      const p = this.pending.get(msg.id);
      if (!p) return;
      this.pending.delete(msg.id);
      msg.ok ? p.resolve(msg.result) : p.reject(new Error(msg.error));
    };

    this.w.onerror = (e) => console.error("Master worker error:", e);
  }

  ping() {
    return this.call({ type: "ping" });
  }

  calculate(data: number[], poolSize: number) {
    return this.call({ type: "calc", data, poolSize });
  }

  terminate() {
    this.w.terminate();
    this.pending.clear();
  }

  private call(payload: Payload) {
    const id = ++this.id;
    const msg: Req = { id, ...payload };

    this.w.postMessage(msg);
    return new Promise<any>((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });
  }
}