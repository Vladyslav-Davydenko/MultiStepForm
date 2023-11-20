import AddOnsForm from "../forms/AddOnsForm";
import InfoForm from "../forms/InfoForm";
import PlanForm from "../forms/PlanForm";
import Summary from "../forms/Summary";

import NextButton from "../../components/button/NextButton";
import GoBackButton from "../../components/button/GoBackButton";

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

  const handleNavigate = (panel: string) => {
    navigateTo(panel);
  };

  if (activePanel === ADD_ONS_ROUTE) {
    content = (
      <>
        <AddOnsForm />
        <div className="flex justify-between">
          <GoBackButton onSwitchPanel={() => handleNavigate(PLAN_ROUTE)} />
          <NextButton onSwitchPanel={() => handleNavigate(SUMMARY_ROUTE)} />
        </div>
      </>
    );
  } else if (activePanel === INFO_ROUTE) {
    content = (
      <>
        <InfoForm />
        <div className="flex justify-end">
          <NextButton onSwitchPanel={() => handleNavigate(PLAN_ROUTE)} />
        </div>
      </>
    );
  } else if (activePanel === PLAN_ROUTE) {
    content = (
      <>
        <PlanForm />
        <div className="flex justify-between">
          <GoBackButton onSwitchPanel={() => handleNavigate(INFO_ROUTE)} />
          <NextButton onSwitchPanel={() => handleNavigate(ADD_ONS_ROUTE)} />
        </div>
      </>
    );
  } else if (activePanel === SUMMARY_ROUTE) {
    content = (
      <>
        <Summary />
        <div className="flex justify-start h-[44px] ">
          <GoBackButton onSwitchPanel={() => handleNavigate(ADD_ONS_ROUTE)} />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex m-7 justify-between flex-col w-full">{content}</div>
    </>
  );
}
