const socialIcons = [
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a5d2c0ad8ea_Icon%20Instagram.svg",
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a6f350ad8e8_Icon%20Twitter.svg",
  "https://assets.website-files.com/62673e4070051ac9b30ad8c7/62673e4070051a4ae40ad8e9_Icon%20LinkedIn.svg",
];

function FooterSocialLink(props) {
  return (
    <a
      className="h-10 w-10 border-white border rounded-full flex items-center justify-center"
      href="#"
    >
      <img src={props.icon} />
    </a>
  );
}
function Footer() {
  return (
    <div className="bg-black py-16 px-12 w-full">
      <div className="w-full grid max-w-5xl mx-auto grid-cols-1 gap-y-12">
        <div className="flex gap-8 justify-between items-center desktop:flex-col">
          <img
            src="https://assets.website-files.com/62673e4070051ac9b30ad8c7/62678de1b146606ae6eaaede_Light%20Vector.svg"
            alt=""
          />
          <div className="footer-links flex items-center gap-4 mobile:flex-col">
            <a
              className="text-base font-bold text-white no-underline py-2 px-4"
              href="/"
            >
              Style Guide
            </a>
            <a
              className="text-base font-bold text-white no-underline py-2 px-4"
              href="/"
            >
              License
            </a>
            <a
              className="text-base font-bold text-white no-underline py-2 px-4"
              href="/"
            >
              Changelog
            </a>
          </div>
        </div>
        <div className="flex gap-8 justify-between items-center desktop:flex-col">
          <p className="text-white text-center">
            © Made by Portfolio Template & powered by Flowbase
          </p>
          <div className="flex gap-4">
            {socialIcons.map((socialIcon) => (
              <FooterSocialLink icon={socialIcon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
