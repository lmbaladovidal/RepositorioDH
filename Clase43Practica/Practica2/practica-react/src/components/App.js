import '../assets/css/app.css';

import ContentWraper from './ContentWraper';
import TopBar from './TopBar';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <ContentWraper/>           
      <Footer/>

    </div>
  );
}

export default App;
