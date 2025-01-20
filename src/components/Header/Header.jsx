import './Header.css'
import mainLogo from '../../assets/react-core-concepts.png';

const reactDescriptions = ["Fundamental", "Crucial", "Core"];



function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}


const topic = reactDescriptions[genRandomInt(2)];


function Header(){
 
    return(
      <header>
      <img src={mainLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
       {topic} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
    )
  }


  export default Header;
  