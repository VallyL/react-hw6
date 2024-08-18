import { useEffect, useState } from "react";
import styles from "../../components/UserProfile/styles.module.css";
import axios from "axios";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setUser(response.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.userContainer}>
      {user ? (
        <div>
          <img src={user.picture.large} alt="user photo" />
          <h2>
            {user.name.first} {user.name.last}
          </h2>
          <p>Email: {user.email}</p>
          <p>City: {user.location.city}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={fetchUser}>Load New User</button>
    </div>
  );
}

export default UserProfile;
