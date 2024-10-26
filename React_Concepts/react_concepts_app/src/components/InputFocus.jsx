import { useRef } from "react";

const InputFocus = () => {
    const inputRef = useRef(null)

    const focusInput = () =>{
        inputRef.current.focus()
    }

    return ( 
        <div>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
     );
}
 
export default InputFocus;
