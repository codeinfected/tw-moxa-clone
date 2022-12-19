function Numbers() {
  return (
    <div className="py-16 px-12">
      <div className="max-w-5xl w-full my-16 mx-auto grid grid-cols-3 border-black border-2 desktop:grid-cols-1">
        <div className="p-6 flex flex-col items-center col-span-1 row-span-1">
          <div className="text-6xl mobile:text-4xl mb-2 font-bold">7+</div>
          <div className="font-bold uppercase text-base">
            Years of Experience
          </div>
        </div>
        <div className="p-6 flex flex-col items-center col-span-1 row-span-1 bg-black text-white">
          <div className="text-6xl mobile:text-4xl mb-2 font-bold">50+</div>
          <div className="font-bold uppercase text-base">
            Projects Completed
          </div>
        </div>
        <div className="p-6 flex flex-col items-center col-span-1 row-span-1">
          <div className="text-6xl mobile:text-4xl mb-2 font-bold">30+</div>
          <div className="font-bold uppercase text-base">Happy Clients</div>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
