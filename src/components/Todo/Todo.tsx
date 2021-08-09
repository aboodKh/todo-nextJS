import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "next/image";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 10,
	},
	leftSection: {
		marginLeft: "5vw",
	},
	rightSection: {
		marginLeft: "15vw",
	},
	title: {
		border: 0,
		width: "25%",
	},
	description: {
		width: "100%",
		borderStyle: "none",
		borderColor: "Transparent",
		overflow: "auto",
	},
	date: {
		marginTop: 8,
		marginLeft: 10,
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
}));

const Todo = ({id, title: t, description: d, getTodos, createdAt}) => {
	const [title, setTitle] = useState<string>(t);
	const [description, setDescription] = useState<string>(d);

	const [edit, setEdit] = useState<boolean>(false);

	const classes = useStyles();

	const changeTitle = (eve: any) => {
		console.log(eve.target.value);
		setTitle(eve.target.value);
	};

	const changeDescription = (eve: any) => {
		console.log(eve.target.value);
		setDescription(eve.target.value);
	};

	const deleteTodo = async () => {
		const response = await fetch("/api/todos", {
			method: "DELETE",
			headers: {},
			body: JSON.stringify({
				id: id,
			}),
		});
		console.log(await response.json());
		getTodos();
	};

	const updateTodo = async () => {
		const response = await fetch("/api/todos", {
			method: "PUT",
			headers: {},
			body: JSON.stringify({
				id: id,
				title: title,
				description: description,
			}),
		});
		console.log(await response.json());
		setEdit(false);
		getTodos();
	};

	const date = new Date(createdAt).toUTCString();

	return (
		<Accordion className={classes.root}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<input
					value={title}
					onChange={changeTitle}
					className={classes.title}
					readOnly={!edit}
				/>
				<div className={classes.date}>{date}</div>
				<Button color="primary" onClick={() => setEdit(true)}>
					{" "}
					edit{" "}
				</Button>
				<Button color="primary" onClick={updateTodo}>
					{" "}
					save{" "}
				</Button>
				<Button style={{backgroundColor: "red"}} onClick={deleteTodo}>
					{" "}
					delete{" "}
				</Button>
			</AccordionSummary>
			<AccordionDetails>
				<textarea
					value={description}
					className={classes.description}
					readOnly={!edit}
					onChange={changeDescription}
				></textarea>
			</AccordionDetails>
		</Accordion>
	);
};

export default Todo;
