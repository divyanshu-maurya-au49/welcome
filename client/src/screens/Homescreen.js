import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Room";

import "antd/dist/reset.css";
import { DatePicker,  } from "antd";
const { RangePicker } = DatePicker;
// console.log(RangePicker);
function Homescreen() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  async function api() {
    try {
      setloading(true);
      const data = (await axios.get("/api/rooms/getallrooms")).data;

      setrooms(data);
      setloading(false);
    } catch (error) {
      seterror(true);
      console.log(error);
      setloading(false);
    }
  }
  useEffect(() => {
    api();
  }, []);

  const [data, setData] = useState({
    search:"",type:""
  });
 
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // console.log(data);
  return (
    <div className="container">
      <div className="row mt-1">
        <div className="col-md-3">
          <div className="row">
            
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>loading....</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((room, id) => {
            return (
              <div className="col-md-9 mt-2" key={id}>
                <Room room={room} type={data.type} search={data.search}/>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
