import './App.css';
import Apropos from './components/a-propos';
import Competences from './components/competences';
import PageHeader from './components/page-header';

function App() {
  return (
    <div className="home">
      <PageHeader/>
      <Apropos/>
      <Competences/>
    </div>
  );
}

export default App;
