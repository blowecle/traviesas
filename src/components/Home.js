import '../css/home.css';
import HomeBackgroundImage from '../assets/home/HomeBackgroundImage.webp';
import HomeLogo from '../assets/home/LogoHome.png';
import TruckGif from '../assets/home/TruckGif.gif';
import Flourish from '../assets/home/Flourish.png';

const Home = () => {


    return (
        <>
            <div className='home-wrapper'>
                <img src={HomeBackgroundImage} alt='background' className='home-background'/>
                <img src={HomeLogo} alt='logo' className='home-logo'/>
                <div className='home-text'>
                    Serving West Ireland some<br/>wicked delicious tacos!
                </div>
            </div>
            <div className='home-lower-wrapper'>
                <img src={TruckGif} alt='truck-gif' className='truck-gif'/>
                <img src={Flourish} alt='flourish' className='flourish'/>
                <div className='home-lower-text'>
                    Our Mission is to take traditional family recipes
                    and meld them with new techniques, flavors and ideas to
                    bring the best Mexican food to West Ireland.
                </div>
                <img src={Flourish} alt='flourish' className='flourish bottom-flourish'/>
            </div>
        </>
    );
}

export default Home;