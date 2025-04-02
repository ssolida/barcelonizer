import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../store/apartmentsSlice';

function FilterSection() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.apartments.filters);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    dispatch(setFilters({
      neighborhood: formData.get('neighborhood'),
      priceRange: formData.get('priceRange'),
      bedrooms: formData.get('bedrooms')
    }));
  };

  return (
    <div className="row mb-4">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-3">
                  <select 
                    className="form-select" 
                    name="neighborhood"
                    defaultValue={filters.neighborhood}
                  >
                    <option value="">Neighborhood</option>
                    <option value="gothic">Gothic Quarter</option>
                    <option value="eixample">Eixample</option>
                    <option value="gracia">Gracia</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select 
                    className="form-select" 
                    name="priceRange"
                    defaultValue={filters.priceRange}
                  >
                    <option value="">Price Range</option>
                    <option value="0-1000">€0 - €1000</option>
                    <option value="1000-2000">€1000 - €2000</option>
                    <option value="2000+">€2000+</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select 
                    className="form-select" 
                    name="bedrooms"
                    defaultValue={filters.bedrooms}
                  >
                    <option value="">Bedrooms</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3+</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Apply Filters
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSection; 