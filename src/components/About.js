import React from 'react'

export default function About(props) {
      

  return (
    <div className= {`container text-${props.mode=== 'light'? 'black':'white'} `}>
    <h1>{props.title}</h1>
    <div className="sub-heading my-4">
        <h2>Analyse your Text </h2><br />
        <p> Enter or Copy/Paste your text in the textbox and convert it according to your use. TextUtils enables you to change your text to UpperCase, LowerCase or Copy your text.</p> <br />
        <h2>Free to Use</h2><br />
        <p> This utility has been developed for the entire user community for free of cost. You can feel at ease while using the functions We know that these utilities are absolutely needed in our day to day lives while doing our work </p><br />
        <h2>Browser Compatible</h2><br />
        <p> TextUtils is compatible with Windows,MacOS and Linux operating systems.</p>
    </div>

    </div>
  )
}

