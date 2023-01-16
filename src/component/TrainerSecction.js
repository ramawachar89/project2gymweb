import React from 'react'
import TrainingStyle from './Training.module.css'
import {useState} from 'react'


export default function TrainerSection(){
  const[show , setShow] = useState(false)
  return(
    <>
<div className={TrainingStyle.wrap} id='trainingStyle'>
  <h1 className={TrainingStyle.mediaHead} id="append" style={{color:"white" , textShadow : "1px 1px black"}}>Meet Our Team</h1>
  <p className={TrainingStyle.text} style={{color:"white" , textShadow : "1px 1px black"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam temporibus delectus magni quaerat quos! Provident totam asperiores, eveniet dolore nisi ad odio. Dignissimos, animi ea quasi ipsum error omnis cum qui dolorem, tempora quibusdam perferendis.</p>

  <div className={TrainingStyle.griding}>
    <div>
    <img width="300em" height="200em" src="https://www.muscleandfitness.com/wp-content/uploads/2019/01/9-trainer-lead-image-855913996.jpg?quality=86&strip=all" alt="work" />
    <p className={TrainingStyle.mediaText} style={{color:"white" , textShadow : "1px 1px black"}}>Brock Lesnar -</p>
    <p className={TrainingStyle.mediaText} style={{color:"grey" , textShadow : "1px 1px black"}}>Fiteness Coach</p>
    </div>
    <div>
    <img width="300em" src="https://www.sheknows.com/wp-content/uploads/2018/08/fgjixpyyzxr7mlyuu25u.jpeg?w=600" alt="work"/>
    <p className={TrainingStyle.mediaText} style={{color:"white" , textShadow : "1px 1px black"}}>Randy Ortan -</p>
    <p className={TrainingStyle.mediaText} style={{color:"grey" , textShadow : "1px 1px black"}}>Crossfit Coach</p>
    </div>
  
 
    </div>
    
    {show ? <>
    <span>
      <div>
    <img width="300em" src="https://img.freepik.com/premium-photo/training-exercise-motivation-with-fitness-coach-personal-trainer-her-bodybuilder-student-during-workout-gym-health-sports-wellness-with-heathy-athlete-exercising_590464-78695.jpg" alt="work"/>
    <p >Rock -</p>
    <p >Calisthenics</p>
    </div>
    <div>
    <img width="300em" src="https://images.squarespace-cdn.com/content/v1/5ab15305f2e6b1848781c80f/1599159988240-NTH7QZFC2IMCNQ94TNTK/You%E2%80%99re+Brand+New+to+Fitness?format=1000w" alt="work"/>
    <p className={TrainingStyle.mediaText} style={{color:"white" , textShadow : "1px 1px black"}}>Dean Ambrose -</p>
    <p className={TrainingStyle.mediaText} style={{color:"grey" , textShadow : "1px 1px black"}}>Deadlift Coach</p>
    </div>
  
   
    </span>
    <button className={TrainingStyle.btn}  onClick={()=>{setShow(false)}}>See Less Team</button>
    </> : <a href="#append"><button className={TrainingStyle.btn} onClick={()=>{setShow(true)}}>See Whole Team</button></a>
}
    


</div>


    </>
  )
}