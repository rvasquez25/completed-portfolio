import react from "../assets/react.png";
import dictAttack from "../assets/dictionaryAttack.png";
import randAttack from "../assets/randomAttack.png";
import database from "../assets/dbManagementDashboard.png";
import { faGithub, faReact, faJava, faPhp, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


let list1 = [<a href="https://github.com/rvasquez25/completed-portfolio" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>, <FontAwesomeIcon icon={faReact} />, <FontAwesomeIcon icon={faDiamond}/>]
let list2 = [<a href="https://github.com/rvasquez25/personal-projects/tree/main/computer-security/dictionary-attack" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>, <FontAwesomeIcon icon={faJava} />]
let list3 = [<a href="https://github.com/rvasquez25/personal-projects/tree/main/computer-security/random-attack(brute-force)" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>, <FontAwesomeIcon icon={faJava} />]
let list4 = [<a href="https://github.com/rvasquez25/personal-projects/tree/main/phpmainassignment" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,<FontAwesomeIcon icon={faPhp} />, <FontAwesomeIcon icon={faJs} />]

export const ProjectList = [
  {
    name: "My Personal Portfolio Website",
    image: react,
    skills: "ReactJS, HTML, CSS, Javascript, Github, Netlify",
    icons: list1,
    about: "My personal portfolio is my first project I was able to bring to life in real-time using ReactJS and learning on youtube how React works. I hope to continue updating this project and adding more features over time just to showcase all I've accomplished since began my career in Software Development.",
  },
  {
    name: "Computer Security - Dictionary Attack",
    image: dictAttack,
    skills: "Java",
    icons: list2,
    about: "The goal of this project was to crack a list of hashes provided by using words from the dictionary to hash, salt and compare against hashes provided. I used java for this project and in the project's repo, you will find the dictionary I used. Some dictionaires would crack less passwords but the one I have depicted here got the most passwords cracked.",
  },
  {
    name: "Computer Security - Brute Force Attack",
    image: randAttack,
    skills: "Java",
    icons: list3,
    about: "This project was to practice brute forcing techniques and learn the pros and cons of trying so. I designed the program to allow the user to decide up to what length of string they would like to attempt to crack. In the picture, I used 4 because 5+ would take an exponential amount of increasing time. I set a timer to test how long the brute force took to complete and as well the passwords I was able to crack from a provided text file.",
  },
  {
    name: "Database Management Project",
    image: database,
    skills: "PHP, Javascript, mySQL",
    icons: list4,
    about: "This project was in a team of 4 which not only focused on PHP and database design/managment, but also on teamwork and efficieny. We were tasked with connecting to a mySQL database and setup a user login/register page(s). The user would then be taken to a dashboard where they can view their profile, search for grants and check the status of the grants. In view profile, the user is able to update any personal information. Search for grants contains a list of all grants that must be added by an admin. Status allows users to see everything they've applied for and whether they've been accepted (by an admin). Admins are in control of what grants are posted and any user status changed. There are many tables in the DB for each functionality and passwords and other import data is salted and hashed.",
  },
  // {
  //   name: "Database Management Project",
  //   image: database,
  //   skills: "PHP, Javascript, mySQL",
  //   icons: list4,
  //   about: "This project was in a team of 4 which not only focused on PHP and database design/managment, but also on teamwork and efficieny. We were tasked with connecting to a mySQL database and setup a user login/register page(s). The user would then be taken to a dashboard where they can view their profile, search for grants and check the status of the grants. In view profile, the user is able to update any personal information. Search for grants contains a list of all grants that must be added by an admin. Status allows users to see everything they've applied for and whether they've been accepted (by an admin). Admins are in control of what grants are posted and any user status changed. There are many tables in the DB for each functionality and passwords and other import data is salted and hashed.",
  // }
];