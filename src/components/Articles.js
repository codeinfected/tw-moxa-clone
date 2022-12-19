const articles = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore.",
    info: "DESIGN / APRIL 28, 2022",
    title: "Why I moved from Wordpress to Webflow",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore.",
    info: "DESIGN / APRIL 28, 2022",
    title: "Why I moved from Wordpress to Webflow",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore.",
    info: "DESIGN / APRIL 28, 2022",
    title: "Why I moved from Wordpress to Webflow",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore.",
    info: "DESIGN / APRIL 28, 2022",
    title: "Why I moved from Wordpress to Webflow",
  },
];

function ArticleCard({ info, title, description }) {
  return (
    <a
      href="/"
      className="no-underline text-black p-8 flex items-center gap-10 justify-between border-black border-2 tablet:flex-col tablet:gap-4 tablet:items-start"
    >
      <div className="flex flex-col">
        <p className="font-bold text-base uppercase m-0 mb-4 tracking-widest text-orange-600 leading-8">
          {info}
        </p>
        <h5 className="text-2xl font-bold">{title}</h5>
      </div>
      <p>{description}</p>
    </a>
  );
}

function Articles() {
  return (
    <div className="py-16 px-12">
      <div className="text-center mx-auto mb-10">
        <h2 className="text-4xl font-bold">Articles</h2>
        <h6 className="text-lg font-bold tracking-wider uppercase">
          RECOGNITIONS & ACCOMPLISHMENTS
        </h6>
      </div>
      <div className="text-black w-full max-w-5xl mx-auto flex flex-col gap-8 mb-16">
        {articles.map(({ info, title, description }) => (
          <ArticleCard info={info} title={title} description={description} />
        ))}
        <a
          className="flex items-center justify-center w-full bg-black text-white text-center py-3 px-6 no-underline text-xl leading-8 font-semibold hover:underline"
          href="/"
        >
          <div>Browse Articles</div>
        </a>
      </div>
    </div>
  );
}

export default Articles;
