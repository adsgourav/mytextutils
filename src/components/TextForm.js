import React, {useState} from 'react'


export default function TextForm(props) {



    const handleUpClick = () => {
        // console.log('uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Uppercase","success")
    }
    const handleLowClick = () => {
        // console.log('uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase","success")
    }
    const handleCopy = () => {  
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to Clipboard","info")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Spaces","success")
    }

    const handleClrClick = () => {
        // console.log('uppercase was clicked' + text);
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // text = "this is new text"; //this is wrong way to change a text
    // setText = ("This is new text of mine");
    return (
        <>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1 className="mb-4">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" style={{backgroundColor: props.mode === 'dark'?'#1a3a53':'white', color: props.mode === 'dark'?'white':'black'}} rows="8" onChange={handleOnChange} placeholder="Enter Text Here"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode === 'dark'?'#00508f':'#0d6efd'}} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode === 'dark'?'#00508f':'#0d6efd'}} onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode === 'dark'?'#00508f':'#0d6efd'}} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode === 'dark'?'#00508f':'#0d6efd'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" style={{backgroundColor: props.mode === 'dark'?'#00508f':'#0d6efd'}} onClick={handleClrClick}>Clear All</button>

        </div>
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} WORDS - {text.length} CHARACTERS</b></p>
        </div>
        </>
    )
}
