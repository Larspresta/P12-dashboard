import { useEffect, useState } from "react";
import styles from "./User.module.css";
import PropTypes from "prop-types";
import { GetUserMainInfo } from "../../apiService.js";

/**
 * Show welcome message and get user first name
 * @param {object} props
 * @param {number} props.userId ID to get user name
 * @returns {React.ReactElement} Component to display user's name
 */

function User({ userId }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetUserMainInfo(userId)
      .then((response) => {
        const { firstName } = response.data.userInfos;
        setUser({ ...response.data, firstName });
      })
      .catch((error) => {
        console.error("Error getting user information", error);
        setError(error);
      });
  }, [userId]);

  if (error) return <div>Error loading user info.</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div className={styles.user}>
      <h1>
        Hello <span className={styles.userName}>{user.firstName}</span>{" "}
      </h1>
      <h3>Congratulations! You reached yesterday’s goal! 👏</h3>
    </div>
  );
}

User.propTypes = {
  userId: PropTypes.number,
};

export default User;
