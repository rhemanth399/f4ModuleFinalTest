import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/actions";
import { Link } from "react-router-dom";


const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="container">
      <div className="row">
        {posts && posts.map((post) => (
          <div className="col-md-3 my-3 zoom" key={post.id}>
            <div className="card mb-4 shadow-sm">
              <Link  to={`/item/${post.id}`} className="text-dark text-decoration-none">
                <img
                  className="card-img-top"
                  src={`https://picsum.photos/200?random=${post.id}`}
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title text-center text-primary">User ID : {post.id}</h4>
                  <h5 className="card-title text-warning">Title : {post.title.slice(0, 15)}...</h5>
                  <p className="card-text text-secondary">Body : {post.body.slice(0, 25)}<span className="text-info"> Read More...</span></p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;