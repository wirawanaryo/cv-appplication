import styles from "./FormContainer.module.css";
import { WorkExpForm } from "./forms/WorkExpForm";
import {GIForm} from "./forms/GIForm";
import { EduForm } from "./forms/EduForm";
import { SkillsForm } from "./forms/SkillsForm";

interface GeneralInfoType {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  domicile: string;
  summary: string;
};
interface WorkInfoType {
  id : string;
  company: string;
  position: string;
  startdate: string;
  enddate: string;  
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

interface formProps {
  GIdata: GeneralInfoType;
  UpdateGIdata: React.Dispatch<React.SetStateAction<GeneralInfoType>>;
  WEData: WorkInfoType[];
  UpdateWEData : React.Dispatch<React.SetStateAction<WorkInfoType[]>>;
  EduData: EduInfoType[];
  UpdateEduData : React.Dispatch<React.SetStateAction<EduInfoType[]>>
}

export function FormContainer({GIdata, UpdateGIdata, WEData, UpdateWEData, EduData, UpdateEduData}:formProps) {
  return <div className={styles.FormContainer}>
    <h1>Input Your Data</h1>
    <GIForm GIdata={GIdata} UpdateGIdata={UpdateGIdata} />
    <WorkExpForm WEData={WEData} UpdateWEData={UpdateWEData}/>
    <EduForm EduData={EduData} UpdateEduData={UpdateEduData}/>
    <SkillsForm />
  </div>
}