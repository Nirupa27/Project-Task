import axios from 'axios';
import React from 'react'
class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email:"",password:"",phoneno:"",fullname:"",dob:""  };
    }
    change(e){
        this.setState({
            [e.target.name]:[e.target.value]
        })
    }
     submit(e){
        e.preventDefault();
        let formdata = new FormData();

        formdata.append("email",this.state.email)
        formdata.append("password",this.state.password)
        formdata.append("phone",this.state.phoneno)
        formdata.append("name",this.state.fullname)
        formdata.append("dob",this.state.dob)

 axios.post("http://172.105.35.50:4007/api/documentation/#/Auth/post_v1_users_register",formdata)
        .then(res =>{
            console.log(res)
        })
    }
    render() {
        return (
            <>
                <h1>Register</h1>
            Email:<input type="email" name="email" onChange={this.change.bind(this)}/> <br/>
            Password:<input type="password" name="password" onChange={this.change.bind(this)}/> <br/>
            Phoneno:<input type="number" name="Phoneno" onChange={this.change.bind(this)}/> <br/>
            Fullname:<input type="text" name="fullname" onChange={this.change.bind(this)}/> <br/>
            DOB:<input type="date" name="dob" onChange={this.change.bind(this)}/> <br/>
            <input type="button" value="submit" onClick={this.submit.bind(this)}/> <br/>

            </>
        );
    }
}

export default Create;