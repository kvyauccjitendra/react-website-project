
const RightCardContent = () => {
  return (
   <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
            <h2 className="bg-white h-12 w-12 text-xl rounded-full flex justify-center items-center">01</h2>
            <div>
                <p className="text-xl leading-relaxed text-white mb-14">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est veniam vel sed ab distinctio quod nobis reiciendis minus sequi assumenda?</p>
            <div className="flex justify-between">
                <button className="bg-blue-600 text-white font-bold px-8 py-2 rounded-full">Satisfied</button>
                <button className="bg-blue-600 text-white font-medium px-4 py-3 rounded-full"><i className="ri-arrow-right-line"></i></button>
            </div>
            </div>           
        </div>
  )
}

export default RightCardContent
