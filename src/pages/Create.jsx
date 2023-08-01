import React, { useState } from "react";

import Header from "../common/Header";
import Container from "../common/Container";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { addPost } from "../redux/modules/posts";

export default function Create() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const navigate = useNavigate("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const onBodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <form
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            const newPost = {
              id: shortid.generate(),
              title,
              body,
              author: "",
            };
            dispatch(addPost(newPost));
            // setPosts([...posts, newPost]);
            setTitle("");
            setBody("");
            navigate("/");
          }}
        >
          <div>
            <input
              value={title}
              onChange={onTitleChangeHandler}
              placeholder="제목"
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              height: "400px",
            }}
          >
            <textarea
              value={body}
              onChange={onBodyChangeHandler}
              placeholder="내용"
              style={{
                resize: "none",
                height: "100%",
                width: "100%",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "12px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            style={{
              width: "100%",
              height: "40px",
              border: "none",
              color: "white",
              borderRadius: "12px",
              backgroundColor: "skyblue",
              cursor: "pointer",
            }}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
