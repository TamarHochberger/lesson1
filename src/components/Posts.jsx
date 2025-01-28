import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataAsyncAction } from "../redux/thunk";
import { useNavigate } from "react-router-dom";

const Posts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { postsList = [], error = false, loading = false } = useSelector(
        (state) => state.posts || {}, 
        (prev, next) => prev.postsList === next.postsList && prev.error === next.error && prev.loading === next.loading
    );

    useEffect(() => {
        dispatch(fetchDataAsyncAction())
    }, [])

    useEffect(() => {
        if (error) {
            navigate("/error");
        }
    }, [error])


    return (
        <>
            <div className="container align-items-start p-0">
                <div className="row align-items-start mb-4">
                    {loading && <h1>Loading</h1>}
                    {postsList.length > 0 &&
                        postsList.map(post => (
                            <Post key={post.id} post={post} /> 
                        ))
                    }
                </div>
            </div>
        </>
    );
}

                export default Posts;





