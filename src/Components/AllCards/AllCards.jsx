/* eslint-disable react/jsx-key */

/*
@Author Durga Lalitha

*/


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
import List from '../../Pages/ListPage/List';
/**
 * 
 * @returns home page data
 * udaybhaskar
 * it takes 6 per page
 */
const AllCards = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 6;
  const lastDataPerPage = currentPage * dataPerPage;
  const firstDataPerPage = lastDataPerPage - dataPerPage;
  const records = cards.slice(firstDataPerPage, lastDataPerPage);
  const dat = useContext(detailComp);
  const navigate = useNavigate();
  useEffect(() => {
    /**
     * udaybhaskar
     * it takes the /justice-leagues and return json
     * 
     */
    axiosInstance.get('/justice-leagues').then((res) => {
      setCards(res.data.data);
    });
  }, []);

  //post request to the get the details by id
  const handleDetail = (id) => {
    /**
     * udaybhaskar
     * it takes the /justice-leagues/detail with body of id and return particular object
     */
    axiosInstance.post('/justice-leagues/detail', { id }).then((res) => {
      dat.setDetailCard(res.data);
      console.log(res.data,"as the dataaaaa")
      navigate('/detailpage');
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
          className='pagination'
        />
      </Stack>
    </>
  );
};
export default AllCards;