import './App.css';
import Encabezado from './Encabezado'
import ListarPublicaciones from './ListarPublicaciones'
import AgregarPublicacion  from './AgregarPublicaciones'

function App() {
  return (
    <div className="App">
   <Encabezado />
   <br/>
   <br/>
   <AgregarPublicacion/>
   <br/>
   <br/>
   <ListarPublicaciones/>
    </div>
  );
}

export default App;
