import Image from "next/image";

const Guide = () => {
  return (
    <section className="max-container flex flex-col gap-20 ">
      <div className="lg:flex-row justify-between items-center padding-container flex-col flex gap-3">
        <div className="flex flex-col items-start flex-1">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="w-10 lg:w-[50px]"
          />
          <p className="regular-18 text-green-50 uppercase mb-3">
            WE ARE HERE FOR YOU
          </p>
          <h1 className="bold-40 lg:bold-64">Guide You to Easy Path</h1>
        </div>
        <p className="flex-1 regular-16 text-gray-30 mt-3 max-lg:max-w-[500px]">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain
        </p>
      </div>
      <div className="relative">
        <Image
          src="/boat.png"
          alt="boat"
          width={1000}
          height={1000}
          className="rounded-5xl w-full max-lg:h-[400px]"
        />
        <div className="flex  z-20 w-[268px] gap-3 rounded-3xl px-7 py-8 bg-white absolute border shadow-md left-[5%] top-20 ">
          <Image src="/meter.svg" alt="meter" width={16} height={158} className="h-full w-auto" />
          <div className="flex flex-col justify-between">
            <div className="flexBetween flex-wrap w-full">
              <p className="regular-16 text-gray-20">Destination</p>
              <p className="bold-16 text-green-50">48 min</p>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>
            <div className="flex-col w-full flex">
              <p className="regular-16 text-gray-20">Start track</p>
              <p className="bold-20 mt-2">Wonorejo Pasuruan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
