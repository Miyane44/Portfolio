import './App.scss';
import Apropos from './components/a-propos';
import Competences from './components/competences';
import Contact from './components/contact';
import PageHeader from './components/page-header';
import Projets from './components/projets';

function App() {
  return (
    <div className="home">
      <PageHeader/>
      <Apropos/>
      <Competences/>
      <Projets/>
      <Contact/>
    </div>
  );
}

export default App;
