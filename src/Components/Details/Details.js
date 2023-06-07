import "./Details.css";
import building from "../../assets/building.png";
import location from "../../assets/location.png";
import calen from "../../assets/calend.png";
import cash from "../../assets/cash.png";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Details() {
  const location_data = useLocation()
  const { job } = location_data.state
  const jobs_details = useSelector(state => state.Jobs_list.filter(param=> param.job_id===job))
  return (
    <>
      <div className="details-black">
        <h1 style={{ color: "white", marginTop: "2%" }}>{jobs_details[0].title}</h1>
        <div style={{ display: "flex", flexDirection: "row",alignItems:'center' }}>
          <div style={{ display: "flex", flexDirection: "column",justifyContent:'center',alignItems:'flex-start'  }}>
            <div style={{ display: "flex", flexDirection: "row",justifyContent:'center',alignItems:'center'  }}>
              <img
                src={building}
                alt=""
                style={{ height: "60%", width: "20%" }}
              />
              <h3 style={{ color: "white" }}>{jobs_details[0].company}</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "row",justifyContent:'center', alignItems:'center'  }}>
              <img
                src={location}
                alt=""
                style={{ height: "50%", width: "15%",marginBottom:'2%' }}
              />
              <h3 style={{ color: "white" }}>{jobs_details[0].location}</h3>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent:'center',alignItems:'flex-start' }}>
            <div style={{ display: "flex", flexDirection: "row",alignItems:'center' }}>
              <img
                src={calen}
                alt=""
                style={{ height: "20%", width: "10%" }}
              />
              <h3 style={{ color: "white" }}>{jobs_details[0].deadline}</h3>
            </div>
            <div style={{ display: "flex", flexDirection: "row",alignItems:'center' }}>
              <img
                src={cash}
                alt=""
                style={{ height: "20%", width: "11%",marginTop:'5%' }}
              />
              <h3 style={{ color: "white", marginRight: "20%",marginTop:'5%' }}>
              {jobs_details[0].salary}
              </h3>
              <Link to="/form" state={{job:jobs_details[0].job_id}} >
              <button className="details-exploreButton">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      
      <div className="details-white">
        <div style={{marginLeft:'2%'}}>
        <h1 style={{ color: "black" }}>Description</h1>
        <p style={{ color: "#C4C4C4", width: "70%" }}>
        {jobs_details[0].longdescription}
        </p>
        <h1 style={{ color: "black" }}>Requirements</h1>
        <p style={{ color: "#C4C4C4", width: "50%" }}>
        {jobs_details[0].requirement}
        </p>
        </div>
      </div>
    </>
  );
}
