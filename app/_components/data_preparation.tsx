"use client"
import {AnimatePresence, motion} from "framer-motion";
import React, { Dispatch,SetStateAction } from "react";
export default function DataType({labels,setLabels}:
  { labels:string[],
    setLabels:Dispatch<SetStateAction<string[]>>
  }){
    const [currentLabel, setCurrentLabel] = React.useState("");
    const addNewValue = () =>{
      const newArray = [...labels,currentLabel];
      setLabels(newArray);
      setCurrentLabel("");
    }
    const changeLabel = (str: string) =>{
        if(str==="months") setLabels(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]);
        else if(str==="days") setLabels(["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"])
        else setLabels([])
    }
    return(
        <motion.div animate={{translateX: [-100,0]}} transition={{duration:.5}} className="w-full h-[400px] p-1 inria overflow-auto relative bg-gradient-to-br from-gray-100/30 to-gray-300/90 hover:shadow-sm shadow-xl duration-300">
          <h2 
            className="text-xl p-3 relative top-0 left-0 after:absolute after:w-full after:h-full after:bg-gradient-to-tl after:from-gray-200/20 after:to-gray-200/40 after:blur-md after:border-b after:border-gray-800 after:left-0 after:top-0 overflow-hidden z-30">
            Data Preparation
          </h2>
          <div className="w-full h-full p-5">

            <div className="grid grid-cols-2">
              <p>Chose built in labels : </p>
              <select name="label" id="label" onChange={(e)=>changeLabel(e.target.value)}>
                <option value="months">Months</option>
                <option value="days">Days</option>
                <option value="custom">Clear</option>
              </select>
            </div>
            <div className="grid grid-cols-2 my-4">
              <p>Labels (Titles - {labels.length}) for x : </p>
              <input 
                value={currentLabel}
                onKeyDownCapture={(e)=>{
                  if(e.key==="Enter") addNewValue();
                }}
                onChange={(e)=>setCurrentLabel(e.target.value)}
                className="w-full mx-auto outline-none border border-transparent focus:border-gray-500 text-gray-950 bg-50 rounded-md duration-300 px-2" type="text" name="x_label" id="x_label" />
            </div>
            
            Labels
            <div className="flex flex-row flex-wrap gap-2 my-4">        
              <AnimatePresence>
              {labels.map((label,index)=><EachLabel key={index} index={index} label={label} labels={labels} setLabels={setLabels}/>)}
              </AnimatePresence>
            </div>

          </div>
        </motion.div>
    )
}

function EachLabel({label,index,labels,setLabels}:{label:string,index:number,labels:string[],setLabels:Dispatch<SetStateAction<string[]>>}){

    const removeLabel = () =>{
      const newArray = [...labels];
      for(var i=index; i<labels.length; i++){
        newArray[i] = newArray[i+1];
      }
      newArray.length--;
      setLabels(newArray);
    }
    
    return(
        <motion.div
          animate={{scale:[.8,1]}} 
          exit={{scale:[1,0]}}
          transition={{type:"spring",bounce:.5}} 
          className="flex flex-row gap-3 px-1 py-1 border border-gray-300 hover:border-gray-400 duration-300 rounded-md"
        >
          <p>{label}</p>
          <button 
            onClick={removeLabel} 
            className="w-6 h-6 mx-auto text-sm border border-red-300 hover:bg-red-500 duration-200 rounded-md"
          >
            x
          </button>
        </motion.div>
    )
}