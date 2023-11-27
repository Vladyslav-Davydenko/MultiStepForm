import { useState } from "react";
import clsx from "clsx";

import GoBackButton from "../../components/button/GoBackButton";
import NextButton from "../../components/button/NextButton";

import { Plan } from "../../redux/features/data.type";

interface Props {
  onSwitchPanel: () => void;
  onSwitchPanelBack: () => void;
  onhandlePlanSubmit: (planData: Plan) => void;
}

export default function PlanForm({
  onSwitchPanel,
  onhandlePlanSubmit,
  onSwitchPanelBack,
}: Props): JSX.Element {
  const [plan, setPlan] = useState<Plan>({
    name: "Arcade",
    isMonthly: true,
    price: 9,
  });
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  const handleSubscriptionSwitch = () => {
    setIsMonthly(!isMonthly);
    if (isMonthly) setPlan({ ...plan, price: plan.price * 10 });
    else setPlan({ ...plan, price: plan.price / 10 });
  };

  return (
    <>
      <div className="text-blue-950 flex flex-col gap-10">
        <div>
          <h1 className="text-3xl font-semibold">Select your plan</h1>
          <p className="text-gray-400 leading-9">
            You have the option of monthly or yearly billing
          </p>
        </div>
        <div className="flex justify-between">
          <div
            className={clsx(
              "h-[200px] w-40 rounded-lg border hover:border-blue-950 bg-arcade-plan bg-no-repeat bg-[1rem_1.5rem] flex items-end transition-all",
              {
                "border-gray-300": plan.name !== "Arcade",
                "border-blue-950 bg-blue-50": plan.name === "Arcade",
              }
            )}
            onClick={() => setPlan({ ...plan, name: "Arcade" })}
          >
            <div className="text-sm p-4">
              <p className="text-lg font-semibold">Arcade</p>
              <p className="text-gray-400">{isMonthly ? "$9/mo" : "$90/ye"}</p>
            </div>
          </div>
          <div
            className={clsx(
              "h-[200px] w-40 rounded-lg border hover:border-blue-950 bg-advanced-plan bg-no-repeat bg-[1rem_1.5rem] flex items-end transition-all",
              {
                "border-gray-300": plan.name !== "Advanced",
                "border-blue-950 bg-blue-50": plan.name === "Advanced",
              }
            )}
            onClick={() => setPlan({ ...plan, name: "Advanced" })}
          >
            <div className="text-sm p-4">
              <p className="text-lg font-semibold">Advanced</p>
              <p className="text-gray-400">
                {isMonthly ? "$12/mo" : "$120/ye"}
              </p>
            </div>
          </div>
          <div
            className={clsx(
              "h-[200px] w-40 rounded-lg border hover:border-blue-950 bg-pro-plan bg-no-repeat bg-[1rem_1.5rem] flex items-end transition-all",
              {
                "border-gray-300": plan.name !== "Pro",
                "border-blue-950 bg-blue-50": plan.name === "Pro",
              }
            )}
            onClick={() => setPlan({ ...plan, name: "Pro" })}
          >
            <div className="text-sm p-4">
              <p className="text-lg font-semibold">Pro</p>
              <p className="text-gray-400">
                {isMonthly ? "$15/mo" : "$150/ye"}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 flex justify-center gap-5 py-3 rounded-lg font-semibold mb-16">
          <p
            className={
              isMonthly
                ? "text-blue-950 transition-all duration-300"
                : "text-gray-300 transition-all duration-300"
            }
          >
            Monthly
          </p>
          <div className="flex items-center justify-center">
            <input type="checkbox" id="toggle" className="hidden" />
            <label
              htmlFor="toggle"
              className="flex items-center cursor-pointer select-none"
            >
              <div
                onClick={handleSubscriptionSwitch}
                className="w-11 h-6 bg-blue-950 rounded-full p-1 duration-300 ease-in-out relative"
              >
                <div
                  className={clsx({
                    "dot absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-all duration-300 ease-in-out":
                      true,
                    "translate-x-0": isMonthly,
                    "translate-x-5": !isMonthly,
                  })}
                ></div>
              </div>
              <div className="ml-3 text-gray-700 font-medium sr-only">
                Toggle
              </div>
            </label>
          </div>
          <p
            className={
              isMonthly
                ? "text-gray-300 transition-all duration-300"
                : "text-blue-950 transition-all duration-300"
            }
          >
            Yearly
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <GoBackButton onSwitchPanel={onSwitchPanelBack} />
        <NextButton
          onSwitchPanel={onSwitchPanel}
          onClick={() => onhandlePlanSubmit(plan)}
        />
      </div>
    </>
  );
}
