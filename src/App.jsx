import { useLoaderData } from 'react-router-dom'
import './App.css'
import Card from './conponents/card'
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className='mx-8'>
      
      <h1 className='text-3xl font-semibold text-purple-700 text-center my-8'>Total coffees {coffees.length}</h1>

      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <Card
             key={coffee._id} 
             coffee ={coffee}
             coffees ={coffees}
             setCoffees ={setCoffees}
             ></Card>)
        }
      </div>

      
    </div>
  )
}

export default App
