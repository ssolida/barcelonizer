import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ApartmentDetail() {
  const { id } = useParams();
  const apartment = useSelector(state => 
    state.apartments.items.find(apt => apt.id === parseInt(id))
  );

  if (!apartment) {
    return <div className="container my-5">Apartment not found</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <img 
            src={apartment.image} 
            className="img-fluid rounded" 
            alt={apartment.title} 
          />
        </div>
        <div className="col-md-4">
          <h2>{apartment.title}</h2>
          <p className="h3 text-primary">€{apartment.price}/month</p>
          <hr />
          <h4>Details</h4>
          <ul className="list-unstyled">
            <li>🛏️ {apartment.bedrooms} Bedrooms</li>
            <li>🚿 {apartment.bathrooms} Bathroom</li>
            <li>📍 {apartment.neighborhood}</li>
          </ul>
          <hr />
          <button className="btn btn-primary w-100">Contact Owner</button>
        </div>
      </div>
    </div>
  );
}

export default ApartmentDetail; 