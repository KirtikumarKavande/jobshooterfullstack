import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
 
 function Modal(props) {
    const {isModalOpen,setIsModalOpen,hedaline}=props
 
  const handleOpen = () => setIsModalOpen(!isModalOpen);
 
  return (
    <>

      <Dialog open={isModalOpen} handler={handleOpen} className="h-fit">
        <DialogHeader> <span className="mx-auto">{hedaline}</span> </DialogHeader>
        <div className="h-[1px] bg-black"></div>
        <DialogBody className="bg-[#F8f7F5]">
         {props.children}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="blue"   onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default Modal