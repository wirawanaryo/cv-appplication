import styles from "./PreviewContainer.module.css";


interface GeneralInfoType {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  domicile: string;
  summary: string;
};

interface formProps {
  GIdata: GeneralInfoType;    
}



function GIsection({GIdata}:formProps) {
  return <div className={styles.GIsection}>
    <h1 className={styles.GIname}>{GIdata.fullName === '' ? 'Name': GIdata.fullName.toUpperCase()}</h1>
    <h3>{GIdata.jobTitle === '' ? 'Job Title' : GIdata.jobTitle}</h3>
    <p className={styles.GIdetails} >
      {GIdata.phone === ''? 'Phone Number' : GIdata.phone} ・ 
      {GIdata.email === ''? 'Email' : GIdata.email} ・ 
      {GIdata.domicile === ''? 'Domicile' : GIdata.domicile}

    </p>
    <h2>Summary</h2>    
    <hr></hr>
    <p>{GIdata.summary}  </p>
  </div>
}

export function PreviewContainer({GIdata}:formProps) {
  return <div className={styles.PreviewContainer}>
    <GIsection GIdata={GIdata} />
  </div>
}