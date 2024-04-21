"use client"
import { useAnimate } from "framer-motion"
import React, { Dispatch, SetStateAction } from "react";
export default function BarChartSVG({chosenCharts,setChosenCharts}:
  {
    chosenCharts: Set<"line"|"bar"|"polar"|"radar">,
    setChosenCharts: Dispatch<SetStateAction<Set<"line"|"bar"|"polar"|"radar">>>
  }){
		const [scope, animate] = useAnimate();
		const [hover, setHover] = React.useState(false);
		const [chosen, setChosen] = React.useState(chosenCharts.has("line"));

		React.useEffect(()=>{
			animate("path",{pathLength:[0,1]},{duration:.5})
		},[]);
		React.useEffect(()=>{
			if(hover) animate("path",{pathLength:[0,1]},{duration:.5})
		},[hover])

    const toggleChosen = () =>{
      const newChart = new Set(chosenCharts);
      if(chosenCharts.has("bar")) {
        newChart.delete("bar");
        setChosen(false);
      } else {
        newChart.add("bar");
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
          viewBox="-35 -13 150 150" 
          fill="none" 
					ref={scope}
					onPointerEnter={()=>setHover(true)}
					onPointerLeave={()=>setHover(false)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.75 25H131.25H18.75ZM131.25 123C131.25 125.485 129.235 127.5 126.75 127.5H20.75C18.2647 127.5 16.25 125.485 16.25 123L21.25 122.5H129.25C130.355 122.5 131.25 122.5 131.25 122.5V123ZM20.75 127.5C18.2647 127.5 16.25 125.485 16.25 123V29.5C16.25 27.0147 18.2647 25 20.75 25H21.25C21.25 25 21.25 25.8954 21.25 27V122.5L20.75 127.5ZM131.25 25V125V25Z" fill="black"/>
          <path
						className={"bar"}
            d="M50 62.5L50 100" 
            stroke="#222222" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
          <path 
						className={"bar"}
            d="M75 75V100" 
						stroke="#222222" 
						strokeWidth="5" 
						strokeLinecap="round" 
						strokeLinejoin="round"/>
          <path
						className={"bar"}
						d="M100 50V100" 
						stroke="#222222" 
						strokeWidth="5" 
						strokeLinecap="round" 
						strokeLinejoin="round"/>
        </svg>
				Bar
			</div>
    )
}