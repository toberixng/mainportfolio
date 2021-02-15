import React from 'react'
import Video from '../../videos/video.mp4';
import { Herobg, HeroContainer, VideoBg } from './HeroElements'

const HeroSection = () => {
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
                    <Button to='signup'>
                        Get started {hover ? <ArrowForward />: <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
