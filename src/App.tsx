
import { useState } from 'react'
import { Header } from "./components/Header";
import { FormContainer } from "./components/FormContainer";
import { PreviewContainer } from "./components/PreviewContainer";

interface GeneralInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  domicile: string;
  summary: string;
};

function App() {
  const [GIData, setGIData] = useState<GeneralInfo>(
    {
      fullName: '',
      jobTitle: '',
      email: '',
      phone: '',
      domicile: '',
      summary: ''
    }
  )

  return (
    <>
      <Header />
      <div className="main-container">
        <FormContainer GIdata={GIData} UpdateGIdata={setGIData} />
        <PreviewContainer />
      </div>
    </>
  )
}

export default App
