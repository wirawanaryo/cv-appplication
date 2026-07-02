import styles from "./FormContainer.module.css";
import { WorkExpForm } from "./forms/WorkExpForm";
import {GIForm} from "./forms/GIForm";
import { EduForm } from "./forms/EduForm";
import { SkillsForm } from "./forms/SkillsForm";


export function FormContainer() {
  return <div className={styles.FormContainer}>
    <h1>Input Your Data</h1>
    <GIForm />
    <WorkExpForm />
    <EduForm />
    <SkillsForm />
  </div>
}