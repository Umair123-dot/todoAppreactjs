import Todo from './components/Todo';
import "./App.scss"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
function App() {
  return (
    <div className="App">
      <Todo />
      <Loading />
    </div>
  );
}

export default App;
