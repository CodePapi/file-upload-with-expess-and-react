import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FileUpload } from './container/FileUpload';
import{useState} from "react"
const  App=()=> {
 
  return  <div className="container mt-4"> 
    <h4 className="display-4 text-center mb4">
<FontAwesomeIcon icon={faCoffee} />
React File Upload
   </h4>
     <FileUpload/>   
  </div>

}

export default App;
