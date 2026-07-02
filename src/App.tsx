
import { useState } from 'react'
import { Header } from "./components/Header";
import { FormContainer } from "./components/FormContainer";
import { PreviewContainer } from "./components/PreviewContainer";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>      
      <div className="main-container">
        <FormContainer/>
        <PreviewContainer/>
      </div>      
    </>
  )
}

export default App
