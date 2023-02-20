import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

const DataProvider = ({children}) => {

    const [user,setuser] = useState();
    const [jwt,setjwt] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const userdata = (localStorage.getItem('userdata'));
        const jwtdata = (localStorage.getItem('jwt'));
        setuser(userdata);
        setjwt(jwtdata);

        console.log('setuser data is',user);
        console.log('setjwt data is',jwt);

        // if(!userdata){
        //     navigate('/')
        // }
    },[navigate])

return(
    <DataContext.Provider value = {{ user, setuser ,jwt ,setjwt }}>
            {children}
    </DataContext.Provider>
)}

export default DataProvider;

export const Datastate = () => {
    return useContext(DataContext);
}