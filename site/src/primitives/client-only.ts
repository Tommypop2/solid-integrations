import { createMemo, createSignal, FlowComponent, JSX, onMount, sharedConfig } from "solid-js";
import { isServer } from "solid-js/web";

// https://github.com/solidjs/solid/pull/1592

export const ClientOnly: FlowComponent = props => {
  if (isServer) return undefined;
  if (sharedConfig.context) {
    const [flag, setFlag] = createSignal(false);
    onMount(() => setFlag(true));
    return createMemo(() =>
      flag() ? createMemo(() => props.children) : undefined,
    ) as unknown as JSX.Element;
  }
  return createMemo(() => props.children) as unknown as JSX.Element;
};
