import React, { Dispatch, SetStateAction } from "react";
import {motion} from "framer-motion"
export default function RadarChartSVG({chosenCharts,setChosenCharts}:
  {
    chosenCharts: Set<"line"|"bar"|"polar"|"radar">,
    setChosenCharts: Dispatch<SetStateAction<Set<"line"|"bar"|"polar"|"radar">>>
  }){
    const [length, setLength] = React.useState(0);
		const [chosen, setChosen] = React.useState(chosenCharts.has("radar"));

    const toggleChosen = () =>{
      const newChart = new Set(chosenCharts);
      if(chosenCharts.has("radar")) {
        newChart.delete("radar");
        setChosen(false);
      } else {
        newChart.add("radar");
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
					viewBox="-25 -12 150 150" 
					fill="none" 
					onPointerEnter={()=>setLength(0)}
					onPointerLeave={()=>setLength(1)}
					xmlns="http://www.w3.org/2000/svg"
				>
          <path d="M25 81.25L50 118.75H100L125 81.25L75 31.25L25 81.25Z" stroke="#222222" strokeWidth="5"/>
          <motion.path animate={{pathLength:[length,1]}} d="M75 31.25V75" stroke="#222222" strokeWidth="5"/>
          <motion.path animate={{pathLength:[length,1]}} d="M75 68.75L25 81.25" stroke="#222222" strokeWidth="5"/>
          <motion.path animate={{pathLength:[length,1]}} d="M75 68.75L125 81.25" stroke="#222222" strokeWidth="5"/>
          <motion.path animate={{pathLength:[length,1]}} d="M75 68.75L50 118.75" stroke="#222222" strokeWidth="5"/>
          <motion.path animate={{pathLength:[length,1]}} d="M75 68.75L100 118.75" stroke="#222222" strokeWidth="5"/>
        </svg>
        Radar 
      </div>
    )
}