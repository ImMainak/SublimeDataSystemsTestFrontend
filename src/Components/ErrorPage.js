import React from 'react'
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div class="container error-container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="text-center">
          <h1 class="display-4">404</h1>
          <p class="lead">Oops! Page not found.</p>
          <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Link to="/" class="btn btn-primary">Back To Dashboard</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ErrorPage