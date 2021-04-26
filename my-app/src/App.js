import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

import { I18nProvider, LOCALES } from './i18n';
import translate from './i18n/messages/translate';
import Report from './Report';

function App() {
  const [locale, setLocale] = useState(LOCALES.TURKISH);
  return (
    <I18nProvider locale={locale}>
      <div className="App">
        <header className="App-header">
          {translate("merhaba")}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {translate("edit", { path: <code>src/App.js</code> })}
            <hr />
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <Report />
          <hr />
          <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
          <button onClick={() => setLocale(LOCALES.TURKISH)}>Turkish</button>
        </header>
      </div>
    </I18nProvider>
  );
}

export default App;
