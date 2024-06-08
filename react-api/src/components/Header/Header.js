import './Header.css';
import 'materialize-css';

export default function Header(){

  return(
    <>
    <header>
      <div id='headerContainer'>
        <div id='headerLogo'>
          RH-React
        </div>
        <div id='headerDescription'>
          Desafio RT Medical System de React
        </div>
      </div>
    </header>
    </>
  )
}