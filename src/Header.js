import "./Header.css"

export default function () {
  return(
    <>
    <header id="header">
      <span id="headerSpan">
        <img id='headerLogo' src='./logo192.png' />
        <p id='headerTitle'>Anazon</p>
      </span>
      <input type="text" placeholder="Search..."/>
      <p id='headerList'>
        <li>Home</li>  
        <li>LogIn</li>  
      </p>
    </header>
    <div>
      <img id="headerLargeLogo" src="./headerLargeLogo.png" />
    </div>
    </>
  )
}
