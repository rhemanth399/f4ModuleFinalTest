
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/actions";
import { useParams, Link } from "react-router-dom";


const Detail= () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(id)); 
  }, [dispatch, id]);

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) {
    return (
      <div className="container">
        <div className="row">
          <div className="loader"></div>
        </div>
        <h3>No result found</h3>
      </div>
    )
  }
  return (
    <div className="container ">
      <div className="row my-2 d-flex justify-content-center ">
        <Link className="text-center text-decoration-none" to={`/`}>
          <button className="btn btn-primary my-1">Main</button>
        </Link>
        <p className="card-header text-success">Details Page for Post With Id :- {post.id}</p>
        <div className="col-md-4 zoom my-4">
          <div className="card mb-4 shadow-sm">
            
            
            <img
              className="img-rounded "
              src={`https://picsum.photos/200?random=${post.id}`}
              alt={post.title}
            />
            <div className="card-body">
              <h4 className='text-warning'>User ID:{post.userId}</h4>
              <h5 className="card-title text-info text-center">Title:{post.title}</h5>
              <p className="card-text text-secondary"><b>Body :</b>{post.body.slice(0,30)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;