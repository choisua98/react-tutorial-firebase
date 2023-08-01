//initialState
//Slice

import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
const initialState = [
  {
    id: shortid.generate(),
    title: "제목1",
    body: "내용1",
    author: "글쓴이1",
  },
  {
    id: shortid.generate(),
    title: "제목2",
    body: "내용2",
    author: "글쓴이2",
  },
  {
    id: shortid.generate(),
    title: "제목3",
    body: "내용3",
    author: "글쓴이3",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      return [...state, action.payload];
    },
    deletePost: (state, action) => {
      return state.filter((post) => {
        return post.id !== action.payload;
      });
    },
    editPost: (state, action) => {
      return state.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
});
export default postsSlice.reducer;
export const { addPost, deletePost, editPost } = postsSlice.actions;
