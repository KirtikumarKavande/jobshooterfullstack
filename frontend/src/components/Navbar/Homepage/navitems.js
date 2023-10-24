import { PiArticle as Articles } from "react-icons/pi";
import { BsFillPeopleFill} from "react-icons/bs";
import { FaDisplay  } from "react-icons/fa6";
import { BsFillBagDashFill} from "react-icons/bs";

export const navItems = [
  {
    name: "Articles",
    icon: <Articles size={25} />,
    path: "/",
  },
  {
    name: "People",
    icon: <BsFillPeopleFill size={25} />,
    path: "/",
  },
  {
    name: "Learning",
    icon: <FaDisplay size={25} />,
    path: "/",
  },
  {
    name: "Jobs",
    icon: <BsFillBagDashFill size={25} />,
    path: "/",
  },
];
