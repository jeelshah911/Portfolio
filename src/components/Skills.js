import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Python skill meter" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="React skill meter" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Express skill meter" />
                                    <h5>Express</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="C skill meter" />
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="C++ skill meter" />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Javascript skill meter" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="UI/UX Design skill meter" />
                                    <h5>UI/UX Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="HTML skill meter" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="CSS skill meter" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Visual Studio skill meter" />
                                    <h5>Visual Studio</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Github/Git control skill meter" />
                                    <h5>Github/Git control</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Colorful abstract background" />
        </section>
    );
}
