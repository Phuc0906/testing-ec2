import React from 'react';
import { MainPage } from './components/MainPage';
import {ProjectForm} from "./components/ProjectForm"
import { CreateForm } from './components/CreateForm';
import { BrowserRouter ,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} forceRefresh={true} />
          <Route path="/new-project" element={<CreateForm/>}/>
          <Route path="/project-form/:projectId" element={<ProjectForm/>} />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
