const Card =(props)=>{
    return (
        <div className="flex flex-col items-center gap-8 rounded-xl bg-slate-100 w-[500px] aspect-square overflow-hidden">
            {props}
        </div>
    );
};

export default Card;