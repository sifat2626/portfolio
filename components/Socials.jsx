import Link from "next/link"
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const iconStyle =
  "w-9 h-9 border p-1 border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
const socials = [
  {
    icon: <FaGithub className={iconStyle} />,
    path: "https://github.com/sifat2626",
  },
  {
    icon: <FaLinkedinIn className={iconStyle} />,
    path: "https://www.linkedin.com/in/md-ashraful-alam-sifat/",
  },
  {
    icon: <FaFacebook className={iconStyle} />,
    path: "https://www.facebook.com/ashraful.shifat/",
  },
  {
    icon: <FaTwitter className={iconStyle} />,
    path: "/",
  },
]
function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} target="_blank">
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials
