export default function FeaturedGames() {
  return (
    <>
      <div className="flex justify-between py-4">
        <div className="border-l-4 border-l-indigo-500">
          <h1 className="text-2xl font-bold p-3">Featured Games</h1>
        </div>
        <button className="bg-white/20 py-2 px-8 rounded-2xl hover:bg-white/30">
          See All
        </button>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
