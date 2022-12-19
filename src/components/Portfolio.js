const portfolioItems = [
  {
    image:
      "https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267689899af93b8b041554f_Project%2001.png",
    alt: "Beautiful and advanced website interfaces",
    badge: "ART DIRECTION",
    title: "Beautiful and advanced website interfaces",
    reverse: false,
  },
  {
    image:
      "https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267676a0192cbb72f0aa528_Project%2004.png",
    alt: "Beautiful and advanced website interfaces",
    badge: "BRANDING",
    title: "Beautiful and advanced website interfaces",
    reverse: true,
  },
  {
    image:
      "https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267689899af93b8b041554f_Project%2001.png",
    alt: "Beautiful and advanced website interfaces",
    badge: "ART DIRECTION",
    title: "Beautiful and advanced website interfaces",
    reverse: false,
  },
  {
    image:
      "https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267676a0192cbb72f0aa528_Project%2004.png",
    alt: "Beautiful and advanced website interfaces",
    badge: "BRANDING",
    title: "Beautiful and advanced website interfaces",
    reverse: true,
  },
];
function PortfolioItem(props) {
  return (
    <div
      className={`flex flex-wrap gap-12 desktop:flex-col desktop:w-full ${
        props.reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1">
        <img
          src={props.image}
          alt={props.alt}
          className="w-full block object-cover h-full"
        />
      </div>
      <div className="flex flex-1 flex-col items-start">
        <div className="mb-8 py-1 px-3 bg-orange-600 text-white text-lg leading-8 font-bold tracking-widest">
          {props.badge}
        </div>
        <h2 className="text-4xl font-bold mobile:text-2xl">{props.title}</h2>
        <a
          className="mt-12 text-black text-xl leading-8 font-semibold"
          href="/"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="py-16 px-12">
      <div className="text-center mx-auto mb-10">
        <h2 className="text-4xl font-bold">Portfolio</h2>
        <h6 className="text-lg font-bold tracking-wider uppercase">
          RECOGNITIONS & ACCOMPLISHMENTS
        </h6>
      </div>
      <div className="mx-auto flex max-w-5xl w-full flex-col gap-24">
        {portfolioItems.map(({ image, alt, badge, title, reverse }) => (
          <PortfolioItem
            image={image}
            alt={alt}
            badge={badge}
            title={title}
            reverse={reverse}
          />
        ))}
        {/* <PortfolioItem
          image="https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267689899af93b8b041554f_Project%2001.png"
          alt="Beautiful and advanced website interfaces"
          badge="ART DIRECTION"
          title="Beautiful and advanced website interfaces"
        />
        <PortfolioItem
          image="https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267676a0192cbb72f0aa528_Project%2004.png"
          alt="Beautiful and advanced website interfaces"
          badge="BRANDING"
          title="Beautiful and advanced website interfaces"
          reverse
        />
        <PortfolioItem
          image="https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267689899af93b8b041554f_Project%2001.png"
          alt="Beautiful and advanced website interfaces"
          badge="ART DIRECTION"
          title="Beautiful and advanced website interfaces"
        />
        <PortfolioItem
          image="https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267676a0192cbb72f0aa528_Project%2004.png"
          alt="Beautiful and advanced website interfaces"
          badge="BRANDING"
          title="Beautiful and advanced website interfaces"
          reverse
        /> */}
      </div>
    </div>
  );
}

export default Portfolio;
