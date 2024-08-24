import { useContext } from 'react';
import './input.css';
import { CalcContext } from '../Context';

function Input() {

    let v = useContext(CalcContext)

    return (
        <div className='input_div'>
            <input value={v.val}   type="text" className='input'/>
        </div>
    )
}

export default Input;