
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
interface WorkInfo {
  id : string;
  company: string;
  position: string;
  startdate: string;
  enddate: string;  
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
  const [WEData, setWEData] = useState<WorkInfo[]>([
    {
      id: crypto.randomUUID(),
      company: '',
      position: '',
      startdate: '',
      enddate: '',
      summary: ''
    }
  ])

  return (
    <>
      <Header />
      <div className="main-container">
        <FormContainer 
          GIdata={GIData} 
          UpdateGIdata={setGIData} 
          WEData={WEData}
          UpdateWEData={setWEData}
        />
        <PreviewContainer GIdata={GIData}/>
      </div>
    </>
  )
}

export default App
