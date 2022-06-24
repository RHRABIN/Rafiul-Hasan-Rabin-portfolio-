import './App.css';
import AboutMe from './Components/AboutMe';
import Contac from './Components/Contac';
import Header from './Components/Header';
import Heading from './Components/Heading';
import Service from './Components/Service';
import Websites from './Components/Websites';
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
function App() {

  return (

    <div className='  '>
      <Header></Header>
      <Heading></Heading>
      <AboutMe></AboutMe>
      <Service></Service>
      <Websites></Websites>
      <Contac></Contac>

    </div>
  );
}

export default App;
