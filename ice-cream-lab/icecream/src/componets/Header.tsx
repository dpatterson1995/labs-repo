import '../css/Header.css';

interface User{
    User:string
}


export function Header (props:User){

    return(
    <div className="user">
        <header>
            <h2 id="header">Ice Cream Wars</h2>
            <p id="welcome">Welcome {props.User}</p>
        </header>

    </div>
    )
}