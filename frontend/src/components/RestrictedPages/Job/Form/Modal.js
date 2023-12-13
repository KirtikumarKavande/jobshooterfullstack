import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";

function Modal(props) {
  const { isModalOpen, setIsModalOpen, hedaline, size } = props;

  const handleClose = () => {
    setIsModalOpen(false);
  };


  return (
    <Dialog open={isModalOpen} onClose={handleClose} className="h-fit" size={size}>
      <DialogHeader>
        <span className="mx-auto">{hedaline}</span>
      </DialogHeader>
      <div className="h-[1px] bg-black"></div>
      <DialogBody className="bg-[#F8f7F5]">
        {props.children}
        <div className="w-full mt-4 flex justify-end pr-2">
          <button className="text-red-400 font-bold" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default Modal;
