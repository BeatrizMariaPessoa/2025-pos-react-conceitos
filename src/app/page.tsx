"use client";

const Titulo = () => <h1>React - Conceitos básicos</h1>;

const SubTitulo = () => (<h2>Lista de tarefas</h2>);

const Cabecalho = () => (
  <>
    <Titulo />
    <SubTitulo />
  </>
);

const Home = () => {
  return <Cabecalho />;
}

export default Home;