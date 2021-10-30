import { useContext } from "react"
import { DbContext } from "../Context/DdProvider"

const useDb = () => {
    return useContext(DbContext);
}

export default useDb;