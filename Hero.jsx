import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedlnLight from '../../assets/linkedin-light.svg';
import linkedlnDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Updated_New_Developer_Srivatsan_2024.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight :twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedlnIcon = theme === 'light' ? linkedlnLight : linkedlnDark;

  return (
  <section id="hero" className={styles.container}>
    <div className= {styles.colorModeContainer}>

        <img className={styles.hero}   src={heroImg}  alt="Profile picture of Sri vatsan"/>       
    
        <img  className = {styles.colorMode} src={themeIcon}  alt="Color Mode Icon"  onClick={toggleTheme}/> </div>


        <div className= {styles.info}>
            <h1>Sri<br/> vatsan  </h1>

            <h2> Frontend Developer </h2>
                <span>
                    <a href='https://twitter.com/' target = "_blank">
                    <img src={twitterIcon} alt="Twitter icon"/>
                    </a>

                    <a href='https://Github.com/' target = "_blank">
                    <img src={githubIcon} alt="Github icon"/>
                    </a>
                    
                    <a href='https://linkedln.com/' target = "_blank">
                    <img src={linkedlnIcon} alt="Linkedln icon"/>
                    </a>
                </span>

                <p >With a passion of developing modern React web apps for commercial businesses.</p>

                <a href = {CV} download>
                    <button className='hover' > Resume </button></a>

        </div>
    </section>
  );
}   

export default Hero;    
