import { Link } from "react-router-dom";
import styles from "../styles/Tweeting_style/Bookmark.module.css"
import Nav from "./NavBar/Nav";


function BookMarksPage() {

  return (
    <>
    <Nav/>
    <div className={styles["bookmark-container"]}>
       
        <ul className={styles["bookmark-links"]}>
            <li className={styles.active}><Link to = "">Tweets</Link></li>
            <li> <Link to ="">Tweets & replay</Link></li>
            <li> <Link to ="">Media</Link></li>
            <li> <Link to ="">Likes</Link></li>
        </ul>
        <div className={styles["bookmark-body"]}>
        Body of Bookmarks
        </div>
    </div>
    </>
  )
}

export default BookMarksPage