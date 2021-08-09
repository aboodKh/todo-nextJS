import './globals.scss'
import React,{useState}from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import {NavBar} from '../components';
import { Container, createMuiTheme, jssPreset, StylesProvider }  from '@material-ui/core';
import App from 'next/app'
import { appWithTranslation, i18n} from '../i18n';
import { create } from 'jss';
import rtl from 'jss-rtl';

// Configure JSS, to change direction of  MUI componentes
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};


MyApp.getInitialProps = async (appContext:any) => { return({ ...await App.getInitialProps(appContext), pageProps:{lng: appContext.ctx.req.lng} }) };

export default appWithTranslation(MyApp);

 function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  
  let [dir, setDir]= useState(i18n.dir(pageProps.lng));
  let [lng, setLng]= useState(pageProps.lng);
  //console.log("dir", dir);
  //console.log("lng", lng);
  //console.log(props);
  let [darkMode, setDarkMode]= useState(false);

  let usedTheme= createMuiTheme(theme, {direction: dir});
  
  let palette:any= {
    palette:{
    primary: {
      main: '#303030',
    },
    secondary: {
      main: '#648dae',
    },
    type: "dark"
  },
}
  if (darkMode) usedTheme= createMuiTheme({...usedTheme, ...palette});

  return (
  <React.Fragment>
      <Head>
        <title>general page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
    <ThemeProvider theme={usedTheme}>
      <StylesProvider jss={jss}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NavBar  lng={lng} dir={dir} setLng={setLng} setDir={setDir} darkMode={darkMode} setDarkMode={setDarkMode} />  
        <Container  lang={lng} dir={dir} style={{height:"100%"}} >  
          <Component {...pageProps}  />  
        </Container>
      </StylesProvider>
    </ThemeProvider>
  </React.Fragment>
  );
}


