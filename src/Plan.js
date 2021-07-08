
import './App.css';
function Plan(props)
{
   return(
   <>
   
   <li>{props.value}        <button onClick={() =>{props.sendData(props.id)}} className="btn btn-danger">X</button> </li>
   
   
   </>
   )
}




export default Plan;