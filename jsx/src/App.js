// import "bulma/css/bulma.css";
// import Profilecard from "./ProfileCard";
// import AlexaImage from "./images/alexa.png";
// import SiriImage from "./images/siri.png";
// import CortanaImage from './images/cortana.png';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  

  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

//console.log(getRandomAnimal());
function App() {

  const [animals, setAnimals] = useState([]);
  //console.log(useState(0));
  // const [count, setCount] = useState(0);

  const handleClick = () => {

    setAnimals([...animals, getRandomAnimal()])

    // console.log('Button was clicked');
    // setCount(count + 5);
  };

  const renderedAnimals  = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}></AnimalShow>
  });
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
      {/* <div>Number of Animals: {count}</div> */}
      {/* <div>
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
      </div> */}
      {/* <Profilecard title="alexa" handle="@alexa99" imageSrc={AlexaImage}></Profilecard>
            <Profilecard title="alexa" handle="@alexa99"></Profilecard>
            <Profilecard title="alexa" handle="@alexa99"></Profilecard> */}
    </div>
  );
}

export default App;
