import React from 'react';
import { Link } from '@reach/router';
import MainLayout from './MainLayout';

export default function NotFound(props) {
  return (
    <MainLayout>
      <div className="text-center">
        <h1 className="display-4 my-4">Sorry, nothing here.</h1>
        <div className="mt-5">
          <Link to="/" className="text-muted">
            <u>Home</u>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
