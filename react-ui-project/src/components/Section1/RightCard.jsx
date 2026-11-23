import RightCardContent from "./RightCardContent"

const RightCard = () => {
  return (
    <div className="h-full w-80 overflow-hidden relative rounded-4xl">
        <img className="h-full w-full object-cover" src="https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
        <RightCardContent />
    </div>
  )
}

export default RightCard
