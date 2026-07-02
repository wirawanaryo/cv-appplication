import styles from "./GIForm.module.css";

export function GIForm() {
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
          onInvalid={(e) => e.currentTarget.setCustomValidity('Should be numbers!')}
          onChange={(e )=> e.currentTarget.setCustomValidity('')}
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