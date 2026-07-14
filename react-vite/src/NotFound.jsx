import { Link } from "react-router-dom";

function NotFound(){
    return (
        <div className = "my-5" style={{width : '50%', margin : 'auto'}}>
        <h2> 😒 Error 😵 404 Page Not Found</h2>
        <a className = "btn btn-primary" href="/">Home</a>
        <Link className = "btn btn-danger" style={{marginLeft:'10px'}} to="/Login">Login Here!</Link>
        </div>
    );
}
export default NotFound;