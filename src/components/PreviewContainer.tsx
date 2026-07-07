import styles from "./PreviewContainer.module.css";

function GIsection() {
  return <div className={styles.GIsection}>
    <h1 className={styles.GIname}>John Doe</h1>
    <h3>Software Engineer</h3>
    <p className={styles.GIdetails} >0859755862 ・ johndoe99@email.com ・ firaga street</p>
    <h2>Summary</h2>    
    <hr></hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. 
    </p>
  </div>
}

export function PreviewContainer() {
  return <div className={styles.PreviewContainer}>
    <GIsection />
  </div>
}