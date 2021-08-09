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

const Todo = ({titleProp, descriptionProp}) => {
	const [title, setTitle] = useState<string>(titleProp);
	const [description, setDescription] = useState<string>(descriptionProp);

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

	return (
		<Accordion className={classes.root}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<input
					onChange={changeTitle}
					placeholder={title}
					className={classes.title}
					readOnly={!edit}
				/>
				<Button onClick={() => setEdit(true)}> edit </Button>
				<Button onClick={() => {}}> save </Button>
			</AccordionSummary>
			<AccordionDetails>
				{/* <Typography>todo description</Typography> */}
				<textarea
					placeholder={description}
					className={classes.description}
					readOnly={!edit}
					onChange={changeDescription}
				></textarea>
			</AccordionDetails>
		</Accordion>
	);
};

export default Todo;
