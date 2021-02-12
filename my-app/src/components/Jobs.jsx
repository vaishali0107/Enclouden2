import React,{useState,useEffect} from 'react'
import {Link,BrowserRouter as Router,Route,Switch} from "react-router-dom"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactMarkdown from "react-markdown"

export default function Jobs(props) {
    var[data,setdata]=useState([])
    var [page,setpage]=useState(0)
    var [id,setid]=useState()
    
    console.log(props)
    useEffect(()=>{
        axios.get(`https://jobs.github.com/positions.json?page=${page}?description=${props.desc}&location=${props.loc}&full_time=${props.full}`)
        .then((res)=>{
            console.log(`response`,res.data);
            setdata(res.data);
        })    
        .catch((err)=>{
            console.log(err);
        })
    },[page,props.desc,props.loc])

    const nextDataHandler=()=>{
        if(page<5){
            setpage(page=page+1)
        }
        else{
            toast.error("No more data")
        }    
    }
    const idHandler=()=>{
        setid(id)
    }
    return (
        <React.Fragment>
            <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",maxWidth:"80%",margin:"auto"}}>
            {
                data.map((items,index)=>{
                    return(
                    <div key={index} style={{margin:"auto"}}>
                    <div className="card" style={{width:"20rem",height:"50%",margin:"10px"}}>
                        <div className="card-body">
                            <img className="card-img" src={items.company_logo} alt={items.company} style={{height:"50px",width:"50px",margin:"5px"}}/>
                            <h6 className="card-subtitle mb-2 text-muted">{new Date(items.created_at).toLocaleTimeString()}</h6>
                            <h3>{items.company}</h3>
                            
                            <h5 className="card-title">{items.title}</h5>
                            <h5 class="badge badge-secondary">{items.type}</h5>
                            <h5>{items.location}</h5>
                            <div style={{wordBreak:"break-all"}} >
                                <ReactMarkdown source={items.company_url}/>
                            </div>
                            <button className="btn btn-primary" ><a style={{fontSize:"20px",color:"white",textDecoration:"none"}} href={items.url}>View Details</a></button> 
                        </div>
                    </div>
                    </div>
                )})}
                <ToastContainer/>
         </div>
         <div>
            <button className="btn btn-primary" style={{position:"relative",left:"50%",margin:"20px"}} onClick={nextDataHandler}>Load more</button>
        </div>
        
    </React.Fragment>
    )
    
}
