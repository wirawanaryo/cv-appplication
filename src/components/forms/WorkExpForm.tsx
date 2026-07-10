import type React from "react";
import styles from "./WorkExpForm.module.css";

interface WorkInfoType {
  id : string;
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

function MainForm({ WEData, UpdateWEData }: WEformProps) {
  return <form className={styles.MainForm} id="WEForm">
    <div className={styles.FormHeader}>
      <h2>Company 1</h2>
      <button type="button" className={styles.DeleteButton}>🗑</button>
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="Company">Company</label>
      <input
        type="text"
        id={styles.Company}
        name="Company"
        placeholder="Big Bad Corp"
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="Position">Position</label>
      <input
        type="text"
        id={styles.Position}
        name="Position"
        placeholder="Manager"
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="StartDate">Start Date</label>
      <input
        type="date"
        id={styles.StartDate}
        name="StartDate"
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="EndDate">End Date</label>
      <input
        type="date"
        id={styles.EndDate}
        name="EndDate"
      />
    </div>
    <div className={styles.FormAreaHolders}>
      <label htmlFor="summary">Summary</label>
      <textarea
        id={styles.summary}
        name="summary"
        rows={3}
        placeholder="Tell us about it..."
      ></textarea>
    </div>
    <hr></hr>
  </form>
}

export function WorkExpForm({ WEData, UpdateWEData }: WEformProps) {
  function handleAddMore() {
    WEData.push({
      id: crypto.randomUUID(),
      company: '',
      position: '',
      startdate: '',
      enddate: '',
      summary: ''
    });
    console.log('Add more button clicked')
    console.log(WEData)
  }
  

  return <div className={styles.WorkExpForm}>
    <h2>Work Experience</h2>
    <hr></hr>
    <MainForm WEData={WEData} UpdateWEData={UpdateWEData} />
    <div className={styles.formButtons}>
      <button type="submit" form="WEForm">Update Data</button>
      <button type="button" onClick={handleAddMore}>Add More</button>
    </div>
  </div>
}