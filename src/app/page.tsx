"use client";

import React from "react";

const Titulo = () => (
	<h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
	<h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>
);

function Cabecalho() {
	return (
		<div className="text-center">
			<Titulo />
			<SubTitulo />
		</div>
	);
}

class Tarefa extends React.Component {
	render(): React.ReactNode {
		return (
			<div className="p-3 mb-3 rounded-lg shadow-md bg-gray-400">
				<h3 className="text-xl font-bold">{this.props.titulo}</h3>
				<p className="text-sm">Pendente</p>
			</div>
		);
	}
}

const Home = () => {
	const tarefas = [
		{ id: 1, title: "delectus aut autem", completed: false },
		{ id: 2, title: "quis ut nam facilis et officia qui", completed: true },
		{ id: 3, title: "fugiat veniam minus", completed: false },
	];

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefa titulo={tarefas[0].title} />
			<Tarefa titulo={tarefas[1].title} />
		</div>
	);
};

export default Home;