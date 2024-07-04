import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const iconStyle =
  "w-9 h-9 border p-1 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500";
const socials = [
  {
    icon: <FaGithub className={iconStyle} />,
    path: "",
  },
  {
    icon: <FaLinkedinIn className={iconStyle} />,
    path: "",
  },
  {
    icon: <FaYoutube className={iconStyle} />,
    path: "",
  },
  {
    icon: <FaTwitter className={iconStyle} />,
    path: "",
  },
];
function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default Socials;
