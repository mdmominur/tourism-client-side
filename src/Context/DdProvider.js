import React, { createContext } from 'react';
import useDatabase from '../Hooks/useDatabase';

export const DbContext = createContext();
const DdProvider = ({children}) => {
    const allContext = useDatabase();
    return (
        <DbContext.Provider value={allContext}>
            {children}
        </DbContext.Provider>
    );
};

export default DdProvider;