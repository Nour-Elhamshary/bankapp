import Card from '../../UI/Card/Card';
import CardAction from '../../UI/Card/CardAction';
import CardBody from '../../UI/Card/CardBody';
import CardHeader from '../../UI/Card/CardHeader';


const ClientSummary=(props)=>{
    return(
       <Card>
        <CardHeader>
            <h1>{props.client.name}</h1>
            <h1>{props.client.email}</h1>
            <h1>{props.client.password}</h1>
            <h1>{props.key}</h1>
        </CardHeader>
        <CardBody>
            <h3 className="font-bold">{props.client.name}</h3>
            <h5>{props.client.email}</h5>
        </CardBody>
        <CardAction>
            <button className="bg-white py-3 px-10 font-bold rounded-x1">
                View
            </button>
        </CardAction>
       </Card>
            
    );
};

export default ClientSummary;