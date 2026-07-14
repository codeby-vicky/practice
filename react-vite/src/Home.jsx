import { useNavigate } from "react-router-dom";

function Home(){

    const navi = useNavigate();
    
    return (

        <form className = "my-5" style={{width : '50%', margin : "auto"}}>
            <p>Home Page</p>
            <button onClick = {() => navi('/login')}>Login</button>
        </form>
    );
}

export default Home;