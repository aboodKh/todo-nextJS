import React, {useEffect, useState} from "react";
import Head from "next/head";
import styles from "./home.module.scss";
import {Button, Container, TextField} from "@material-ui/core";
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
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");

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

	const createTodo = async (ev) => {
		ev.preventDefault();
		if (title == "" || description == "") {
			alert("complete todo info frist!");
			return;
		}
		const response = await fetch("/api/todos", {
			method: "POST",
			headers: {},
			body: JSON.stringify({
				title: title,
				description: description,
			}),
		});
		console.log(await response.json());
		getTodos();
	};

	const titleChangeHandler = (ev: any) => {
		setTitle(ev.target.value);
		console.log(title);
	};
	const descriptionChangeHandler = (ev: any) => {
		setDescription(ev.target.value);
	};
	return (
		<Container style={{height: "100%"}}>
			<Head>
				<title>{t("home:title")} </title>
			</Head>

			<form
				style={{
					width: "50%",
					height: "50%",
					marginTop: 100,
				}}
				onSubmit={createTodo}
				noValidate
				autoComplete="off"
			>
				<TextField
					id="title"
					label="title"
					fullWidth
					variant="filled"
					value={title}
					onChange={titleChangeHandler}
				/>
				<br />
				<TextField
					style={{marginTop: 10}}
					id="description"
					label="description"
					fullWidth
					variant="filled"
					value={description}
					onChange={descriptionChangeHandler}
				/>

				<Button type="submit" style={{marginTop: 10}}>
					add Todo
				</Button>
			</form>

			{todos &&
				todos.map((todo: TodoType) => {
					return <Todo key={todo.id} {...todo} getTodos={getTodos} />;
				})}

			{/* <Todo /> */}
		</Container>
	);
}

export default withTranslation("home")(Home);
