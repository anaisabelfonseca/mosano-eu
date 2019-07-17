import React from 'react'
import ArrowImg from './img/up-arrow.png'
import './layout.css'

const Layout = props => {
  return (
    <div className="viewport">
      <header className="header">
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />
        <nav>
          <ul>
            <li>
              <a href="../pages/homepage.js" id="homepage">
                Home
              </a>
            </li>
            <li>
              <a href="../pages/how.js" id="how">
                How
              </a>
            </li>
            <li>
              <a href="../pages/what.js" id="what">
                What
              </a>
            </li>
            <li>
              <a href="../pages/who.js" id="who">
                Who
              </a>
            </li>
            <li>
              <a href="../pages/contact.js" id="contact">
                Contact
              </a>
            </li>
            <li>
              <a href="../pages/joinUs.js" id="joinUs">
                Join Us
              </a>
            </li>
            <li>
              <select onchange="setLanguageVariables(this.value)">
                <option value="eng" href="#eng" data-reload selected>
                  English
                </option>
                <option value="pt" href="#pt" data-reload>
                  Portugues
                </option>
              </select>
            </li>
          </ul>
        </nav>
      </header>

      <div className="page-content">
        {props.children}

        <a class="fix-me button" href="">
          <img src={ArrowImg} />
        </a>
      </div>
    </div>
  )
}

export default Layout
