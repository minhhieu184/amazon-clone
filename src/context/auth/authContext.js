import { useContext, createContext } from "react";

const authContext = createContext()
const useAuth = () => useContext(authContext)

export default authContext
export { useAuth }