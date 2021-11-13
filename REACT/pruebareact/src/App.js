import './App.css';

function App() {

  const genshin = require('genshin')
  console.log(genshin.characters("amber").then(res => {
    console.log(res.name)
  })
  )
  return (
    <div className="App">

    </div>
  );
}

export default App;
