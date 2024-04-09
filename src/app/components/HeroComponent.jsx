export default function HeroComponent() {
  return (
    // <div className="grid grid-cols-2 grid-flow-row gap-4">
    <div className="flex justify-between items-center py-20">
      <div className="flex flex-col ">
        <h1 className="text-[64px]">Play the games that you enjoy</h1>
        <button className="p-2 bg-blue-600 rounded-full w-1/3 hover:bg-blue-800 mt-10">
          Start Exploring
        </button>
      </div>
      <div className="flex justify-end">
        <img src="/mario.png" alt="image of mario" />
      </div>
    </div>
  );
}
