import claess from "./MainHeader.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";

export default function MainHeader({ onCreatePost }) {
  return (
    <header className={claess.header}>
      <h1 className={claess.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={claess.button} onClick={onCreatePost}>
          <MdMessage size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}
