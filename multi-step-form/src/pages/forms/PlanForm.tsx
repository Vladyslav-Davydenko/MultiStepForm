import { useState } from "react";
import clsx from "clsx";

export default function PlanForm(): JSX.Element {
  const [plan, setPlan] = useState<"Arcade" | "Advanced" | "Pro">("Arcade");
  return (
    <div className="text-blue-950 flex flex-col gap-10">
      <div>
        <h1 className="text-3xl font-semibold">Select your plan</h1>
        <p className="text-gray-400 leading-9">
          You have the option of monthly or yearly billing
        </p>
      </div>
      <div className="flex justify-between">
        <div
          className={clsx({
            "h-[200px] w-40 rounded-lg border border-gray-300 hover:border-blue-950 bg-arcade-plan bg-no-repeat bg-[1rem_1.5rem] flex items-end":
              true,
            "bg-blue-50 border-blue-950": plan === "Arcade",
          })}
          onClick={() => setPlan("Arcade")}
        >
          <div className="text-sm p-4">
            <p className="text-lg font-semibold">Arcade</p>
            <p className="text-gray-400">$9/mo</p>
          </div>
        </div>
        <div
          className={clsx({
            "w-40  h-[200px] rounded-lg border border-gray-300 hover:border-blue-950 bg-advanced-plan bg-no-repeat bg-[1rem_1.5rem] flex items-end":
              true,
            "bg-blue-50 border-blue-950": plan === "Advanced",
          })}
          onClick={() => setPlan("Advanced")}
        >
          <div className="text-sm p-4">
            <p className="text-lg font-semibold">Advanced</p>
            <p className="text-gray-400">$12/mo</p>
          </div>
        </div>
        <div
          className={clsx({
            "w-40 h-[200px] rounded-lg border border-gray-300 hover:border-blue-950 bg-pro-plan bg-no-repeat bg-[1rem_1.5rem] flex items-end":
              true,
            "bg-blue-50 border-blue-950": plan === "Pro",
          })}
          onClick={() => setPlan("Pro")}
        >
          <div className="text-sm p-4">
            <p className="text-lg font-semibold">Pro</p>
            <p className="text-gray-400">$15/mo</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 flex justify-center gap-5 py-3 rounded-lg font-semibold">
        <p>Monthly</p>
        <p>Switch</p>
        <p>Yearly</p>
      </div>
    </div>
  );
}
