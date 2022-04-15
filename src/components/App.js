import React, { useState } from 'react'
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {
  const [content,setContent]=useState("hello world");
  const [padding,setPadding]=useState(5);
  const [size,setSize]=useState(10);
  return (
    <div id="main">
      <div>
        Content<input type="text" value={content} id="contentInput" onChange={(e)=>{
           setContent(e.target.value);
        }}></input>
        Padding<input type="number" value={padding} id="paddingInput" onChange={(e)=>{setPadding(e.target.value)}}></input>
        Font Size<input type="number" value={size} id="fontSizeInput" onChange={(e)=>{ setSize(e.target.value)
        }}></input>
      </div>
       <Preview fontSize={size} content={content} padding={padding}/>
    </div>
  )
}


export default App;
