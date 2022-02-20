import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          あなたの好きをWikiNotesでもっと探索しよう 🧭
        </p>
        <a
          className="App-link"
          href="https://vividarmy-wikinotes.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VividArmy WikiNotes
        </a>
      </header>
    </div>
  );
}

export default App;
