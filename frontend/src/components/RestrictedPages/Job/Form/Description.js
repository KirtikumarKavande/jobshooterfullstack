import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { jobDescritption } from "../../utilites/constant";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Description = () => {
  const [value, setValue] = useState(jobDescritption);

  return (
    <div className="bg-[#F4F2EE] min-h-screen mt-16 w-full">
      <div className=" mx-28 pt-9 flex ">
        <div className="w-8/12   bg-white rounded-lg p-4">
          <p className="font-bold text-lg mb-4">Tell us about the role</p>
          <hr className="text-black" />
          <h3 className="text-lg font-bold my-4">Description</h3>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="border border-black "
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
            </div>
            <hr className="text-black" />
            <div className="flex justify-between mt-4 ">
              <div className="text-blue-700 font-semibold">Preview</div>
              <div className="flex space-x-2">
                <Button className="bg-white text-gray-600">Back</Button>

                <Button className="bg-blue-700">Continue</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12  pl-4">
          <Card className=" w-96">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2 text-gray-600">
              Enhance your job posting
              </Typography>
              <Typography>
                 Add a personal touch by adding your
                Linkedin profile to your job post. This helps candidate learn
                more about the job and your company
              </Typography>
            </CardBody>
          
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Description;
