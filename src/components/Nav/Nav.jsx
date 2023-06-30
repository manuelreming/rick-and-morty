import styles from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";


export default function Nav ({onSearchRandom, onSearch, logOut})

{
    const location = useLocation();

    return(
     <nav className={styles.Nav}>
     <div className={styles.divName}>
     <Link to="/home"><button className={styles.btn}>Home</button></Link>
     <Link to="/about"><button className={styles.btn}>About</button></Link>
     <Link to="/favorites"><button className={styles.btn}>Favorites</button></Link>
     <button onClick={logOut} className={styles.btn}>Logout</button>
     </div>
    
       
    { location.pathname === "/home" && (<SearchBar onSearch = {onSearch}  onSearchRandom = {onSearchRandom}/> )
        
    } 
        
        </nav>
    
    );
}