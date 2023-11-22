import React from "react";
class MemberClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contact : "84560564 (class state)",
            count:0,
            count2:0,
            userInfo:{
                name:"dummy name",
                avatar_url:"https://dummy.photo",
            }
        }
        console.log(this.props.name+" child constructor running");

    }
    async componentDidMount(){
        console.log(this.props.name+" child didMount running");
        let data = await fetch("https://api.github.com/users/kashyapsanjai");
        let json = await data.json();
        this.setState({
            userInfo:json
        })
        this.timer = setInterval(() => {
            console.log("interval running");
        }, 1000);
        console.log(json);
        
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count!==prevState.count){
            console.log("count chnaged")
        }if(this.state.count2!==prevState.count2){
            console.log("count2 chnaged")
        }
        console.log("component did update") 
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("component now unmounted")
    }

    render(){
        console.log(this.props.name+" child render running");

        const {name,location} = this.props
        const {contact,count, count2} = this.state
        // debugger;
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
                <h2>Name: {this.state.userInfo.name}</h2>
                <img src={this.state.userInfo.avatar_url} alt="" />
                <h3>Location: {location}</h3>
                <h3>Contact: {contact}</h3>
            </div>
        )
    }
}

export default MemberClass