import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { baseUrl } from "../../redux/baseUrl";
import CommentForm from "./CommentForm";
import LoadComments from "./LoadComments";

const DishDetail = (props) => {
  console.log(props.dish.image);
  return (
    <div>
      <Card style={{ marginTop: "10px" }}>
        <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
        <CardBody style={{ textAlign: "left" }}></CardBody>
        <CardTitle>{props.dish.name}</CardTitle>
        <CardText>{props.dish.description}</CardText>
        <CardText>{props.dish.price}</CardText>
        <hr />
        <LoadComments
          comments={props.comments}
          commentsIsLoading={props.commentsIsLoading}
        />
        <hr />
        <CommentForm dishId={props.dish.id} addComment={props.addComment} />
      </Card>
    </div>
  );
};

export default DishDetail;
