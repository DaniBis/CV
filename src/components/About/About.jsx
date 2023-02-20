import Navbar from './../navbar/navbar';
import { Name, MenuBar, IntroSection,Placeholder, Body, Input, Wrapper, SkillsSection, HalfSection, SkillBar, AboutBody, MenuBarBackground, HobbySection, Hobbies } from './style';
import laptop from './../../images/laptopT.png';
import ProgressBar from "./../ProgressBar/ProgressBar";

import React, { useState, useEffect, useRef } from 'react';

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

export default function About() {
    useEffect(() => {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
  
      // INJECT CSS
      var css = document.createElement('style');
      css.type = 'text/css';
      css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff }';
      document.body.appendChild(css);
    }, []);
    return (
        <AboutBody>
            <MenuBarBackground>
            <MenuBar>
                <Name>Daniel</Name>
                <Navbar />
            </MenuBar>
            </MenuBarBackground>
            <IntroSection>
                <HalfSection>
                    <div>
                        <h1 style={{color: '#ff2a00'}}> Who am I?</h1>
                    </div>
                    <div>
                        <img src={laptop} />
                        <div>
                            <h1>
                                <a href="" class="typewrite" data-period="2000" data-type='[ "Hi, I am Daniel", "I am Creative", "I love Design", "I love to Develop" ]'>
                                    <span class="wrap"></span>
                                </a>
                            </h1>
                        </div>
                    </div>
                </HalfSection>
                <HalfSection>
                    <h1 style={{color: '#00b4ff'}}> Front-end Developer</h1>
                    <p style={{color: 'white', textAlign: 'initial', marginLeft: '3vw'}}>As a highly motivated and eager Front-End Developer, I am excited to bring my passion for creating visually appealing and user-friendly websites to your team. With a strong background in HTML, CSS, and JavaScript, I have a solid foundation in web development and a keen eye for design. While I may not have professional experience in the field, I have always been passionate about web development and have been continuously honing my skills through various projects and online resources. I am a quick learner and thrive in fast-paced environments. I am confident that my passion, dedication, and willingness to continuously learn and adapt will make me a valuable asset to your team.</p>
                    <br />
                    <br />
                    <br />
                    <a style={{color: 'yellow', textDecoration: 'none'}} href="https://github.com/DaniBis?tab=repositories">⚡ Check out my GitHub ⚡</a>
                </HalfSection>
            </IntroSection>
            <HalfSection>
                <h2>Skills</h2>
            </HalfSection>
            <SkillsSection>
                <HalfSection>
                    <SkillBar>
                        <span>REACT.JS</span>  
                        <ProgressBar value ="70" />
                    </SkillBar>
                    <SkillBar>
                        <span>NODE.JS</span>  
                        <ProgressBar value ="30" />
                    </SkillBar>
                    <SkillBar>
                        <span>VERSION CONTROL (GIT)</span>  
                        <ProgressBar value ="100" />
                    </SkillBar>
                    <SkillBar>
                        <span>JAVASCRIPT</span>  
                        <ProgressBar value ="90" />
                    </SkillBar>
                    <SkillBar>
                        <span>SQL</span>  
                        <ProgressBar value ="50" />
                    </SkillBar>
                </HalfSection>

                <HalfSection>
                    <SkillBar>
                        <span>CSS</span>  
                        <ProgressBar value ="100" />
                    </SkillBar>
                    <SkillBar>
                        <span>SASS</span>  
                        <ProgressBar value ="80" />
                    </SkillBar>
                    <SkillBar>
                        <span>STYLED-COMPONENTS</span>  
                        <ProgressBar value ="100" />
                    </SkillBar>
                    <SkillBar>
                        <span>HTML</span>  
                        <ProgressBar value ="100" />
                    </SkillBar>
                    <SkillBar>
                        <span>MATERIAL.UI</span>  
                        <ProgressBar value ="90" />
                    </SkillBar>
                </HalfSection>
          </SkillsSection>
          <HalfSection>
                <h2>Hobbies</h2>
          </HalfSection>
          <HobbySection>
             <HalfSection>
                <Hobbies>Self-Development</Hobbies>
             </HalfSection>
             <HalfSection>
                 <Hobbies>Design</Hobbies>
             </HalfSection>
             <HalfSection>
                 <Hobbies>Teaching</Hobbies>
             </HalfSection>
             <HalfSection>
                 <Hobbies>Workout</Hobbies>
             </HalfSection>
          </HobbySection>
        </AboutBody>
        )
}