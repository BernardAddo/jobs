import './form.css'
import { useLocation,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Add_job } from '../../Store';

export default function Form(){
    const [firstname,setfirstname]=useState('')
    const [lastname,setlastname]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [location,setlocation]=useState('')
    const [resume,setresume]=useState('')

    const dispatch=useDispatch()    
    const location_data = useLocation()
    const { job } = location_data.state
    const jobs_details = useSelector(state => state.Jobs_list.filter(param=> param.job_id===job))
    const applied=useSelector(state => state.Applied_jobs)
    
    function submit(){
        console.log('codg');
        dispatch(Add_job({firstname,lastname,email,phone,location,resume,company:jobs_details[0].company,title:jobs_details[0].title,pic:jobs_details[0].pic}))
    }
    console.log(applied)
    return (
         <>
         <div className='form-black'>
         <h1 style={{textAlign:'center',color:'white'}}>{jobs_details[0].title} <span style={{color:'#0A72AD'}}>Application</span></h1>
         </div>
         <div className='form-white'>
            <div style={{marginTop:'1%',marginLeft:'5%'}}>
            <form onSubmit={submit}> 
                <label >
                    First name
                    <br/>
                    <input type="text" value={firstname} onChange={(event)=>setfirstname(event.target.value)}  style={{borderRadius:10, padding:5, borderColor:'#C4C4C4',marginBottom:'2%', width:'20%'}}/>
                </label>
                <br/>
                <label >
                    last name
                    <br/>
                    <input type="text" value={lastname} onChange={(event)=>setlastname(event.target.value)}  style={{borderRadius:10, padding:5, borderColor:'#C4C4C4',marginBottom:'2%', width:'20%'}}/>
                </label>
                <br/>
                <label >
                    Email
                    <br/>
                    <input type='email' value={email} onChange={(event)=>setemail(event.target.value)}  style={{borderRadius:10, padding:5, borderColor:'#C4C4C4',marginBottom:'2%', width:'20%'}}/>
                </label>
                <br/>
                <label >
                    Phone number
                    <br/>
                    <input type='text' value={phone} onChange={(event)=>setphone(event.target.value)}  style={{borderRadius:10, padding:5, borderColor:'#C4C4C4',marginBottom:'2%',width:'20%'}}/>
                </label>
                <br/>
                <label >
                    location
                    <br/>
                    <input type="text" value={location} onChange={(event)=>setlocation(event.target.value)}  style={{borderRadius:10, padding:5, borderColor:'#C4C4C4',marginBottom:'2%', width:'20%'}}/>
                </label>
                <br/>
                <label >
                    Resume
                    <br/>
                    <input type='file' value={resume} onChange={(event)=>setresume(event.target.value)}  style={{borderRadius:10, padding:5, borderColor:'#C4C4C4',marginBottom:'2%', width:'20%'}}/>
                </label>
            </form>
            <Link to='/'>
            <button className="form-exploreButton" onClick={submit}>Submit</button>
            </Link>
            </div>

         </div>
         </>
    )
}