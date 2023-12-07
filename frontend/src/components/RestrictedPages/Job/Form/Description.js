import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { jobDescritption } from "../../utilites/constant";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Alert,
  Input,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import SelectSkills from "./SelectSkills";
import skillsList from "../utiites/skillsList";
import { IoMdAddCircleOutline } from "react-icons/io";

const Description = () => {
  const [value, setValue] = useState(jobDescritption);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [getskills, setGetSkills] = useState(skillsList);
  const [typedSkills, setTypedSkills] = useState("");

  const navigate = useNavigate();

  return (
    <div className="bg-[#F4F2EE] min-h-screen mt-16 w-full">
      <div className=" lg:mx-28 pt-9 flex-auto lg:flex">
        <div className="  lg:w-8/12   bg-white rounded-lg p-4">
          <p className="font-bold text-lg mb-4">Tell us about the role</p>
          <hr className="text-black" />
          <h3 className="text-lg font-bold my-4">Description</h3>
          <Alert
            open={open}
            onClose={() => setOpen(false)}
            className="bg-gray-200 text-black mb-2"
          >
            You are responsible for your job post. Review to ensure it has all
            required information
          </Alert>
          <Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            hedaline={"Add skills"}
          >
            <div className="flex flex-col items-center">
              <div className=" border-gray-400 w-full font-bold border h-24 space-x-3 text-black px-2 overflow-y-scroll">
                <div className="inline ">
                  <span>1.</span> <span>HTML</span>
                </div>
                <div className="inline">
                  <span>2.</span> <span>HTML</span>
                </div>
                <div className="inline">
                  <span>2.</span> <span>HTML</span>
                </div>
                <div className="inline">
                  <span>2.</span> <span>HTML</span>
                </div>
                <div className="inline">
                  <span>2.</span> <span>HTML</span>
                </div>
                <div className="inline">
                  <span>2.</span> <span>HTML</span>
                </div>
                <div className="inline">
                  <span>2.</span> <span>HTML</span>
                </div>
                <div className="inline">
                  <span>2.</span> <span>HTML</span>
                </div>
                <div className="inline">
                  <span>2.</span> <span>HTML</span>
                </div>
                <div className="inline">
                  <span>2.</span> <span>HTML</span>
                </div>
                <div className="inline">
                  <span>2.</span> <span>HTML</span>
                </div>
              </div>
            </div>
            <div className=" lg:pl-32 pt-4">
              <div className="flex">
                {" "}
                <input
                  className="w-72 border-gray-600 border rounded-md h-10 px-2 text-black "
                  placeholder="Add Skill"
                />{" "}
                <span className="font-bold text-2xl pl-1 cursor-pointer mt-2 absolute ml-64 text-blue-500">
                  {" "}
                  <IoMdAddCircleOutline />
                </span>
              </div>
              <SelectSkills filteredData={getskills} />
            </div>
          </Modal>

          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="border border-black w-full md:w-auto"
          />

          <div className="pt-10 font-bold text-lg">Skills</div>
          <p className="text-sm text-gray-900">
            Add skill keywords (max 10) to make your job more visible to the
            right candidates.
          </p>
          <div>
            <div className="flex space-x-2 h-fit  border flex-wrap">
              {" "}
              <div className="bg-[#004C33] rounded-full w-fit h-10 p-2 my-2 text-white">
                {" "}
                <span className="font-bold mr-1 ">web Development</span>{" "}
                <span className="">X</span>
              </div>
              <div className="bg-[#004C33] rounded-full w-fit h-10 p-2 my-2 text-white">
                {" "}
                <span className="font-bold mr-1 ">web Development</span>{" "}
                <span className="">X</span>
              </div>{" "}
              <div className="bg-[#004C33] rounded-full w-fit h-10 p-2 my-2 text-white">
                {" "}
                <span className="font-bold mr-1 ">web Development</span>{" "}
                <span className="">X</span>
              </div>{" "}
              <div className="bg-[#004C33] rounded-full w-fit h-10 p-2 my-2 text-white">
                {" "}
                <span className="font-bold mr-1 ">web Development</span>{" "}
                <span className="">X</span>
              </div>{" "}
              <div className="bg-[#004C33] rounded-full w-fit h-10 p-2 my-2 text-white">
                {" "}
                <span className="font-bold mr-1 ">web Development</span>{" "}
                <span className="">X</span>
              </div>{" "}
              <div className="bg-[#004C33] rounded-full w-fit h-10 p-2 my-2 text-white">
                {" "}
                <span className="font-bold mr-1 ">web Development</span>{" "}
                <span className="">X</span>
              </div>
              <div
                className="bg-[#FFFF] rounded-full w-fit h-10 p-2 my-2 text-black cursor-pointer"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                {" "}
                <span className="font-bold mr-1 ">Add Skills</span>{" "}
                <span className="">+</span>
              </div>
            </div>
            <hr className="text-black" />
            <div className="flex justify-between mt-4 ">
              <div className="text-blue-700 font-semibold">Preview</div>
              <div className="flex space-x-2">
                <Button
                  className="bg-white text-gray-600"
                  onClick={() => {
                    navigate("/user/home/jobposting");
                  }}
                >
                  Back
                </Button>

                <Button className="bg-blue-700">Continue</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/12 mt-5 lg:mt-0 ml-2 lg:ml-0 lg:pl-4">
          <Card className="w-full lg:w-96">
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-gray-600"
              >
                Enhance your job posting
              </Typography>
              <Typography>
                Add a personal touch by adding your Linkedin profile to your job
                post. This helps candidate learn more about the job and your
                company
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Description;
