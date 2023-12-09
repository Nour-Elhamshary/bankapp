import ClientSummary from "./components/clients/clients";

const APP=()=>{
  const dummyclient={
    name:'Mazen',
    email:'mazen@gmail.com',
    password: 'MazenSuckDi'
  };

  return(
  <div>
    <ClientSummary client={dummyclient}/>
  </div>  
  );
};
export default APP;
