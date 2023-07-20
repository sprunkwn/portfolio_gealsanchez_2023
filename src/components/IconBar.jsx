/* eslint-disable import/prefer-default-export */
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import twitter from '../images/twitter.svg';
import medium from '../images/medium.svg';
import '../styles/iconbar.css';

export const IconBar = () => (
  <>
    <a href="https://www.linkedin.com/in/gersonsanchezsandoval/" target="blank"><img src={linkedin} alt="linkedin logo" /></a>
    <a href="https://github.com/gealsanchez " target="blank"><img src={github} alt="github logo" /></a>
    <a href="https://twitter.com/gealsanchez" target="blank"><img src={twitter} alt="twitter logo" /></a>
    <a href="https://medium.com/tag/react" target="blank"><img src={medium} alt="medium logo" /></a>
  </>
);
