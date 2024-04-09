export default function Categories() {
  return (
    <>
      <div className="flex justify-between py-4 mt-20">
        <h1>Categories</h1>
        <button className="bg-white/20 py-2 px-8 rounded-2xl hover:bg-white/30">
          See All
        </button>
      </div>
      <div class="grid grid-cols-2 gap-4">
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
      </div>
    </>
  );
}
