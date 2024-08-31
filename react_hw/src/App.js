import './App.css';



function Header() {
  return(
    <>
    <Tittle/>
    <h2>I am Header Companion</h2> 
    </>
  )
}


function Footer() {
  return(
    <>
    <Tittle/>
    <h2>I am footer Companion</h2>
    </>
  )  
}


function  Content(){

    return(
      <>
        <Tittle/>
        <p>lorem ipsum qw wqr asd adfg adgndfhahm kmals hmnd;zfl l</p>
        <p>lorem ipsum qw wqr asd adfg adgndfhahm kmals hmnd;zfl l</p>
        <p>lorem ipsum qw wqr asd adfg adgndfhahm kmals hmnd;zfl l</p>
      </>
    )
}
function Tittle(){

  return(
    <h1>Tittle</h1>
  )
}
function App() {
  return (
    <div className="App">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
