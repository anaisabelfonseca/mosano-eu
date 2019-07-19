import React from 'react'
import ArrowImg from './img/up-arrow.png'
import './layout.css'

const Layout = props => {
  return (
    <div className="viewport">
      <header className="header">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li>
              <a href="/" id="homepage">
                Home
              </a>
            </li>
            <li>
              <a href="/how" id="how">
                How
              </a>
            </li>
            <li>
              <a href="/what" id="what">
                What
              </a>
            </li>
            <li>
              <a href="/who" id="who">
                Who
              </a>
            </li>
            <li>
              <a href="/contact" id="contact">
                Contact
              </a>
            </li>
            <li>
              <a href="/joinUs" id="joinUs">
                Join Us
              </a>
            </li>
            <li>
              <select>
                <option value="eng" href="#eng" data-reload>
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

        <a className="fix-me button" href="">
          <img src={ArrowImg} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Layout
