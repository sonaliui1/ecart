import React, {useState, useEffect} from "react";
const SearchForm = () => {
  const [searchText, setSearchText] = useState('');
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState('red');
  // useEffect(()=>{
  //   setInterval(updateTheme, 2000)
  // },[]);
  // const updateTheme = () =>{
  //   console.log('Theme: ' +  theme);
  //   if(theme==='red'){
  //     setTheme('blue');
  //   }else if(theme==='blue'){
  //     setTheme('green')
  //   }else if(theme==='green'){
  //     setTheme('red');
  //   }
  // }
  const handleOnChange = (e) =>{
    if(e.target.id!=='toggle'){
      setSearchText(e.target.value);
    }else {
      setToggle(!toggle);
    }
  } 
  const showText = () =>{
    setShow(!show);
  }
  const handleOnSelect = (e) =>{
    console.log(e);
  }
  return (
    <div>
      <h4>Search Form</h4>
      <div>
        <input type='text' name='searchText' id='serachText' onChange={handleOnChange}/> 
        <button onClick={showText} >Show Hide Text</button>
      </div>
      {toggle && <div>
        <button onClick={()=>{setTheme('red')}} style={{color:'red'}}>Red</button>
        <button onClick={()=>{setTheme('blue')}} style={{color:'blue'}}>Blue</button>
        <button onClick={()=>{setTheme('green')}} style={{color:'green'}}>green</button>
      </div>}
      <div>
        <input type='checkbox' name="toggle" id="toggle" onChange={handleOnChange}/>
      </div>
      <div>
       <select onChange={handleOnSelect}>
        <option value='red'>Red</option>
        <option value='blue'>Blue</option>
        <option value='green'>Green</option>
       </select>
      </div>
      <h3 style={{display: show?'block':'none', color:theme}}>{searchText}</h3>
    </div>
  )
};
export default SearchForm;
