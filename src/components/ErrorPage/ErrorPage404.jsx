import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage404() {
  const error = useRouteError();
  return (
    <div>
      <h1>ERROR</h1>
      <div>
        <p>{error.statusText}</p>
        <p>{error.data}</p>
      </div>
    </div>
  );
}

export default ErrorPage404;
