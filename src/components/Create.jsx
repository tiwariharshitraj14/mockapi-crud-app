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
    console.log(user);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User", user);
    dispatch(createUser(user));
    navigate("/read");
  };
  return (
    <div>
      <h2 className="my-2">Fill the data</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto my-5">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={getData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={getData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            onChange={getData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            value="Male"
            name="gender"
            onChange={getData}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="radio"
            value="Female"
            name="gender"
            onChange={getData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
