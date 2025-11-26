import React, { useEffect, useState } from "react";
import { useUser } from "../hooks/apiHooks";

const Profile = () => {
  const { getUserByToken } = useUser();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }
        const userData = await getUserByToken(token);
        setUser(userData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load user data");
        console.log(err);
        setLoading(false);
      }
    };

    fetchUser();
  }, [getUserByToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {user.user_level && (
            <p>
              <strong>User Level:</strong> {user.user_level}
            </p>
          )}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Profile;
