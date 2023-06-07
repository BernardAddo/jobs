import {configureStore,createSlice} from '@reduxjs/toolkit'
import icon1 from './assets/comlogo1.png'
import icon2 from './assets/comlogo2.png'
import icon3 from './assets/comlogo3.png'
import icon4 from './assets/comlogo4.png'
import icon5 from './assets/comlogo5.png'


const Jobs_list= createSlice({
  name:'Jobs_list',
  initialState:[
    {job_id:1,sector_id:1,company:'Jane street',deadline:'21st April 2023', location:'North Legon',salary:'GHC 2500.00',deadlineM:'21',deadlineD:'Apr',pic:icon1,title:'FPGA Engineer',discription:'The material determines the building it so we recommend that you use the best & quality materials its class',requirement:'The material determines the building materials its class. determines the building itself so we recommend that you use the best materials determines the building itself so we recommend that materials',longdescription:'The material determines the building itself so we recommend that you use the best & quality materials its class. determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you'},
    {job_id:2,sector_id:2,company:'Maven Securities',deadline:'1st May 2023', location:'Haatso',salary:'GHC 3000.00',deadlineM:'1',deadlineD:'May',pic:icon2,title:'Invesment Banker',discription:'The material determines the building it so we recommend that you use the best & quality materials its class',requirement:'The material determines the building materials its class. determines the building itself so we recommend that you use the best materials determines the building itself so we recommend that materials',longdescription:'The material determines the building itself so we recommend that you use the best & quality materials its class. determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you'},
    {job_id:3,sector_id:3,company:'Nsano',deadline:'11st April 2023', location:'Cirlce',salary:'GHC 4700.00',deadlineM:'11',deadlineD:'Apr',pic:icon3,title:'Software Engineer',discription:'The material determines the building it so we recommend that you use the best & quality materials its class',requirement:'The material determines the building materials its class. determines the building itself so we recommend that you use the best materials determines the building itself so we recommend that materials',longdescription:'The material determines the building itself so we recommend that you use the best & quality materials its class. determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you'},
    {job_id:4,sector_id:4,company:'EY',deadline:'5th June 2023', location:'Dansoman',salary:'GHC 2000.00',deadlineM:'5',deadlineD:'Jun',pic:icon4,title:'Junior Sale person',discription:'The material determines the building it so we recommend that you use the best & quality materials its class',requirement:'The material determines the building materials its class. determines the building itself so we recommend that you use the best materials determines the building itself so we recommend that materials',longdescription:'The material determines the building itself so we recommend that you use the best & quality materials its class. determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you'},
    {job_id:5,sector_id:5,company:'Papaye',deadline:'8th May 2023', location:'Lapaz',salary:'GHC 1700.00',deadlineM:'1',deadlineD:'May',pic:icon5,title:'Nutritionalist',discription:'The material determines the building it so we recommend that you use the best & quality materials its class',requirement:'The material determines the building materials its class. determines the building itself so we recommend that you use the best materials determines the building itself so we recommend that materials',longdescription:'The material determines the building itself so we recommend that you use the best & quality materials its class. determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you'},
    {job_id:6,sector_id:6,company:'Korle Bu',deadline:'10th June 2023', location:'Osu',salary:'GHC 7500.00',deadlineM:'10',deadlineD:'Jun',pic:icon2,title:'Senior Pediatrician',discription:'The material determines the building it so we recommend that you use the best & quality materials its class',requirement:'The material determines the building materials its class. determines the building itself so we recommend that you use the best materials determines the building itself so we recommend that materials',longdescription:'The material determines the building itself so we recommend that you use the best & quality materials its class. determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you'},
    {job_id:7,sector_id:6,company:'Korle Bu',deadline:'10th June 2023', location:'Osu',salary:'GHC 7500.00',deadlineM:'10',deadlineD:'Jun',pic:icon2,title:'Senior Pediatrician',discription:'The material determines the building it so we recommend that you use the best & quality materials its class',requirement:'The material determines the building materials its class. determines the building itself so we recommend that you use the best materials determines the building itself so we recommend that materials',longdescription:'The material determines the building itself so we recommend that you use the best & quality materials its class. determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you use the best & quality materials determines the building itself so we recommend that you'},
  ],
  reducers:{
    changeDisplay(state,action){
      state=action.payload
    }

  }
})

const Applied_jobs= createSlice({
    name:'Applied_jobs',
    initialState:[],
    reducers:{
      Add_job(state,action){
        state.push(action.payload)
      }
    }
  })
  

const store= configureStore({
  reducer:{
    Jobs_list:Jobs_list.reducer,
    Applied_jobs:Applied_jobs.reducer
  }
})
export {store}
export const {Add_job}=Applied_jobs.actions