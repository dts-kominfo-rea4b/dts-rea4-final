import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const MainNavigation = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Laskar News
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavigation;
