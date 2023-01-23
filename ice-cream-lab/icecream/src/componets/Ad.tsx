import '../css/Ad.css';

interface AdProperties{
    flavor:string,
    isLight:boolean,
    fontSize:number
}

export function Ad(props:AdProperties){
    let className = "Ad " + (props.isLight ? "Ad--light": "Ad--dark");
    return(
        <div className={className}>
            <h4>Vote For:</h4>
            <p style={{fontSize: props.fontSize}}>{props.flavor}</p>
        </div>
    )
}