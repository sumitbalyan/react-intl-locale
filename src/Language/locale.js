import localeData from './translations/data.json';

export const retrieveLanguage = locale => locale.substring(0, 2);

export const supportedLocales = {
    en_CA: 'en-CA',
    fr_CA: 'fr-CA',
    en_US: 'en-US',
    es_US: 'es-US',
};

export const retrieveMessages = locale => localeData[locale] || localeData[supportedLocales.en_US];
