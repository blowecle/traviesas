import '../css/footer.css';
import Logo from '../assets/footer/LogoRed.png'

const Footer = () => {
    return (
        <section className='footer-wrapper'>
            <img src={Logo} alt='logo' className='footer-logo'/>
            <div className='footer-text'>Serving the fine folks of Galway, Ireland.</div>
            <div className='footer-contact-text'>CONTACT US AT</div>
            <div className='footer-contact-wrapper'>
                <a href='mailto:zoe@daneseworks.ie' className='footer-email left-email'>ZOE@DANESEWORKS.IE</a>
                <div className='divider'>OR</div>
                <a href='mailto:eileen@daneseworks.ie' className='footer-email right-email'>EILEEN@DANESEWORKS.IE</a>
            </div>
            <div className='footer-social-wrapper'>
            <a href="https://www.facebook.com/people/Tacos-Traviesas/61551109797090/?_rdr" target="_blank"><i class="fab fa-facebook social"></i></a>
            <a href="https://www.instagram.com/tacostraviesas/" target="_blank"><i class="fab fa-instagram social"></i></a>
            </div>
        </section>
    )
}

export default Footer;