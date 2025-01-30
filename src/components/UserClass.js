import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            Education :"B.tech"
        }
        
    }

    componentDidMount(){
        console.log("Hi this is sairam kunche");    
    }

    componentDidUpdate(){
        console.log("hi")
    }


    render(){
        const{state,city} =this.props;
        const{Education} = this.state;
        
        return(
            <div>
            <h1>Hi This is Sairam Kunche</h1>
            <h2>{state}</h2>
            <h2>{Education}</h2>
            </div>
        )
    }
}

export default UserClass;