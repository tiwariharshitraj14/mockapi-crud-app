import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getData = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    navigate("/read");
  };
  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h3 className="text-center text-primary mb-4">Fill the Data</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={getData}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={getData}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              onChange={getData}
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
                onChange={getData}
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
                onChange={getData}
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

export default Create;
