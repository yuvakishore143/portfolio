
import { useParams } from "react-router-dom";

const SingleProject = (props) =>{
    const { id} = useParams()
    return(
        <div className=" bg-primary single-project-cont">
            hello world
        </div>
    )
}


export default SingleProject;