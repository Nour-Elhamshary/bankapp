import clientSummary from "./components/clients/clients";

const APP=()=>{
  const dummyclient={
    name:'Mazen',
    email:'mazen@gmail.com',
    password: 'MazenSuckDi'
  };

  return(
  <div>
    <clientSummary client={dummyclient}/>
  </div>  
  );
};
export default APP;