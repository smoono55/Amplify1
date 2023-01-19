import { Fragment } from "react";

function Student (props){
    return(
        <Fragment>
            <h3>student id:{props.id}</h3>
            <h3>student name:{props.name}</h3>
            <hr></hr>
        </Fragment>
    )
}
export default Student;