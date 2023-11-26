interface Props {
  onSwitchPanel: () => void;
}

export default function Summary({ onSwitchPanel }: Props): JSX.Element {
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
              <p className="text-blue-950 text-lg">Arcade (Monthly)</p>
              <a
                className="text-violet-500 underline cursor-pointer"
                onClick={onSwitchPanel}
              >
                Change
              </a>
            </div>
            <p className="text-blue-950 font-semibold text-lg tracking-wide">
              +$12/mo
            </p>
          </div>
          <div>
            {/* Map over add-ons */}
            <div className="text-sm flex justify-between items-center pt-4">
              <p className="text-gray-400 font-semibold">Online service</p>
              <p className="text-blue-950 ">+$1/mo</p>
            </div>
            <div className="text-sm flex justify-between items-center pt-4">
              <p className="text-gray-400 font-semibold">Larger Storage</p>
              <p className="text-blue-950 ">+$2/mo</p>
            </div>
            <div className="text-sm flex justify-between items-center pt-4">
              <p className="text-gray-400 font-semibold">
                Customizable Profile
              </p>
              <p className="text-blue-950 ">+$2/mo</p>
            </div>
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
