import styles from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards(props) {
   

   const { characters, onClose } = props;
   return (<div className={styles.divCards}>
      {characters.map((character, index) =>  <Card key = {index} onClose = {onClose}
      character = {character}/>)}
         </div>);
         

}