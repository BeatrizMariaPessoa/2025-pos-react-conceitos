"use client";

import React from "react";

const Titulo = () => <h1>React - Conceitos básicos</h1>;

const SubTitulo = () => <h2>Lista de tarefas</h2>;

function Cabecalho() {
	return (
		<>
			<Titulo />
			<SubTitulo />
		</>
	);
}

class Tarefa extends React.Component {
	render(): React.ReactNode {
		return (
			<div>
				<h3>Codar e codar durante 2025</h3>
				<p>Pendente</p>
			</div>
		);
	}
}
const Home = () => {
	return (
		<>
			<Cabecalho />
			<Tarefa />
		</>
	);
};

export default Home;