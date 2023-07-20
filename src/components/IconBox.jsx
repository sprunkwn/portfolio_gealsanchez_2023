/* eslint-disable import/prefer-default-export */
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import twitter from '../images/twitter.svg';
import medium from '../images/medium.svg';
import '../styles/iconbox.css';

export const IconBox = () => (
  <>
    <a href="https://www.linkedin.com/in/gersonsanchezsandoval/" target="blank"><img src={linkedin} id="iconbox" alt="linkedin logo" /></a>
    <a href="https://github.com/gealsanchez " target="blank"><img src={github} id="iconbox" alt="github logo" /></a>
    <a href="https://twitter.com/gealsanchez" target="blank"><img src={twitter} id="iconbox" alt="twitter logo" /></a>
    <a href="https://medium.com/tag/react" target="blank"><img src={medium} id="iconbox" alt="medium logo" /></a>
  </>
);
