import React from "react";
import Member from "./Member";
import MemberClass from "./MemberClass";
class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent constructor running");
    }
    componentDidMount(){
        console.log("parent didMount running");
    }
    render(){
        console.log("parent render running");

        return (
            <div>
                <h2>This is About component</h2>
                {/* <Member /> */}
                <MemberClass name={"sanjay (Class)"} location = {"lucknow (Class)"}/>
                {/* <MemberClass name={"ajay (Class)"} location = {"punjab (Class)"}/>
                <MemberClass name={"vijay (Class)"} location = {"Delhi (Class)"}/> */}
            </div>
        )
    }
}
export default About;