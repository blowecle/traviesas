import '../css/catering.css';
import EmailForm from './EmailForm';
import HeaderImage from '../assets/catering/CateringHeader.jpg'
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
                    <div className='catering-title'>TACO TRIO - €20</div>
                    <div className='catering-text'>3 SOFT TACOS</div>
                    <div className='catering-title'>TOSTADA COMBO - €20</div>
                    <div className='catering-text'>2 SOFT TACOS + 1 TOSTADA</div>
                    <div className='catering-title'>SIDES - €3</div>
                    <div className='catering-title'>DRINKS - €3</div>
                    <div className='catering-text-two'>*PRICE PER PERSON</div>
                    <img src={Menu} alt='menu' className='menu border-image'/>
                </div>
                <div className='schedule-catering'>Schedule catering today!</div>
                <div className='send-a-message'>Send us a message and our team will get<br/>back to you as soon as we can!</div>
                <EmailForm />
                <div className='catering-bottom-text'>
                    Please note our prices and offerings <br/>may vary depending on season.<br/><br/>
                    There may also be a travel fee of €100<br/>depending on the location of your event.
                </div>
                <img src={Truck} alt='truck' className='truck'/>
                <img src={Flourish} alt='flourish' className='catering-flourish'/>
            </section>
        </section>
    );
}

export default Catering;