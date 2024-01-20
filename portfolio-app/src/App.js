import './App.css';
import Apropos from './components/a-propos';
import Competences from './components/competences';
import PageHeader from './components/page-header';
import Projets from './components/projets';

function App() {
  return (
    <div className="home">
      <PageHeader/>
      <Apropos/>
      <Competences/>
      <Projets/>
    </div>
  );
}

export default App;
