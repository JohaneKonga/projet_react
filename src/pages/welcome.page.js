import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function HomePage() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 4,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          <Typography component="h1" variant="h2" gutterBottom>
            Bienvenue sur Shopsens
          </Typography>
          <Typography variant="body1" gutterBottom>
            Chez Shopsens, nous analysons vos données d'achat pour vous recommander des offres personnalisées,
            améliorant ainsi votre expérience d'achat et votre fidélisation.
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 4 }}>
            Commencer
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default HomePage;
