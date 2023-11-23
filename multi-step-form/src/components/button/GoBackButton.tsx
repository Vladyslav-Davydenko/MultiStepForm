interface Props {
  onSwitchPanel: () => void;
}

export default function GoBackButton({ onSwitchPanel }: Props): JSX.Element {
  return (
    <a
      onClick={onSwitchPanel}
      className="text-gray-500 text-lg active:translate-y-0.5 transition-all duration-300"
    >
      Go Back
    </a>
  );
}
