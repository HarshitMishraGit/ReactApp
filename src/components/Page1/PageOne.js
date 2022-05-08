import React from 'react';
import { useState } from "react";

const PageOne = () => {
 
        const onclickhandler = () => {
            console.log("onclickhandler is called")
            const newText = text.toUpperCase();
            setText(newText)
        
        };
        const onchangehandler = (event) => {
            console.log("onchangehandler is called");
            setText(event.target.value)
        };
    
        const [text, setText] = useState("default text");
        return (
            <div className='flex flex-row justify-center'>
                <div className="block p-6 rounded-lg shadow-lg bg-white w-[1000px] ">
                    <h1 className="text-black text-left font-bold mb-3 text-3xl">Enter the text below</h1>
                    {/* <form className="w-full"> */}
                    <div className="form-group mb-6 ">
                        <textarea type="email" onChange={onchangehandler} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter text" rows={8} value={text} />
      
                    </div>
    
    
                    <button className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={onclickhandler}>Convert to Uppercase</button>
                    {/* </form> */}
                </div>
            </div>
        );
    }


export default PageOne;
