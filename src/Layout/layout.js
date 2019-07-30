import React from 'react'
import ArrowImg from './img/up-arrow.png'
import './layout.css'

const Layout = props => {
  var language = 'en'

  //This where we guarantee that, when the user chooses a language, every page will appear in the same lang
  if (
    !!props.pageContext &&
    (!!props.pageContext.slug || !!props.pageContext.lang)
  ) {
    try {
      language = !!props.pageContext.slug
        ? props.pageContext.slug.split('/')[1]
        : props.pageContext.lang.split('-')[0]
    } catch (e) {
      console.log(e)
    }
  }

  var homepage = 'Home'
  var how = 'How'
  var what = 'What'
  var who = 'Who'
  var contact = 'Contact'
  var joinUs = 'Join Us'

  /* This is to guarantee that when the user chooses language the 
  selected option in the nav bar will be the same accordingly */
  const renderOption = (langCode, langName) => (
    <option value={langCode}>{langName}</option>
  )

  return (
    <div className="viewport">
      <header className="header">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li key="homepage">
              <a href={`/${language}`} id="homepage">
                {homepage}
              </a>
            </li>
            <li key="how">
              <a href={`/${language}/how`} id="how">
                {how}
              </a>
            </li>
            <li key="what">
              <a href={`/${language}/what`} id="what">
                {what}
              </a>
            </li>
            <li key="who">
              <a href={`/${language}/who`} id="who">
                {who}
              </a>
            </li>
            <li key="contact">
              <a href={`/${language}/contact`} id="contact">
                {contact}
              </a>
            </li>
            <li key="joinUs">
              <a href={`/${language}/joinus`} id="joinUs">
                {joinUs}
              </a>
            </li>
            <li key="lang">
              <div className="dropdown-dark">
                <select
                  className="select-language"
                  onChange={e => {
                    if (e.target.value === 'pt') {
                      window.location = `/pt/${props.path.substring(4)}`
                      homepage = 'Início'
                      how = 'Como'
                      what = 'O quê'
                      who = 'Quem'
                      contact = 'Contacto'
                      joinUs = 'Junta-te à equipa'
                    } else {
                      window.location = `/en/${props.path.substring(4)}`
                    }
                  }}
                  value={language}
                >
                  {renderOption('en', 'English')}
                  {renderOption('pt', 'Português')}
                </select>
              </div>
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
