import { useEffect, useState } from "react";
import styles from "./singleUserPage.module.css";

const SingleUserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/8`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>User Information:</h1>
      {userData ? (
        <div className={styles["userInf"]}>
          <p>
            <span>ID:</span> {userData.id}
          </p>
          <p>
            <span>Name:</span> {userData.name}
          </p>
          <p>
            <span>Username:</span> {userData.username}
          </p>
          <p>
            <span>Email:</span> {userData.email}
          </p>
          <p>
            <span>Address:</span>
          </p>
          <ul>
            <li>
              Street: {userData.address ? userData.address.street : "N/A"}
            </li>
            <li>Suite: {userData.address ? userData.address.suite : "N/A"}</li>
            <li>City: {userData.address ? userData.address.city : "N/A"}</li>
            <li>
              Zipcode: {userData.address ? userData.address.zipcode : "N/A"}
            </li>
            <li>
              Geo: Lat: {userData.address ? userData.address.geo.lat : "N/A"},
              Lng: {userData.address ? userData.address.geo.lng : "N/A"}
            </li>
          </ul>
          <p>
            <span>Phone:</span> {userData.phone}
          </p>
          <p>
            <span>Website:</span> {userData.website}
          </p>
          <p>
            <span>Company:</span>
          </p>
          <ul>
            <li>Name: {userData.company ? userData.company.name : "N/A"}</li>
            <li>
              Catch Phrase:{" "}
              {userData.company ? userData.company.catchPhrase : "N/A"}
            </li>
            <li>BS: {userData.company ? userData.company.bs : "N/A"}</li>
          </ul>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default SingleUserPage;
