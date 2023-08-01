import React, { Fragment, useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../redux/modules/posts";

export default function Edit() {
  const { state } = useLocation();
  // console.log(state); ->selectedPost라는 객체가담김.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 리팩토링 useLocation으로 state 가져오기.
  // const posts = useSelector((state) => state.posts);
  // const { id } = useParams();
  // const selectedPost = posts.find((item) => {
  //   return item.id === id;
  // });
  const [title, setTitle] = useState(state?.selectedPost.title);
  const [body, setBody] = useState(state?.selectedPost.body);

  return (
    <Fragment>
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
            //선택한 포스트의 제목과 내용을 바꿔줘야함.
            const editedPost = {
              ...state.selectedPost,
              title,
              body,
            };
            dispatch(editPost(editedPost));
            // setPosts((posts) => {
            //   return posts.map((post) =>
            //     post.id === editedPost.id ? editedPost : post
            //   );
            // });
            navigate("/");

            //posts 에서editedPost랑 id 가 같은게 있으면 editedpost로 ,
            //아니면 post로 넣어서 setPosts에 넣어줌.
          }}
        >
          <div>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
              onChange={(e) => {
                setBody(e.target.value);
              }}
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
              backgroundColor: "orange",
              cursor: "pointer",
            }}
          >
            수정하기
          </button>
        </form>
      </Container>
    </Fragment>
  );
}
