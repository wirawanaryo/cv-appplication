import styles from "./GIForm.module.css";

interface GeneralInfoType {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  domicile: string;
  summary: string;
};

interface GIformProps {
  GIdata: GeneralInfoType;
  UpdateGIdata: React.Dispatch<React.SetStateAction<GeneralInfoType>>;  
}

export function GIForm({GIdata, UpdateGIdata}:GIformProps) {

  function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    UpdateGIdata( prev => ({
      ...prev,
      [e.target.name]:e.target.value,
    }))
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(GIdata); 
    //add code to send the data to preview
  }

  return <div className={styles.GIForm}>
    <form onSubmit={handleSubmit}>
      <h2>General Information</h2>
      <div className={styles.GIInputHolders}>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id='fullName'
          name="fullName"
          value={GIdata?.fullName || ''}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id='jobTitle'
          name="jobTitle"
          value={GIdata?.jobTitle || ''}
          onChange={handleChange}
          placeholder="Software Developer"
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id='email'
          name="email"
          value={GIdata.email}
          onChange={handleChange}
          placeholder="myemail@google.com"
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id='phone'
          name="phone"
          placeholder="777888999"
          pattern="[0-9]*"
          value={GIdata.phone}
          onInvalid={(e) => e.currentTarget.setCustomValidity('Should be numbers!')}
          onChange={handleChange}
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="domicile">Domicile</label>
        <input
          type="text"
          id='domicile'
          name="domicile"
          value={GIdata.domicile}
          onChange={handleChange}
          placeholder="Firaga Street"
        />
      </div>
      <div className={styles.GIInputAreaHolders}>
        <label htmlFor="summary">Summary</label>
        <textarea
          id='summary'
          name="summary"
          rows={3}
          value={GIdata.summary}
          onChange={handleChange}
          placeholder="Tell us about yourself..."
        ></textarea>
      </div>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  </div>
}