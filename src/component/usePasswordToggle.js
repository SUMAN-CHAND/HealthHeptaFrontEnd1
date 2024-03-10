import React, { useState } from 'react'
import { FaEye,FaEyeSlash } from "react-icons/fa";
function usePasswordToggle() {
    const [visible,setVisiblity] = useState(false);
    const Icon = visible ? <FaEye onClick={()=>setVisiblity(visible=>!visible)} /> : <FaEyeSlash onClick={()=>setVisiblity(visible=>!visible)}/>
    const InputType = visible ? "text" : "password"
  return [InputType,Icon]
} 
export default usePasswordToggle
