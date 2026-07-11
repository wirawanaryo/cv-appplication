import type React from "react";
import { useState } from 'react'
import styles from "./EduForm.module.css";

interface EduInfoType {
  id: string;
  school: string;
  degree: string;
  startdate: string;
  enddate: string;
  details: string;
};
interface EduformProps {
  EduData: EduInfoType[];
  UpdateEduData: React.Dispatch<React.SetStateAction<EduInfoType[]>>
}
interface MainformProps {
  EduData: EduInfoType[];
  UpdateEduData: React.Dispatch<React.SetStateAction<EduInfoType[]>>;
  data: EduInfoType;
  index: number;
}

function MainForm({ EduData, UpdateEduData, data, index }: MainformProps) {
  function deleteForm(id: string) {
    UpdateEduData(prev => prev.filter(EduData => EduData.id !== id))
  }
  function handlechange(id:string, value:string, target:string) {
    UpdateEduData(EduData.map(Edu => {
      if (Edu.id === id) {
        return {
          ...Edu,
          [target]: value
        };
      } else {
        return Edu;
      }
    }))
  }
  
  return <form className={styles.MainForm}>
    <div className={styles.FormHeader}>
      <h2>School {index + 1}</h2>
      <button type="button" className={styles.DeleteButton} onClick={() => deleteForm(data.id)}>🗑</button>
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="school">School</label>
      <input
        type="text"
        id={styles.SchoolName}
        name="school"
        defaultValue={data.school}
        placeholder="Big Bad University"
        onChange={(e)=>handlechange(data.id, e.target.value, e.target.name)}  
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        id={styles.Degree}
        name="degree"
        defaultValue={data.degree}
        placeholder="Computer Science"
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
      <label htmlFor="enddate">End Date</label>
      <input
        type="date"
        id={styles.EndDate}
        name="enddate"
        defaultValue={data.enddate}
        onChange={(e)=>handlechange(data.id, e.target.value, e.target.name)}  
      />
    </div>
    <div className={styles.FormAreaHolders}>
      <label htmlFor="details">Details</label>
      <textarea
        id={styles.Details}
        name="details"
        rows={3}
        defaultValue={data.details}
        placeholder="GPA and Such"
        onChange={(e)=>handlechange(data.id, e.target.value, e.target.name)}  
      ></textarea>
    </div>
    <hr></hr>
  </form>
}

function MainFormContainer({ EduData, UpdateEduData }: EduformProps) {
  return <div id="EduformContainer">
    {EduData.map((Edu, index) => (
      <MainForm key={Edu.id} EduData={EduData} UpdateEduData={UpdateEduData} data={Edu} index={index} />
    ))}
  </div>
}

export function EduForm({ EduData, UpdateEduData }: EduformProps) {
  const [TempEduData, setTempEduData] = useState<EduInfoType[]>(EduData)
  console.log(TempEduData)
  function handleSubmit() {
    UpdateEduData(TempEduData);
  }
  function handleAddMore() {
    setTempEduData(prev => [
      ...prev, {
        id: crypto.randomUUID(),
        school: '',
        degree : '',
        startdate: '',
        enddate: '',
        details: ''
      },
    ])    
  }

  return <div className={styles.EduForm}>
    <h2>Education</h2>
    <hr></hr>
    <MainFormContainer EduData={TempEduData} UpdateEduData={setTempEduData} />
    <div className={styles.formButtons}>
      <button type="button" onClick={handleSubmit}>Update Data</button>
      <button type="button" onClick={handleAddMore}>Add More</button>
    </div>
  </div>
}