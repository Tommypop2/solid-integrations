import html2canvas from "html2canvas";
/**
 * A template example of how to create a new primitive.
 *
 * @param param An example of an introductory parameter
 * @return Returns the same parameter as an accessor
 */
export const makeScreenshot = async (ref: HTMLElement) => {
  const canvas = await html2canvas(ref);
  const blob = await new Promise(res => canvas.toBlob(res));
  const anchor = document.createElement("a");
  const objURL = URL.createObjectURL(blob as Blob);
  anchor.href = objURL;
  anchor.style.display = "none";
  anchor.download = name + ".png";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(objURL);
};
