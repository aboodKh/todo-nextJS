import React, {useEffect, useState} from "react";
import Head from "next/head";
import styles from "./home.module.scss";
import {Container} from "@material-ui/core";
import {withTranslation} from "../../i18n";
import Todo from "../../components/Todo/Todo";
import {Prisma, Todo as TodoType} from "@prisma/client";

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

function Home({t}) {
	const [todos, setTodos] = useState<TodoType[]>();

	const getTodos = async () => {
		try {
			const response = await fetch("/api/todos");
			const todos = await response.json();
			//console.log(todos);
			setTodos(todos);
		} catch (err) {
			console.log("error while getting todos", err);
		}
	};
	useEffect(() => {
		getTodos();
	}, []);

	return (
		<Container style={{height: "100%"}}>
			<Head>
				<title>{t("home:title")} </title>
			</Head>

			{todos &&
				todos.map((todo: TodoType) => {
					return (
						<Todo titleProp={todo.title} descriptionProp={todo.description} />
					);
				})}

			{/* <Todo /> */}
		</Container>
	);
}

export default withTranslation("home")(Home);
