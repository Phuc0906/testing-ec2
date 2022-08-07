import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export function ProjectForm() {
    
    const { projectId } = useParams();
    const rootURL = 'https://question-1-server.ts.r.appspot.com/';

    const [projects, setProjectsPassing] = useState({});
    var idSetting = -1;
    var dataSending = {};
    useEffect(() => {

        axios.get(rootURL + '/employ?id=' + projectId).then(res => {
            
            console.log(res.data);
            idSetting = res.data[0].id;
            setProjectsPassing(res.data[0]);
            dataSending = res.data;
        }).catch(err => {
            console.log(err)
        }) 
    }, [rootURL])

    
    async function saveingData() {
        axios.patch('https://question-1-server.ts.r.appspot.com/?row=' + {projects}.projects.id, {projects}.projects).then(res => {
            
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <h1>Employee Information</h1>
            <form>
                <div className="form-group">
                    <label >Employee Id</label>
                    <input type="text" onChange={e => {
                        setProjectsPassing({id: e.target.value})
                        console.log(e.target.value)
                        }} className="form-control"  placeholder="Project ID" value={projects.id}/>
                </div>
                

                <div className="form-group">
                    <label >First Name Name</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, firstName: e.target.value})}} className="form-control"  placeholder="Project Name" value={projects.firstName}/>
                </div>

                <div className="form-group">
                    <label >Last Name</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, lastName: e.target.value})}} className="form-control"  placeholder="Subtype" value={projects.lastName}/>
                </div>

                <div className="form-group">
                    <label >Email</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, email: e.target.value})}} className="form-control"  placeholder="Current" value={projects.email}/>
                </div>

                <div className="form-group">
                    <label >Phone Number</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, phoneNumber: e.target.value})}} className="form-control"  placeholder="Status" value={projects.phoneNumber}/>
                </div>

                <div className="form-group">
                    <label >Hire Date</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, hireDate: e.target.value})}} className="form-control"  placeholder="Capacity (MW)" value={projects.hireDate}/>
                </div>

                <div className="form-group">
                    <label >Job Id</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, jobId: e.target.value})}} className="form-control"  placeholder="Year of Completion" value={projects.jobId}/>
                </div>

                <div className="form-group">
                    <label >Commission PCT</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, commissionPct: e.target.value})}} className="form-control"  placeholder="Country list of Sponsor/Developer" value={projects.commissionPct}/>
                </div>

                <div className="form-group">
                    <label >Manager Id</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, managerId: e.target.value})}} className="form-control"  placeholder="Sponsor/Developer Company" value={projects.managerId}/>
                </div>

                

                
            </form>
            <Link to={"/"} onClick={saveingData} className="btn btn-primary">Submit Changes</Link>
        </div>
    )
}