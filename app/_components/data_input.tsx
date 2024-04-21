import React, { Dispatch, SetStateAction } from "react"
import {AnimatePresence, motion} from "framer-motion"
import { dataset } from "../page";

export default function DataInput({labels,onlyOneColorForDataset,data,setData,currentDataset,setCurrentDataset}:
  {
    labels:string[],
    onlyOneColorForDataset:boolean,
    data: dataset[],
    setData: Dispatch<SetStateAction<dataset[]>>,
    currentDataset: number,
    setCurrentDataset: Dispatch<SetStateAction<number>>
  }){
    const currentDatasetName = data[currentDataset].label;
    const setCurrentDatasetName = (str: string) =>{
      const newData = [...data];
      newData[currentDataset].label = str;
      setData(newData);
    }
    
    const createNewDataSet = () =>{
      if(data[currentDataset].label === "") {
        alert("Please add a label to this dataset first, you might get confused later!");
        return;
      }
      const newData:dataset[] = [...data,{data:[],label:"",backgroundColor:[],borderColor:[]}]
      setData(newData);
      setCurrentDataset(currentDataset+1);
    }
    return(
        <motion.div animate={{translateX: [100,0]}} transition={{duration:.5}} className="w-full h-[400px] p-1 inria overflow-auto relative bg-gradient-to-br from-gray-100/30 to-gray-300/90 hover:shadow-sm shadow-xl duration-300">
          <h2 
            className="text-xl p-3 relative top-0 left-0 after:absolute after:w-full after:h-full after:bg-gradient-to-br after:from-gray-200/20 after:to-gray-200/40 after:blur-md after:border-b after:border-gray-800 after:left-0 after:top-0 overflow-hidden z-30">
            Datasets
          </h2>

          <div className="w-full h-full p-5">
            <div className="flex flex-row w-fit gap-3">
              <button 
                disabled={currentDataset===0}
                onClick={()=>setCurrentDataset(currentDataset-1)}
                className="w-fit border disabled:bg-cyan-200 border-cyan-400 hover:bg-cyan-400 active:scale-90 duration-300 px-2 py-1"
              >
                &lt;
              </button>
              <button 
                onClick={()=>createNewDataSet()}
                className="border border-cyan-400 hover:bg-cyan-400 active:scale-90 duration-300 px-2 py-1"
              >
                Add new dataset
              </button>
              <button 
                disabled={currentDataset===data.length-1}
                onClick={()=>setCurrentDataset(currentDataset+1)}
                className="w-fit border disabled:bg-cyan-200 border-cyan-400 hover:bg-cyan-400 active:scale-90 duration-300 px-2 py-1"
              >
                &gt;
              </button>
            </div>
            <div className="grid grid-cols-2 my-5 gap-3">
              <p>Dataset name : </p>
              <input 
                type="text" 
                className="outline-none border border-transparent focus:border-gray-500 text-gray-950 bg-50 rounded-md duration-300 px-2 py-0.5" 
								name="ds" 
								id="ds" 
                value={currentDatasetName}
                onChange={(e)=>setCurrentDatasetName(e.target.value)}
              />

              {labels.map((label,index)=>
                <EachDataInput 
                  key={label} 
                  label={label} 
                  onlyOneColorForDataset={onlyOneColorForDataset}
                  currentDataset={currentDataset}
                  data={data}
                  index={index}
                  setData={setData}
                />)}
            </div> 
          </div>
        </motion.div>
    )
}

function EachDataInput({label,onlyOneColorForDataset,data,index,setData,currentDataset}:
  {
    label:string,
    onlyOneColorForDataset:boolean,
    index:number,
    data:dataset[],
    setData:Dispatch<SetStateAction<dataset[]>>,
    currentDataset: number
  }){
    const currentData = data[currentDataset].data[index] ? data[currentDataset].data[index] : 0;
    const currentColor = data[currentDataset].borderColor[index] ? data[currentDataset].borderColor[index] : "#000000";

    const setInputData = (str: string) =>{
      const newData = [...data];
      newData[currentDataset].data[index] = Number(str);
      setData(newData);
    }
    return(
      <div className="grid grid-cols-2 p-1">
        <p style={{color:onlyOneColorForDataset? "black" : currentColor}}>{label}</p>
        <input 
          type="number" 
          className="pl-1 outline-none border border-transparent rounded-md focus:border-gray-400 duration-300" 
          value={currentData} onChange={(e)=>setInputData(e.target.value)}/>
      </div>
    )
}