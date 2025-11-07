import { Button } from "@/components/ui/button";
import { Select, SelectTrigger } from "@/components/ui/select";
import { filters } from "@/lib/constants/constants";
import { Bookmark } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="min-h-screen w-full bg-white relative z-0 py-4">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to left, #D7EBF9 5%, #FFF1E3 70%, #FFF1E3 100%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative z-10 pt-[100px] px-6 md:pt-[150px] md:px-10 flex flex-col gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1] text-center md:text-left">
          Find your next comfort
        </h1>

        <div className="flex flex-col md:flex-row gap-6 pt-10 w-full">
          <Image
            src="/kk.jpg"
            alt="rent"
            width={1920}
            height={1080}
            className="w-full md:w-[70%] h-[250px] sm:h-[350px] md:h-[600px] object-cover rounded-sm shadow-lg shadow-black"
          />

          <div className="bg-white w-full md:w-[30%] rounded-sm px-4 sm:px-6 py-6 text-xl sm:text-2xl flex flex-col gap-y-10 h-auto md:h-[600px]">
            <div className="flex justify-between items-start">
              <p className="text-black/70 leading-tight text-base sm:text-lg">
                201 Barcelona Dr
                <br />
                <span className="tracking-wide">San Jose, SP 95119</span>
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
            <div className="flex justify-between">
              <p>$1,650,000</p>
              <div className="rounded-md px-8 text-base border border-black py-2 cursor-pointer">
                Split options
              </div>
            </div>
            <div className="bg-[#F8FAFB] rounded-md p-6 sm:p-8 w-full max-w-md mx-auto">
              {/* Top Section */}
              <div className="flex items-center justify-between mb-8">
                <Image
                  alt="agent"
                  src="/profile.jpg"
                  height={64}
                  width={64}
                  className="rounded-full bg-gray-500 w-16 h-16"
                />
                <div className="text-base text-black/60">Agent</div>
              </div>

              {/* Bottom Section */}
              <div className="flex items-center justify-between">
                <p className="text-black/70 leading-tight text-base sm:text-lg">
                  Lionel <br />
                  <span className="tracking-wide">Andres Messi</span>
                </p>
                <button className="rounded-md px-6 sm:px-8 py-2 border border-black text-base cursor-pointer">
                  Contact
                </button>
              </div>
            </div>
            <div className="flex justify-center relative bottom-4">
              <Button className="py-6 px-8 text-lg shadow-lg w-[400px] cursor-pointer">
                Book now
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-5 rounded-md py-10 px-6 bg-white">
          {filters.map((filter, i) => {
            const Icon = filter.icon;
            return (
              <Select key={i}>
                <SelectTrigger className="flex items-center gap-3 px-6 py-8 border border-black/30 rounded-md hover:bg-gray-50 transition-all min-w-[220px]">
                  <Icon />
                  <div className="flex flex-col text-left">
                    <p className="text-sm text-black/60">{filter.name}</p>
                    <p className="text-base text-black font-medium leading-tight">
                      Selection
                    </p>
                  </div>
                </SelectTrigger>
              </Select>
            );
          })}

          <Button className="py-8 px-10 text-base font-medium rounded-md border border-black/20 shadow-sm">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
