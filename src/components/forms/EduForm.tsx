import styles from "./EduForm.module.css";

function MainForm() {
  return <form className={styles.MainForm}>
    <div className={styles.FormHeader}>
      <h2>School 1</h2>
      <button type="button" className={styles.DeleteButton}>🗑</button>
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="SchoolName">School</label>
      <input
        type="text"
        id={styles.SchoolName}
        name="SchoolName"
        placeholder="Big Bad University"
      />
    </div>
    <div className={styles.FormInputHolders}>
      <label htmlFor="Degree">Degree</label>
      <input
        type="text"
        id={styles.Degree}
        name="Degree"
        placeholder="Computer Science"
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
      <label htmlFor="Details">Details</label>
      <textarea
        id={styles.Details}
        name="Details"
        rows={3}
        placeholder="GPA and Such"
      ></textarea>
    </div>
    <hr></hr>
  </form>
}

export function EduForm() {
  return <div className={styles.EduForm}>
    <h2>Education</h2>
    <hr></hr>
    <MainForm />          
    <div className={styles.formButtons}>
      <button type="button">Update Data</button>
      <button type="button">Add More</button>
    </div> 
  </div>
}