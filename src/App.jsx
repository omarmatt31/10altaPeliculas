import "bootstrap/dist/css/bootstrap.min.css";
import FormularioPeliculas from "./components/FormularioPeliculas";

function App() {

  return (
    <>
      <main>
        <h1 className="text-center my-4 text-light">Alta de Peliculas</h1>
        <FormularioPeliculas></FormularioPeliculas>
      </main>
      <footer className="bg-dark text-light text-center py-3">
        <p>💻 Omar Mattos 💻</p>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
