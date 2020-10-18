import { createContext } from "react";

const defaultUser = { authenticated: false, user: null };

const UserContext = createContext(defaultUser);
UserContext.displayName = "UserContext";

/** @deprecated Using Apollo's cached me result */
export default UserContext;
