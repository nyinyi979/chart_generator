"use client"
import React, { Dispatch, SetStateAction } from "react";
import { Bar, Line, PolarArea, Radar } from "react-chartjs-2";
import { dataset } from "../page";
import { SwiperRef } from "swiper/react";
export default function SecondPage({chosenCharts,data,labels,currentIndex,swiper,setCurrentIndex}:{
	chosenCharts: Set<"line"|"bar"|"polar"|"radar">,
    data:dataset[],
    labels: string[],
    currentIndex: number,
    setCurrentIndex: Dispatch<SetStateAction<number>>,
    swiper: SwiperRef
}){

    const containerClass = "flex gap-3 flex-col w-[80%] h-fit mx-auto align-center justify-center p-1 inria relative bg-gradient-to-br from-gray-100/30 to-gray-300/90 hover:shadow-sm shadow-xl duration-300 rounded-md text-center text-2xl"
    return(
        currentIndex===0? "":
        <div className="w-full mx-auto px-10 flex flex-col gap-10">
            {chosenCharts.has("line")&&
            <div className={containerClass}>
                <Line 
                    data={{
                        datasets:data,
                        labels: labels
                    }}
                />
                Line chart
            </div>}
            {chosenCharts.has("bar")&&
            <div className={containerClass}>
                <Bar 
                    data={{
                        datasets:data,
                        labels: labels
                    }}
                />
                Bar chart
            </div>}
            {chosenCharts.has("polar")&&
            <div className={containerClass}>
                <PolarArea 
                    data={{
                        datasets:data,
                        labels: labels
                    }}
                />
                Polar chart
            </div>}
            {chosenCharts.has("radar")&&
            <div className={containerClass}>
                <Radar 
                    data={{
                        datasets:data,
                        labels: labels
                    }}
                />
                Radar chart
            </div>}

			<button 
				disabled={data[0].label===""||chosenCharts.size===0}
				onClick={()=>{swiper.swiper.slidePrev(1500); setCurrentIndex(0)}}
				className="col-span-2 my-5 block w-fit mx-auto border border-cyan-300 hover:bg-cyan-300 disabled:bg-cyan-200 disabled:cursor-not-allowed active:scale-90 duration-300 px-2 py-1">
				Modify dataset
			</button>
        </div>
    )
}