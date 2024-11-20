import HeaderImage from '../assets/menu/TacoImage.webp'
import Flourish from '../assets/home/Flourish.png'
import TacosBanner from '../assets/menu/Tacos.png'
import TostadasBanner from '../assets/menu/Tostadas.png'
import SidesBanner from '../assets/menu/Sides.png'
import DrinksBanner from '../assets/menu/Drinks.png'
import Beef from '../assets/menu/BeefIcon.png'
import Pork from '../assets/menu/PigIcon.png'
import Chicken from '../assets/menu/ChickenIcon.png'
import Veggie from '../assets/menu/VeggieIcon.png'
import Drink from '../assets/menu/DrinkIcon.png'

import '../css/menu.css';

const Menu = () => {
    return (
        <div className='menu-wrapper'>
            <div className='menu-header'>
                <div className='header-text'>WICKED DELICIOUS TACOS</div>
                <img src={HeaderImage} alt='taco' className='header-image'/>
            </div>
            <section className='main-menu'>
                <div className='menu-item'>
                    <img src={TacosBanner} alt='tacos' className='menu-banner'/>
                </div>
                <div className='menu-item'>
                    <img src={Beef} alt='beef' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>CARNITAS</div>
                        <div className='menu-description'>CONFIT PORK WITH SALSA ARBOL<br/>(FRESH TOMATO AND CHILI),<br/>PICKLED ONION, CILANTRO<br/>AND RADISH</div>
                    </div>

                </div>
                <div className='menu-item'>
                    <img src={Pork} alt='beef' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>COCHINITA</div>
                        <div className='menu-description'>ACHIOTE BRAISED PORK WITH<br/>PICKLED ONION AND RADISH</div>
                    </div>

                </div>
                <div className='menu-item'>
                    <img src={Chicken} alt='chicken' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>CHICKEN TINGA</div>
                        <div className='menu-description'>CHICKEN BRAISED IN A TOMATO<br/>AND CHIPOTLE SAUCE WITH<br/>CHEESE, CREMA, DICED ONION<br/>CILANTRO AND RADISH</div>
                    </div>

                </div>
                <div className='menu-item'>
                    <img src={Veggie} alt='veggie' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>ROASTED CAULIFLOWER</div>
                        <div className='menu-description'>CAULIFLOWER WITH SMOKED<br/>CHIPTOLE SAUCE AND RADISH</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <img src={TostadasBanner} alt='tostadas' className='menu-banner'/>
                </div>
                <div className='menu-item'>
                    <img src={Beef} alt='beef' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>TEXAN</div>
                        <div className='menu-description'>SEASONED MINCED BEEF WITH<br/>GUACAMOLE, CHEESE, ICEBERG,<br/>CREMA, SALSA VERDE, ONION<br/>CILANTRO AND RADISH</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <img src={Veggie} alt='veggie' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>BAYO BEAN</div>
                        <div className='menu-description'>WITH GUACAMOLE, CHEESE,<br/>ICEBERG, CREME, SALSA VERDE,<br/>ONION, CILANTRO AND RADISH</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <img src={SidesBanner} alt='sides' className='menu-banner'/>
                </div>
                <div className='menu-item'>
                    <img src={Veggie} alt='veggie' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>BEANS</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <img src={Veggie} alt='veggie' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>ARROZ (TASTY RICE)</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <img src={Veggie} alt='veggie' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>ESQUITES (+€2)</div>
                        <div className='menu-description'>SWEETCORN WITH HOUSEMADE<br/>MAYO, CILANTRO, CHEESE<br/>AND VALENTINA</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <img src={DrinksBanner} alt='drinks' className='menu-banner'/>
                </div>
                <div className='menu-item'>
                    <img src={Drink} alt='drink' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>AGUA DE JAMAICA</div>
                        <div className='menu-description'>HIBISCUS JUICE</div>
                    </div>
                </div>
                <div className='menu-item'>
                    <img src={Drink} alt='drink' className='menu-filler'/>
                    <div className='menu-entry-wrapper'>
                        <div className='menu-name'>AGUA DE FRESCA</div>
                        <div className='menu-description'>STRAWBERRY AND LIME</div>
                    </div>
                </div>
            <img src={Flourish} alt='flourish' className='menu-flourish'/>
            </section>
        </div>
    )
}

export default Menu;