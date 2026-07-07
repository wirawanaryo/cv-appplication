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

interface GIformProps {
  GIdata: GeneralInfoType;
  UpdateGIdata: React.Dispatch<React.SetStateAction<GeneralInfoType>>;  
}

export function FormContainer({GIdata, UpdateGIdata}:GIformProps) {
  return <div className={styles.FormContainer}>
    <h1>Input Your Data</h1>
    <GIForm GIdata={GIdata} UpdateGIdata={UpdateGIdata} />
    <WorkExpForm />
    <EduForm />
    <SkillsForm />
  </div>
}