const cards = [
  {
    title: "Web Design",
    description:
      "Every single project is a challenge that we accept eagerly. Let's implement innovative ideas together!",
  },
  {
    title: "Product Design",
    description:
      "Every single project is a challenge that we accept eagerly. Let's implement innovative ideas together!",
  },
  {
    title: "UI/UX Design",
    description:
      "Every single project is a challenge that we accept eagerly. Let's implement innovative ideas together!",
  },
  {
    title: "Art Direction",
    description:
      "Every single project is a challenge that we accept eagerly. Let's implement innovative ideas together!",
  },
];

function ServiceCard(props) {
  return (
    <a
      href="#"
      className="text-gray-900 py-12 px-8 no-underline border-black border-2 hover:bg-black hover:text-white transition duration-300"
    >
      <h4 className="text-4xl font-bold mobile:text-3xl">{props.title}</h4>
      <p className="mb-0 mt-8 text-lg leading-8 font-light">
        {props.description}
      </p>
    </a>
  );
}

function Services() {
  return (
    <div className="py-16 px-12">
      <div className="text-center mx-auto mb-10">
        <h2 className="text-4xl font-bold">Services</h2>
        <h6 className="text-lg font-bold tracking-wider uppercase">
          RECOGNITIONS & ACCOMPLISHMENTS
        </h6>
      </div>
      <div className="max-w-5xl w-full mx-auto grid grid-cols-2 gap-10 mobile:grid-cols-1">
        {cards.map(({ title, description }) => (
          <ServiceCard title={title} description={description} />
        ))}
      </div>
    </div>
  );
}

export default Services;
