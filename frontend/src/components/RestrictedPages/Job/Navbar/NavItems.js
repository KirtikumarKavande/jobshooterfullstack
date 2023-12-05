import { IoHomeSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const navItems = [
  {
    name: "Home",
    logo: <IoHomeSharp size={25} className="mx-auto" />,
    path: "/user/home/job",
  },
  {
    name: "Post a job",
    logo: <IoIosSend size={25} className="mx-auto" />,
    path: "/user/home/postjob/beadmin",
  },
];

export default navItems;
