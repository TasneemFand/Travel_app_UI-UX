import { features } from "@/constants";
import Image from "next/image";

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 mt-8">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 h-screen max-[413px]:hidden">
          <Image
            src="/phone.png"
            alt="phone"
            width={400}
            height={1000}
            className="feature-phone max-lg:w-[30%]"
          />
        </div>
        <div className="flex flex-col flex-1 gap-5 max-lg:flex-[2]">
          <div className="relative z-20 flex flex-col">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
            />
            <h1 className="bold-40 lg:bold-64">Our Features</h1>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-start ">
                <div className="rounded-full p-4 lg:p-7 bg-green-50">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={30}
                    height={30}
                  />
                </div>
                <p className="bold-20 lg:bold-32 mt-5 capitalize">
                  {feature.title}
                </p>
                <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
