import html2canvas from "html2canvas";
import { createEffect, createResource, createSignal, onCleanup } from "solid-js";
import { isServer } from "solid-js/web";
/**
 * A template example of how to create a new primitive.
 *
 * @param param An example of an introductory parameter
 * @return Returns the same parameter as an accessor
 */
export const makeScreenshotURL = async (ref: HTMLElement) => {
  const canvas = await html2canvas(ref, { logging: false });
  const blob = await new Promise(res => canvas.toBlob(res));
  const objURL = URL.createObjectURL(blob as Blob);
  return objURL;
};

export const createScreenshotURL = (ref: () => HTMLElement | undefined) => {
  const [imgUrl, { refetch, mutate }] = createResource(ref, async ref => {
    if (isServer) return null;
    const screenshotURL = await makeScreenshotURL(ref);
    onCleanup(() => {
      URL.revokeObjectURL(screenshotURL);
    });
    return screenshotURL;
  });
  createEffect(() => {
    if (!ref()) return;
    const observer = new MutationObserver(refetch);
    observer.observe(ref()!, { childList: true, subtree: true, characterData: true });
    onCleanup(() => observer.disconnect());
  });

  return imgUrl;
};
