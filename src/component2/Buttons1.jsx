import { useContext } from 'react';
import './buttons1.css';
import { CalcContext } from '../Context';

function Buttons1({value}){
    let v = useContext(CalcContext)
    return (
        <div className='buttons_div'>
            <button type='button' onClick={()=> {
                  
                v.setVal(v.val + value )
            }}>{value}</button> 
        </div>
    )   
}

export default Buttons1;