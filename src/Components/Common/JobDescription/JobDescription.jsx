/*@Author Sai */

import React from 'react';
import { data } from './Data';
import './JobDescription.scss';

const JobDescription = () => {
  return (
    <div>
      {data.map((e) => (
        <div key={e.id} className="Data">
          <ul className="Data__List">
            <li className="Data__List__Heading">
              {' '}
              <h1>{e.heading}</h1>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default JobDescription;
