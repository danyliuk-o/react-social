// import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
// import {render} from "@testing-library/react";


let state = {
  postsData: [
    { id: 1, message: "Hello world!", likesCount: 12 },
    { id: 2, message: "Hello world!2", likesCount: 5 },
    { id: 3, message: "Hello world!2", likesCount: 11 },
    { id: 4, message: "Hello world!2", likesCount: 4 },
    { id: 5, message: "Hello world!2", likesCount: 8 },
  ],
};

it('posts length should be increase', () => {
  // 1. default data
  let action = addPostActionCreator('It-kamasutra')
  // 2. action
  let newState = profileReducer(state, action)
  //3. expectation
  expect(newState.postsData.length).toBe(6)
});

it('posts length should be decrease', () => {
  // 1. default data
  let action = deletePost(2)
  // 2. action
  let newState = profileReducer(state, action)
  //3. expectation
  expect(newState.postsData.length).toBe(4)
});

