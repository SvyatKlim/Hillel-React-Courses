import './HeroBanner.scss';
import {DefaultButton} from "../Buttons/Buttons.jsx";
import mainImage from '../../assets/pictures/headphones.png'

const HeroBanner = ({bgColor, textColor, handleNavigate}) => {
    const componentClass = ` ${bgColor} ${textColor}`;
    return (
        <section className={'hero-banner' + componentClass}>
            <div className="container d-flex flex-wrap">
                <div className="hero-banner__info">
                    <h1 className="fw-700 mb-40">Don't miss this amazing deal!</h1>
                    <p className="mb-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum in orci sit amet rutrum.
                        Nunc blandit rhoncus consequat.
                        Donec sodales enim et felis commodo.</p>
                    <div className="d-flex">
                        <DefaultButton handler={handleNavigate} buttonText="Redirect to About Us"/>
                    </div>
                </div>
                <picture className="hero-banner__img">
                    <img src={mainImage} alt="Headphones image"/>
                </picture>
            </div>
        </section>
    )
}

export default HeroBanner;