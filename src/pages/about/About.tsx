import styles from './About.module.scss';
import {Button, TextField} from "@material-ui/core"
import React from 'react';
import Head from 'next/head';
import {useTranslation} from '../../i18n';


export const getServerSideProps= async () => {
    return { props: {} };
  };
  

 export default function About(){
   let {t}= useTranslation();
    return( 
    <React.Fragment>
        <Head>
            <title>{t("about:title")} </title>
        </Head>
        <h1 className={styles.red}> about </h1>
        <TextField id="standard-basic" label="email" />  
        <Button variant="contained" color="primary"> contact us</Button> 
    </React.Fragment>
    )
}