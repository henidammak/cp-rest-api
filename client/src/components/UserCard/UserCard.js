import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser, getUser } from "../../redux/actiontypes";
import EditUser from "../EditUser/EditUser";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  return (
    
      <Card className="card" style={{ width: "24rem" }}>
        <Card.Body>
          <Card.Title className="title">FullName:{user.fullName}</Card.Title>
          <Card.Text>
            <p>Email:{user.email}</p>
            <p>Age:{user.age}</p>
          </Card.Text>
          <div className="d-flex justify-content-around">
            <Button
              variant="warning"
              className="btn"
              onClick={() => {
                dispatch(deleteUser(user._id));
                getUser();
              }}
            >
              Delete
            </Button>
            <EditUser user={user} />
          </div>
        </Card.Body>
      </Card>
    
  );
};

export default UserCard;
