const customerIcons = [
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a193c0ad8e6_Customer%20Logo%20Dark%205.svg",
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a9e6d0ad8e3_Customer%20Logo%20Dark%203.svg",
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a4ac10ad8e0_Customer%20Logo%20Dark%201.svg",
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a193c0ad8e6_Customer%20Logo%20Dark%205.svg",
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a9e6d0ad8e3_Customer%20Logo%20Dark%203.svg",
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a4ac10ad8e0_Customer%20Logo%20Dark%201.svg",
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a193c0ad8e6_Customer%20Logo%20Dark%205.svg",
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a9e6d0ad8e3_Customer%20Logo%20Dark%203.svg",
];

function CustomerLogo({ icon }) {
  return (
    <div className="flex justify-center items-center text-black py-10 px-8 border-black border-2">
      <img src={icon} />
    </div>
  );
}

function Customers() {
  return (
    <div className="py-16 px-12">
      <div className="text-center mx-auto mb-10">
        <h2 className="text-4xl font-bold">Happy Customers</h2>
      </div>
      <div className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-4 desktop:grid-cols-2 mobile:grid-cols-1">
        {customerIcons.map((icon) => (
          <CustomerLogo icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default Customers;
