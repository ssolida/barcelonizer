import { useSelector } from 'react-redux';
import ApartmentCard from './ApartmentCard';

function ApartmentList() {
  const { items, status, error, filters } = useSelector(state => state.apartments);

  const filteredApartments = items.filter(apartment => {
    if (filters.neighborhood && apartment.neighborhood !== filters.neighborhood) return false;
    if (filters.bedrooms && apartment.bedrooms !== parseInt(filters.bedrooms)) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max && (apartment.price < min || apartment.price > max)) return false;
      if (!max && apartment.price < min) return false;
    }
    return true;
  });

  if (status === 'loading') {
    return <div className="text-center">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center text-danger">Error: {error}</div>;
  }

  return (
    <div className="row">
      {filteredApartments.map(apartment => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
}

export default ApartmentList; 