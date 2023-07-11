import React from 'react';
import Table from './Table/Table';
import TableData from './Table/TableData.js';

const index = () => {
  return (
    <>
      {TableData.map((item) => {
        return (
          <>
            <Table item={item} key={item.id} />
          </>
        );
      })}
    </>
  );
};

export default index;
