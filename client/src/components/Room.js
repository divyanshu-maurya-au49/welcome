import React, { useState } from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../ContextAPI/Context";
function Room({ room}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { setRoom } = useContext(DataContext);
  // console.log(type);
  // console.log(search);
  
  return (
    <div className="row bs">
      <div className="col-md-5">
        <img src={room.imageurls[0]} className="smallimg" />
      </div>
      <div className="col-md-6 ">
        <h1>{room.name}</h1>
        <b>
          <p>Max Count : {room.maxcount}</p>
          <p>Rent : {room.rentperday}</p>
          <p>Phone Number : {room.phonenumber}</p>
          {/* <p>Type : {room.type}</p></b> */}
          <p>Type : {room.type}</p>
        </b>
        <div style={{ float: "right" }}>
          {/* <Link to={`/book/${room._id}`}> */}
          <Link to={`/book`}>
            <button
              className="btn btn primary m-2"
              onClick={() => setRoom(room)}
            >
              Book Now
            </button>
          </Link>
          <button className="btn btn-primary" onClick={handleShow}>
            View Ditails
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageurls.map((url, id) => {
              return (
                <Carousel.Item key={id}>
                  <img className="d-block w-100 bigimg" src={url} />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
