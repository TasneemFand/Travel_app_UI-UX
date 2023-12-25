import { features } from "@/constants";
import Image from "next/image";
import { Button } from "./Ui";

const GetApp = () => {
  return (
    <section className="flex-col flexCenter py-24">
      <div className="get-app">
        <div className="flex flex-col flex-1 z-20 w-full items-start justify-center gap-12">
          <h1 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h1>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <div className="flex flex-col w-full gap-2">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/phones.png"
            alt="phones"
            width={1000}
            height={1000}
            className="w-auto h-full "
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
