import React from 'react'
import ArrowImg from './img/up-arrow.png'
import './layout.css'

const Layout = props => {
  let language = 'en'
  console.log(language)
  console.log(props.pageContext.slug)

  return (
    <div className="viewport">
      <header className="header">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li key="homepage">
              <a href="/en" id="homepage">
                Home
              </a>
            </li>
            <li key="how">
              <a href="/en/how" id="how">
                How
              </a>
            </li>
            <li key="what">
              <a href="/en/what" id="what">
                What
              </a>
            </li>
            <li key="who">
              <a href="/en/who" id="who">
                Who
              </a>
            </li>
            <li key="contact">
              <a href="/en/contact" id="contact">
                Contact
              </a>
            </li>
            <li key="joinUs">
              <a href="/en/joinUs" id="joinUs">
                Join Us
              </a>
            </li>
            <li key="lang">
              <select onChange={e => console.log(e.target.value)}>
                <option value="en" href="#en-gb" data-reload defaultValue>
                  English
                </option>
                <option value="pt" href="#pt-pt" data-reload>
                  Português
                </option>
              </select>
            </li>
          </ul>
        </nav>
      </header>

      <div className="page-content">
        {props.children}

        <a
          className="fix-me button"
          href="javascript:void(0)"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
        >
          <img src={ArrowImg} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Layout
