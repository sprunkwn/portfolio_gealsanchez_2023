/* eslint-disable import/prefer-default-export */
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import metrics from '../images/metrics.png';
import budget from '../images/budget.png';
import meals from '../images/meals.png';
import arts from '../images/arts.png';
import '../styles/productlist.css';

export const ProductList = () => {
  const projects = [
    {
      id: 2239,
      Image: budget,
      Name: 'Budget App',
      Description:
        'Control your expenses',
      Source: 'https://github.com/gealsanchez/budget_app/tree/capstone-ror',
      Live: 'https://budgetapp-meim.onrender.com/',
    },
    {
      id: 2240,
      Image: meals,
      Name: 'Meals DB',
      Description:
        'Please check the menu',
      Source: 'https://github.com/gealsanchez/capstoneJavaScript',
      Live: 'https://gealsanchez.github.io/capstoneJavaScript/dist/',
    },
    {
      id: 2241,
      Image: metrics,
      Name: 'Metrics',
      Description:
        'The NBA DB, Teams & Players',
      Source: 'https://github.com/gealsanchez/metrics',
      Live: 'https://gilded-caramel-606d92.netlify.app/',
    },
    {
      id: 2242,
      Image: arts,
      Name: 'Arts Festival',
      Description:
        'Music & Arts Activities',
      Source: 'https://github.com/gealsanchez/CapstoneProject1',
      Live: 'https://gealsanchez.github.io/CapstoneProject1/',
    },
  ];

  const list = projects.map(({
    id, Image, Name, Description, Source, Live,
  }) => (
    <Carousel.Item key={id}>
      <img
        className="d-block w-100"
        src={Image}
        alt="Third slide"
        style={{ borderRadius: '5px' }}
      />
      <Carousel.Caption>
        <Button
          href={Source}
          target="blank"
          style={{ fontWeight: 'bolder', padding: '1% 4%', border: 'none' }}
          variant="outline-dark"
        >
          <h1>{Name}</h1>
        </Button>
        <p id="project-name" style={{ fontWeight: 'bolder', color: 'black', margin: '0%' }}>
          {Description}
        </p>
        <p>
          <Button
            href={Source}
            target="blank"
            style={{ margin: '1% 1%', padding: '0% 1%', fontWeight: 'bolder' }}
            variant="outline-success"
          >
            Source
          </Button>
          <Button
            href={Live}
            target="blank"
            style={{ margin: '0% 1%', padding: '0% 1%', fontWeight: 'bolder' }}
            variant="outline-primary"
          >
            Live Demo
          </Button>
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      <Carousel style={{ margin: '3% 10%' }}>
        {list}
      </Carousel>
      <h6
        style={{
          margin: '0% 20%',
          fontWeight: 'bolder',
        }}
      >
        Have a project you need coded?
        do not hesitate and contact me
        gealsanchez@gmail.com
      </h6>
    </>
  );
};
