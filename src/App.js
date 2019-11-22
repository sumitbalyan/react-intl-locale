import React from 'react';
import { FormattedMessage } from 'react-intl';

function App({handleSelect}) {
  return (
    <div className="div-primary">
          <button className="btn-primary" onClick = {()=>handleSelect("en-US")}>EN</button>
          <button className="btn-primary" onClick = {()=>handleSelect("fr-CA")} >FR</button>
          <p><FormattedMessage id="helloWorld" defaultMessage="Hello World!!" /></p>
    </div>
  );
}

export default App;
