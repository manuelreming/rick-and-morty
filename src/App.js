import './App.css'
import About from './Views/About.jsx/About';
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import  {useState} from "react";
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Detail from './Views/Detail/Detail.jsx'
import Form from './components/Form/Form';
import { useEffect } from 'react';
import Favorites from './components/Favorites/Favorites.jsx'


// const example = {
//   name: 'Morty Smith',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };

function App () {
const navigate = useNavigate();
 const[characters, setCharacters] = useState([]);
 const [access, setAccess] = useState(false);
 const EMAIL = 'mail@mail.com';
 const PASSWORD = 'Ejemplo123@';
 
 function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }
 useEffect(() => {
  !access && navigate('/');
}, [access]);

//  const handleSearch = (id) =>{
 
//   setCharacters([...characters,example]);

//  }
function onSearch(id) {
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
   .then((response) => response.json())
   .then((data) => {
     if (data.name) {
       const isCharacterRepeated = characters.some((character) => character.id === data.id);
       if (!isCharacterRepeated) {
         setCharacters((oldChars) => [...oldChars, data]);
       } else {
         window.alert('El personaje ya ha sido agregado anteriormente.');
       }
     } else {
       window.alert('No hay personajes con ese ID.');
     }
   });
}
const onSearchRandom = () => {
   const RANDOM = Math.floor(Math.random() * 826) + 1;

   const isCharacterRepeated = characters.some((character) => character.id === RANDOM);
   if (isCharacterRepeated) {
     window.alert('El personaje ya ha sido agregado anteriormente.');
     return;
   }
 
   fetch(`https://rickandmortyapi.com/api/character/${RANDOM}`)
     .then((response) => response.json())
     .then((data) => {
       setCharacters((oldChars) => [...oldChars, data]);
     });
}

const closeHandler = (id) =>{
  let deleted = characters.filter((character)=>character.id !== Number(id))
  setCharacters(deleted)
}
const logOut = () =>{
  setAccess(false);
}

const  location = useLocation ();

  return (

    <div className='App'>
  
       {location.pathname !== '/' && <Nav onSearchRandom = {onSearchRandom} logOut={logOut} onSearch = {onSearch} />}
      <Routes>
      <Route path= "/" element = {<Form login={login}/>} /> 
       <Route path= "/about" element = {<About/>} /> 
       <Route path= "/home" element = {<Cards characters={characters} onClose={closeHandler}/>} /> 
       <Route path= '/favorites' element = {<Favorites/>}/>
       <Route path="/detail/:id" element={<Detail/>} />  
       <Route path = '*' element = {""}/>
      </Routes>
      
       

      
       

        
     
     
      
    </div>
  )
}

export default App
