import "bulma/css/bulma.css";
import Profilecard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";
import CortanaImage from './images/cortana.png';

function App() {
  return (
    <div>
      <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Personal Digital Assistant</p>
            </div>
        </section>
      </div>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <Profilecard
                title="alexa"
                handle="@alexa99"
                imageSrc={AlexaImage}
                description="Alexa was created by Amazon and helps you buy 
                
                thingsvbdfgvnkdfngvdfjgvnjdfgndfhnghdfjhn
                gvdfjgvdfkgndsgvdfgnsdkndfjn"
              ></Profilecard>
            </div>
            <div className="column is-4">
              <Profilecard
                title="alexa"
                handle="@alexa99"
                imageSrc={SiriImage}
              ></Profilecard>
            </div>
            <div className="column is-4">
              <Profilecard
                title="alexa"
                handle="@alexa99"
                imageSrc={CortanaImage}
              ></Profilecard>
            </div>
          </div>
        </section>
      </div>
      {/* <Profilecard title="alexa" handle="@alexa99" imageSrc={AlexaImage}></Profilecard>
            <Profilecard title="alexa" handle="@alexa99"></Profilecard>
            <Profilecard title="alexa" handle="@alexa99"></Profilecard> */}
    </div>
  );
}

export default App;
