import { Dispatch, SetStateAction } from "react"
import { dataset } from "../page"
import DataType from "./data_preparation"
import dynamic from "next/dynamic"
import Loading from "./loading"
import { SwiperRef } from "swiper/react"
import DataColor from "./data_color"
import DataInput from "./data_input"
import ChooseCharts from "./choose_chart"


export default function FirstPage({chosenCharts,currentDataset,data,labels,datasetColorType,toggleDatasetColorType,setChosenCharts,setCurrentDataset,setData,setLabels,swiper,setCurrentIndex}:{
	labels: string[],
	setLabels: Dispatch<SetStateAction<string[]>>
	currentDataset: number,
	setCurrentDataset: Dispatch<SetStateAction<number>>,
	data: dataset[],
	setData: Dispatch<SetStateAction<dataset[]>>,
	datasetColorType: boolean,
	toggleDatasetColorType: (str: string)=>void,
	chosenCharts: Set<"line"|"bar"|"polar"|"radar">
	setChosenCharts: Dispatch<SetStateAction<Set<"line"|"bar"|"polar"|"radar">>>,
	swiper: SwiperRef,
    setCurrentIndex: Dispatch<SetStateAction<number>>
}){
    return(
		<div className="grid lg:grid-cols-2 grid-cols-1 gap-8 px-10 pb-20">
			<DataType
				labels={labels} 
				setLabels={setLabels} 
			/>
			<DataInput
				labels={labels} 
				currentDataset={currentDataset}
				setCurrentDataset={setCurrentDataset}
				onlyOneColorForDataset={datasetColorType}
				data={data}
				setData={setData}
			/>
			<DataColor
				labels={labels}
				onlyOneColorForDataset={datasetColorType}
				toggleDatasetColorType={toggleDatasetColorType}
				data={data}
				currentDataset={currentDataset}
				setData={setData}
			/>
			<ChooseCharts
				chosenCharts={chosenCharts}
				setChosenCharts={setChosenCharts}
			/>
			<button 
				disabled={data[0].label===""||chosenCharts.size===0}
				onClick={()=>{swiper.swiper.slideNext(1500); setCurrentIndex(1)}}
				className="lg:col-span-2 block w-fit mx-auto border border-cyan-300 hover:bg-cyan-300 disabled:bg-cyan-200 disabled:cursor-not-allowed active:scale-90 duration-300 px-2 py-1">
				See the charts
			</button>
		</div>
    )
}