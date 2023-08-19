import '../home/Home.css';
import Header from "../header/Header";
import Banner from '../banner/Banner';

function Home() {
    return (
      <div>
        <div className="header1">
          Our flying start!
        </div>
        <Header></Header>
        <Banner></Banner>
      </div>
    );
  }

export default Home;