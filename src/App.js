import React,{useState,useEffect} from 'react';
import {Header,CharacterGrid,Search} from './components'
import axios from 'axios'
import './App.css';

function App() {
  const [items,setItems] = useState([]);
  const [isLoading,setIsLoding] = useState(true);
  const [text,setText] = useState('')


  useEffect(()=>{
    const fetchData = async ()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${text}`)
      setItems(result.data)
      setIsLoding(false)
    }

    fetchData()
    console.log(items);
  },[text])



  return (
    <div className="container">
      <Header />
      <Search text={text} setText={setText}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
