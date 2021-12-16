import './App.css';

import {Search, Profile, Repositorio, Container, ListRepositorio} from './components'

function App() {
  return (
    <Container>
      <Search />
      <Profile />
      <ListRepositorio >
        <Repositorio />
        <Repositorio />
        <Repositorio />
        <Repositorio />
        <Repositorio />
        <Repositorio />
        <Repositorio />
        <Repositorio />
        <Repositorio />
        <Repositorio />
        <Repositorio />
        <Repositorio />
      </ListRepositorio>
      
    </Container>
  );
}

export default App;
