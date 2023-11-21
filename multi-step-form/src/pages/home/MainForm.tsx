import AddOnsForm from "../forms/AddOnsForm";
import InfoForm from "../forms/InfoForm";
import PlanForm from "../forms/PlanForm";
import Summary from "../forms/Summary";

import GoBackButton from "../../components/button/GoBackButton";
import NextButton from "../../components/button/NextButton";
import SubmitButton from "../../components/button/SubmitButton";

import { MouseEvent } from "react";

import {
  ADD_ONS_ROUTE,
  INFO_ROUTE,
  PLAN_ROUTE,
  SUMMARY_ROUTE,
} from "../../variables/Routes";

interface Props {
  activePanel: string;
  navigateTo: React.Dispatch<React.SetStateAction<string>>;
}

export default function MainForm({
  activePanel,
  navigateTo,
}: Props): JSX.Element {
  let content;
  let pagination;

  const handleNavigate = (panel: string) => {
    navigateTo(panel);
  };

  const handleSubmitForm = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
  };

  if (activePanel === ADD_ONS_ROUTE) {
    content = (
      <>
        <AddOnsForm />
      </>
    );
    pagination = (
      <div className="flex justify-between">
        <GoBackButton onSwitchPanel={() => handleNavigate(PLAN_ROUTE)} />
        <NextButton onSwitchPanel={() => handleNavigate(SUMMARY_ROUTE)} />
      </div>
    );
  } else if (activePanel === INFO_ROUTE) {
    content = (
      <>
        <InfoForm />
      </>
    );
    pagination = (
      <div className="flex justify-end mt-10">
        <NextButton onSwitchPanel={() => handleNavigate(PLAN_ROUTE)} />
      </div>
    );
  } else if (activePanel === PLAN_ROUTE) {
    content = (
      <>
        <PlanForm />
      </>
    );
    pagination = (
      <div className="flex justify-between">
        <GoBackButton onSwitchPanel={() => handleNavigate(INFO_ROUTE)} />
        <NextButton onSwitchPanel={() => handleNavigate(ADD_ONS_ROUTE)} />
      </div>
    );
  } else if (activePanel === SUMMARY_ROUTE) {
    content = (
      <div className="flex flex-col">
        <Summary />
        <div className="flex justify-between mt-20">
          <GoBackButton onSwitchPanel={() => handleNavigate(ADD_ONS_ROUTE)} />
          <SubmitButton />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between flex-col w-full px-20 pb-7 pt-10">
        <form className="flex flex-col gap-7" onSubmit={handleSubmitForm}>
          {content}
        </form>
        {pagination}
      </div>
    </>
  );
}
