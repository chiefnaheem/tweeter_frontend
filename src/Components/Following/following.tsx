import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import FollowingComponent from "../followingComponent/followingComponent";
import "./following.scss";
import axios from "axios";
import { AuthContext } from "../../context/Auth.context";
import { useContext } from "react";

function Following() {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [following, setFollowing] = useState([]);

  const url = "https://tweetaclone.herokuapp.com/";

  useEffect(() => {
    const getFollowings = async () => {
      try {
        const res = await axios(
          `${url}api/follow/following/?pageNo=1&pageSize=20`,
          {
            headers: {
              Authorization: "Bearer " + user.token, //the token is a variable which holds the token
            },
          }
        );
        const following = res.data.data.following;
        setFollowing(following);
        console.log(following);
      } catch (err) {
        console.log(err);
      }
    };
    getFollowings();
  }, []);
  

  const followingElement = following.map(
    ({ index, firstName, _id, lastName, profilePic, bioData, isFollow }) => (
      <FollowingComponent
        key={index}
        name={firstName + " " + lastName}
        profilePic={profilePic}
        bioData={bioData}
        isFollow={isFollow}
        id={_id}
      />
    )
  );

  return (
    <>
      <div className="follow-button" onClick={handleShow}>
        Following List
      </div>

      {following && console.log(following)}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div className="fixed">
            <p> You are now following daniel jenson </p>
          </div>
        </Modal.Header>
        {followingElement}
      </Modal>
    </>
  );
}

export default Following;
