import { ParentComponent } from "solid-js";

const NPM_URL = "https://www.npmjs.com/package/";

export const VersionBadge: ParentComponent<{ name: string; version: string }> = props => {
  return (
    <a
      class="flex h-[28px] min-w-[90px] items-baseline justify-center rounded-md border-2 border-[#cae0ff] bg-[#cae0ff40] font-sans transition-colors hover:border-[#80a7de] hover:bg-[#cae0ff66] dark:border-[#5577a7] dark:bg-[#6eaaff14] dark:hover:border-[#8ba8d3] dark:hover:bg-[#6eaaff33]"
      href={`${NPM_URL}/@solid-primitives/${props.name}`}
      rel="noopener"
      target="_blank"
    >
      <span class="text-[14px] font-semibold text-[#7689a4] dark:text-[#8b9eba]">v</span>
      {props.version}
    </a>
  );
};

export const VersionBadgePill: ParentComponent<{
  name: string;
  version: string | undefined;
}> = props => {
  return (
    <a
      class="transition-filter flex font-sans hover:contrast-[1.2]"
      href={`${NPM_URL}/@solid-primitives/${props.name}`}
      target="_blank"
      rel="noopener"
    >
      <div class="flex h-[38px] items-center rounded-l-lg border-[3px] border-[#cae0ff] bg-[#cae0ff40] px-4 dark:border-[#405b6e] dark:bg-[#2a4355]">
        NPM
      </div>
      <div class="background-[linear-gradient(var(--page-main-bg),var(--page-main-bg))_padding-box,_linear-gradient(to_right,#cae0ff,#c0c8ff)_border-box] dark:background-[linear-gradient(var(--page-main-bg),var(--page-main-bg))_padding-box,_linear-gradient(to_right,#405b6e,#46659a)_border-box] flex h-full min-w-[90px] items-center justify-center rounded-r-lg border-[3px] border-l-0 border-transparent font-semibold">
        <span>v</span>
        {props.version}
      </div>
    </a>
  );
};
