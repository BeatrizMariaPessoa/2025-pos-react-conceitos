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

interface TarefaInterface {
	id: number;
	title: string;
	completed: boolean;
}

interface TareafasProps {
	dados: Array<TarefaInterface>;
}

const Tarefas: React.FC<TareafasProps> = ({ dados }) => {
	return (
		<div>
			{dados.map((tarefa) => (
				<Tarefa
					key={tarefa.id}
					titulo={tarefa.title}
					concluido={tarefa.completed}
				/>
			))}
		</div>
	);
};

const Home = () => {
	const tarefas = [
		{ id: 1, title: "delectus aut autem", completed: false },
		{ id: 2, title: "quis ut nam facilis et officia qui", completed: true },
		{ id: 3, title: "fugiat veniam minus", completed: false },
	];

	return (
		<div className="container mx-auto p-4">
			<Cabecalho />
			<Tarefas dados={tarefas} />
		</div>
	);
};

export default Home;