import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import styles from './Detail.module.css'
export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.mainDiv}>
      <div>
        <h1 className={styles.DetailH1}>{character.name}</h1>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <h2 className={styles.DetailH2}>STATUS: {character.status}</h2><br />
        <h2 className={styles.DetailH2}>SPECIE: {character.species}</h2><br />
        <h2 className={styles.DetailH2}>GENDER: {character.gender}</h2><br />
        <h2 className={styles.DetailH2}>ORIGIN: {character.origin?.name}</h2>
      </div>

<Link to={'/home'}><button className={styles.btn}>HOME</button></Link>
    </div>
  );
}
