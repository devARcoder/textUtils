import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Converted to Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    // console.log("Converted to lowercase");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleCopyClick = () =>{
    document.getSelection().removeAllRanges()
    navigator.clipboard.writeText(text);
  }
  const handleRemoveExtraSpaceClick = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  // const capitalizeFirstLetterOfEachWord = (text) => {
  //   return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  // };
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("Handle on changed");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3 text-center">
        <h1 className="text-3xl font-bold mt-5 mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            value={text}
            onChange={handleOnChange}
            className="form-control text-center"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 space-y-2 space-x-0 mx-14 md:grid-cols-4 md:space-y-0 md:space-x-4 md:mx-2 md:flex justify-center">
          <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary">
            Convert to UpperCase
          </button>
          <button disabled={text.length===0} onClick={handleLowerClick} className="btn btn-primary">
            Convert to LowerCase
          </button>
          <button disabled={text.length===0} onClick={handleCopyClick} className="btn btn-primary">
            Copy to Clipboard
          </button>
          <button disabled={text.length===0} onClick={handleRemoveExtraSpaceClick} className="btn btn-primary">
            Remove Extra Spaces
          </button>
          {/* <button onClick={capitalizeFirstLetterOfEachWord} className="btn btn-primary">
            Convert to Capitalize
          </button> */}
          <button disabled={text.length===0} onClick={handleClearClick} className="btn btn-primary">
            Clear Text
          </button>
        </div>
      </div>
      <hr className="mx-12"/>
      <div className="container mt-6 text-center">
        <h2 className="text-2xl font-bold">Your Text Summery</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minustes Read</p>
        <h2 className="text-2xl font-bold">Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}
