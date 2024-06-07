import { useState } from "react";
import clasess from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";

export default function PostList() {
  const [enterBody, setEnterBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function changeBodyHandler(e) {
    setEnterBody(e.target.value);
  }

  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }
  return (
    <>
      <NewPost
        onBodyChange={changeBodyHandler}
        onAuthorChange={changeAuthorHandler}
      />
      <ul className={clasess.posts}>
        <Post author={enteredAuthor} body={enterBody} />
        <Post author="Argretya" body="Harsena Argretya" />
      </ul>
    </>
  );
}
