import React, { useEffect, useState } from "react";
import { ProjectTable } from "./ProjectTable";
import { NavBar } from "./PageNavBar";
import axios from "axios";

export function MainPage() {
    const [projectList, setProjectList] = useState([]);

    const rootURL = 'https://question-1-server.ts.r.appspot.com/';

    useEffect(() => {
        axios.get(rootURL + "/").then(res => {
            setProjectList(res.data);
            console.log(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [rootURL])

    return (
        <div>
            <NavBar/>
            <ProjectTable data={projectList}/>

        </div>
    )
}