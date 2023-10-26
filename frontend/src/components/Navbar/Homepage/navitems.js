import { PiArticle as Articles } from "react-icons/pi";
import { BsFillPeopleFill} from "react-icons/bs";
import { FaDisplay  } from "react-icons/fa6";
import { BsFillBagDashFill} from "react-icons/bs";
import {ICON_SIZE} from "../../utilities/constant/Home/homePageConstant"

export const navItems = [
  { 
    name: "Articles",
    icon: <Articles size={ICON_SIZE} />,
    path: "/",
  },
  {
    name: "People",
    icon: <BsFillPeopleFill size={ICON_SIZE} />,
    path: "/",
  },
  {
    name: "Learning",
    icon: <FaDisplay size={ICON_SIZE} />,
    path: "/",
  },
  {
    name: "Jobs",
    icon: <BsFillBagDashFill size={ICON_SIZE} />,
    path: "/",
  },
];
