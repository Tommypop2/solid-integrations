import { Accessor, createMemo } from "solid-js";
import { isServer } from "solid-js/web";
import generator from "qrcode-generator";
type QRCodeOptions = {
  typeNumber: TypeNumber;
  errorCorrectionLevel: ErrorCorrectionLevel;
};
/**
 * A primitive for making a QR code data URL from a string
 * @param text The text to be encoded into the QR code
 * @param options Options to be passed to the generator
 * @returns A data URL containing the QR code as an image
 */
export const makeQRCode = (
  text: string,
  options: QRCodeOptions = { typeNumber: 4, errorCorrectionLevel: "L" },
) => {
  if (isServer) return "";
  const code = generator(options.typeNumber, options.errorCorrectionLevel);
  code.addData(text);
  code.make();
  return code.createDataURL();
};
/**
 * A reactive wrapping of {@link makeQRCode}. It returns a memo which contains the data URL.
 * @param text The text to be encoded into the QR code
 * @param options Options to be passed to the generator
 * @returns A memo containing data URL containing the QR code as an image
 */
export const createQRCode = (text: Accessor<string>, options?: QRCodeOptions) => {
  return createMemo(() => makeQRCode(text(), options));
};
