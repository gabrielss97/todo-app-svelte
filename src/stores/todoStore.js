import { writable } from 'svelte/store';

export const todos = writable([]);

export const addTodo = (text) => {
	todos.update((cur) => {
		const newTodos = [...cur, { text, completed: false, id: Date.now() }];
		return newTodos;
	});
};

export const deleteTodo = (id) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (id) => {
	todos.update((todos) => {
		let index = todos.findIndex((todo) => todo.id === id);
		if (index !== -1) {
			todos[index].completed = !todos[index].completed;
		}

		return todos;
	});
};
