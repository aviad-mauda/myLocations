import './App.css';
import ToolBar from './components/toolbar/Toolbar';
import CategoriesList from './components/categories-list/CategoriesList';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <ToolBar />
      <div className="app-body">
        <CategoriesList />
        <Content />
      </div>
    </div>
  );
}

export default App;
