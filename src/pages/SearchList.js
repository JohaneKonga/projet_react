import React, { useState } from 'react';
import recommendations from '../data/recommendation';
import { TextField } from '@mui/material';

const SearchList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const recommendationsPerPage = 5;

    // Filtrer les recommandations en fonction du terme de recherche
    const filteredRecommendations = recommendations.filter(rec =>
        rec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        rec.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculer les index des recommandations pour la page actuelle
    const indexOfLastRecommendation = currentPage * recommendationsPerPage;
    const indexOfFirstRecommendation = indexOfLastRecommendation - recommendationsPerPage;
    const currentRecommendations = filteredRecommendations.slice(indexOfFirstRecommendation, indexOfLastRecommendation);

    // Changer de page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const totalPages = Math.ceil(filteredRecommendations.length / recommendationsPerPage);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <h1>Recommendations</h1>
            <TextField
                type="text"
                label="Rechercher...."
                variant="filled"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); 
                }}
                style={{padding: '5px', width: '80%', maxWidth: '400px' }}
            />
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {currentRecommendations.map(rec => (
                    <li key={rec.id} style={{ marginBottom: '20px', textAlign: 'left' }}>
                        <h2>{rec.title}</h2>
                        <p>{rec.description}</p>
                    </li>
                ))}
            </ul>
            <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
        </div>
    );
};

const Pagination = ({ totalPages, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav style={{ marginTop: '20px' }}>
            <ul className="pagination" style={{ display: 'flex', justifyContent: 'center', padding: 0, listStyleType: 'none' }}>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`} style={{ margin: '0 5px' }}>
                        <a onClick={() => paginate(number)} href="#" className="page-link" style={{ padding: '10px', cursor: 'pointer', textDecoration: 'none', color: currentPage === number ? 'white' : 'blue', backgroundColor: currentPage === number ? 'blue' : 'white' }}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SearchList;
