import './App.css';
import { CalcContext } from './Context';
import Input from './component1/Input';
import Buttons1 from './component2/Buttons1';
import Buttons2 from './component3/Buttons2';
import { useState } from 'react';



function App() {

  const [val,setVal] = useState("")

  const buttons1_arr = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    ".",
    "0",
    '00'
  ];

  const buttons1 = buttons1_arr.map((e) => <Buttons1 key={e} value={e} />); 

  const buttons2_arr_pt1 = [
    "*",
    "-",
    "+",
    "="
  ]

  const buttons2_arr_pt2 = [
    "C",
    "<",
    "%",
    "/"
  ]

  const buttons2_pt1 = buttons2_arr_pt1.map((e) => <Buttons2  value2={e} />);

  const buttons2_pt2 = buttons2_arr_pt2.map((e) => <Buttons2 value2={e} />);

  return (
    <CalcContext.Provider value={{val:val,setVal:setVal}}>
    <div className="App">
    <div className='h1_div'><h1>Calculator</h1></div>
      <form className='form'>
        <Input />
        <hr />
        <div className='div_buttons1'>
          {buttons1}
        </div>
        <div className='group1_div'>
          {buttons2_pt1}
        </div>
        <div className='group2_div'> 
          {buttons2_pt2}
        </div>
      </form>
    </div>
    </CalcContext.Provider>
  );
}

export default App;
