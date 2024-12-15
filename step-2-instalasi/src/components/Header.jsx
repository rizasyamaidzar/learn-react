export default function Header({author,time}){
  return( <>    
      <h1>Hello word {author ? author : 'Syamaidzar, ini menggunakan dectructuring ternary operator'}</h1>
      <h2>Hai selamat {time ? time : 'Sore'}</h2>
  </>)
}