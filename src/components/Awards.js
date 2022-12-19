const awards = [
  {
    title: "Webflow Awwwards Team",
    detail: "Runner Up - Webflow Expert Design",
    category: "PRODUCT DESIGN",
    year: 2020,
  },
  {
    title: "Webflow Awwwards Team",
    detail: "Runner Up - Webflow Expert Design",
    category: "DEVELOPMENT",
    year: 2021,
  },
  {
    title: "Webflow Awwwards Team",
    detail: "Runner Up - Webflow Expert Design",
    category: "BRANDING",
    year: 2022,
  },
  {
    title: "Webflow Awwwards Team",
    detail: "Runner Up - Webflow Expert Design",
    category: "PRODUCT DESIGN",
    year: 2022,
  },
];

function AwardCard(props) {
  return (
    <a
      href="/"
      className="text-black w-full flex items-center justify-between p-12 desktop:text-center border-black border-2 no-underline desktop:flex-col mobile:p-8"
    >
      <div className="flex items-center desktop:flex-col">
        <div className="w-12 h-12 bg-orange-600 text-white flex justify-center items-center mr-6 desktop:mr-0 desktop:mb-6">
          <p className="my-0">{props.number}</p>
        </div>
        <div>
          <h5 className="text-2xl font-bold">{props.title}</h5>
          <p className="my-0 text-lg leading-8 font-medium">{props.detail}</p>
        </div>
      </div>
      <div className="desktop:mt-3 mobile:flex-col flex gap-4">
        <div>{props.category}</div>
        <div>{props.year}</div>
      </div>
    </a>
  );
}

function Awards() {
  return (
    <>
      <div className="py-16 px-12">
        <div className="text-center mx-auto mb-10">
          <h2 className="text-4xl font-bold">Awards</h2>
          <h6 className="text-lg font-bold tracking-wider uppercase">
            RECOGNITIONS & ACCOMPLISHMENTS
          </h6>
        </div>
        <div className="w-full text-black max-w-5xl mx-auto flex flex-col gap-6">
          {awards.map(({ title, detail, category, year }, index) => (
            <AwardCard
              number={index + 1}
              title={title}
              detail={detail}
              category={category}
              year={year}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Awards;
