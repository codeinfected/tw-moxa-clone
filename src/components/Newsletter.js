function Newsletter() {
  return (
    <div className="py-16 px-12 w-full bg-stone-200">
      <div className="gap-4 w-full max-w-5xl flex justify-between items-center mx-auto desktop:flex-col">
        <h5 className="text-2xl font-bold">Subscribe to our newsletter</h5>
        <form className="flex items-center gap-8 mobile:w-full mobile:flex-col mobile:gap-0">
          <input
            className="email-field w-72 py-4 px-6 mobile:w-full"
            type="email"
            name=""
            id=""
            placeholder="EMAIL ADDRESS"
          />
          <button
            className="bg-black cursor-pointer py-4 px-6 text-white mobile:w-full"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
