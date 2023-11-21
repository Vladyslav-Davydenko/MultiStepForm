import { MouseEvent } from "react";
import NextButton from "../../components/button/NextButton";

interface Props {
  onNextPanel: () => void;
}

export default function InfoForm({ onNextPanel }: Props): JSX.Element {
  const handleSubmitForm = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNextPanel();
  };
  return (
    <div className="text-blue-950 flex flex-col gap-10">
      <div>
        <h1 className="text-3xl font-semibold">Personal info</h1>
        <p className="text-gray-400 leading-9">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className="flex flex-col gap-7" onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-2">
          <label htmlFor="input-name" className="text-sm">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            id="input-name"
            className="p-3 rounded-lg border border-gray-300 outline-blue-800 font-medium"
            spellCheck="false"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="input-name" className="text-sm">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Your Email"
            id="input-email"
            className="p-3 rounded-lg border border-gray-300 outline-blue-800 font-medium "
            spellCheck="false"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="input-name" className="text-sm">
            Phone Number
          </label>
          <input
            type="phone"
            placeholder="e.g. +1 234 567 890"
            id="input-phone"
            className="p-3 rounded-lg border border-gray-300 outline-blue-800 font-medium"
          />
        </div>
        <div className="flex justify-end mt-20">
          <NextButton />
        </div>
      </form>
    </div>
  );
}
