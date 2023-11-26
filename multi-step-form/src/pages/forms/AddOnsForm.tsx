import { useState } from "react";
import clsx from "clsx";
import { AddOn } from "../../redux/features/data.type";

import GoBackButton from "../../components/button/GoBackButton";
import NextButton from "../../components/button/NextButton";

interface Props {
  onSwitchPanel: () => void;
  onSwitchPanelBack: () => void;
  onhandleAddOnsSubmit: (addOnsData: AddOn[]) => void;
}

export default function AddOnsForm({
  onSwitchPanel,
  onSwitchPanelBack,
  onhandleAddOnsSubmit,
}: Props): JSX.Element {
  const [isOnlineService, setIsOnlineService] = useState<boolean>(false);
  const [isLargerStorage, setIsLargerStorage] = useState<boolean>(false);
  const [isCustomizableProfile, setIsCustomizableProfile] =
    useState<boolean>(false);

  return (
    <>
      <div className="text-blue-950 flex flex-col gap-10">
        <div>
          <h1 className="text-3xl font-semibold">Pick add-ons</h1>
          <p className="text-gray-400 leading-9">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="flex flex-col gap-6 mb-16">
          <div
            className={clsx({
              "h-12 w-full border  py-10 px-5 flex items-center rounded-lg justify-between cursor-pointer hover:border-blue-950 transition-all":
                true,
              "border-gray-300": !isOnlineService,
              "border-blue-950 bg-blue-50": isOnlineService,
            })}
            onClick={() => setIsOnlineService(!isOnlineService)}
          >
            <div className="flex items-center justify-around gap-4">
              <input
                type="checkbox"
                name="online-service"
                id="online-service"
                className="w-[20px] h-[20px] checked:bg-blue-700"
                checked={isOnlineService}
              />
              <div className="text-md p-4">
                <p className="text-lg font-semibold">Online service</p>
                <p className="text-gray-400">Acces to multiplayer games</p>
              </div>
            </div>
            <p className="text-violet-500">+$1/mo</p>
          </div>
          <div
            className={clsx({
              "h-12 w-full border  py-10 px-5 flex items-center rounded-lg justify-between cursor-pointer hover:border-blue-950 transition-all":
                true,
              "border-gray-300": !isLargerStorage,
              "border-blue-950 bg-blue-50": isLargerStorage,
            })}
            onClick={() => setIsLargerStorage(!isLargerStorage)}
          >
            <div className="flex items-center justify-around gap-4">
              <input
                type="checkbox"
                name="online-service"
                id="online-service"
                className="w-[20px] h-[20px] checked:bg-blue-700"
                checked={isLargerStorage}
              />
              <div className="text-md p-4">
                <p className="text-lg font-semibold">Larger Storage</p>
                <p className="text-gray-400">extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="text-violet-500">+$2/mo</p>
          </div>
          <div
            className={clsx({
              "h-12 w-full border  py-10 px-5 flex items-center rounded-lg justify-between cursor-pointer hover:border-blue-950 transition-all":
                true,
              "border-gray-300": !isCustomizableProfile,
              "border-blue-950 bg-blue-50": isCustomizableProfile,
            })}
            onClick={() => setIsCustomizableProfile(!isCustomizableProfile)}
          >
            <div className="flex items-center justify-around gap-4">
              <input
                type="checkbox"
                name="online-service"
                id="online-service"
                className="w-[20px] h-[20px] checked:bg-blue-700"
                checked={isCustomizableProfile}
              />
              <div className="text-md p-4">
                <p className="text-lg font-semibold">Customizable Profile</p>
                <p className="text-gray-400">Custome theme on your profile</p>
              </div>
            </div>
            <p className="text-violet-500">+$2/mo</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <GoBackButton onSwitchPanel={onSwitchPanelBack} />
        <NextButton
          onSwitchPanel={onSwitchPanel}
          onClick={() => onhandleAddOnsSubmit([])}
        />
      </div>
    </>
  );
}
