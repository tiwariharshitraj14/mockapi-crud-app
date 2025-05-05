import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { updatedUser } from "../features/userDetailSlice";

const Update = () => {
  const { id } = useParams();
  const [updateUser, setUpdateUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateUser(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatedUser(updateUser));
    navigate("/read");
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h3 className="text-center text-primary mb-4">Edit the Data</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={updateUser && updateUser.name}
              onChange={newData}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={updateUser && updateUser.email}
              onChange={newData}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={updateUser && updateUser.age}
              onChange={newData}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-block mb-2">Gender</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="Male"
                name="gender"
                checked={updateUser && updateUser.gender[0] === "Male"}
                onChange={newData}
                required
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="Female"
                name="gender"
                checked={updateUser && updateUser.gender[0] === "Female"}
                onChange={newData}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary rounded-pill">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
