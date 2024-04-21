
import './App.css';
import Counter from './components/Counter';
import NewUser from './components/NewUser';

function App() {
  return (
    <div className="App">
      <h3 className='text-red-800 font-bold text-3xl'>Typing Event</h3>
      <NewUser />
      <Counter />
    </div>
  );
}

export default App;
