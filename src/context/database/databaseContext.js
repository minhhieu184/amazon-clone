import { useContext, createContext } from "react";

const databaseContext = createContext()
const useDatabase = () => useContext(databaseContext)

export { useDatabase }
export default databaseContext
