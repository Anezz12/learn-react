import { useState } from "react";
import clasess from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostList() {
  const [enterBody, setEnterBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function changeBodyHandler(e) {
    setEnterBody(e.target.value);
  }

  function changeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={changeBodyHandler}
            onAuthorChange={changeAuthorHandler}
          />
        </Modal>
      )}

      <ul className={clasess.posts}>
        <Post author={enteredAuthor} body={enterBody} />
        <Post author="Argretya" body="Harsena Argretya" />
      </ul>
    </>
  );
}
