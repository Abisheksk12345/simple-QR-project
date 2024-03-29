import logo from "../src/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="new">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="para">
          <span className="imp">Improve your front-end</span> <br /> skills by building projects
          </h1>
          
            <p className="skills">
              Scan the QR code to visit Frontend
              <br />
              Mentor and take your coding skills to <br />
             <span className="the"> the next level</span> 
            </p>
          
        </header>
      </div>
    </div>
  );
}

export default App;
