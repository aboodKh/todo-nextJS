import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Image from "next/image";

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
}));

const Todo = () => {
	const classes = useStyles();

	return (
		<Accordion className={classes.root}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>title</AccordionSummary>
			<AccordionDetails>
				<Typography>todo description</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export default Todo;
