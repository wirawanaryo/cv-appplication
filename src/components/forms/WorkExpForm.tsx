import styles from "./WorkExpForm.module.css";

function MainForm() {
  return <form className={styles.MainForm}>
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

export function WorkExpForm() {
  return <div className={styles.WorkExpForm}>
    <h2>Work Experience</h2>
    <hr></hr>
    <MainForm />          
    <div className={styles.formButtons}>
      <button type="button">Update Data</button>
      <button type="button">Add More</button>
    </div>      
  </div>
}