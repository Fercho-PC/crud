import shortid from 'shortid';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Crud</h1>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-grup">
            <li className="list-grup-item">
            <span className="lead">Nombre de la tarea</span>
            <button className="btn btn-danger btn-sm float-end mx-2" type="submit">Eliminar</button>    
            <button className="btn btn-warning btn-sm float-end mx-2" type="submit">Editar</button>    
            </li>
          </ul>
        </div>
        
        <div className="col-4">
          <h4 className="text-center">
            <form>
              <input type="text" className="form-control mb-2" placeholder="ingrese tarea" />
              <button className="btn btn-dark btn-block" type="submit">Agregar</button>             
            </form>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
