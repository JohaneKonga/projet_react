import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, Paper } from '@mui/material';

const UserProfilePage = ({ currentUser }) => {
  const [userInfo, setUserInfo] = useState(currentUser);
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Logique pour sauvegarder les modifications de l'utilisateur
    setEditMode(false);
    console.log('Informations utilisateur mises à jour :', userInfo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8} lg={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Profil utilisateur
          </Typography>
          <form onSubmit={(e) => e.preventDefault()}>
            <TextField
              fullWidth
              variant="outlined"
              label="Prénom"
              name="firstName"
              value={userInfo.firstName}
              onChange={handleChange}
              disabled={!editMode}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Nom de famille"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleChange}
              disabled={!editMode}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              disabled={!editMode}
            />
            {editMode ? (
              <Button onClick={handleSave} variant="contained" color="primary">
                Sauvegarder
              </Button>
            ) : (
              <Button onClick={handleEdit} variant="contained" color="secondary">
                Modifier
              </Button>
            )}
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UserProfilePage;
