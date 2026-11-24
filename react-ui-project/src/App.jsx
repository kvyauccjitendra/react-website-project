import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"
const App = () => {
  const users = [
    {
      images: 'https://plus.unsplash.com/premium_photo-1661544041308-eff1c1a9f013?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est veniam vel sed ab distinctio quod nobis reiciendis minus sequi assumenda?',
      tag:'Underbanked',
    },
    {
      images: 'https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est veniam vel sed ab distinctio quod nobis reiciendis minus sequi assumenda?',
      tag:'Satisfied',
    },
    {
      images: 'https://plus.unsplash.com/premium_photo-1661632825492-5442e3eec8c3?q=80&w=626&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est veniam vel sed ab distinctio quod nobis reiciendis minus sequi assumenda?',
      tag:'Underserved',
    },
    {
      images: 'https://plus.unsplash.com/premium_photo-1661576428246-40893bd7d743?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est veniam vel sed ab distinctio quod nobis reiciendis minus sequi assumenda?',
      tag:'Underbanked',
    },
    {
      images: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'loremLorem ipsum dolor, sit amet consectetur adipisicing elit. Est veniam vel sed ab distinctio quod nobis reiciendis minus sequi assumenda?',
      tag:'Underserved',
    }
  ]
  return (
    <div className="h-full w-full">
        <Section1 users={users} />
        <Section2 />
    </div>
  )
}

export default App
