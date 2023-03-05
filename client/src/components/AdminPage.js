import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function AdminPage() {
  const [bookingDetail, setBookingDetail] = useState([]);
  const CallOrderDetails = async () => {
    try {
      const res = await fetch("/api/rooms/adminpannel", {
        method: "get",
        credentials: "include",
      });
      const data = await res.json();

      if (res.status === 200) {
        setBookingDetail(data?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CallOrderDetails();
  }, []);
  console.log(bookingDetail);
  return (
    <>
      <div
        className="scroll"
        style={{
          margin: "auto",
          width: "90%",
          height: "400px",
          border: "none",
        }}
      >
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <h5 className="header-title pb-3 mt-0">Order List</h5>
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr className="align-self-center">
                      <th>hotelname</th>
                      <th>Email</th>
                      <th>phonenumber</th>
                      <th>rentperday</th>
                      <th>type</th>
                      <th>booking date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingDetail?.reverse().map((item, id) => {
                      return (
                        <tr key={id} className="align-self-center">
                          <td>{item.hotelname}</td>
                          <td>{item.email}</td>
                          <td>{item.phonenumber}</td>
                          <td>{item.rentperday}</td>
                          <td>{item.type}</td>
                          <td>{item.updatedAt}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
