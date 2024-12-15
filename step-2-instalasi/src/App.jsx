import { useState } from 'react'
import Header from './components/Header';

function App() {
 
    const [likes,setLikes] = useState(0);
function handleClick(){
    setLikes(likes+1);
}  
    // menampilkan elemen menggunakan pengulangan 
    const Hobies = ['Basket','Jogging','Membaca','Basket'];
    return(
    <>   
        <Header/>
        menampilkan menggunakan map
        <ul>
            {Hobies.map((hoby)=>(
                <li key={hoby}>{hoby}</li>    
            ))}
        </ul>
        <button onClick={handleClick}>Like ({likes})</button>
    </>)
}

export default App
