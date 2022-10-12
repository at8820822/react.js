import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
    const  handleUpClick=()=>{
    console.log("this is click" + text);
        let newText=text.toLocaleUpperCase();
        setText(newText)}
        



        const  handleLoClick=()=>{
          console.log("this is click" + text);
              let newText=text.toLocaleLowerCase();
              setText(newText)}
  const handleOnChange=(event )=>{
    setText(event.target.value)
  }
             
const handleSliceClick=()=>{

  let newText=text.slice(5);
  setText(newText)
}

const handleExtraSpcce=()=>{
  let newText=text.replace(/\s+/g, ' ').trim()
  setText(newText)
}
        const  handleClearClick=()=>{
          console.log("this is click" + text);
              let newText=" ";
              setText(newText)
            }
           const  copyToClipboard = (text) => {
              console.log('text', text)
              var textField = document.createElement('textarea')
              textField.innerText = text
              document.body.appendChild(textField)
              textField.select()
              document.execCommand('mybox')
              textField.remove()
            }

          
  return (
   <>
   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
       
<h1 className='my-3'>{props.heading} </h1>
<div className="mb-4">

 <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}            value={text}  onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
  
   <button className="btn btn-primary mx-1" onClick= {handleUpClick} >Convert uper case</button>
  
   <button className="btn btn-primary mx-1" onClick= {handleLoClick} >Convert lower case</button>
  
   <button  className="btn btn-primary mx2" onClick={handleSliceClick}>slice of text</button>

  
   <button className="btn btn-primary mx-1" onClick= {handleClearClick} >Clear the text</button>

   <button className="btn btn-primary mx-1" onClick= {handleExtraSpcce} >clear space in text</button>
   <button className="btn btn-primary mx-1" id="copy" onClick= {copyToClipboard} >copy text</button>
   </div>
 <div className="container my-2"  style={{color:props.mode==='dark'?'white':'black'}}>
  <h1>your text summary</h1>
  <p>{text.split(" ").length} Words and {text.length}Characters</p>
  <p>{0.008*text.split(" ").length} minutes read </p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter to something in textbox above to preveiw it here "}</p>
 </div>
   
   
   </>
  )
  }
