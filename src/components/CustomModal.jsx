import "./CustomModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({ id, show, setShow }) => {
  const allUsers = useSelector((state) => state.user.users);
  const singleUser = allUsers.filter((ele) => ele.id === id);

  if (!show) return null;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalHeader">
          <h2>User Details</h2>
          <button className="closeBtn" onClick={() => setShow(false)}>
            &times;
          </button>
        </div>
        <div className="modalBody">
          {singleUser.length > 0 ? (
            singleUser.map((ele) => (
              <div key={ele.id} className="userDetails">
                <p>
                  <strong>Name:</strong> {ele.name}
                </p>
                <p>
                  <strong>Email:</strong> {ele.email}
                </p>
                <p>
                  <strong>Age:</strong> {ele.age}
                </p>
                <p>
                  <strong>Gender:</strong> {ele.gender}
                </p>
              </div>
            ))
          ) : (
            <p>No user data found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
