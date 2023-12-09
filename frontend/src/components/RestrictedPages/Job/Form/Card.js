import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Alert,
} from "@material-tailwind/react";

const CardContainer = (props) => {
    const {title}=props
  return (
    <Card className="w-full">
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 text-gray-600"
        >
          {title}
        </Typography>
        <Typography>{props.children}</Typography>
      </CardBody>
    </Card>
  );
};

export default CardContainer;
