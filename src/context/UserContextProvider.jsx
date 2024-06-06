/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import UserContext from "./UserContext";
import React, { useState } from "react";

const UserContextProvider = ({ children }) => {
    let [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
