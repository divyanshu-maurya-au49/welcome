import React, { useEffect, useState, useContext } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";

import { UserContext } from "../ContextAPI/Context";

export default function ProfilePage() {
  const { user, setUser } = useContext(UserContext);
  const [data1, setData1] = useState([]);
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

  const CallRoomData = async () => {
    try {
      const res = await fetch("/api/rooms/bookdetails", {
        method: "get",
        credentials: "include",
      });
      const data = await res.json();
      if (res.status === 200) {
        setData1(data);
        console.log(data?.hotelname);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data1);
  useEffect(() => {
    CallRoomData();
    CallUserData();
  }, []);
  console.log(user);

  return (
    <>
    <section style={{ backgroundColor: "white" }}>
      <MDBContainer className="">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href="/">Home</a>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4"></MDBCol>
          <MDBCol>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <h1>User Deatails</h1>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {/* {data1[0]?.email} */}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
              {data1.map((item,id)=>{
                return(

<MDBCardBody key={id}>
                <h1>Booking {id+1}</h1>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Hotel Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {item.hotelname}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Price</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      ₹ {item?.rentperday}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {item?.phonenumber}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Type</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {item?.type}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
                )
              
              })}
            </MDBCard>

            {/* <MDBRow></MDBRow> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
   
    </>
  );
}
