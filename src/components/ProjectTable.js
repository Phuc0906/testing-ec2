import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function generateData(props) {
    const rootURL = 'https://question-1-server.ts.r.appspot.com/';
    const projectId = props.id;
    async function deleteData() {
        await axios.delete(rootURL + "?row=" + projectId).then(res => {
            
            console.log(res);
        }).catch(err => {
            console.log(err)
        })

        
    }

    async function reloadMainPage() {
        await deleteData();
        
        await window.location.reload();

        setTimeout(() => {
            window.location.reload(false);
        }, 500)
    } 

    return (
        <tr key={props.id}>
            <th >
                <span>
                    <Link to={"/project-form/" + props.id}  className="btn btn-outline-primary">Upadte</Link>
                    <button onClick={reloadMainPage}  className="btn btn-outline-primary">Delete</button>
                </span>
                
            </th>
            <th scope="row">{props.id}</th>
            <th>{props.firstName}</th>
            <th>{props.lastName}</th>
            <th>{props.phoneNumber}</th>
            <th>{props.email}</th>
            <th>{props.hireDate}</th>
            <th>{props.jobId}</th>
            <th>{props.salary}</th>
            <th>{props.commissionPct}</th>
            <th>{props.managerId}</th>
            <th>{props.deparmentId}</th>
            
        </tr>
    )
}

export function ProjectTable(props) {
    return (
        <div>
            <h1 className="title">Employees Information</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Id</th>  
                        <th scope="col">First Name</th>  
                        <th scope="col">last Name</th>
                        <th scope="col"> Phone Numbr</th>
                        <th scope="col">Email</th>
                        <th scope="col">Hire Date</th>
                        <th scope="col">Job Id</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Commision PCT</th>
                        <th scope="col">Manager Id</th>
                        <th scope="col">Department Id</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(generateData)}
                </tbody>
                
            </table>
        </div>
        
    )
}