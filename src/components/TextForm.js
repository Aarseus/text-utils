import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase','success')
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to lowercase','success')
  }
  const handle=()=>{
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }
  const handleClear=()=>{
    let newText='';
    setText(newText)
    props.showAlert('Textfield cleared','success')

  }
  const removeExtraSpaces=()=>{
    let newText= text.split(/[  ]+/)
    setText(newText.join(' '))
  }
  const [myFontStyle, setMyFontStyle] = useState({
   fontFamily:'Times New Roman'
  });
  const changeFont = () => {
    if (myFontStyle.fontFamily == "Times New Roman") {
      setMyFontStyle({
        fontFamily:'Courier New'
      });
     
    } else if(myFontStyle.fontFamily=='Courier New')
    {
      setMyFontStyle({
     fontFamily:'Franklin Gothic Medium'
      });
   
    }else if(myFontStyle.fontFamily=='Franklin Gothic Medium') 
    {
      setMyFontStyle({
     fontFamily:'Gill Sans '
      });
    }else if(myFontStyle.fontFamily=='Gill Sans ')
     {
      setMyFontStyle({
     fontFamily:'Lucida Sans'
      });
    }
    else if(myFontStyle.fontFamily=='Lucida Sans') 
    {
      setMyFontStyle({
     fontFamily:'Trebuchet MS'
      });
    }
    else if(myFontStyle.fontFamily=='Trebuchet MS') 
    {
      setMyFontStyle({
     fontFamily:'Times New Roman'
      })
  }
   
}
  return (
    <>
      <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control`}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(". ").length} sentences,{text.split(" ").length} words,{text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p style={myFontStyle}>{text.length>0?text:'Enter your text to preview'}</p>
      <button className="btn btn-secondary mx-2" onClick={handle}>Read</button>
      <button className="btn btn-primary mx-2" onClick={changeFont}>Change font</button>
      </div>
    </>
  );
}
