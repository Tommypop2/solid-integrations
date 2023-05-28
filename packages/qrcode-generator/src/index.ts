import { Accessor, Setter, createSignal, JSX, createMemo } from "solid-js";
import { isServer } from "solid-js/web";
import generator from "qrcode-generator";
type QRCodeOptions = {
  typeNumber: TypeNumber;
  errorCorrectionLevel: ErrorCorrectionLevel;
};
/**
 * A template example of how to create a new primitive.
 *
 * @param param An example of an introductory parameter
 * @return Returns the same parameter as an accessor
 */
export const makeQRCode = (
  text: string,
  options: QRCodeOptions = { typeNumber: 4, errorCorrectionLevel: "L" },
) => {
  if(isServer) return;
  const code = generator(options.typeNumber, options.errorCorrectionLevel);
  code.addData(text);
  code.make();
  return code.createDataURL();
};

export const createQRCode = (text: Accessor<string>, options?: QRCodeOptions) => {
  return createMemo(() => makeQRCode(text(), options));
};
