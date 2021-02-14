import React from 'react'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='Video/mp4' />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
