const clientSummary=(props)=>{
    return(
        <div className="flex flex-clo items-center gap-8 rounded-x1 bg-slate-200 w-[500px] aspect-square overflow-hidden">
            {/*div to represent card header*/}
            <div className="flex items-center justify-center bg-white w-full">
                <h1>{props.client.name}</h1>
                <h1>{props.client.email}</h1>
                <h1>{props.client.password}</h1>
            </div>
            {/*div to represent card body*/}
            <div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h3 className="font-bold">{props.client.name}</h3>
                    <h5>{props.client.email}</h5>
                </div>
                {/*div to represent card action */}
                <button className="bg-white py-3 px-10 font-bold rounded-x1">
                    View
                </button>
            </div>
        </div>
    );
};

export default clientSummary;