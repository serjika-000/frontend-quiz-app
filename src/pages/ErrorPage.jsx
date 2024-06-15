import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <div className="error-container container">
        <div>
          <h3>
            404 Error: Page not found. 
           
          </h3>
          <Link to="/" className="btn">
            Go To Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="error-container container">
      <div>
        <h3>
          Oops! 
        </h3>
        <Link to="/" className="btn">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;