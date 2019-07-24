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
              <a href="/en" id="homepage">
                Home
              </a>
            </li>
            <li>
              <a href="/en/how" id="how">
                How
              </a>
            </li>
            <li>
              <a href="/en/what" id="what">
                What
              </a>
            </li>
            <li>
              <a href="/en/who" id="who">
                Who
              </a>
            </li>
            <li>
              <a href="/en/contact" id="contact">
                Contact
              </a>
            </li>
            <li>
              <a href="/en/joinUs" id="joinUs">
                Join Us
              </a>
            </li>
            <li>
              <select>
                <option value="eng" href="#en-gb" data-reload>
                  English
                </option>
                <option value="pt" href="#pt-pt" data-reload>
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
