import './App.css'
import Form from './components/Form'
import Paragraph from './components/Paragraph'
import Button from './components/Button'
import { useState } from 'react';

function App() {

  const originalText = "I am the Paragraph";
  const hoverText = "You just hovered over me right now!!";

  const [paraText, setParaText] = useState(originalText);
  const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("No input submitted yet...")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleClick = () => {
    alert("I am clicked!!")
  }

  const handleMouseEnter = () => {
    setParaText(hoverText);
  }

  const handleMouseLeave = () => {
    setParaText(originalText)
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(inputText || "Form submitted with empty text...")
    setInputText("")
    setIsSubmitted(true)
  }
  const errorMessage = "Form submitted with empty text...";

  const isError = submittedText === errorMessage;

  let resultClass = "submission-result";
  if (isSubmitted) {
    (isError) ? resultClass += " error" : resultClass += " submitted";
  }

  return (
    <div className='main-app-content'>

      <Form>
        <div className='form-controls'>
          <h2>Form</h2>
          <div className='input-submit-container'>
            <input
              type="text"
              placeholder='Type here..'
              value={inputText}
              onChange={handleInputChange} />
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
          </div>
          <p className='input-feedback'>Current Input: {inputText}</p>
        </div>
      </Form>

      <h3 className={resultClass}>
        Submitted Result : {submittedText}
      </h3>

      <Paragraph onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {paraText}
      </Paragraph>

      <Button onClick={handleClick}>
        Click Me
      </Button>
    </div >
  )
}

export default App