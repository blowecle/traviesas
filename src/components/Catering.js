import '../css/catering.css';
import EmailForm from './EmailForm';
import HeaderImage from '../assets/catering/CateringHeader.webp'
import Flourish from '../assets/catering/Flourish.png'
import ForkAndSpoon from '../assets/catering/ForkAndSpoon.png'
import Menu from '../assets/catering/Menu.png'
import Order from '../assets/catering/Order.png'
import Truck from '../assets/catering/Truck.png'

const Catering = () => {
    return (
        <section className='catering'>
            <section className='catering-header'>
            <div className='header-text'>READY TO SERVE</div>
            <img src={HeaderImage} alt='taco' className='header-image'/>
            </section>
            <section className='catering-wrapper'>
                <img src={ForkAndSpoon} alt='forkandspoon' className='fork-and-spoon'/>
                <div class="partial-border">
                    <img src={Order} alt='order' className='order border-image'/>
                    <div className='catering-section'>
                        <div className='catering-text'
                        style={{
                            marginTop: '20px'
                        }}
                        >TOSTADA & TACO COMBOS</div>
                        <div className='catering-text'>ENSALADAS</div>
                        <div className='catering-text'>WRAPS</div>
                        <div className='catering-text'>SIDES</div>
                        <div className='catering-text'>HOUSEMADE DRINKS</div>
                        <div className='catering-text'>AND OTHER TASTY TREATS!</div>
                    </div>
                    <div className='catering-section'
                        style={{
                            marginTop: '20px',
                        }}
                    >
                        <div className='catering-text'
                            style={{
                                marginTop: '20px'
                            }}
                        >WE OFFER:</div>
                        <div className='catering-text'>- HEAT AT HOME MEAL KITS</div>
                        <div className='catering-text'>- FESTIVALS</div>
                        <div className='catering-text'>- EVENTS</div>
                        <div className='catering-text'>- PRIVATE PARTIES</div>
                        <div className='catering-text'>- OFFICE LUNCHES</div>
                        <div className='catering-text'
                        style={
                            {
                                marginBottom: '20px'
                            }
                        }>- WEDDINGS!</div>
                    </div>
                    <img src={Menu} alt='menu' className='menu border-image'/>
                </div>
                <div className='schedule-catering'>Schedule catering today!</div>
                <div className='send-a-message'>To make an inquiry to see how<br/>we can accomodate your taco needs, email us at: <a href='mailto:cocinatraviesas@gmail.com' className='footer-email left-email'>COCINATRAVIESAS@GMAIL.COM</a></div>
                {/* <EmailForm /> */}
                <img src={Truck} alt='truck' className='truck'
                    style={{
                        marginTop: '20%'
                    }}
                />
                <div className='catering-bottom-text'>
                    Please note our prices and offerings <br/>may vary depending on season.<br/><br/>
                    There may also be a travel fee of €100<br/>depending on the location of your event.
                </div>
                <img src={Flourish} alt='flourish' className='catering-flourish'/>
            </section>
        </section>
    );
}

export default Catering;