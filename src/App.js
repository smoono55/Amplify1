import { Fragment } from "react";
import Student from "./Student";
function App(){
  const data =[
    {
      id:'e1',
      name:'suman'
    },

    {
      id:'e2',
      name:'suprith'
    }
  ]
  return (
    <Fragment>
      {data.map((item,i)=>
      (<Student key={i} id={item.id} name={item.name}/>))}
    </Fragment>
  )
}

export default App;