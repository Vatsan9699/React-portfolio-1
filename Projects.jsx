
import styles from './ProjectsStyles.modules.css';
import viberr from '../../assets/viberr.png';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.project.container}>    
      <a href="">
        <img className="hover" src={viberr} alt="Viberr logo" />
        <h3>viberr</h3>
        <p> Streaming App</p>
      </a>
      </div>
    </section>
  );
}

export default Projects;  