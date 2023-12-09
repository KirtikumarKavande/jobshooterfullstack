import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { jobDescritption } from "../../utilites/constant";
import { Button, Alert } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import SelectSkills from "./SelectSkills";
import skillsList from "../utiites/skillsList";
import { IoMdAddCircleOutline } from "react-icons/io";
import { toast } from "react-hot-toast";
import CardContainer from "./Card";
import JobAddedSummeryCard from "./JobAddedSummeryCard";
import Parser from "html-react-parser";


const Description = () => {
  const [jobDescription, setJobDescription] = useState(jobDescritption);
  const [isModalOpenForAddSkills, setIsModalOpenForAddSkills] = useState(false);
  const [open, setOpen] = useState(false);
  const [getskills, setGetSkills] = useState(skillsList);
  const [typedSkills, setTypedSkills] = useState("");
  const [skillsThatYouHave, setSkillsThatYouHave] = useState(["HTML", "CSS"]);
  const [isModelOpenForPreview, setIsModalOpenForPreview] = useState(false);

  const navigate = useNavigate();
  const addSkillsInList = () => {
    if (skillsThatYouHave.length === 10) {
      toast.error("you can add max 10 skills");
      return;
    }
    setSkillsThatYouHave([...skillsThatYouHave, typedSkills]);
    setTypedSkills("");
  };

  useEffect(() => {
    const updatedSkills = skillsList.filter((item) => {
      return item
        ?.toLocaleLowerCase()
        .includes(typedSkills?.toLocaleLowerCase());
    });
    setGetSkills(updatedSkills);
  }, [typedSkills]);

  const deleteSkillsFromList = (index) => {
    const mySkills = [...skillsThatYouHave];
    const updatedSkills = mySkills.filter((item, i) => {
      if (index !== i) {
        return item;
      }
    });
    setSkillsThatYouHave(updatedSkills);
  };
  

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
            isModalOpen={isModelOpenForPreview}
            setIsModalOpen={setIsModalOpenForPreview}
            hedaline={"Preview job post"}
          >
            <p>
              This is a preview of what your job post will look like to job
              seekers, which includes details about your job such as company
              size and location, as well as information around when you created
              your LinkedIn profile. Candidates will answer screening questions
              when they apply.
            </p>
            <div className="w-full border border-gray-400 shadow-md h-[40vh] overflow-y-scroll p-2 rounded-lg">
              <JobAddedSummeryCard />
              {Parser(jobDescription)}
            </div>
          </Modal>
          <Modal
            isModalOpen={isModalOpenForAddSkills}
            setIsModalOpen={setIsModalOpenForAddSkills}
            hedaline={"Add skills"}
          >
            <div className="flex flex-col items-center">
              <div className=" border-gray-400 w-full font-bold border h-24 space-x-3 text-black px-2 overflow-y-scroll">
                {skillsThatYouHave.map((item, index) => (
                  <div className="inline ">
                    <span>{index + 1}.</span> <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className=" lg:pl-32 pt-4">
              <div className="flex">
                {" "}
                <input
                  className="w-72 border-gray-600 border rounded-md h-10 px-2 text-black "
                  placeholder="Add Skill"
                  onChange={(e) => {
                    setTypedSkills(e.target.value);
                  }}
                  value={typedSkills}
                />{" "}
                <button
                  disabled={skillsThatYouHave.length === 10}
                  onClick={addSkillsInList}
                  className="font-bold text-2xl pl-1 cursor-pointer mt-2 absolute ml-64 text-blue-500"
                >
                  {" "}
                  <IoMdAddCircleOutline />
                </button>
              </div>
              <SelectSkills
                filteredData={getskills}
                setTypedSkills={setTypedSkills}
              />
            </div>
          </Modal>

          <ReactQuill
            theme="snow"
            value={jobDescription}
            onChange={setJobDescription}
            className="border border-black w-full md:w-auto"
          />

          <div className="pt-10 font-bold text-lg">Skills</div>
          <p className="text-sm text-gray-900">
            Add skill keywords (max 10) to make your job more visible to the
            right candidates.
          </p>
          <div>
            <div className="flex space-x-2 h-fit  border flex-wrap">
              {skillsThatYouHave.map((item, index) => (
                <div
                  key={item}
                  className="bg-[#004C33] rounded-full w-fit h-10 p-2 my-2 text-white"
                >
                  {" "}
                  <span className="font-bold mr-1 ">{item}</span>{" "}
                  <span
                    className="font-semibold cursor-pointer"
                    onClick={() => {
                      deleteSkillsFromList(index);
                    }}
                  >
                    X
                  </span>
                </div>
              ))}{" "}
              <button
                className="bg-[#FFFF] rounded-full w-fit h-10 p-2 my-2 text-black cursor-pointer"
                onClick={() => {
                  setIsModalOpenForAddSkills(true);
                }}
                disabled={skillsThatYouHave.length === 10}
              >
                {" "}
                <span className="font-bold mr-1 ">Add Skills</span>{" "}
                <span className="">+</span>
              </button>
            </div>
            <hr className="text-black" />
            <div className="flex justify-between mt-4 ">
              <div
                className="text-blue-700 font-semibold cursor-pointer"
                onClick={() => {
                  setIsModalOpenForPreview(true);
                }}
              >
                Preview
              </div>
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
          <div className="mb-4">
            <JobAddedSummeryCard />
          </div>
          <CardContainer title="Enhance your job posting">
            {" "}
            Add a personal touch by adding your Linkedin profile to your job
            post. This helps candidate learn more about the job and your company{" "}
          </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default Description;
