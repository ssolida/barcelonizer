import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchApartments } from '../store/apartmentsSlice';
import FilterSection from '../components/FilterSection';
import ApartmentList from '../components/ApartmentList';

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <FilterSection />
      <ApartmentList />
    </div>
  );
}

export default Dashboard; 