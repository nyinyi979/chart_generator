"use client"
import "chart.js/auto"
import React from "react";
import FirstPage from "./_components/first_page";
import SecondPage from "./_components/second_page";
import {Swiper,SwiperSlide,SwiperRef} from "swiper/react";
import "swiper/css"

export default function Home() {
  const [data, setData] = React.useState<dataset[]>([{
    data: [10,20,40,50,70,100,880,300,420,230,322,330,550],
    label: "Sample",
    backgroundColor: ["#000000"],
    borderColor: ["#000000"]
  }]);
  const [labels, setLabels] = React.useState<string[]>(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"])
  const [datasetColorType, setDatasetColorType] = React.useState(true);
  const [currentDataset, setCurrentDataset] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [chosenCharts, setChosenCharts] = React.useState<Set<"line"|"bar"|"polar"|"radar">>(new Set());

  const swiper = React.useRef<SwiperRef>(null);
  React.useEffect(()=>{
    window.onpopstate = function(e) { e.preventDefault(); alert("Your work will be lost.")};
  },[])
  
  const toggleDatasetColorType = (str:string) =>{
    if(str==="yes") setDatasetColorType(true);
    else setDatasetColorType(false);
  }
  return (
    <div>
      <h1 className="text-center text-3xl font-bold inria-bold py-4">Chart Generator</h1>
      <Swiper
        slidesPerView={1}
        allowTouchMove={false}
        ref={swiper}
      >
        <SwiperSlide>
          <FirstPage 
            chosenCharts={chosenCharts}
            currentDataset={currentDataset}
            data={data}
            datasetColorType={datasetColorType}
            labels={labels}
            setChosenCharts={setChosenCharts}
            setCurrentDataset={setCurrentDataset}
            setData={setData}
            setLabels={setLabels}
            toggleDatasetColorType={toggleDatasetColorType}
            swiper={swiper.current!}
            setCurrentIndex={setCurrentIndex}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SecondPage 
            data={data}
            chosenCharts={chosenCharts}  
            labels={labels}
            currentIndex={currentIndex}
            swiper={swiper.current!}
            setCurrentIndex={setCurrentIndex}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export interface dataset {
    data: number[],
    label: string,
    backgroundColor: string[],
    borderColor: string[]
}
