import type React from "react";
import { useState } from 'react'
import styles from "./SkillsForm.module.css"

interface SkillInfoType {
  id : string;
  skillname: string;  
};
interface SkillformProps {
  SkillData: SkillInfoType[];
  UpdateSkillData: React.Dispatch<React.SetStateAction<SkillInfoType[]>>;
}
interface MainformProps {
  SkillData: SkillInfoType[];
  UpdateSkillData: React.Dispatch<React.SetStateAction<SkillInfoType[]>>;
  data: SkillInfoType;
  index: number;
}

function MainForm({SkillData, UpdateSkillData, data, index}:MainformProps) {
  function deleteForm(id: string) {
    UpdateSkillData(prev => prev.filter(Skilldata => Skilldata.id !== id))
  }
  function handlechange(id:string, value:string, target:string) {
    UpdateSkillData(SkillData.map(Skill => {
      if (Skill.id === id) {
        return {
          ...Skill,
          [target]: value
        };
      } else {
        return Skill;
      }
    }))
  }

  return <form className={styles.MainForm}>    
    <div className={styles.FormInputHolders}>              
      <input
        type="text"
        id={styles.SkillName}
        name="skillname"
        placeholder={`Skill Name ${index+1}`}
        onChange={(e)=>handlechange(data.id, e.target.value, e.target.name)} 
      />
      <button type="button" className={styles.DeleteButton} onClick={() => deleteForm(data.id)}>🗑</button> 
    </div>     
    <hr></hr>
  </form>
}

function MainFormContainer({ SkillData, UpdateSkillData }: SkillformProps) {
  return <div id="SkillformContainer">
    {SkillData.map((Skill, index) => (
      <MainForm key={Skill.id} SkillData={SkillData} UpdateSkillData={UpdateSkillData} data={Skill} index={index} />
    ))}
  </div>
}

export function SkillsForm({ SkillData, UpdateSkillData }: SkillformProps) {
  const [TempSkillData, setTempSkillData] = useState<SkillInfoType[]>(SkillData)
  function handleAddMore() {
    setTempSkillData(prev => [
      ...prev, {
        id: crypto.randomUUID(),
        skillname: ''       
      },
    ])    
  }
  function handleSubmit() {    
    UpdateSkillData(TempSkillData);
  }

  return <div className={styles.SkillsForm}>    
    <h2>Skills</h2>
    <hr></hr>
    <MainFormContainer SkillData={TempSkillData} UpdateSkillData={setTempSkillData} />       
    <div className={styles.formButtons}>
      <button type="button" onClick={handleSubmit}>Update Data</button>
      <button type="button" onClick={handleAddMore}>Add More</button>
    </div>        
  </div>
}