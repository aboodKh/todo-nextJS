import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
	Button,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Tooltip,
	Zoom,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {i18n} from "../../i18n";
import Link from "next/link";
import {useTranslation} from "../../i18n";
import MuiSwitch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		textTransform: "lowercase",
	},
	title: {
		flexGrow: 1,
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

export default function NavBar({
	lng,
	dir,
	setLng,
	setDir,
	darkMode,
	setDarkMode,
}) {
	const classes = useStyles();
	let {t} = useTranslation();

	const languageChange = (ev) => {
		i18n.changeLanguage(ev.target.value, () => {
			setLng(ev.target.value);
			setDir(i18n.dir());
		});
	};

	let changeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDarkMode(event.target.checked);
	};

	return (
		<div className={classes.root}>
			<AppBar dir={dir} position="static">
				<Toolbar>
					{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
					<Typography className={classes.title}>
						<Link href="/home">{t("NavBar:home")}</Link>
					</Typography>
					<Tooltip
						title={t("NavBar:dark mode")}
						disableFocusListener
						TransitionComponent={Zoom}
					>
						<MuiSwitch
							checked={darkMode}
							onChange={changeMode}
							name="darkMode"
							color="secondary"
						/>
					</Tooltip>
					{/* <FormControl variant="filled" className={classes.formControl} >
            <InputLabel id="language-selector" style={{color:"#fff"}} >Language</InputLabel>
             <Select 
             style={{color:"#fff"}}
             labelId="language-selector"
              value={lng}
              onChange={languageChange}
             >
               <MenuItem value="en">English</MenuItem>
               <MenuItem value="ar">Arabic</MenuItem>
             </Select>
          </FormControl>    */}

					<Button color="inherit" variant="text" className={classes.menuButton}>
						<Typography> {t("NavBar:login")} </Typography>
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
