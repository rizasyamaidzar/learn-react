export default function Form(){
    return(
        <>
        <form className="w-full max-w-full mx-auto px-4 py-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">

        <h3 className='w-full text-2xl'>Hari ini belanja apa kita?</h3>
        
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

            <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Nama Barang" />
            <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button">
                Add
            </button>
        </div>
    </form></>
    )
}