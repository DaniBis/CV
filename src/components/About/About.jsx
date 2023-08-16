import Navbar from './../navbar/navbar';
import { Name, MenuBar, IntroSection,Placeholder, Body, Input, Wrapper, SkillsSection, HalfSection, SkillBar, AboutBody, MenuBarBackground, ProjectSection, Projects, IndividualSkill, Portrait, IntroParagraph, GroupItemsSkill, AboutSkill, AboutFooter } from './style';
import ProgressBar from "./../ProgressBar/ProgressBar";
import imageIcons from '../../images';
import Contact from "../Contact/Contact";

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

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta = 2000;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    requestAnimationFrame(function() {
        that.tick();
    });
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
                <Name>
                    <Portrait />
                </Name>
                <Navbar />
            </MenuBar>
            </MenuBarBackground>
            <IntroSection>
                <HalfSection>
                    <div>
                        <img src={imageIcons.laptop} />
                        <div>
                            <h2>
                                <a href="" className="typewrite" data-period="4000" data-type='[ "Hi, I am Daniel", "I am Creative", "I love Design", "I love to Develop" ]'>
                                    <span className="wrap"></span>
                                </a>
                            </h2>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </HalfSection>
            </IntroSection>
            <IntroParagraph>
                    <h1> Front-end Developer</h1>
                    <p style={{color: '#FFF', textAlign: 'initial', marginLeft: '3vw', letterSpacing: '1px'}}>As a highly motivated and eager Front-End Developer, I am excited to bring my passion for creating visually appealing and user-friendly websites to your team. With a strong background in HTML, CSS, and JavaScript, I have a solid foundation in web development and a keen eye for design. While I may not have professional experience in the field, I have always been passionate about web development and have been continuously honing my skills through various projects and online resources. I am a quick learner and thrive in fast-paced environments. I am confident that my passion, dedication, and willingness to continuously learn and adapt will make me a valuable asset to your team.</p>
            </IntroParagraph>
            <AboutSkill>
                <h2>Skills</h2>
            <SkillsSection>
                <IndividualSkill>
                  <GroupItemsSkill>
                    <img src={imageIcons.html} />
                    <label>HTML</label>
                  </GroupItemsSkill>
                </IndividualSkill>
                <IndividualSkill>
                <GroupItemsSkill>
                   <img src={imageIcons.javascript} />
                   <label>Javascript</label>
                   </GroupItemsSkill>
                </IndividualSkill>
                <IndividualSkill>
                <GroupItemsSkill>
                   <img src={imageIcons.css} />
                   <label>CSS</label>
                   </GroupItemsSkill>
                </IndividualSkill>
                <IndividualSkill>
                <GroupItemsSkill>
                   <img src={imageIcons.react} />
                   <label>ReactJS</label>
                   </GroupItemsSkill>
                </IndividualSkill>
                <IndividualSkill>
                <GroupItemsSkill>
                   <img src={imageIcons.database} />
                   <label>Database</label>
                   </GroupItemsSkill>
                </IndividualSkill>
                <IndividualSkill>
                <GroupItemsSkill>
                   <img src={imageIcons.nodejs} />
                   <label>NodeJS</label>
                   </GroupItemsSkill>
                </IndividualSkill>
                <IndividualSkill>
                   <GroupItemsSkill>
                    <img src={imageIcons.github} />
                    <label>Github</label>
                   </GroupItemsSkill>
                </IndividualSkill>
                <IndividualSkill>
                <GroupItemsSkill>
                   <img src={imageIcons.boostrap} />
                   <label>Bootstrap</label>
                   </GroupItemsSkill>
                </IndividualSkill>
          </SkillsSection>
          </AboutSkill>
          <ProjectSection>
            <h1>Projects</h1>
            <a style={{color: '#ff2a00', textDecoration: 'none', fontWeight: 'bold'}} href="https://github.com/DaniBis?tab=repositories">⚡ Check out my GitHub ⚡</a>
            <HalfSection>
                <Projects>
                     <div>
                        <h4>3DCompare, UK </h4>
                        <h1>Platform, Build</h1> <br />
                        <label> Html | Javascript | Bootstrap | CSS </label>
                     </div>
                     <img src={imageIcons.Compare} />
                </Projects>
            </HalfSection>
             <HalfSection>
                <Projects>
                     <div>
                        <h4>Apollo Active, Vietnam </h4>
                        <h1>Dashboard, Build</h1> <br />
                        <label> Html | Javascript | Bootstrap | Firebase </label>
                     </div>
                     <img src={imageIcons.apollo} />
                </Projects>
            </HalfSection>
            <HalfSection>
                <Projects> 
                     <div>   
                        <h4>Hamsa, Vietnam</h4>
                        <h1>Landing Page, Build</h1> <br />
                        <label> Javascript | WordPress | NodeJS | Firebase </label>
                     </div>
                     <img src={imageIcons.hamsa} />
                </Projects>
             </HalfSection>
          </ProjectSection>
          <AboutFooter>
            <HalfSection>
                <h1><a href="/Contact">Let's talk! </a></h1>
                <h5>If you need to develop a web application fully responsive with a touch of creativity feel free to reach out to me. </h5>
            </HalfSection>
          </AboutFooter>
        </AboutBody>
        )
}