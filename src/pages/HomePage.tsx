import { Box, Button, Typography } from "@mui/material";

function HomePage() {
	return (
		<Box component="main">
			<Typography variant="h2">Homepage</Typography>
			<Typography variant="body1">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
				temporibus, a ratione soluta non, iure quae nihil dolorem iste ex
				consequatur quidem voluptatum similique expedita corporis dignissimos!
				Quam, harum rerum.
			</Typography>
			<Button variant="contained" color="primary">
				Nu tar vi lunch!
			</Button>
		</Box>
	);
}

export default HomePage;
