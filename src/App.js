import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar";
import Character from './components/Character';
import Pagination from './components/Pagination';

function App() {

  const [info, setInfo] = useState({});
  const [characters, setCharacters] = useState([]);

  const baseUrl="https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    fetchCharacters(baseUrl);
  }, [])
  
  const onPrevious = () =>{
    fetchCharacters(info.prev);
  }

  const onNext = () =>{
    fetchCharacters(info.next);
  }

  return (
    <>
      <Navbar brand="Rick And Morty"/>
      <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious}
        onNext={onNext}
        />
      <div className='container mt-2'>
        <Character qtyChars={characters}/>
      </div>
      <Pagination 
        prev={info.prev} 
        next={info.next} 
        onPrevious={onPrevious}
        onNext={onNext}
        />
    </>
  );
}

export default App;
