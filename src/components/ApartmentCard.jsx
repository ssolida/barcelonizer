import { Link } from 'react-router-dom';

function ApartmentCard({ apartment }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card apartment-card">
        <img src={apartment.image} className="card-img-top" alt={apartment.title} />
        <div className="card-body">
          <h5 className="card-title">{apartment.title}</h5>
          <p className="card-text">€{apartment.price}/month</p>
          <ul className="list-unstyled">
            <li>🛏️ {apartment.bedrooms} Bedrooms</li>
            <li>🚿 {apartment.bathrooms} Bathroom</li>
            <li>📍 {apartment.neighborhood}</li>
          </ul>
          <Link to={`/apartment/${apartment.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApartmentCard; 