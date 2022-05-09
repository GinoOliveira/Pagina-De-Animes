
import './App.css';
import SearchInput from './components/SearchInput';
import { useEffect, useState } from 'react';

function App() {
  const [info, setInfo] = useState({})
  const [text, setText] = useState('')
  const logo ="https://i0.wp.com/4.bp.blogspot.com/-16NJ9ZvHqp0/WndMhMmdPQI/AAAAAAAAByg/MKPlypPt9iMMkhmhu9mnwF9_sQc1CzfJgCLcBGAs/s1600/The-evolution-of-graphics-in-anime-movies.png"
  
  
  useEffect(() =>{
    if(text) {
      setInfo({})
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=20`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response)
          
        } )
    }
  }, [text])

  return (
    <div className="nav">
      <div className='nav'> 
        <h1 className='h1' >Animes</h1>
        <SearchInput className='nav-input' value={text} onChange={(search) => setText(search)} />
      </div>  
      <div> 
          
        {text && !info.data && (
          <span className='span'><h1>Carregando... </h1></span>
        )}
            {!text &&(
              <img className='logo' src={logo} alt="fundo" />
            )}
            
            {info.data && (
              <ul className='animes-list'>
                {info.data.map((anime)=> (
                  <li key={anime.id}>
                    <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle}/>
                    {anime.attributes.canonicalTitle}
                  </li>
                )
                )}
              </ul>

            )
        }
        </div>
    </div>

  );
}

export default App;
