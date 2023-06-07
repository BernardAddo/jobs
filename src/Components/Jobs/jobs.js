import "./jobs.css";
import { useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Jobs() {
  const location = useLocation()
  const { from } = location.state
  const {pic}=location.state
  const {sector}=location.state

  const jobs_list = useSelector(state => state.Jobs_list.filter(job=> job.sector_id===sector))
  
  return (
    <>
      <div className="jobs-black">
        <div
          style={{
            marginLeft: "5%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ color: "white" }}>
            {from} <span style={{ color: "#0A72AD" }}>Jobs</span>{" "}
          </h1>
          <img
            src={pic}
            alt=""
            style={{ height: "120px", width: "500px" }}
          />
        </div>
      </div>
      <div className="jobs-white">
        <div style={{ marginLeft: "5%" }}>

         {jobs_list.map((param)=>{
          return(
            <>
            <Link to="/details" state={{job:param.job_id}} style={{ textDecoration: 'none',color:'black'}}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "2%",
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <img src={param.pic} alt="" style={{ height: "60%", width: "65%" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <span
                  style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                >
                  {param.title}
                </span>
                <br />
                <span
                  style={{ color: "#C4C4C4", fontSize: 15, width: '60%' }}
                >
                  {param.discription}
                </span>
                <button className="jobs-exploreButton">Apply</button>

              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: 'center',
                  marginRight: '10%'
                }}
              >
                <span
                  style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                >
                  Deadline
                </span>
                 <div style={{ display:'flex',alignItems:'center',justifyContent:'center',backgroundImage: "url(/calendar.png)",backgroundSize:'cover',width:'100%',minHeight:"50%" }}>
                <span style={{display:'flex', marginTop:12,fontSize: 22, fontWeight: 'bold',textAlign:'center'}}>{param.deadlineD} <span style={{ fontWeight: '400' }}>{param.deadlineM}</span></span> 
                 </div>
                {/* <img src={calendar} alt="" style={{ height: '80%', width: '40%' }} />
                <span style={{ fontSize: 30, fontWeight: 'bold', position: 'absolute', top: 240 }}>{param.deadlineD} <span style={{ fontWeight: '400' }}>{param.deadlineM}</span></span> */}
                 
              </div>
            </div>
            </Link>
            <div className="jobs-dash"></div></>
          
         )})}
      
        </div>
      </div>
    </>
  );
}
