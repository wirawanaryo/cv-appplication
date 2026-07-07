import styles from "./SkillsForm.module.css"

function MainForm() {
  return <form className={styles.MainForm}>    
    <div className={styles.FormInputHolders}>              
      <input
        type="text"
        id={styles.SkillName}
        name="SkillName"
        placeholder="Skill Name"
      />
      <button type="button" className={styles.DeleteButton}>🗑</button> 
    </div>     
    <hr></hr>
  </form>
}

export function SkillsForm() {
  return <div className={styles.SkillsForm}>    
    <h2>Skills</h2>
    <hr></hr>
    <MainForm /> 
    <MainForm /> 
    <MainForm />   
    <div className={styles.formButtons}>
      <button type="button">Update Data</button>
      <button type="button">Add More</button>
    </div>        
  </div>
}