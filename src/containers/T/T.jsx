import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Header/Header.jsx';

const Terms = props => {
  useEffect(() => {
    window.location = 'https://www.etark.in';
  });
  return (
    <html>
      <head>
        <title>Redirecting ...</title>
      </head>
      <body>
        <div></div>
      </body>
    </html>
  );
};

export default Terms;
