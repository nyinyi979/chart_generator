import { Dispatch, SetStateAction } from "react";
import {motion} from "framer-motion";
import LineChartSVG from "../_svg/linechart";
import BarChartSVG from "../_svg/barchart";
import PolarChartSVG from "../_svg/polarchart";
import RadarChartSVG from "../_svg/radarchart";

export default function ChooseCharts({chosenCharts,setChosenCharts}:{
  chosenCharts: Set<"line"|"bar"|"polar"|"radar">,
  setChosenCharts: Dispatch<SetStateAction<Set<"line"|"bar"|"polar"|"radar">>>
}){
    return(
        <motion.div animate={{translateX: [100,0]}} transition={{duration:.5}} className="w-full h-[400px] p-1 inria overflow-auto relative bg-gradient-to-br from-gray-100/30 to-gray-300/90 hover:shadow-sm shadow-xl duration-300">
          <h2 
            className="text-xl p-3 relative top-0 left-0 after:absolute after:w-full after:h-full after:bg-gradient-to-br after:from-gray-200/20 after:to-gray-200/40 after:blur-md after:border-b after:border-gray-800 after:left-0 after:top-0 overflow-hidden z-30">
            Choose charts
          </h2>
					<div className="grid xl:grid-cols-3 grid-cols-2 py-2 gap-2">
            <LineChartSVG chosenCharts={chosenCharts} setChosenCharts={setChosenCharts}/>
            <BarChartSVG chosenCharts={chosenCharts} setChosenCharts={setChosenCharts}/>
            <PolarChartSVG chosenCharts={chosenCharts} setChosenCharts={setChosenCharts}/>
            <RadarChartSVG chosenCharts={chosenCharts} setChosenCharts={setChosenCharts}/>
					</div>
        </motion.div>
    )
}