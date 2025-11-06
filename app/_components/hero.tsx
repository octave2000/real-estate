import { Bookmark } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="min-h-screen w-full bg-white relative z-0">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to left, #D7EBF9 20%, #FFF1E3 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative z-10 pt-[150px] px-10">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1]">
          Find your next comfort
        </h1>
        <div className="flex gap-6 pt-10 w-full ">
          <Image
            src="/modern.jpg"
            alt="rent"
            width={1920}
            height={1080}
            className=" w-[70%] h-[600px]  rounded-sm shadow-lg shadow-black"
          />

          <div className="bg-white h-[600px] w-[30%] rounded-sm px-6 py-6 text-2xl flex flex-col gap-y-10 ">
            <div className="flex justify-between">
              <p className="text-black/70 leading-tight">
                201 Prague Dr
                <br />
                <span className=" tracking-wide">San Jose, CA 95119</span>
              </p>

              <Bookmark className="w-7 h-7 cursor-pointer" />
            </div>
            <div className="flex justify-between text-center">
              <div className="flex flex-col items-center">
                <p className=" leading-tight">
                  <span className="font-medium text-4xl">4</span>
                  <br />
                  <span className="text-xl text-black/70 tracking-wide">
                    Beds
                  </span>
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className=" leading-tight">
                  <span className="font-medium text-4xl">3</span>
                  <br />
                  <span className="text-xl tracking-wide">Bathrooms</span>
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-black leading-tight">
                  <span className="font-medium text-4xl">1868</span>
                  <br />
                  <span className="text-xl tracking-wide">Sqft</span>
                </p>
              </div>
            </div>

            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
