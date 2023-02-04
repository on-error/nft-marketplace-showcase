import logo from './logo.svg';
import './App.css';
import Download from './components/Download';
import Features from './components/Features';
import SectionWrapper from './components/SectionWrapper';
import assets from './assets';
import styles from './styles/Global';

function App() {
  return (
    <div>
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains tow screens. The first screen lists all NFTs while the second one shows the details of specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-4 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by <span className="bold">Shivansh Pandey</span>
        </p>
      </div>
    </div>
  );
}

export default App;
