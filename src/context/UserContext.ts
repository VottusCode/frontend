import { createContext } from "react";

const defaultUser = { authenticated: false, user: null };

const UserContext = createContext(defaultUser);
UserContext.displayName = "UserContext";

export default UserContext;
