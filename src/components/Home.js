import '../css/home.css';
import HomeBackgroundImage from '../assets/home/HomeBackgroundImage.webp';
import HomeLogo from '../assets/home/LogoHome.png';

const Home = () => {


    return (
        <div className='home-wrapper'>
            <img src={HomeBackgroundImage} alt='background' className='home-background'/>
            <img src={HomeLogo} alt='logo' className='home-logo'/>
            <div className='home-text'>
                Serving West Ireland some<br/>wicked delicious tacos!
            </div>
        </div>
    );
}

export default Home;