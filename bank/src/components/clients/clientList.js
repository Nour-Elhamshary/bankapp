import ClientSummary from "./ClientSummary";

const ClientList=(props)=>{
    return(
        <div className="grid grid-cols-2 gap-5 justify-center items-center">
            {props.client.map((p)=>{
                console.log(props);
                console.log("\n");
                console.log(p._id);
                <ClientSummary client={p} key={p._id}/>
            })}
        </div>
    );
};

export default ClientList;