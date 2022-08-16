import react from "../assets/react.png";
import dictAttack from "../assets/dictionaryAttack.png"
import randAttack from "../assets/randomAttack.png"
import { faGithub, faReact, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


let list1 = [<a href="https://github.com/rvasquez25/completed-portfolio" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>, <FontAwesomeIcon icon={faReact} />, <FontAwesomeIcon icon={faDiamond}/>]
let list2 = [<a href="https://github.com/rvasquez25/personal-projects/tree/main/computer-security/dictionary-attack" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>, <FontAwesomeIcon icon={faJava} />]
let list3 = [<a href="https://github.com/rvasquez25/personal-projects/tree/main/computer-security/random-attack(brute-force)" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>, <FontAwesomeIcon icon={faJava} />]
export const ProjectList = [
  {
    name: "My Personal Portfolio Website",
    image: react,
    skills: "ReactJS, HTML, CSS, Javascript, Github, Netlify",
    icons: list1,
  },
  {
    name: "Computer Security - Dictionary Attack",
    image: dictAttack,
    skills: "Java",
    icons: list2,
  },
  {
    name: "Computer Security - Brute Force Attack",
    image: randAttack,
    skills: "Java",
    icons: list3,
  }
];