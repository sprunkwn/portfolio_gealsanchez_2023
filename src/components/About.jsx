/* eslint-disable import/prefer-default-export */
import '../styles/about.css';
import background from '../images/background.jpg';

export const About = () => (

  <div
    id="aboutwhole"
    style={{
      display: 'flex',
      margin: '1% 5%',
    }}
  >
    <img
      src={background}
      alt=""
      className="img-fluid"
      style={{
        borderRadius: '5px',
        margin: '2% 5% 0% 5%',
      }}
    />
    <div
      id="about"
      style={{
        margin: '6% 2% 8% 1%',
      }}
    >
      <h5>
        Solution focused professional with 10+ years of experience
        providing rapid and client-centered technical solutions,
        I bring a strong track record of delivering efficient
        results while prioritizing effective communication and teamwork.
        If you like what you see and have a project you need coded
        do not hesitate and contact me gealsanchez@gmail.com
      </h5>
    </div>
  </div>

);
