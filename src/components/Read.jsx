import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { readUser } from "../features/userDetailSlice";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(readUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <div>
      <h2>All Data</h2>
      {users &&
        users.map((ele) => (
          <div
            className="card mx-auto my-2"
            style={{ width: "18rem" }}
            key={ele.id}
          >
            <div className="card-body">
              <h5 className="card-title">{ele.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {ele.email}
              </h6>
              <p className="card-text">{ele.gender}</p>
              <a href="#" className="card-link">
                View
              </a>
              <a href="#" className="card-link">
                Edit
              </a>
              <a href="#" className="card-link">
                Delete
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Read;
