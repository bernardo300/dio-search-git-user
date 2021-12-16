import './style.css'
const ListRepositorio = (props) =>{
  return (
    <div className="container_repositorio">
      {props.children}
    </div>
  )
}

export default ListRepositorio;