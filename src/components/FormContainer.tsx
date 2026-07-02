import styles from "./FormContainer.module.css";



function GIForm() {
  return <div className={styles.GIForm}>
    <form>
      <h2>General Information</h2>
      <div className={styles.GIInputHolders}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id={styles.fullname}
          name="fullName"
          placeholder="John Doe"
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id={styles.fullname}
          name="fullname"
          placeholder="Software Developer"
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id={styles.Email}
          name="Email"
          placeholder="myemail@google.com"
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="Phone">Phone</label>
        <input
          type="tel"
          id={styles.Phone}
          name="Phone"
          placeholder="777888999"
          pattern="[0-9]*"
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="Domicile">Domicile</label>
        <input
          type="text"
          id={styles.Domicile}
          name="Domicile"
          placeholder="Firaga Street"
        />
      </div>
      <div className={styles.GIInputAreaHolders}>
        <label htmlFor="summary">Summary</label>
        <textarea
          id={styles.summary}
          name="summary"
          rows={5}
          placeholder="Tell us about yourself..."
        ></textarea>
      </div>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  </div>
}


function WorkExpForm() {
  return <div className={styles.WorkExpForm}>
    <h2>this is WorkExpform</h2>
  </div>
}

function EduForm() {
  return <div className={styles.EduForm}>
    <h2>this is Eduform</h2>
  </div>
}


function SkillsForm() {
  return <div className={styles.SkillsForm}>
    <h2>this is Skillsform</h2>
  </div>
}

export function FormContainer() {
  return <div className={styles.FormContainer}>
    <h1>Input Your Data</h1>
    <GIForm />
    <WorkExpForm />
    <EduForm />
    <SkillsForm />
  </div>
}