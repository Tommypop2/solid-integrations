import type { FormattedBytes } from "../../scripts/utils/calculate-bundlesize";
import type { ModuleData } from "../../scripts/utils/get-modules-data";

export { FormattedBytes, ModuleData };

export type Bundlesize = {
  min: FormattedBytes;
  gzip: FormattedBytes;
};

export type BundlesizeItem = Bundlesize & {
  name: string;
};

export type PackageListItem = Omit<ModuleData, "primitives"> & {
  primitives: BundlesizeItem[];
  packageSize: Bundlesize | null;
};

export type PackageData = PackageListItem & { readme: string };
