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
      <div className="relative z-10 pt-[150px] px-6">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1]">
          Find your next comfort
        </h1>
        <div className="flex gap-6 pt-10">
          <Image
            src="/mm.jpg"
            alt="rent"
            width={1920}
            height={1080}
            className=" w-[60%] h-[500px]  rounded-sm shadow-lg shadow-black"
          />

          <div className="bg-white h-[500px] w-[20%] rounded-sm px-4 py-4 ">
            <div className="flex justify-between">
              <h2>sadsdasdsa</h2>
              <h2>kkkk</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
