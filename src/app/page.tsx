export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="grid gap-2 grid-cols-[1fr_3fr_1fr] grid-rows-[1fr_4fr_1fr] w-[90%] h-[90%]">
        <div className="border-2 p-3 row-span-3 bg-[#f0e6a1] text-black border-[#d1c480] rounded-md">
          <h1 className="text-xl font-bold">Navbar</h1>
        </div>
        <div className="border-2 p-3 col-span-2 bg-[#f0e6a1] text-black border-[#d1c480] rounded-md">
          <h1 className="text-xl font-bold">Heading</h1>
        </div>
        <div className="border-2 p-3 bg-[#f0e6a1] text-black border-[#d1c480] rounded-md">
          <h1 className="text-xl font-bold">Article</h1>
        </div>
        <div className="border-2 p-3 row-span-2 bg-[#f0e6a1] text-black border-[#d1c480] rounded-md">
          <h1 className="text-xl font-bold">Ads</h1>
        </div>
        <div className="border-2 p-3 bg-[#f0e6a1] text-black border-[#d1c480] rounded-md">
          <h1 className="text-xl font-bold">Footer</h1>
        </div>
      </div>
    </div>
  );
}
