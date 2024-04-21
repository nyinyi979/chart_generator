import React, { Dispatch, SetStateAction } from "react";
import { animate } from "framer-motion";

export default function LineChartSVG({chosenCharts,setChosenCharts}:
  {
    chosenCharts: Set<"line"|"bar"|"polar"|"radar">,
    setChosenCharts: Dispatch<SetStateAction<Set<"line"|"bar"|"polar"|"radar">>>
  }){
    const [hover, setHover] = React.useState(false);
    const [chosen, setChosen] = React.useState(chosenCharts.has("line"));
    React.useEffect(()=>{
			const path = document.getElementById("lc_path");
      animate(path!,{pathLength:[0,1]},{duration:.5})
    },[]);
    React.useEffect(()=>{
			const path = document.getElementById("lc_path");
      animate(path!,{pathLength:[0,1]},{duration:.5})
    },[hover])

    const toggleChosen = () =>{
      const newChart = new Set(chosenCharts);
      if(chosenCharts.has("line")) {
        newChart.delete("line");
        setChosen(false);
      } else {
        newChart.add("line");
        setChosen(true);
      }
      setChosenCharts(newChart);
    }
return(
  <div
    onClick={toggleChosen}
    className={`${chosen?"border-cyan-400":"border-transparent"} border duration-300 text-center`}
  >
    <svg  
      width="150" height="150" 
      viewBox="-30 -15 150 150" 
      fill="none" 
      onPointerEnter={()=>setHover(true)}
      onPointerLeave={()=>setHover(false)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id={"lc_path"} d="M42.5 106.5L60.9025 80.349C61.2771 79.8167 61.8873 79.5 62.5382 79.5L87.3883 79.5C87.7638 79.5 88.1076 79.2897 88.2786 78.9555L98.9011 58.1934C98.9663 58.0659 99.0581 57.954 99.1702 57.8651L125.5 37"  stroke="#131313" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.75 18.75V128.05C18.75 129.17 18.75 129.73 18.968 130.158C19.1597 130.534 19.4657 130.84 19.842 131.032C20.2698 131.25 20.8299 131.25 21.95 131.25H131.25" stroke="#131313" strokeWidth="5" strokeLinecap="round"/>
    </svg>
    Line
  </div>
    )
}