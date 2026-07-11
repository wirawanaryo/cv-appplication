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

export function GIForm({ GIdata, UpdateGIdata }: GIformProps) {

  // function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
  //   UpdateGIdata( prev => ({
  //     ...prev,
  //     [e.target.name]:e.target.value,
  //   }))
  // }

  console.log(GIdata);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    UpdateGIdata({
      fullName: form.get('fullName') as string,
      jobTitle: form.get('jobTitle') as string,
      email: form.get('email') as string,
      phone: form.get('phone') as string,
      domicile: form.get('domicile') as string,
      summary: form.get('summary') as string
    })    
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
          placeholder="John Doe"
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          id='jobTitle'
          name="jobTitle"
          placeholder="Software Developer"
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id='email'
          name="email"
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
          onInvalid={(e) => e.currentTarget.setCustomValidity('Should be numbers!')}
        />
      </div>
      <div className={styles.GIInputHolders}>
        <label htmlFor="domicile">Domicile</label>
        <input
          type="text"
          id='domicile'
          name="domicile"
          placeholder="John Street"
        />
      </div>
      <div className={styles.GIInputAreaHolders}>
        <label htmlFor="summary">Summary</label>
        <textarea
          id='summary'
          name="summary"
          rows={3}
          placeholder="Tell us about yourself..."
        ></textarea>
      </div>
      <br></br>
      <button type="submit">Update</button>
    </form>
  </div>
}