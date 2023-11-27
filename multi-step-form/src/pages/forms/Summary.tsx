import { useAppSelector } from "../../redux/app/redux.hooks";

import { selectDataState } from "../../redux/features/data.selector";

interface Props {
  onSwitchPanel: () => void;
}

export default function Summary({ onSwitchPanel }: Props): JSX.Element {
  const { plan, addOns } = useAppSelector(selectDataState);
  return (
    <div className="text-blue-950 flex flex-col gap-10">
      <div>
        <h1 className="text-3xl font-semibold">Finishing up</h1>
        <p className="text-gray-400 leading-9">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div>
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex justify-between items-center border border-t-0 border-l-0 border-r-0 border-gray-300 pb-6">
            <div className="text-md font-semibold">
              <p className="text-blue-950 text-lg">
                {plan.name} {plan.isMonthly ? "(Monthly)" : "(Yearly)"}
              </p>
              <a
                className="text-violet-500 underline cursor-pointer"
                onClick={onSwitchPanel}
              >
                Change
              </a>
            </div>
            <p className="text-blue-950 font-semibold text-lg tracking-wide">
              {`+$${plan.price}/${plan.isMonthly ? "mo" : "ye"}`}
            </p>
          </div>
          <div>
            {addOns.map((addOn) => {
              return (
                <div
                  className="text-sm flex justify-between items-center pt-4"
                  key={addOn.name}
                >
                  <p className="text-gray-400 font-semibold">{addOn.name}</p>
                  <p className="text-blue-950 ">{`+$${addOn.price}/mo`}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-md flex justify-between items-center mt-6 px-6">
          <p className="text-gray-400 font-semibold">Total (per month)</p>
          <p className="text-violet-500 font-semibold text-xl tracking-wider">
            +$12/mo
          </p>
        </div>
      </div>
    </div>
  );
}
