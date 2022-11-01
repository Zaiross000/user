import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeUser } from "../SliceRedux/userSlice";

function UserList() {
  const token = localStorage.getItem("token");
  const total = 5;
  const [users, setUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://class.nodemy.vn/api/mock/users?page=${current}&size=${total}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setUsers(res.data.data))
      .catch((rej) => console.log("wrong"));
  }, [current, token]);
  function handleChange(page) {
    setCurrent(page);
    axios
      .get(
        `https://class.nodemy.vn/api/mock/users?page=${current}&size=${total}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => setUsers(res.data.data))
      .catch((rej) => console.log("wrong"));
  }
  function handleDelete(userDel) {
    const cloneUser = users.filter((user) => {
      return user !== userDel;
    });
    setUsers(cloneUser);
  }
  return (
    <div>
      <Link to={"/"}>
        <button>Add new user</button>
      </Link>
      <Pagination
        defaultCurrent={1}
        current={current}
        total={50}
        onChange={handleChange}
      />
      {users.map((user) => {
        return (
          <Link to={`/user/${user._id}`} key={user._id}>
            <div className="user">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <div className="action">
                <button onClick={() => handleDelete(user)}>Delete</button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default UserList;
