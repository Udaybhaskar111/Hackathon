/* eslint-disable react/jsx-key */
import React from 'react';
import { CardComponent } from '../Common/CardComponent/CardComponent';
import './AllCards.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { detailComp } from '../../App';
import { axiosInstance } from '../../Services/Axios';
import { useContext } from 'react';
export const AllCards = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 6;
  const lastDataPerPage = currentPage * dataPerPage;
  const firstDataPerPage = lastDataPerPage - dataPerPage;
  const records = cards.slice(firstDataPerPage, lastDataPerPage);
  const dat = useContext(detailComp);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.get('/justice-leagues').then((res) => {
      setCards(res.data.data);
    });
  }, []);
  const handleDetail = (id) => {
    axiosInstance.post('/justice-leagues/detail', { id }).then((res) => {
      console.log(res.data, 'as the data');
      dat.setDetailCard(res.data);
      console.log(dat, 'as the data');
      navigate('/detailCard');
    });
  };
  return (
    <>
    <div className="dataProducts">
      <div className="allCards">
        {records.map((each, index) => (
          <div onClick={() => handleDetail(each.id)}>
            <CardComponent data={each} />
          </div>
        ))}
      </div>
      
    </div>
    <Stack spacing={2}>
    <Pagination
      count={4}
      onChange={(e, p) => setCurrentPage(p)}
      sx={{ color: 'rgba(224,219,213,255)' }}
    />
  </Stack>
  </>
  );
};
