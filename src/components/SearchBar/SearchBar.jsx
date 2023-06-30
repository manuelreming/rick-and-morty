import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch,onSearchRandom}) {
   const [id, setId] = useState("");

   const changeHandler = (e) =>{
   e.preventDefault();
   let input = e.target.value;
   setId(input)
   }
 
   return (
      <div className={styles.divSearch}>
         <input placeholder="Type a number" className={styles.inputSearch} type='search' value={id}  onChange={changeHandler}/>
         <button className={styles.search}  onClick={()=>onSearch(id)} >Search</button> 
         <button className={styles.search} onClick={onSearchRandom}>Random</button>
         
      </div>
   );
}
