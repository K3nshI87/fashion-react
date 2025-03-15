import Header from "./components/header/Header";


function App() {
  const project = 'Samara';


  return (
    <div className="App">
      <h1>Hello, {project}</h1>
      <Header />
    </div>
  );
}

export default App;
