import React from "react";
import { Link } from "react-router-dom";

// navigation links
export default function Nav() {
  const token = localStorage.getItem("token")
  return (
    <nav>
      <ul>
        <div className="navbar">
          <div className="leftHeader">
            <li>
              <Link to="/Rankings">RANKINGS</Link>
            </li>
            <li>
              {token && token !== "undefined" ?
                <Link to="/Factors">FACTORS</Link> : <Link
                  onClick={() => { !token || token === "undefined" ? alert("Please Register or Sign in to view Factors") : null }}>
                  FACTORS
                </Link>}
            </li>
          </div>
          <div className="title">
            <li>
              <Link to="/">WORLD HAPPINESS INDEX</Link>
            </li>
          </div>
          <div className="rightHeader">
            <li>{token && token !== "undefined" ?
              <Link to="/" onClick={() => { localStorage.removeItem("token"); setTimeout(function () { window.location.reload(); }, 10) }}>LOG OUT</Link>
              : <Link to="/Register" onClick={() => { localStorage.removeItem("token") }}>SIGN IN</Link>}
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
}
