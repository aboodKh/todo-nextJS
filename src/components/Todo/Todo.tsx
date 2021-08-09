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
	},
	description: {
		width: "100%",
		borderStyle: "none",
		borderColor: "Transparent",
		overflow: "auto",
	},
}));

const Todo = ({id, title: t, description: d}) => {
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
	};

	return (
		<Accordion className={classes.root}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<input
					value={title}
					onChange={changeTitle}
					//	placeholder={title}
					className={classes.title}
					readOnly={!edit}
				/>
				<Button onClick={() => setEdit(true)}> edit </Button>
				<Button onClick={() => {}}> save </Button>
				<Button onClick={deleteTodo}> delete </Button>
			</AccordionSummary>
			<AccordionDetails>
				{/* <Typography>todo description</Typography> */}
				<textarea
					//	placeholder={description}
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
