import './App.css';
import { useCallback, useState } from 'react';
import { Search } from './components/search';

const allBrands = [
  {id: "1", brandName: "puma",},
  {id: "2", brandName: "adiddas",},
  {id: "3", brandName: "nike",},
  {id: "4", brandName: "file",},
  {id: "5", brandName: "reebok",},
]

function App() {
  const [brands, setBrands] = useState(allBrands);

  const handleChange = useCallback((value) => {
    console.log(brands[0]);
    const updatedBrands = value?.length > 0 ? brands.filter(brand => brand.brandName.includes(value)) : allBrands;
    setBrands(updatedBrands);
  }, [brands]);

  console.log(brands);

  const handleSort = () => {
    const sortedBrands = [...allBrands].sort((a, b) => {
      const nameA = a.brandName.toUpperCase();
      const nameB = b.brandName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      };
      if (nameA > nameB) {
        return 1;
      };
      return 0;
    });
    setBrands(sortedBrands);
  }

  return (
    <div className="App">
      <h2>useCallback Hook</h2>
      <div className="flex">
        <div>
          <button onClick={handleSort}>Sort By Name</button>
          <div>
            {
              brands.map(brand => <p>{brand.brandName}</p>)
            }
          </div>
        </div>
        <div>
          <Search handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
