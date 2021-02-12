import React,{useState} from 'react';
import Jobs from "./Jobs";
//In this piece of code i have implemented the navbar and getting the values of title,Location and fulltime values.Here i have used useState hook to store these different values.I have passed these values to Job component

export default function Header() {
    var [keyword,setkeyword]=useState("");
    var [location,setlocation]=useState("");
    var [description,setdescription]=useState("")
    var [location1,setlocation1]=useState("");
    var [fulltime,setFulltime] = useState(false)
    var [ful,setful]=useState();
    const filteration=(e)=>{
        e.preventDefault();
        setdescription(keyword);
        setlocation1(location);
        setful(fulltime);
    }
    const fultime=()=>{
        setFulltime(true)
    }
    
    return (
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light navclass" style={{backgroundColor:"blue",color:"white",borderRadius:"10px 40px",display:"flex",justifyContent:"space-between",margin:"0px 0px 3% 0px"}}><br/>
            <h1 style={{float:"left"}}>devjobs</h1>
            <form>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search by Keywords" aria-label="Search" float="right" onChange={
                    (e)=>{setkeyword(e.target.value)}}/>
                <input className="form-control mr-sm-2" type="search" placeholder="filter by location" aria-label="Search" float="right" onChange={(e)=>setlocation(e.target.value)}/>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={fultime} />
                    <label className="form-check-label" for="exampleCheck1"  >fulltime</label>
                </div>
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={filteration}>Search</button>
            </div>
            </form>
        </nav>
        <Jobs desc={description} loc={location1} full={ful}/>
        </React.Fragment>
    )
}

