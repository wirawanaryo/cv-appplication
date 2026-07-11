import type React from "react";
import { useState } from 'react'
import styles from "./WorkExpForm.module.css";

interface WorkInfoType {
  id: string;
  company: string;
  position: string;
  startdate: string;
  enddate: string;
  summary: string;
};
interface WEformProps {
  WEData: WorkInfoType[];
  UpdateWEData: React.Dispatch<React.SetStateAction<WorkInfoType[]>>;
}
interface MainformProps {
  WEData: WorkInfoType[];
  UpdateWEData: React.Dispatch<React.SetStateAction<WorkInfoType[]>>;
  data: WorkInfoType;
  index: number;
}


function MainForm({ WEData, UpdateWEData, data, index }: MainformProps) {
  function deleteForm(id: string) {
    UpdateWEData(prev => prev.filter(WEdata => WEdata.id !== id))
  }

  function handlechange(id:string, value:string, target:string) {
    UpdateWEData(WEData.map(WE => {
      if (WE.id === id) {
        return {
          ...WE,
          [target]: value
        };
      } else {
        return WE;
      }
    }))
  }


  return <form className={styles.MainForm} id="WEForm">
    <div className={styles.FormHeader}>
      <h2>Company {index + 1}</h2>
      <button type="button" className={styles.DeleteButton} onClick={() => deleteForm(data.id)}>🗑</button>
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="company">Company</label>
      <input
        type="text"
        id={styles.Company}
        name="company"
        defaultValue={data.company}
        placeholder="Big Bad Corp"  
        onChange={(e)=>handlechange(data.id, e.target.value, e.target.name)}      
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="position">Position</label>
      <input
        type="text"
        id={styles.Position}
        name="position"
        defaultValue={data.position}
        placeholder="Manager"
        onChange={(e)=>handlechange(data.id, e.target.value, e.target.name)} 
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="startdate">Start Date</label>
      <input
        type="date"
        id={styles.StartDate}
        name="startdate"
        defaultValue={data.startdate}
        onChange={(e)=>handlechange(data.id, e.target.value, e.target.name)} 
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="endDate">End Date</label>
      <input
        type="date"
        id={styles.EndDate}
        name="enddate"
        defaultValue={data.enddate}
        onChange={(e)=>handlechange(data.id, e.target.value, e.target.name)} 
      />
    </div>
    <div className={styles.FormAreaHolders}>
      <label htmlFor="summary">Summary</label>
      <textarea
        id={styles.summary}
        name="summary"
        rows={3}
        defaultValue={data.summary}
        placeholder="Tell us about it..."
        onChange={(e)=>handlechange(data.id, e.target.value, e.target.name)} 
      ></textarea>
    </div>
    <hr></hr>
  </form>
}

function MainFormContainer({ WEData, UpdateWEData }: WEformProps) {
  return <div id="WEformContainer">
    {WEData.map((WE, index) => (
      <MainForm key={WE.id} WEData={WEData} UpdateWEData={UpdateWEData} data={WE} index={index} />
    ))}
  </div>
}

export function WorkExpForm({ WEData, UpdateWEData }: WEformProps) {
  const [TempWEData, setTempWEData] = useState<WorkInfoType[]>(WEData)  
  function handleAddMore() {
    setTempWEData(prev => [
      ...prev, {
        id: crypto.randomUUID(),
        company: '',
        position: '',
        startdate: '',
        enddate: '',
        summary: ''
      },
    ])    
  }
  
  console.log(TempWEData)
  function handleSubmit() {    
    UpdateWEData(TempWEData);
  }


  return <div className={styles.WorkExpForm}>
    <h2>Work Experience</h2>
    <hr></hr>
    <MainFormContainer WEData={TempWEData} UpdateWEData={setTempWEData} />
    <div className={styles.formButtons}>
      <button type="button" onClick={handleSubmit}>Update Data</button>
      <button type="button" onClick={handleAddMore}>Add More</button>
    </div>
  </div>
}