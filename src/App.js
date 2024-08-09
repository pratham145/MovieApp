import './App.css';
import Cards from './Cards';
import Data from './Data';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(Data);

  function remove(id) {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  }

  if (data.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center flex-col">
        <h1 className="text-3xl font-bold text-center mb-8">NO DATA FOUND</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          onClick={() => { window.location.reload(); }}
        >
          REFRESH
        </button>
      </div>
    );
  }
//movieapp
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">MOVIES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.map((item) => (
          <Cards remove={remove} key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default App;
