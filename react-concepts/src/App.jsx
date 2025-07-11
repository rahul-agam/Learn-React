import './App.css'
import Item from './components/Item';
import Cart from './components/Cart'

function App() {

  return (
    <>
    <div>
      <Item name = "Apple" price = {10} />
      <Item name = "Banana" price = {20} />
      <Item name = "Avacado" price = {100} />
      <Item name = "Dosa" price = {15} />
    </div>
    <div>
      <h1> --- Cart ---</h1>
      <Cart />
    </div>
    </>
  )
}

export default App;
