export default function Item({item}){
    return(
        <>
        <li key={item.id} className="py-4"> 
            <div className="flex items-center">
                <input id="todo1" name="todo1" type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"/>
                <label for="todo1" className="ml-3 block text-gray-900" >
                    <span className="text-md font-light text-gray-500 mx-2">{item.quantity}</span>
                    <span className="text-lg font-medium" style={item.checked ? { textDecoration: 'line-through '} : {}}>{item.name}</span>
                </label>
            </div>
        </li>
        </>
    )
}