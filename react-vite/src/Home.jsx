import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [posts, setPosts] = useState(null);
    const controller = new AbortController();
    const signal = controller.signal;
    useEffect(() => {

        setTimeout(() => {
        fetch("http://localhost:3000/posts", {signal})

            .then((response) => {
                return response.json();
            })

            .then((data) => {
                console.log(data);
                setPosts(data);
            })

            .catch((err) => {
                console.log(err);
            });

             }, 5000);

             return () => {
                console.log('unmounted, cleaning up');
                controller.abort();
             }
    }, []);
   

    return (

        <div className="container">

            <Link
                to="/login"
                className="btn btn-primary mt-3 mb-3"
            >
                Login
            </Link>

            <div className="row justify-content-center m-3">

                {posts && posts.map((post) => {

                    return (

                        <div
                            key={post.id}
                            className="card m-3 shadow"
                            style={{ width: "18rem" }}
                        >

                            <div className="card-body">

                                <h5 className="card-title">
                                    {post.title}
                                </h5>

                                <p className="card-text">
                                    {post.content}
                                </p>

                                <p className="text-secondary">
                                    {post.created_at}
                                </p>

                                <button className="btn btn-success">
                                    Read More
                                </button>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}

export default Home;