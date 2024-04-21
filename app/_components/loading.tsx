export default function Loading(){
    return(
        <div className="flex w-full h-[400px] p-1 inria overflow-auto relative bg-gradient-to-br from-gray-100/30 to-gray-300/90 hover:shadow-sm shadow-xl duration-300 items-center justify-center">
            <div className="loader border-2 border-gray-950"></div>
        </div>
    )
}