import { useState } from 'react';
import './App.css';
import InventoryData from './assets/inventory.json';
import Header from './Header';
import InventoryList from './InventoryList';
import ProductCard from './ProductCard';

function App() {
  const [inventory, setInventory] = useState(InventoryData.inventory);

  function PromoteItem() {
    return (
      <ProductCard
        baseName="Limited Edition Tee!"
        baseDescription="Special limited edition neon green shirt with a metallic Code the
        Dream Logo shinier than the latest front-end framework! Signed by the legendary Frank!"
      />
    );
  }

  return (
    <main>
      {/* <h1>Hello?</h1> */}
      <Header></Header>
      {/* <InventoryList></InventoryList> */}
      <InventoryList inventory={inventory}>{PromoteItem()}</InventoryList>
    </main>
  );
}

export default App;
