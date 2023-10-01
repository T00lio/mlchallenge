import React, { useEffect, useState } from "react";
import {  } from "../../firebase";
import { onStateChanged, signOut } from "firebase/";

const Details = () => {
  const [User, setUser] = useState(null);

  useEffect(() => {
    const listen = onStateChanged(, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut()
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div>
      {User ? (
        <>
          <p>{`Signed in as ${User.email}`}</p>
          <button onClick={userSignOut}>Sign Out?</button>
        </>
      ) : (
        <>Signed Out</>
      )}
    </div>
  );
};
export default Details;
