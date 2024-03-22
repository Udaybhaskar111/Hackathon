import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Bookmark from '../../assests/Bookmark.svg';
import Cart from '../../assests/Layer_1.svg';
import { axiosInstance } from '../../Services/Axios';

const columns = [
  { field: 'dataProduct', headerName: 'Data Product', width: 200 },
  { field: 'dataQuality', headerName: 'Data Quality', width: 160 },
  { field: 'domain', headerName: 'Domain', width: 150 },
  { field: 'dataSensitivity', headerName: 'Data Sensitivity', type: 'number', width: 170 },
  { field: 'sourceType', headerName: 'Source Type', width: 160 },
  { field: 'Description', headerName: 'Description', width: 380 },
  { field: 'Bookmark', headerName: '', sortable: false, width: 130, renderCell: (params) => <BookmarkCell /> },
  { field: 'cart', headerName: '', sortable: false, width: 100, renderCell: (params) => <CartCell /> }, // Add a column for the bookmark icon
];

const BookmarkCell = () => (
  <img src={Bookmark} alt="Bookmark" style={{ width: '24px', height: '24px' }} />
);

const CartCell = () => (
  <img src={Cart} alt="Cart" style={{ width: '24px', height: '24px' }} />
);

/**
 * 
 * created list component to view data in list view by rendering dynamically and grid is created by using mui 
 * @author - Greeshmika
 */
const List = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axiosInstance.get('/justice-leagues').then(res => {
      setRows(res.data.data.map(item => ({
        id: item.id,
        dataProduct: item.title,
        dataQuality: item.dataQuality,
        domain: item.domain,
        dataSensitivity: item.dataSecurity,
        sourceType: item.sourceType,
        Description: item.description,
      })));
    });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        components={{
          // eslint-disable-next-line react/prop-types
          Cell: ({ field }) => {
            if (field === 'bookmark') return <BookmarkCell />;
            if (field === 'cart') return <CartCell />;
            return null;
          },
        }}
      />
    </div>
  );
};

export default List;
