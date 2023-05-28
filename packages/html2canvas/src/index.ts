import html2canvas from "html2canvas";
import { Resource, createEffect, createResource, onCleanup } from "solid-js";
import { isServer } from "solid-js/web";
import { access } from "@solid-primitives/utils";
/**
 * A function to make an object URL for an image of the given element
 *
 * @param ref The input DOM element to be "screenshotted"
 * @return Returns an object URL to an image
 */
export const makeScreenshotURL = async (ref: HTMLElement) => {
  const canvas = await html2canvas(ref, { logging: false });
  const blob = await new Promise(res => canvas.toBlob(res));
  const objURL = URL.createObjectURL(blob as Blob);
  return objURL;
};

export const createScreenshotURL = (inputRef: (() => HTMLElement | undefined) | HTMLElement) => {
  const [imgUrl, { refetch }] = createResource(inputRef, async (ref, last) => {
    URL.revokeObjectURL(last.value as string);
    const screenshotURL = await makeScreenshotURL(ref);
    return screenshotURL;
  });
  onCleanup(() => {
    URL.revokeObjectURL(imgUrl.latest as string);
  });
  if (!isServer) {
    const observer = new MutationObserver(refetch);
    createEffect(() => {
      const ref = access(inputRef);
      if (!ref) return;
      observer.observe(ref, { childList: true, subtree: true, characterData: true });
      onCleanup(() => observer.disconnect());
    });
  }

  return imgUrl as Resource<string>;
};
