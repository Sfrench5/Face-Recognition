import React from 'react';
import Navigation from "./Components/Navigation/Navigation"
import Logo from "./Components/Logo/Logo"
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm"
import Rank from "./Components/Rank/Rank"
import './App.css';
import "tachyons";
import Particles from 'react-particles-js';


// This part has been updated with the recent Clarifai changes. Used to be:
// .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
// app.models.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)

const particleOptions ={
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state ={
      input: "",
    }
  }

  onInputChange = () => {
    console.log(event.target.value)
  }

  onButtonSubit = () => {
    console.log("click")
  }
  render(){
  return (
    <div className="App">
      <Particles className="particles"
        params={particleOptions}
      
    />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubit={this.onButtonSubit} />
    {/* { <FaceRecognition />} */}
    </div>
  );
}
}

export default App;
