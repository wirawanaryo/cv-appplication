import type React from "react";
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
  return <form className={styles.MainForm} id="WEForm">
    <div className={styles.FormHeader}>
      <h2>Company {index+1}</h2>
      <button type="button" className={styles.DeleteButton}>🗑</button>
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="Company">Company</label>
      <input
        type="text"
        id={styles.Company}
        name="Company"
        defaultValue={data.company}
        placeholder="Big Bad Corp"
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="Position">Position</label>
      <input
        type="text"
        id={styles.Position}
        name="Position"
        defaultValue={data.position}
        placeholder="Manager"
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="StartDate">Start Date</label>
      <input
        type="date"
        id={styles.StartDate}
        name="StartDate"
        defaultValue={data.startdate}
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="EndDate">End Date</label>
      <input
        type="date"
        id={styles.EndDate}
        name="EndDate"
        defaultValue={data.enddate}
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
  function handleAddMore() {
    UpdateWEData(prev => [
      ...prev, {
        id: crypto.randomUUID(),
        company: '',
        position: '',
        startdate: '',
        enddate: '',
        summary: ''
      },
    ])
    // WEData.push({
    //   id: crypto.randomUUID(),
    //   company: '',
    //   position: '',
    //   startdate: '',
    //   enddate: '',
    //   summary: ''
    // });
    // console.log('Add more button clicked')
    // console.log(WEData)
  }


  return <div className={styles.WorkExpForm}>
    <h2>Work Experience</h2>
    <hr></hr>
    <MainFormContainer WEData={WEData} UpdateWEData={UpdateWEData} />
    <div className={styles.formButtons}>
      <button type="submit" form="WEForm">Update Data</button>
      <button type="button" onClick={handleAddMore}>Add More</button>
    </div>
  </div>
}