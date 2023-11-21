export default function NextButton(): JSX.Element {
  return (
    <input
      type="submit"
      value="Next Step"
      className="bg-blue-950 text-blue-50 py-2.5 px-6 rounded-lg text-md border hover:bg-blue-50 hover:text-blue-950 hover:border hover:border-blue-950 transition duration-300 active:translate-y-0.5 hover:-translate-y-1 shadow-md hover:shadow-lx active:shadow"
    />
  );
}
