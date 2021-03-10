import React, {useState } from 'react'
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { 
    Herobg, 
    HeroContainer, 
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <Herobg>
                {/* <VideoBg/> */}
                <VideoBg autoPlay loop muted src={Video} type='Video/mp4' />
            </Herobg>
            <HeroContent>
                <HeroH1>Word Best Pharmaceutical</HeroH1>
                <HeroP>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, et sint. 
                    Sapiente necessitatibus atque quaerat dicta, itaque quo doloribus vel 
                    facere distinctio et non placeat, esse nemo? Recusandae, ullam eligendi!
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='signup' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Get started {hover ? <ArrowForward/>: <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
