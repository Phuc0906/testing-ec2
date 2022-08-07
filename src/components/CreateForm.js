import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export function CreateForm() {
    const [projects, setProjectsPassing] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        hireDate: "",
        jobId: "",
        salary: "",
        commissionPct: "",
        managerId: "",
        departmentId: ""
        
    })

    const rootURL = 'https://question-1-server.ts.r.appspot.com/';

    async function savingData() {
        axios.post(rootURL, {projects}.projects).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>Employee Information</h1>
            <form>
                <div className="form-group">
                    <label >Employee ID</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, id: e.target.value})}} className="form-control"  placeholder="firstName"/>
                </div>
            
                <div className="form-group">
                    <label >First Name</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, firstName: e.target.value})}} className="form-control"  placeholder="firstName"/>
                </div>

                <div className="form-group">
                    <label >Last Name</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, lastName: e.target.value})}} className="form-control"  placeholder="lastName" />
                </div>

                <div className="form-group">
                    <label >Email</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, email: e.target.value})}} className="form-control"  placeholder="email"/>
                </div>

                <div className="form-group">
                    <label >Phone Numebr</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, phoneNumber: e.target.value})}} className="form-control"  placeholder="phoneNumber" />
                </div>

                <div className="form-group">
                    <label >Hire Date</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, hireDate: e.target.value})}} className="form-control"  placeholder="hireDate" />
                </div>

                <div className="form-group">
                    <label >Job Id</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, jobId: e.target.value})}} className="form-control"  placeholder="jobId" />
                </div>

                <div className="form-group">
                    <label >Salary</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, salary: e.target.value})}} className="form-control"  placeholder="Csalary"/>
                </div>

                <div className="form-group">
                    <label >Commission PCT</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, commissionPct: e.target.value})}} className="form-control"  placeholder="commissionPct" />
                </div>

                <div className="form-group">
                    <label >Manager Id</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, managerId: e.target.value})}} className="form-control"  placeholder="managerId" />
                </div>

                <div className="form-group">
                    <label >department id</label>
                    <input type="text" onChange={e => {setProjectsPassing({...projects, departmentId: e.target.value})}} className="form-control"  placeholder="departmentId" />
                </div>

                

                
                <Link to={"/"} onClick={savingData} className="btn btn-primary">Submit Changes</Link>
            </form> 
        </div>
    )
}