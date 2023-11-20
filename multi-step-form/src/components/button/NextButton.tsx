interface Props {
  onSwitchPanel: () => void;
}

export default function NextButton({ onSwitchPanel }: Props): JSX.Element {
  return (
    <button
      onClick={onSwitchPanel}
      className="bg-blue-900 text-blue-50 py-2 px-4 rounded-lg text-lg hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 active:translate-y-0.5"
    >
      Next Step
    </button>
  );
}
