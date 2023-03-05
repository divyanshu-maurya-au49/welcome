import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../ContextAPI/Context";
import { UserContext } from "../ContextAPI/Context";
import useRazorpay from "react-razorpay";
function Bookingscreen() {
  const Razorpay = useRazorpay();
  const { user, setUser } = useContext(UserContext);
  const { room } = useContext(DataContext);
  const [quantity, setQuantity] = useState(1);

  let a = JSON.stringify(room);
  // console.log(room._id);
  console.log(user[0]?.email);
  //  console.log(a);

  var options = {
    key: "rzp_test_YALjfhgOpU5BpG",
    amount: room.rentperday * 100 * quantity,
    currency: "INR",
    name: "Room Book",
    description: "",

    handler: function (response) {
      PlaceOrder();
      console.log(response);
      alert("Payment Succeeded");
    },
    prefill: {
      //Here we are prefilling random contact
      contact: "9839541266",
      //name and email id, so while checkout
      name: "Divyanshu Maurya",
      email: "1266maurya@gmail.com",
    },
    notes: {
      description: "Best Course for SDE placements",
    },
    theme: {
      color: "#2300a3",
    },
  };
  let razorpayObject = new Razorpay(options);
  console.log(razorpayObject);
  razorpayObject.on("payment.failed", function (response) {
    console.log(response);
    alert("This step of Payment Failed");
  });

  const PlaceOrder = async (e) => {
    const res = await fetch("/api/rooms/booking", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user[0]?.email,
        hotelname: room?.name,
        phonenumber: room?.phonenumber,
        rentperday: room?.rentperday * quantity,
        type: room?.type,
        description: room?.description,
      }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      console.log("Order not place, TRY AGAIN");
      alert("Order not place, TRY AGAIN");
    } else {
      console.log("Order Placed");
      // alert("Order Placed");
    }
  };

  const CallUserData = async () => {
    try {
      const res = await fetch("/api/users/user", {
        method: "get",
        credentials: "include",
      });
      const data = await res.json();
      if (res.status === 200) {
        setUser(data?.message);
        // console.log(data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CallUserData();
  }, []);

  return (
    <div className="book">
      <div className="row bs">
        <div className="col-md-5">
          <img src={room.imageurls[0]} className="smallimg" />
        </div>
        <div className="col-md-6 ">
          <h1>{room.name}</h1>
          <b>
            <p>Rent : {room.rentperday}</p>
            <p>Phone Number : {room.phonenumber}</p>
            <p>Type : {room.type}</p>
            <tr>
              <p>How many days</p>

              <td name="quantity">
                <button
                  onClick={() => {
                    if (quantity !== 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp; {quantity} &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          </b>
          <div style={{ float: "right" }}>
            <button
              className="btn btn-primary"
              onClick={(e) => {
                razorpayObject.open();
                e.preventDefault();
              }}>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookingscreen;
