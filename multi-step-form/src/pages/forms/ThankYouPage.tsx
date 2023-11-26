export default function ThankYouPage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center h-[500px] w-full text-center px-8">
      <div className="bg-thank-you bg-cover bg-no-repeat h-[80px] w-[80px] my-4"></div>
      <h1 className="text-blue-950 font-bold text-3xl my-4">Thank you!</h1>
      <p className="text-gray-400">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
