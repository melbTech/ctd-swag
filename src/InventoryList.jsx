/** InventoryList.jsx */
import ProductCard from './ProductCard';

function InventoryList({ inventory, children }) {
  return (
    <ul>
      {children}
      {inventory.map((item) => {
        return (
          <ProductCard
            key={item.id}
            baseName={item.baseName}
            baseDescription={item.baseDescription}
          />
        );
      })}
    </ul>
  );
}

export default InventoryList;
