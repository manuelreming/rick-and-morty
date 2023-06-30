import styles from './Card.module.css'
import {Link} from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions'
import { connect } from 'react-redux';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';



export  function Card(props) {

   const {character, onClose, addFav, removeFav, myFavorites} = props;

   const [isFav, setIsFav] = useState (false);
     useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const {pathname} = useLocation ()

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         removeFav(character.id);
      }else{
         setIsFav(true);
         addFav(character)
      }
   };
 

   return (
      <div className={styles.divCard}>
         {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
         {pathname === '/home' &&
            <button className={styles.buttonClose} onClick={()=>{onClose(character.id)}}>X </button>
         }
         
         <Link to={`/detail/${character.id}`}><h2 className={styles.h2Name}>{character.name}</h2></Link>
         <h2 className={styles.h2Species}>{character.species}</h2>
         <h2 className={styles.h2Gender}>{character.gender}</h2>
         <img className={styles.img} src={character.image} alt={character.name} /> 
      </div>
   );
}

 export const mapDispatchToProps = (dispatch) => {

   return{
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
   }
   
   }
}

export const mapStateToProps = (state) =>{
   return {
      myFavorites: state.myFavorites
   }
}
export default connect(null, mapDispatchToProps) (Card);
 