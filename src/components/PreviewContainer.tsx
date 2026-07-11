import styles from "./PreviewContainer.module.css";


interface GeneralInfoType {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  domicile: string;
  summary: string;
};
interface EduInfoType {
  id : string;
  school: string;
  degree: string;
  startdate: string;
  enddate: string;  
  details: string;
};
interface WorkInfoType {
  id: string;
  company: string;
  position: string;
  startdate: string;
  enddate: string;
  summary: string;
};
interface SkillInfoType {
  id : string;
  skillname: string;  
};

interface formProps {
  GIdata: GeneralInfoType;
  WEData: WorkInfoType[];
  EduData: EduInfoType[];
  SkillData: SkillInfoType[];
}
interface GIsectionProps {
  GIdata: GeneralInfoType;
}
interface WEsectionProps {
  WEdata: WorkInfoType[];
}
interface EduSectionProps {
  EduData: EduInfoType[];
}
interface SkillSectionProps {
  SkillData: SkillInfoType[];
}



function GIsection({ GIdata }: GIsectionProps) {
  return <div className={styles.GIsection}>
    <h1 className={styles.GIname}>{GIdata.fullName === '' ? 'Name' : GIdata.fullName.toUpperCase()}</h1>
    <h3>{GIdata.jobTitle === '' ? 'Job Title' : GIdata.jobTitle}</h3>
    <p className={styles.GIdetails} >
      {GIdata.phone === '' ? 'Phone Number' : GIdata.phone} ・
      {GIdata.email === '' ? 'Email' : GIdata.email} ・
      {GIdata.domicile === '' ? 'Domicile' : GIdata.domicile}

    </p>
    <h2>Summary</h2>
    <hr></hr>
    <p>{GIdata.summary === '' ? ' Introduction that highlights your key skills, years of experience, and top achievements' : GIdata.summary}  </p>
  </div>
}
function WEsection({ WEdata }: WEsectionProps) {
  return <div className={styles.WEsection}>
    <h1>Work Experience</h1>
    <hr></hr>
    {WEdata.map((WE) => (
      <div key={WE.id} className={styles.EXPcontainer}>
        <h2>{WE.company === ''? "Company Name" : WE.company}</h2>
        <div className={styles.positionContainer}>
          <p>{WE.position === ''? "Position" : WE.position}</p>
          <span>{WE.startdate === ''? "Period" : `${WE.startdate}  → ${WE.enddate}`}</span>
        </div>
        <p>{WE.summary === ''? "Work Description" : WE.summary}</p>
      </div>
    ))}
  </div>
}
function EduSection({ EduData }: EduSectionProps) {
  return <div className={styles.EduSection}>
    <h1>Education</h1>
    <hr></hr>
    {EduData.map((Edu) => (
      <div key={Edu.id} className={styles.EduContainer}>
        <h2>{Edu.school === ''? "School Name" : Edu.school}</h2>
        <div className={styles.degreeContainer}>
          <p>{Edu.degree === ''? "Degree" : Edu.degree}</p>
          <span>{Edu.startdate === ''? "Period" : `${Edu.startdate}  → ${Edu.enddate}`}</span>
        </div>
        <p>{Edu.details === ''? "School Description" : Edu.details}</p>
      </div>
    ))}
  </div>
}
function SkillSection({ SkillData }:SkillSectionProps) {
  return <div className={styles.SkillSection}>
    <h1>Skills</h1>
    <hr></hr>
  </div>  
}


export function PreviewContainer({ GIdata, WEData, EduData, SkillData }: formProps) {
  return <div className={styles.PreviewContainer}>
    <GIsection GIdata={GIdata} />
    <WEsection WEdata={WEData} />
    <EduSection EduData={EduData}/>
    <SkillSection SkillData={SkillData}/>
  </div>
}