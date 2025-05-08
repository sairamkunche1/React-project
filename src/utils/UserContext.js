import React from "react";
import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Sairam",
});

export default UserContext;