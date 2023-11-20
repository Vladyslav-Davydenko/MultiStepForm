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
    <nav className="bg-blue-600 h-[92%] w-[30%] m-7 rounded-xl p-7">
      <div className="text-blue-50 flex flex-col gap-5">
        <div
          className="flex gap-4 items-center hover:text-white hover:cursor-pointer transition-all"
          onClick={() => navigateTo(INFO_ROUTE)}
        >
          <div
            className={clsx({
              "w-10 h-10 rounded-full border-blue-200 border flex justify-center items-center transition-all duration-300":
                true,
              "bg-blue-200 text-black": activePanel === INFO_ROUTE,
            })}
          >
            1
          </div>
          <p>Info Step</p>
        </div>
        <div
          className="flex gap-4 items-center hover:text-white hover:cursor-pointer"
          onClick={() => navigateTo(PLAN_ROUTE)}
        >
          <div
            className={clsx({
              "w-10 h-10 rounded-full border-blue-200 border flex justify-center items-center transition-all duration-300":
                true,
              "bg-blue-200 text-black": activePanel === PLAN_ROUTE,
            })}
          >
            2
          </div>
          <p>Plan Step</p>
        </div>
        <div
          className="flex gap-4 items-center hover:text-white hover:cursor-pointer"
          onClick={() => navigateTo(ADD_ONS_ROUTE)}
        >
          <div
            className={clsx({
              "w-10 h-10 rounded-full border-blue-200 border flex justify-center items-center transition-all duration-300":
                true,
              "bg-blue-200 text-black": activePanel === ADD_ONS_ROUTE,
            })}
          >
            3
          </div>
          <p>Add-ons Step</p>
        </div>
        <div
          className="flex gap-4 items-center hover:text-white hover:cursor-pointer"
          onClick={() => navigateTo(SUMMARY_ROUTE)}
        >
          <div
            className={clsx({
              "w-10 h-10 rounded-full border-blue-200 border flex justify-center items-center transition-all duration-300":
                true,
              "bg-blue-200 text-black": activePanel === SUMMARY_ROUTE,
            })}
          >
            4
          </div>
          <p>Summary Step</p>
        </div>
      </div>
    </nav>
  );
}
