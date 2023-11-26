import { useState } from "react";

import AddOnsForm from "../forms/AddOnsForm";
import InfoForm from "../forms/InfoForm";
import PlanForm from "../forms/PlanForm";
import Summary from "../forms/Summary";

import GoBackButton from "../../components/button/GoBackButton";
import SubmitButton from "../../components/button/SubmitButton";

import { MouseEvent } from "react";

import {
  ADD_ONS_ROUTE,
  INFO_ROUTE,
  PLAN_ROUTE,
  SUMMARY_ROUTE,
} from "../../variables/Routes";
import ThankYouPage from "../forms/ThankYouPage";
import { useDispatch } from "react-redux";

import { User, Plan, AddOn } from "../../redux/features/data.type";
import { dataActions } from "../../redux/features/data.slice";

interface Props {
  activePanel: string;
  navigateTo: React.Dispatch<React.SetStateAction<string>>;
}

export default function MainForm({
  activePanel,
  navigateTo,
}: Props): JSX.Element {
  let content;

  const [isPaid, setIsPaid] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleUserInfoSubmit = (userData: User) => {
    dispatch(dataActions.setUserData(userData));
  };

  const handlePlanInfoSubmit = (planData: Plan) => {
    dispatch(dataActions.setPlanData(planData));
  };

  const onhandleAddOnsSubmit = (addOns: AddOn[]) => {
    dispatch(dataActions.setAddOns(addOns));
  };

  const handleNavigate = (panel: string) => {
    navigateTo(panel);
  };

  const handleSubmitForm = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
    setIsPaid(true);
  };

  if (activePanel === ADD_ONS_ROUTE) {
    content = (
      <>
        <AddOnsForm
          onSwitchPanel={() => handleNavigate(SUMMARY_ROUTE)}
          onSwitchPanelBack={() => handleNavigate(PLAN_ROUTE)}
          onhandleAddOnsSubmit={onhandleAddOnsSubmit}
        />
      </>
    );
  } else if (activePanel === INFO_ROUTE) {
    content = (
      <>
        <InfoForm
          onSwitchPanel={() => handleNavigate(PLAN_ROUTE)}
          onhandleUserSubmit={handleUserInfoSubmit}
        />
      </>
    );
  } else if (activePanel === PLAN_ROUTE) {
    content = (
      <>
        <PlanForm
          onSwitchPanel={() => handleNavigate(ADD_ONS_ROUTE)}
          onSwitchPanelBack={() => handleNavigate(INFO_ROUTE)}
          onhandlePlanSubmit={handlePlanInfoSubmit}
        />
      </>
    );
  } else if (activePanel === SUMMARY_ROUTE) {
    content = (
      <div className="flex flex-col gap-8">
        <Summary onSwitchPanel={() => handleNavigate(PLAN_ROUTE)} />
        <div className="flex justify-between mt-10 items-center">
          <GoBackButton onSwitchPanel={() => handleNavigate(ADD_ONS_ROUTE)} />
          <SubmitButton />
        </div>
      </div>
    );
  }

  return (
    <>
      {isPaid ? (
        <ThankYouPage />
      ) : (
        <div className="flex justify-center flex-col w-full px-20 pb-7 pt-10 h-[95%]">
          <form onSubmit={handleSubmitForm}>
            <div className="flex flex-col justify-between">{content}</div>
          </form>
        </div>
      )}
    </>
  );
}
