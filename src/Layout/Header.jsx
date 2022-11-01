import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [user, setUser] = useState();

  console.log(user);
  return (
    <header>
      <nav className="nav">
        <Link to={"user"}>
          <h1>User</h1>
        </Link>
      </nav>
      <nav>{user ? <h1>{user.name}</h1> : <h1>Welcome</h1>}</nav>
    </header>
  );
}

export default Header;
