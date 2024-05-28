import React, { useState } from 'react';
import { Typography, Grid, Paper, List, ListItem, ListItemText, Pagination } from '@mui/material';

const Page1 = () => {
  const [articles] = useState([
    { id: 1, name: 'Article 1' },
    { id: 2, name: 'Article 2' },
    { id: 3, name: 'Article 3' },
    { id: 4, name: 'Article 4' },
    { id: 5, name: 'Article 5' },
  ]);
  const [page, setPage] = useState(1);
  const articlesPerPage = 3;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * articlesPerPage;
  const displayedArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8} lg={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Page 1
          </Typography>
          <List>
            {displayedArticles.map((article) => (
              <ListItem key={article.id}>
                <ListItemText primary={article.name} />
              </ListItem>
            ))}
          </List>
          <Pagination count={Math.ceil(articles.length / articlesPerPage)} page={page} onChange={handlePageChange} />
        </Paper>
      </Grid>
    </Grid>
  );
};

const Page2 = () => {
  const [articles] = useState([
    { id: 6, name: 'Article 6' },
    { id: 7, name: 'Article 7' },
    { id: 8, name: 'Article 8' },
    { id: 9, name: 'Article 9' },
    { id: 10, name: 'Article 10' },
  ]);
  const [page, setPage] = useState(1);
  const articlesPerPage = 3;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * articlesPerPage;
  const displayedArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8} lg={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Page 2
          </Typography>
          <List>
            {displayedArticles.map((article) => (
              <ListItem key={article.id}>
                <ListItemText primary={article.name} />
              </ListItem>
            ))}
          </List>
          <Pagination count={Math.ceil(articles.length / articlesPerPage)} page={page} onChange={handlePageChange} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export { Page1, Page2 };
