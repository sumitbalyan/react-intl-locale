import React, { useState }  from 'react'
import {retrieveMessages, retrieveLanguage} from './Language/locale'
import { IntlProvider } from 'react-intl';
import App from './App';

const AppContainer = () =>{
    const [locale, setLocale] = useState("en-US");//fr-CA
    const messages = retrieveMessages(locale);
    const handleSelect = (locale) => {
        setLocale(locale)
    }
    return(
        <IntlProvider key={locale} locale={retrieveLanguage(locale)} messages={messages} >
            <App locale = {locale} handleSelect = {handleSelect} />
        </IntlProvider>
    )
}

export default AppContainer;