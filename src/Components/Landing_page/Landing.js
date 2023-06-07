import "./Landing.css";
import office from "../../assets/office4.png";
import logo1 from "../../assets/comlogo1.png";
import logo2 from "../../assets/comlogo2.png";
import logo3 from "../../assets/comlogo3.png";
import logo4 from "../../assets/comlogo4.png";
import logo5 from "../../assets/comlogo5.png";
import comput from "../../assets/computer.jpg";
import financial from "../../assets/financ.jpg";
import manufacturing from "../../assets/manufact.jpg";
import marketing from "../../assets/marketing.jpg";
import food from "../../assets/food.jpg";
import doc from "../../assets/doctor.jpg";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const myref=useRef(null)

  function scrollbutton(){
    myref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className="landing-black">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginLeft: "5%" }}>
            <Link to='/display' style={{textDecoration:'none'}}>
            <h2 style={{ color: "white" }}>
              Jobs <span style={{ color: "#0A72AD" }}>Project</span>
            </h2>
            </Link>
            <div style={{ marginTop: "8%" }}>
              <span
                style={{ color: "white", fontSize: 50, fontWeight: "bold" }}
              >
                Discover your
              </span>
              <br />
              <span
                style={{ color: "#0A72AD", fontSize: 50, fontWeight: "bold" }}
              >
                Dream job
              </span>
            </div>
            <p style={{ color: "#C4C4C4", width: "60%", marginBottom: "6%" }}>
              More than 100 jobs on this play from every major sector in Ghana.
              Job Project is your on stop shop for online, part-time and
              full-time just a click away
            </p>
            <button className="landing-exploreButton" onClick={scrollbutton}>Explore now</button>
            <div
              style={{
                marginTop: "3%",
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between",
                width: "60%",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <span
                  style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
                >
                  300
                  <span
                    style={{
                      color: "#0A72AD",
                      fontSize: 30,
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </span>
                </span>
                <br />
                <span style={{ color: "#C4C4C4", fontSize: 15 }}>Jobs</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span
                  style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
                >
                  900
                  <span
                    style={{
                      color: "#0A72AD",
                      fontSize: 30,
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </span>
                </span>
                <br />
                <span style={{ color: "#C4C4C4", fontSize: 15 }}>
                  Submitted Applications
                </span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span
                  style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
                >
                  20
                  <span
                    style={{
                      color: "#0A72AD",
                      fontSize: 30,
                      fontWeight: "bold",
                    }}
                  >
                    +
                  </span>
                </span>
                <br />
                <span style={{ color: "#C4C4C4", fontSize: 15 }}>
                  Companies
                </span>
              </div>
            </div>
          </div>
          <img
            src={office}
            alt="The office landing pic"
            style={{ height: "100%", width: "48%", marginTop: "5%" }}
          />
        </div>
      </div>

      <div className="landing-white">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <img src={logo1} alt="logo1" style={{ width: "10%", margin: "2%" }} />
          <img src={logo2} alt="logo2" style={{ width: "10%", margin: "2%" }} />
          <img src={logo3} alt="logo3" style={{ width: "10%", margin: "2%" }} />
          <img src={logo4} alt="logo4" style={{ width: "10%", margin: "2%" }} />
          <img src={logo5} alt="logo5" style={{ width: "10%", margin: "2%" }} />
        </div> 
        <div className="landing-dash"></div>
        <div  style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
            }}>
          <h1 style={{ color: "#242527", marginLeft: "5%" }}>Service sector</h1>
          <p
            style={{
              color: "#C4C4C4",
              width: "35%",
              marginTop: "2%",
              marginRight: "5%",
            }}
          >
            Check out our jobs from major sectors in Ghana. Over 20 for each
            sector spanning health care to engineering, sales to manufacturing
          </p>
        </div>
        <div ref={myref}>
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between', marginTop:'5%'}}>

        <div style={{marginLeft: "5%",display:'flex', flexDirection:'column' }}>
        <Link to="/jobs" state={{ from: "Industrial",pic:manufacturing,sector:1 }}>
        <img
              src={manufacturing}
              alt=""
              style={{ width: "70%"}}
            />
         </Link>
          <h3>Industrial</h3>
          </div >

          <div style={{display:'flex', flexDirection:'column' }}> 
          <Link to="/jobs" state={{ from: "Financial",pic:financial,sector:2 }}>
             <img
              src={financial}
              alt=""
              style={{ width: "70%",}}
            />
            </Link>
            <h3>Financial</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column' }}>
            <Link to="/jobs" state={{ from: "Technology",pic:comput,sector:3 }}>
             <img
              src={comput}
              alt=""
              style={{ width: "70%"}}
            />
            </Link>
            <h3>Technology</h3>
            </div>
            
        </div>

        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between', marginTop:'5%'}}>
        <div style={{marginLeft: "5%",display:'flex', flexDirection:'column' }}>
        <Link to="/jobs" state={{ from: "Marketing",pic:marketing,sector:4 }}>
        <img
              src={marketing}
              alt=""
              style={{ width: "70%" }}
            />
            </Link>
          <h3>Marketing</h3>
          </div >
          <div style={{display:'flex', flexDirection:'column' }}> 
          <Link to="/jobs" state={{ from: "Food Services",pic:food,sector:5 }}>
             <img
              src={food}
              alt=""
              style={{ width: "70%" }}
            />
            </Link>
            <h3>Food Services</h3>
            </div>
            <div style={{display:'flex', flexDirection:'column' }}>
            <Link to="/jobs" state={{ from: "Health Care",pic:doc,sector:6 }}>
             <img
              src={doc}
              alt=""
              style={{ width: "70%"}}
            />
            </Link>
            <h3>Health Care</h3>
            </div>
            
        </div>
        </div>
      </div>
    </>
  );
}
