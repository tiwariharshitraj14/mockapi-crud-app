import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, readUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.user);
  const [id, setId] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(readUser());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status" />
        <p className="mt-2">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {show && <CustomModal id={id} show={show} setShow={setShow} />}
      <h3 className="text-center mb-4">All Users</h3>
      <div className="row g-4">
        {users &&
          users.map((ele) => (
            <div className="col-md-4" key={ele.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                  <p className="card-text">Gender: {ele.gender}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => {
                        setId(ele.id), setShow(true);
                      }}
                    >
                      View
                    </button>
                    <Link
                      to={`/edit/${ele.id}`}
                      className="btn btn-sm btn-outline-success"
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => dispatch(deleteUser(ele.id))}
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
