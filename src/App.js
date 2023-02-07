import './App.css';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Json from a File</h1>
        {data.map((post) => (
            <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            </div>
        ))}
      </header>
    </div>
  );
}

export default App;
