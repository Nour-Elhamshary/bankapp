import { useEffect,useState } from 'react';
import ClientList from '../components/clients/clientList';

const ClientPage =()=>{

    const [client,setClients] = useState([]);
    const [isLoading, setIsLoading]=useState(true);

    useEffect(()=>{
        const fetchAbortController=new AbortController();
        const fetchSignal=fetchAbortController.signal;

        const fetchClients=async()=>{
            try {
                const response = await fetch('http://localhost:3000/api/clients',{
                method: 'GET',    
                signal:fetchSignal
                });
                const data = await response.json();
                console.log(data);

                if(!response.ok){
                    throw Error(data.error);
                }
                setClients(data);
                setIsLoading(false);

                
            } catch (error) {
                console.log(error.message);                
            }
        };
        fetchClients();
        return()=>{
            fetchAbortController.abort();
        }
    }, []);    
    
    if(isLoading){
        return <p>Loading List of existing clients...</p>;
    }

    return (
    <div className='flex flex-col items-center justify-center'>
        <ClientList client={client} />
    </div>
    );
};

export default ClientPage;