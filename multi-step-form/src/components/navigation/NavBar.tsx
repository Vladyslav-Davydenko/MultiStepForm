import {
  INFO_ROUTE,
  ADD_ONS_ROUTE,
  SUMMARY_ROUTE,
  PLAN_ROUTE,
} from "../../variables/Routes";

import clsx from "clsx";

interface Props {
  activePanel: string;
  navigateTo: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavBar({
  activePanel,
  navigateTo,
}: Props): JSX.Element {
  return (
    <nav className="bg-blue-600 h-[95%] w-[38%] m-4 rounded-md p-7 bg-desktop-sidebar bg-cover bg-center">
      <div className="text-blue-50 flex flex-col gap-10">
        <div
          className="flex gap-4 items-center hover:text-white hover:cursor-pointer transition-all"
          onClick={() => navigateTo(INFO_ROUTE)}
        >
          <div
            className={clsx({
              "w-9 h-9 rounded-full border-blue-200 border flex justify-center items-center transition-all duration-300":
                true,
              "bg-blue-200 text-black": activePanel === INFO_ROUTE,
            })}
          >
            1
          </div>
          <div className="text-sm uppercase leading-5">
            <p className="text-gray-300 text-xs">Step 1</p>
            <p className="font-semibold tracking-wider">Your Info</p>
          </div>
        </div>
        <div
          className="flex gap-4 items-center hover:text-white hover:cursor-pointer"
          onClick={() => navigateTo(PLAN_ROUTE)}
        >
          <div
            className={clsx({
              "w-9 h-9 rounded-full border-blue-200 border flex justify-center items-center transition-all duration-300":
                true,
              "bg-blue-200 text-black": activePanel === PLAN_ROUTE,
            })}
          >
            2
          </div>
          <div className="text-sm uppercase leading-5">
            <p className="text-gray-300 text-xs">Step 2</p>
            <p className="font-semibold tracking-wider">Select Plan</p>
          </div>
        </div>
        <div
          className="flex gap-4 items-center hover:text-white hover:cursor-pointer"
          onClick={() => navigateTo(ADD_ONS_ROUTE)}
        >
          <div
            className={clsx({
              "w-9 h-9 rounded-full border-blue-200 border flex justify-center items-center transition-all duration-300":
                true,
              "bg-blue-200 text-black": activePanel === ADD_ONS_ROUTE,
            })}
          >
            3
          </div>
          <div className="text-sm uppercase leading-5">
            <p className="text-gray-300 text-xs">Step 3</p>
            <p className="font-semibold tracking-wider">Add-ons</p>
          </div>
        </div>
        <div
          className="flex gap-4 items-center hover:text-white hover:cursor-pointer"
          onClick={() => navigateTo(SUMMARY_ROUTE)}
        >
          <div
            className={clsx({
              "w-9 h-9 rounded-full border-blue-200 border flex justify-center items-center transition-all duration-300":
                true,
              "bg-blue-200 text-black": activePanel === SUMMARY_ROUTE,
            })}
          >
            4
          </div>
          <div className="text-sm uppercase leading-5">
            <p className="text-gray-300 text-xs">Step 4</p>
            <p className="font-semibold tracking-wider">Summary</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
