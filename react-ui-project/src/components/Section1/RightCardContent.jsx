
const RightCardContent = (props) => {
    // console.log(props.clr)
  return (
   <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
            <h2 className="bg-white h-12 w-12 text-xl rounded-full flex justify-center items-center">{props.idx+1}</h2>
            <div>
                <p className="text-xl leading-relaxed text-white mb-14">{props.intro}</p>
            <div className="flex justify-between">
                <button className={`text-white font-bold px-8 py-2 rounded-full ${props.clr}`}>{props.tag}</button>
                <button className={`text-white font-medium px-4 py-3 rounded-full ${props.clr}`}><i className="ri-arrow-right-line"></i></button>
            </div>
            </div>           
        </div>
  )
}

export default RightCardContent
