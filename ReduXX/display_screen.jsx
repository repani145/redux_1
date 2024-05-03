import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const KKK=()=>{
    const inputReff = useRef(0)
    console.log(inputReff.current.value) //input
    const diss = useDispatch()

    const data = useSelector(preData=>preData)  //[]
    
    const OOK=()=>{
        const action={
            type:'addFruit',
            payload:inputReff.current.value
        }
        diss(action)
    }

    return(
        <>  
            <input 
                ref={inputReff}
                type="text"
            />
            <button onClick={OOK}>add new fruit</button>
            {
                data.map(val=><h1>{val}</h1>)
            }
        </>
    )
}

export default KKK;