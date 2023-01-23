import { useState } from "react";
import {Ad} from "./Ad"
import '../css/AdDesigner.css';

export function AdDesign() {

    const [flavor, setFlavor] = useState<string>('Vanilla');
    const [isLight, setIsLight] = useState<boolean>(true);
    const [fontSize, setFontSize] = useState<number>(24);

    return (
        <div id="AdDesign">
        <h2>Ad Design</h2>

        
        <Ad flavor={flavor} isLight={isLight} fontSize={fontSize}/>
        <h2 className="sans">What To Support:</h2>

        <div className="button-bar">
        <button onClick={() => setFlavor('Chocolate')}>Chocolate</button>
        <button onClick={() => setFlavor('Vanilla')}>Vanilla</button>
        <button onClick={() => setFlavor('Strawberry')}>Strawberry</button>
        </div>
        
        <h2 className="sans">Color Theme</h2>
        <div className="button-bar">
        <button onClick={() => setIsLight(true)}>Light</button>
        <button onClick={() => setIsLight(false)}>Dark</button>
        </div>

        <h2 className="sans">Font Size</h2>
        <div className="button-bar-font">
        <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
        <input type="number" value={fontSize}></input>
        <button onClick={() => setFontSize(fontSize - 1)}>Down</button>
        </div>
        </div>
        
    )
}

