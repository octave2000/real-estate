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

      <div className="relative z-10 pt-[100px] px-6 md:pt-[150px] md:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1] text-center md:text-left">
          Find your next comfort
        </h1>

        <div className="flex flex-col md:flex-row gap-6 pt-10 w-full">
          <Image
            src="/modern.jpg"
            alt="rent"
            width={1920}
            height={1080}
            className="w-full md:w-[70%] h-[250px] sm:h-[350px] md:h-[600px] object-cover rounded-sm shadow-lg shadow-black"
          />

          <div className="bg-white w-full md:w-[30%] rounded-sm px-4 sm:px-6 py-6 text-xl sm:text-2xl flex flex-col gap-y-10 h-auto md:h-[600px]">
            <div className="flex justify-between items-start">
              <p className="text-black/70 leading-tight text-base sm:text-lg">
                201 Prague Dr
                <br />
                <span className="tracking-wide">San Jose, CA 95119</span>
              </p>
              <Bookmark className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" />
            </div>

            <div className="flex justify-between text-center">
              <div className="flex flex-col items-center">
                <p className="leading-tight">
                  <span className="font-medium text-3xl sm:text-4xl">4</span>
                  <br />
                  <span className="text-base sm:text-xl text-black/70 tracking-wide">
                    Beds
                  </span>
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="leading-tight">
                  <span className="font-medium text-3xl sm:text-4xl">3</span>
                  <br />
                  <span className="text-base sm:text-xl tracking-wide">
                    Bathrooms
                  </span>
                </p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-black leading-tight">
                  <span className="font-medium text-3xl sm:text-4xl">1868</span>
                  <br />
                  <span className="text-base sm:text-xl tracking-wide">
                    Sqft
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
