import React from 'react';
import Navbar from './../navbar/navbar';
import { Name, MenuBar, AboutBody,MenuBarBackground } from './../About/style';
import { ContactImg, ContactSection } from './style';
import linkedIn from './../../images/linkedIn.png';
import email from './../../images/email.png';

export default function Home() {
    return (
        <AboutBody>
            <MenuBarBackground>
            <MenuBar>
                <Name>Daniel</Name>
                <Navbar />
            </MenuBar>
            </MenuBarBackground>
                <div>
                    <h1 style={{color: '#ff2a00'}}> Contact Me 📱</h1>
                </div>
            <ContactSection>
                <ContactImg>
                    <img src={linkedIn} />
                    <h3><a href="https://www.linkedin.com/in/daniel-bisceanu-37977711a/" target="_blank">Linked In</a></h3>
                </ContactImg>
                <ContactImg>
                    <img src={email} />
                    <h3><a href="mailto:bisceanudaniel@gmail.com">Bisceanu Daniel</a></h3>
                </ContactImg>
            </ContactSection>
        </AboutBody>
        )
}