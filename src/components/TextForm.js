import React,{useState} from 'react'
export default function TextForm(props) {
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text is cleared","success");
    }
    const handleCamelClick=()=>{
        let ans=text.toLowerCase();
        let newTxt=ans.split(" ").reduce((s, c) => s + (" "+c.charAt(0).toUpperCase() + c.slice(1)));
        setText(newTxt);
        props.showAlert("Converted to Camelcase","success");
    }
    const handleTitleClick = ()=>{
        let newTxt=text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newTxt);
        props.showAlert("Converted to Titlecase","success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard","success");
        // document.getSelection().removeAllRanges();
    }
    const handleExtraSpace=()=>{
        let newtxt=text.split(/[ ]+/);
        setText(newtxt.join(' '));
        props.showAlert("Extra space has been removed","success");
    }
    const handleAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) === 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext);
        props.showAlert("Converted to Alternatingcase","success");
    }
    const[text,setText]=useState('');
    let sectionHeadingStyle = {
        // border: `3px solid ${props.mode === 'dark' ? 'black' : 'white'}`,
        padding: '0.1rem 0.4rem',
        borderRadius: '0.5rem',
        textAlign: 'center',
        display: 'inline-block',
       
    };
  return (
    <>
        <div className="container my-3"style={{color:props.mode==='light'?'black':'white'}}>
                <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="6" 
                style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <center>
                <button disabled={text.length===0}className="btn btn-warning mx-1 my-1"style={{width:'200px'}} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0}className="btn btn-warning mx-1 my-1" style={{width:'200px'} }onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0}className="btn btn-warning mx-1 my-1" style={{width:'200px'}} onClick={handleCamelClick}>Convert to Camelcase</button>
                <button disabled={text.length===0}className="btn btn-warning mx-1 my-1" style={{width:'200px'}} onClick={handleTitleClick}>Convert to Titlecase</button>
                {/* <br></br>
                <br></br> */}
                <button disabled={text.length===0}className="btn btn-warning mx-1 my-1" style={{width:'200px'}} onClick={handleAlternatingCase}>Alternating Case</button>
                <button disabled={text.length===0}className="btn btn-warning mx-1 my-1" style={{width:'200px'}} onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length===0}className="btn btn-warning mx-1 my-1" style={{width:'200px'}} onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0}className="btn btn-warning mx-1 my-1" style={{width:'200px'}} onClick={handleCopy}>Copy text</button>
                </center>
               

       </div>
       <div className="container my-3"style={{color:props.mode==='light'?'black':'white'}}>
        <h5 style={sectionHeadingStyle}>Your Text Summary:</h5>
        <p><i>Word Count</i> :<strong> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</strong> <b>|</b> <i>Character Count</i> : <strong>{text.length}</strong> <b>|</b> <i>Time to read</i>  : <strong>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length}</strong> minutes  </p>
        {/* <p>Your text requires {0.008 * text.split(' ').length} minutes to read</p> */}
        <h5 style={sectionHeadingStyle}>Preview</h5>
        <p>{text.length>0?text:"Nothing to preview"}</p>
       </div>
    </>
  )
}
