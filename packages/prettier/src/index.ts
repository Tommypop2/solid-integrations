import { Accessor, createResource, createSignal, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import formatWorker from "./formatterWorker?worker";
async function formatWithWorker(worker: Worker, code: string) {
  worker.postMessage({ event: "FORMAT", code: code });
  const res: MessageEvent<any> = await new Promise(res => {
    worker.addEventListener(
      "message",
      data => {
        res(data);
      },
      { once: true },
    );
  });
  const { data } = res;
  return data.code;
}
export const createFormatted = (code: Accessor<string>) => {
  let formatterWorker: Worker | undefined;
  if (!isServer) {
    formatterWorker = new formatWorker();
  }
  const [client, setClient] = createSignal(false);
  onMount(() => setClient(true));
  const [formatted] = createResource(
    () => {
      const c = code();
      const cl = client();
      if (c && cl) return c;
      return false;
    },
    async () => {
      if (isServer) return;
      return await formatWithWorker(formatterWorker!, code());
    },
  );
  return formatted;
};
