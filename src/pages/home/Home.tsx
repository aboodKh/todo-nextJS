import React, {useEffect, useState} from "react";
import Head from "next/head";
import styles from "./home.module.scss";
import {Container} from "@material-ui/core";
import {withTranslation} from "../../i18n";
import Todo from "../../components/Todo/Todo"

export const getServerSideProps = async () => {
	const response = await fetch(
		"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=SQL2FMGWaJQMRUSJA4Q6B3FTKnXuKFEM&limit=5"
	);
	const {data} = await response.json();
	return {
		props: {
			data: data,
		},
	};
};

/* Home.getInitialProps = async () => ({
  namespacesRequired: ['home'],
}) */

function Home({t}) {
	return (

		<Container style={{height: "100%"}}>
			<Head>
				<title>{t("home:title")} </title>
			</Head>
			<Todo />
		</Container>
	);
}

export default withTranslation("home")(Home);
