import { useSelector } from "react-redux";
import './display.css'
export default function Display(){
    const applied=useSelector(state => state.Applied_jobs)
    if(applied.length!==0){
    return(
        <>
         <div className="display-black">
        <h1 style={{textAlign:'center',color:'white'}}>Applied <span style={{color:'#0A72AD'}}>Jobs</span></h1>
        </div >
        <div className="display-white">
            {applied.map((param)=>{return(
                  <div style={{display:'flex',flexDirection:'column',backgroundColor:"white", width:"20%", height:"20%", marginLeft:'5%', marginTop:"5%", borderRadius:10,boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}} >
                  <img src={param.pic} alt="" />
                  <div style={{display:'flex',flexDirection:'column',margin:10}}>
                  <span style={{textAlign:'center',fontSize:18, fontWeight:'bold'}}>{param.company}</span>
                  <br/>
                  <span style={{ color: "#C4C4C4"}}>Role: <span style={{ color: "black"}}>{param.title} </span></span>
                  <br/>
                  <span style={{ color: "#C4C4C4"}}>firstname:    <span style={{ color: "black"}}>{param.firstname}</span></span>
                  <br/>
                  <span style={{ color: "#C4C4C4"}}>lastname:    <span style={{ color: "black"}}>{param.lastname}</span></span>
                  <br/>
                  <span style={{ color: "#C4C4C4"}}>email:   <span style={{ color: "black"}}>{param.email}</span></span>
                  <br/>
                  <span style={{ color: "#C4C4C4"}}>phone:   <span style={{ color: "black"}}>{param.phone}</span></span>
                  <br/>
                  <span style={{ color: "#C4C4C4"}}>location:   <span style={{ color: "black"}}>{param.location}</span></span>
                  </div>
                  </div>
            )})}
        
        </div>
        </>
    )
}
else{
    return(
        <>
        <div className="display-black">
        <h1 style={{textAlign:'center',color:'white'}}>Applied <span style={{color:'#0A72AD'}}>Jobs</span></h1>
        </div>
        <div className="display-white"></div>
        </>

    )
}
}