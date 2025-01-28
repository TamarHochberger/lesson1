const Post = (prop ) => {

    return (
        <div className="col-md-3 mb-4">
            <div className="card bg-light shadow-sm h-100">
               
                <div className="card-body">
                    <p className="card-text description">{prop.id}</p>
                    <h5 className="card-title">{prop.post.title}</h5>
                    <p className="card-text description">{prop.post.body}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Post;