function Hero() {
  return (
    <div className="py-16 px-12">
      <div className="mx-auto grid w-full max-w-5xl gap-11 grid-cols-2 desktop:grid-cols-1">
        <div>
          <h1 className="text-gray-800 text-6xl font-bold tracking-tight mobile:text-3xl">
            HI, I'M TAYLER.
          </h1>
          <h1 className="text-gray-800 text-6xl font-bold tracking-tight mobile:text-3xl">
            A CREATIVE
          </h1>
          <h1 className="text-gray-800 text-6xl font-bold tracking-tight mobile:text-3xl">
            DESIGNER
          </h1>
          <h1 className="text-gray-800 text-6xl font-bold tracking-tight mobile:text-3xl">
            BASED IN <span className="line-through">LONDON</span>
          </h1>
          <div className="flex flex-wrap my-8 gap-2">
            <h5 className="text-2xl font-bold mobile:text-xl">DESIGN</h5>
            <img
              src="https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051abbfd0ad8d5_Icon%203.svg"
              alt=""
            />
            <h5 className="text-2xl font-bold mobile:text-xl">DEVELOPMENT</h5>
            <img
              src="https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051abbfd0ad8d5_Icon%203.svg"
              alt=""
            />
            <h5 className="text-2xl font-bold mobile:text-xl">WEBFLOW</h5>
          </div>
          <div className="flex flex-wrap">
            <a
              className="text-white bg-black text-base text-center font-semibold py-4 px-12 no-underline hover:underline mobile:w-full"
              href="/"
            >
              Got a project?
            </a>
            <a
              className="border border-black text-gray-800 text-base text-center font-semibold py-4 px-12 no-underline hover:underline mobile:w-full"
              href="/"
            >
              Let's talk.
            </a>
          </div>
        </div>
        <div className="">
          <img
            className="w-full block"
            src="https://assets.website-files.com/62673e4070051ac9b30ad8c7/626a08b7ad20d840cca00273_Header%20Image%20Large.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
