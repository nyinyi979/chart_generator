import { Dispatch, SetStateAction } from "react";
import {AnimatePresence, motion} from "framer-motion"
import { dataset } from "../page";
export default function DataColor({onlyOneColorForDataset,toggleDatasetColorType,data,labels,currentDataset,setData}:
  {
    labels: string[],
    onlyOneColorForDataset:boolean,
    data: dataset[],
		setData: Dispatch<SetStateAction<dataset[]>>
    toggleDatasetColorType:(str: string)=>void,
		currentDataset: number
  }
){
		const currentBorderColor = data[currentDataset].borderColor[0] ? data[currentDataset].borderColor[0] : "#000000";
		const setBorderColor = (str: string) =>{
      const newData = [...data];
      newData[currentDataset].borderColor.length = 0;
      newData[currentDataset].borderColor[0] = str;
      setData(newData);
    }
		const currentDotColor = data[currentDataset].backgroundColor[0] ? data[currentDataset].backgroundColor[0] : "#000000";
    const setDotColor = (str: string) =>{
      const newData = [...data];
      newData[currentDataset].backgroundColor.length = 0;
      newData[currentDataset].backgroundColor[0] = str;
      setData(newData);
    }
    return(
        <motion.div animate={{translateX: [-100,0]}} transition={{duration:.5}} className="w-full h-[400px] p-1 inria overflow-auto relative bg-gradient-to-br from-gray-100/30 to-gray-300/90 hover:shadow-sm shadow-xl duration-300">
          <h2 
            className="text-xl p-3 relative top-0 left-0 after:absolute after:w-full after:h-full after:bg-gradient-to-bl after:from-gray-200/20 after:to-gray-200/40 after:blur-md after:border-b after:border-gray-800 after:left-0 after:top-0 overflow-hidden z-30">
            Data Color
          </h2>
          <div className="w-full h-full p-5">

            <div className="grid grid-cols-2 gap-3">
              <p>Only one color for this dataset : </p>
              <select 
                name="dataset" 
                id="datasetC" 
                defaultValue={onlyOneColorForDataset?"yes":"no"} 
                onChange={(e)=>toggleDatasetColorType(e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

						<AnimatePresence>
						{onlyOneColorForDataset?
              <>
                <motion.div className="col-span-2 grid grid-cols-2 my-3" animate={{scale:[.8,1],opacity:[.5,1]}}>
                  <div style={{color:currentBorderColor}} className="tooltip">
                    Lines color : 
                    <p className="tooltip_text">It is the border color(in Line chart - it will be line color)</p>
                  </div>
                  <input 
                    type="color" 
                    name="ds_color" 
                    id="ds_color" 
                    className="w-20 h-8 outline-none border border-gray-50 rounded-md" 
                    value={currentBorderColor}
                    onChange={(e)=>setBorderColor(e.target.value)}
                  />
                </motion.div>
                <motion.div className="col-span-2 grid grid-cols-2 my-3" animate={{scale:[.8,1],opacity:[.5,1]}}>
                  <div style={{color:currentDotColor}} className="tooltip">
                    Dot color : 
                    <p className="tooltip_text">It is the joint color of two line(in line chart) or background color</p>
                  </div>
                  <input 
                    type="color" 
                    name="ds_color" 
                    id="ds_color" 
                    className="w-20 h-8 outline-none border border-gray-50 rounded-md" 
                    value={currentDotColor}
                    onChange={(e)=>setDotColor(e.target.value)}
                  />
                </motion.div>
              </>
							:
              <motion.div className="col-span-2 grid grid-cols-2 my-3" animate={{scale:[.8,1],opacity:[.5,1]}}>
                {labels.map((label,index)=>
                  <EachColorInput 
                    key={label}
                    currentDataset={currentDataset}
                    data={data}
                    index={index}
                    label={label}
                    onlyOneColorForDataset={onlyOneColorForDataset}
                    setData={setData}
                  />)}
              </motion.div>
						}
            </AnimatePresence>
          </div>
        </motion.div>
    )
}
function EachColorInput({label,onlyOneColorForDataset,data,index,setData,currentDataset}:
  {
    label:string,
    onlyOneColorForDataset:boolean,
    index:number,
    data:dataset[],
    setData:Dispatch<SetStateAction<dataset[]>>,
    currentDataset: number
  }){
    const currentColor = data[currentDataset].borderColor[index] ? data[currentDataset].borderColor[index] : "#000000";

    const setColorData = (str: string) =>{
      const newData = [...data];
      newData[currentDataset].borderColor[index] = str;
      setData(newData);
    }
    return(
      <motion.div animate={{scale:[.8,1],opacity:[.8,1]}} className={`grid ${onlyOneColorForDataset? "grid-cols-2":"grid-cols-3"} p-1 bg`}>
        <p style={{color:onlyOneColorForDataset? "black" : currentColor}}>{label}</p>
        {onlyOneColorForDataset?
        <input type="color" />:
        <input type="color" value={currentColor} onChange={(e)=>setColorData(e.target.value)}/>}
      </motion.div>
    )
}
