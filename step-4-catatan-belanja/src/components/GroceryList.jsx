import Item from "./Item";

const groceryItems = [
    {
      id: 1,
      name: 'Kopi Bubuk',
      quantity: 2,
      checked: true,
    },
    {
      id: 2,
      name: 'Gula Pasir',
      quantity: 5,
      checked: false,
    },
    {
      id: 3,
      name: 'Air Mineral',
      quantity: 3,
      checked: false,
    },
  ];
export default function GroceryList(){
    return(
        <>
           <ul className="divide-y divide-gray-200 px-4">
            {groceryItems.map((item) => (
                <Item key={item.id} item={item} />
            ))}
    </ul>
        </>
    )
}