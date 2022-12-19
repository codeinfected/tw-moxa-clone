function About() {
  return (
    <div className="py-16 px-12">
      <div className="grid gap-x-10 gap-y-4 w-full max-w-5xl mx-auto grid-cols-2 desktop:grid-cols-1">
        <div>
          <h5 className="mb-8 text-2xl font-bold">TAYLER BARTHHOLD</h5>
          <h1 className="text-gray-800 text-6xl font-bold tracking-tight leading-tight mobile:text-3xl">
            Lead product designer and art director.
          </h1>
        </div>
        <div className="flex gap-4 flex-col">
          <h4 className="text-4xl font-bold mobile:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
          <div className="flex w-full justify-between mobile:flex-col">
            <div>
              <div className="mt-0 mb-2 text-xs font-semibold text-orange-600">
                BORN IN
              </div>
              <h5 className="text-2xl font-bold">New York</h5>
            </div>
            <div>
              <div className="mt-0 mb-2 text-xs font-semibold text-orange-600">
                EXPERIENCE
              </div>
              <h5 className="text-2xl font-bold">7+ Years</h5>
            </div>
            <div>
              <div className="mt-0 mb-2 text-xs font-semibold text-orange-600">
                DATE OF BIRTH
              </div>
              <h5 className="text-2xl font-bold">27 June 1992</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
