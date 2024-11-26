import '../css/story.css';
import Logo from '../assets/story/LadyIcon.png'
import CaliTexas from '../assets/story/CaliTexas.png'
import MexicoIreland from '../assets/story/MexicoIreland.png'

const Story = () => {
    return (
        <section className='story'>
            <section className='story-header'>
                <div className='header-text'>THE TRAVIESAS STORY</div>
                <section className='header-intro'>
                    <div className='header-intro-wrapper'>
                        <img src={Logo} alt='logo' className='intro-image'/>
                        <div className='intro-text-wrapper'>
                            <div className='intro-title'>TRAH-VYEH-SAIS</div>
                            <div className='intro-subtitle'>(naughty, mischevious)</div>
                            <div className='intro-text-one'>Showing a fondness for causing<br/>trouble in a playful way.</div>
                            <div className='intro-text-two'>Tacos Traviesas is a nod to all the traviesas in our lives:<br/>Our mothers, sisters, daughers, friends and nanas.</div>
                        </div>
                    </div>
                </section>
                <section className='story-wrapper'>
                    <section className='story-block'>
                        <div className='story-block-one'>
                            <div className='title-wrapper'>
                                <div className='story-title'>The Past</div>
                            </div>
                            <div className='story-block-text'>Our founders were born and raised in Texas and California with family all throughout the American Southwest and Mexico.<br/><br/>
                            Zoë Salcedo spent much of her childhood, teenage years, and early adulthood in San Francisco's vibrant Mission District, an area rich in Mexican, Central American, and broader Latin influences.<br/><br/>
                            She began her culinary journey as a dishwasher at The Liberty Cafe and gradually progressed through some of San Francisco's finest kitchens, from Incanto to Bar Tartine and Delfina.<br/><br/>
                            She also had the distinction of opening San Francisco’s first dedicated Champagne bar.<br/><br/>
                            Throughout these experiences, she worked closely with predominantly Spanish-speaking colleagues.<br/><br/>
                            It was in these kitchens that she developed a deep appreciation for the language, music, people, cuisine, and expansive culture of Mexico, with all its flavorful nuances.<br/><br/>
                            </div>
                        </div>
                        <div className='story-block-two'>
                            <img src={CaliTexas} alt='calitexas' className='story-image'/>
                            <div className='title-wrapper'>
                                <div className='story-title'>The Future</div>
                            </div>
                            <div className='story-block-text'>
                            Zoë brings an extensive culinary skillset, vast knowledge in her field, and above all, a relentless curiosity that always seeks new flavors and time-honored techniques.<br/><br/>
                            This is her gift to the fine folk of West Ireland.<br/><br/>
                            Beyond her role at our taco truck, Zoë is also the cherished mother of Beatrix Bean and a loving wife to Chris Salcedo.
                            </div>
                        </div>
                    </section>
                </section>
                <img src={MexicoIreland} alt='mexicoireland' className='story-image-bottom'/>
            </section>
        </section>
    );
}

export default Story;