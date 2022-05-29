import { Link } from "react-router-dom";
import styles from "../styles/Tweeting_style/ExplorePage.module.css"

import { AiOutlineSearch } from 'react-icons/ai';
import Nav from "./NavBar/Nav";


function ExplorePage() {

  return (
    <>
    <Nav/>
    <div className={styles["explore-container"]}>
        <ul className={styles["explore-links"]}>
            <li className={styles.active}><Link to = "">Top</Link></li>
            <li> <Link to = "">Latest</Link></li>
            <li> <Link to = "">People</Link></li>
            <li> <Link to = "">Media</Link></li>
        </ul>
      
        <div className={styles["explore-body"]}>
          <div className = {styles["search-field"]}>
            <p className ={styles["search-icon"]}><AiOutlineSearch/></p>
            <textarea placeholder="Search"></textarea>
            <button>Search</button>
          </div>
        <div className={styles["explore-content"]}>
        Body of explore
        </div>
        </div>
    </div>
    </>
  )
}

export default ExplorePage