/* eslint-disable import/prefer-default-export */
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { IconBox } from './IconBox';
import '../styles/home.css';

export const Home = () => (
  <>
    <div className="mb-2 mt-3">
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-button-drop-down-centered"
        drop="down-centered"
        variant="outline-dark"
        title="Languages"
        size="sm"
        style={{ margin: '1%' }}
      >
        <Dropdown.Item
          eventKey="1"
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          target="blank"
        >
          Javascript
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          href="https://developer.mozilla.org/es/docs/Web/HTML"
          target="blank"
        >
          Html
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="3"
          href="https://www.ruby-lang.org/"
          target="blank"
        >
          Ruby
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="3"
          href="https://developer.mozilla.org/es/docs/Web/CSS"
          target="blank"
        >
          Css
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-button-drop-down-centered"
        drop="down-centered"
        variant="outline-dark"
        title="Frameworks"
        size="sm"
        style={{ margin: '1%' }}
      >
        <Dropdown.Item
          eventKey="1"
          href="https://rubyonrails.org/"
          target="blank"
        >
          Ruby on Rails
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          href="https://getbootstrap.com/"
          target="blank"
        >
          Bootstrap
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="3"
          href="https://teamcapybara.github.io/capybara/"
          target="blank"
        >
          Capybara
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="3"
          href="https://rspec.info/"
          target="blank"
        >
          RSpec
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="3"
          href="https://react.dev/"
          target="blank"
        >
          React
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-button-drop-down-centered"
        drop="down-centered"
        variant="outline-dark"
        title="Skills"
        size="sm"
        style={{ margin: '1%' }}
      >
        <Dropdown.Item
          eventKey="1"
          href="https://www.postgresql.org/"
          target="blank"
        >
          PostgreSQL
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="2"
          href="https://codepen.io/"
          target="blank"
        >
          Codepen
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="3"
          href="https://konsole.kde.org/"
          target="blank"
        >
          Terminal
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="4"
          href="https://github.com/"
          target="blank"
        >
          Github
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="5"
          href="https://git-scm.com/"
          target="blank"
        >
          Git
        </Dropdown.Item>
      </DropdownButton>
    </div>
    <IconBox />
  </>
);
