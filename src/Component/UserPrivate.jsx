import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserPrivate() {
  const [user, setUser] = useState();
  const param = useParams();
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`https://class.nodemy.vn/api/mock/users/${param.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser([res.data.data]);
        console.log(res.data.data);
      })
      .catch((rej) => {
        console.log(rej);
      });
    return () => {};
  }, [param.id, token]);

  return (
    <div>
      {user?.map((info) => {
        return (
          <div key={info._id}>
            <p>{info.name}</p>
            <p>{info.linkFB}</p>
            <p>{info.email}</p>
            <p>{info.phone}</p>
            <p>{info.dateOfBirth}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserPrivate;
