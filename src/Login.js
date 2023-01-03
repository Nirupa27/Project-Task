import axios from 'axios';
import React from 'react'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email:"",password:"",errors: {}};
    }
    change(event){
        this.setState({
            email : event.target.value
        }) 
    }
    change1(event){
        this.setState({
            password : event.target.value
        }) 
    }
    uservalidation = () => {
        const {email,password} = this.state;
        let isvalid = true;
        let errors = {};

        if (email === ""){
            errors.email = "Enter Email";
            isvalid = false;
        }
        if (password === "") {
            errors.password = "Enter Password";
            isvalid = false;
        }
        this.setState ({errors});
        return isvalid;
    }
    async submit(e)   {
        e.preventDefault();
        const isvalid = this.uservalidation();
 

         var mydata = {
            email : this.state.email,
            password : this.state.password
        }

        var ddd = JSON.stringify(mydata);

        console.log(ddd);
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        await axios.post("http://172.105.35.50:4007/api/v1/users/login",ddd,axiosConfig)
        .then(res =>{
            console.log(res)
        })

    }
    render() {
        const {email,password,errors} = this.state;
        return (
            <>
                <h1>Login Page</h1>
            Email:<input type="email" value={email} name="email" onChange={this.change.bind(this)}/> 
            <p style={{color : "red"}}> {errors.email}</p>
            Password:<input type="password" value={password} name="password" onChange={this.change1.bind(this)}/>  
            <p style={{color : "red"}}> {errors.password}</p>
            <input type="button" value="submit" onClick={this.submit.bind(this)}/> 
            </>
        );
    }
}

export default Login;