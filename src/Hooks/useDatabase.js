import axios from "axios";
import { useEffect, useState } from "react";
const useDatabase = () => {
    const [resetForm, setResetForm] = useState(false);
    const [destinations, setDestinations] = useState([]);
    
    const handleCreateDestinaitonPost = data => {
        axios.post('http://localhost:5000/destinations', data)
        .then(result => {
            if(result.data.insertedId){
                setResetForm(true);
            }
        });
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/destinations')
        .then(res => setDestinations(res.data));
    },[]);
    

    return {
        handleCreateDestinaitonPost,
        resetForm,
        setResetForm,
        destinations
    };
}

export default useDatabase;