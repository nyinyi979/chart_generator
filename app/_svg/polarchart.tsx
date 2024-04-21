import {motion} from "framer-motion"
import React, { Dispatch, SetStateAction } from "react";
export default function PolarChartSVG({chosenCharts,setChosenCharts}:
  {
    chosenCharts: Set<"line"|"bar"|"polar"|"radar">,
    setChosenCharts: Dispatch<SetStateAction<Set<"line"|"bar"|"polar"|"radar">>>
  }){
    const [scale, setScale] = React.useState(0);
		const [chosen, setChosen] = React.useState(chosenCharts.has("line"));

    const toggleChosen = () =>{
      const newChart = new Set(chosenCharts);
      if(chosenCharts.has("polar")) {
        newChart.delete("polar");
        setChosen(false);
      } else {
        newChart.add("polar");
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
					viewBox="-25 -10 150 150" 
					fill="none" 
					onPointerEnter={()=>setScale(0)}
					onPointerLeave={()=>setScale(1)}
					xmlns="http://www.w3.org/2000/svg"
				>
          <motion.path animate={{scale:[scale,1]}} id="pc_path_" fillRule="evenodd" clipRule="evenodd" d="M28.1081 89.1167C27.6382 89.2426 27.4033 89.3055 27.3007 89.494C27.1982 89.6824 27.2719 89.9107 27.4193 90.3672C29.9864 98.3169 34.5119 105.518 40.6043 111.292C47.618 117.94 56.4078 122.413 65.9103 124.169C75.4128 125.926 85.2208 124.892 94.1476 121.191C103.074 117.49 110.738 111.282 116.21 103.317C121.683 95.3527 124.73 85.9729 124.983 76.3127C125.236 66.6525 122.685 57.1259 117.637 48.8855C112.589 40.645 105.262 34.0439 96.5411 29.8806C88.1214 25.8611 78.7514 24.2804 69.4914 25.3069C69.0275 25.3583 68.7956 25.384 68.6659 25.5493C68.5363 25.7146 68.5671 25.9492 68.6287 26.4185L73.5108 63.646L76.3711 74.3211L76.3737 74.3305C76.3861 74.3755 76.4278 74.5273 76.4473 74.678C76.474 74.8854 76.4906 75.2929 76.2451 75.7181C75.9997 76.1432 75.6384 76.3326 75.4455 76.4131C75.3055 76.4716 75.1534 76.5113 75.108 76.5231L75.1078 76.5232L75.0984 76.5257L28.1081 89.1167Z" fill="#D9D9D9"/>
          <path d="M59.0826 15.5956C58.9602 15.1387 58.899 14.9103 58.7168 14.8071C58.5346 14.7038 58.3097 14.7679 57.86 14.8962C50.2935 17.0539 43.1994 20.6219 36.9524 25.4154C30.4409 30.4119 24.9772 36.642 20.8734 43.75C16.7696 50.858 14.106 58.7047 13.0347 66.8421C12.0069 74.6489 12.464 82.5765 14.3785 90.2082C14.4923 90.6618 14.5492 90.8886 14.7298 90.9948C14.9103 91.101 15.1388 91.0398 15.5956 90.9174L74.0341 75.2588C74.4894 75.1368 74.7171 75.0758 74.8206 74.8964C74.9242 74.7171 74.8632 74.4894 74.7412 74.0341L59.0826 15.5956Z" fill="#131313"/>
        </svg>
        Polar Area
			</div>
    )
}