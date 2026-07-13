import { useState } from "react";

function Login(){

    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [same, SetSame] = useState(false)

    function handlePwd1Event(event){
        setPwd1(event.target.value)
    }

    function handlePwd2Event(event){
        setPwd2(event.target.value)
        console.log(pwd1, pwd2)
    }

    function handlePasswordCheck(){
        if(pwd1 == pwd2){
            console.log("Same")
            setSame(true)
        }
        else{
            console.log("Not Same")
            setSame(false)
        }
    }

    return (

        <>
            
            <form className = "my-5" style={{width:"50%", margin:"auto"}}>
                Login
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input value = {pwd1} onChange = {handlePwd1Event} type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Re-enter Password</label>
                    <input value = {pwd2} onChange = {handlePwd2Event} type="password" className="form-control" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" onChange = {handlePasswordCheck} className="form-check-input" />
                    <label className="form-check-label" >I Agree</label>
                </div>
                {same && <p>Passwords Match!</p>}
                {!same && <p>Passwords do not Match!</p>}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>        
        </>
    );
}

export default Login;