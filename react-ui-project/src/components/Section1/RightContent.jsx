import RightCard from "./RightCard"
const RightContent = (props) => {
  return (
    <div className="h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3">
      {props.users.map((elem, elmidx )=>{
        return <RightCard key={elmidx} idx={elmidx} img={elem.images} tag={elem.tag} intro={elem.intro} />
      })}
      
    </div>
  )
}

export default RightContent
