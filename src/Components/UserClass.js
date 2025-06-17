import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
      
        this.state ={
            userinfo:{
           name:"dummy",
           location:"default",
            }
        }

    }

   async componentDidMount(){
        // console.log("componentDidMount");
      const data = await fetch("https://api.github.com/users/jyoti145");
      const json = await data.json();
      console.log(json);
    this.setState({
        userinfo:json,
    })



        }
    
    render(){
    
        return(
            <div>
                <h1>{this.state.userinfo.name}</h1>
                <h1>{this.state.userinfo.location}</h1>
                <h1>{this.state.userinfo.avatar_url
}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                 } )
                }}>Increment</button>
                <h1>{this.props.name}</h1>
                <h2>{this.props.location}</h2>
            </div>
        );
    };

};
export default UserClass;