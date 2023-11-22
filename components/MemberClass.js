import React from "react";
class MemberClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contact : "84560564 (class state)",
            count:0,
            count2:0
        }
        console.log(this.props.name+" child constructor running");

    }
    componentDidMount(){
        console.log(this.props.name+" child didMount running");
    }
    render(){
        console.log(this.props.name+" child render running");

        const {name,location} = this.props
        const {contact,count, count2} = this.state
        return(
            <div className="member-card">
                <h2>Count = {count}</h2>
                <h2>Count 2 = {count2}</h2>
                <button type="button" onClick={()=>{
                    this.setState({
                        count:count+1,
                        count2:count2+1
                    })
                }}>Increase</button>
                <h2>Class Component</h2>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: {contact}</h3>
            </div>
        )
    }
}

export default MemberClass