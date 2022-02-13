import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Info from './components/Info';
import Genres from './components/Genres';
import {Routes,Route} from 'react-router-dom';
function App() {
const [data,setData] = useState([]);

useEffect(()=>{
  for(let i=0;i<5;i++){
    axios('https://anime5311.herokuapp.com/api/popular/'+i)
    .then((res)=>{
      // console.log(res.data);
      res.data.results.forEach((item)=>{
        setData(prev=>[...prev,item]);
      })
      
      // console.log(data)
    })
  }
},[])
  return (
    <div className="App">
        <Navbar
        data={data}
        setData={setData}/>
      <Genres 
        setData={setData}/>
      <Routes>
     <Route path='/' exact element={<Main data={data}/>} />
     <Route path='/info/:id' exact element={<Info />} />
      </Routes>
    </div>  

  );
}

export default App;