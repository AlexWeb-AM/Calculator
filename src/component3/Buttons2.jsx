import { useContext } from "react";
import "./buttons2.css";
import { CalcContext } from "../Context";


function Buttons2({value2}) {
    const operators = [
        "*",
        "-",
        "+",
        "="
    ]

    let v = useContext(CalcContext)

    return (
        <button type="button" onClick={()=> {
            if (value2 === "="){
                let last_element = v.val.slice(-1)
                if (!operators.includes(last_element)){
                    v.setVal(String(eval(v.val)))   
                }
                else {
                    alert("ERROR")
                }
            }
            else if (value2 === "C"){
                v.setVal('')
            }
            else if (value2 === '<') {
                v.setVal(v.val.slice(0, -1));
            }
            
            else {
                let last_element = v.val.slice(-1)
                
                if (!operators.includes(last_element)){
                    v.setVal(v.val + value2)
                }
            }
        }}>{value2}</button>
     )
}


export default Buttons2;