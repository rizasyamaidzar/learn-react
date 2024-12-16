export default function GroceryList(){
    return(
        <>
           <ul className="divide-y divide-gray-200 px-4">
        <li className="py-4">
            <div className="flex items-center">
                <input id="todo1" name="todo1" type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"/>
                <label for="todo1" className="ml-3 block text-gray-900" >
                    <span className="text-lg font-medium">Finish project proposal</span>
                    <span className="text-sm font-light text-gray-500">Due on 4/1/23</span>
                </label>
            </div>
        </li>
        <li className="py-4">
            <div className="flex items-center">
                <input id="todo2" name="todo2" type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                <label for="todo2" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">Buy groceries</span>
                    <span className="text-sm font-light text-gray-500">Bananas, milk, bread</span>
                </label>
            </div>
        </li>
        <li className="py-4">
            <div className="flex items-center">
                <input id="todo3" name="todo3" type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
                <label for="todo3" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">Go for a run</span>
                    <span className="text-sm font-light text-gray-500">3 miles</span>
                </label>
            </div>
        </li>
    </ul>
        </>
    )
}