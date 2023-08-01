import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        // 로그인 된 상태일 경우
        setIsLoggedIn(true);
      } else {
        // 로그아웃 된 상태일 경우
        setIsLoggedIn(false);
      }
    });
  }, []);
  console.log(auth);
  return (
    <header
      style={{
        height: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px 0 24px",
      }}
    >
      <h1
        style={{
          color: "gray",
          cursor: "pointer",
        }}
      >
        <FaHome
          onClick={() => {
            navigate("/");
          }}
        />
      </h1>
      <div
        style={{
          display: "flex",
          gap: "12px",
        }}
      >
        {isLoggedIn ? (
          <div>
            <div>{auth.email}</div>

            <button
              onClick={async (e) => {
                e.preventDefault();
                await signOut(auth);
              }}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
      </div>
    </header>
  );
}
