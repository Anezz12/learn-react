import React from "react";

import classes from "./NewPost.module.css";

export default function NewPost({ onBodyChange, onAuthorChange }) {
  return (
    <div>
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Your Text </label>
          <textarea id="body" rows={3} onChange={onBodyChange}></textarea>
        </p>

        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" required onChange={onAuthorChange} />
        </p>
      </form>
    </div>
  );
}
