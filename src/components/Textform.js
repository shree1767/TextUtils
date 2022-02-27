import React , {useState} from 'react'


export default function Textform(props) {


  const [text,setText] = useState('');

  const handleUpClick = () => {
      let newText= text.toUpperCase();
      setText(newText)
  }
   
  const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText)
  }

  const handleClearClick = () => {
    let newText = " "
    setText(newText)
  }

  const handleCopyClick=()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!",'success')
  }

  const handleOnChange =(event) =>{
       setText(event.target.value)
  } 

  let myStyle ={
    color:`${props.mode === 'light'? 'black': 'white'}`,
    backgroundColor: `${props.mode=== 'light'? 'white':'#343a40'}`,
    border: `${props.mode=== 'light'? '1px solid black':'none'}`
    
  }

  return (
    <>
    <div className= {`container text-${props.mode=== 'light'? 'black':'white'}`} >
     <h1>{props.title}</h1>
     <div className="mb-3">
      <textarea className={`form-control`} style= {myStyle} value= {text} onChange={handleOnChange} id="myBox" rows="8">
      </textarea>
     </div>
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleUpClick} >
       Upper Case
     </button> 
     <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick ={handleLoClick} >
       Lower Case
     </button>
     <button disabled ={text.length===0} id= "clear" className="btn btn-outline-success mx-1 my-1" onClick ={handleClearClick} >
       Clear
     </button>
     <button disabled ={text.length===0} id= "copy" className="btn btn-primary mx-1 my-1" onClick ={handleCopyClick} >
       Copy text
     </button>


    </div>
    <div className={`container my-4 text-${props.mode=== 'light'? 'black':'white'}`}>
      <h2>Text Summary</h2>
      <p> {text.split(" ").filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
      <p> Reading time: {0.0008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} minutes</p>
      <h2>Preview</h2>
      <p> {text.length>0?text:'Nothing to preview'}</p>

    </div>
    </>  
  )
}
