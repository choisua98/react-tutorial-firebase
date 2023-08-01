import React, { useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "600px",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              if (!email) {
                alert("이메일을 입력해주세요 !");
              } else if (!password) {
                alert("비밀번호를 입력해주세요 !");
              } else if (!password2) {
                alert("비밀번호를 한번 더 입력해주세요 !");
              } else if (password !== password2) {
                alert("비밀번호를 확인해주세요 !");
              } else
                try {
                  const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                  );
                  console.log("user", userCredential.user);
                } catch (error) {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log("error with signUp", errorCode, errorMessage);
                }
              // } else {
              //   alert("비밀번호를 확인해주세요 !");
              // }
            }}
          >
            <div
              style={{
                width: "360px",
                marginBottom: "12px",
              }}
            >
              <input
                placeholder="이메일"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid lightgrey",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div
              style={{
                width: "360px",
                marginBottom: "12px",
              }}
            >
              <input
                placeholder="비밀번호"
                type="password"
                value={password}
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid lightgrey",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div
              style={{
                width: "360px",
                marginBottom: "12px",
              }}
            >
              <input
                placeholder="비밀번호 확인"
                type="password"
                name="password2"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
                required
                style={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid lightgrey",
                  padding: "8px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div
              style={{
                width: "360px",
                marginBottom: "12px",
              }}
            >
              <button
                style={{
                  width: "100%",
                  border: "none",
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "#FF6969",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                회원가입하기
              </button>
            </div>
            <div
              style={{
                width: "360px",
              }}
            >
              <button
                type="button"
                //submit속성 해제
                onClick={() => {
                  navigate("/login");
                }}
                style={{
                  width: "100%",
                  border: "none",
                  padding: "12px",
                  borderRadius: "6px",
                  backgroundColor: "#78C1F3",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                로그인하러 가기
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
