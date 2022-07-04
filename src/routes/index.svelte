<script>
	import Todo from '../components/Todo.svelte';
	import TodoForm from '../components/TodoForm.svelte';
	import {todos} from '../stores/todoStore.js'
</script>

<main>
	<h1 class="text-2xl text-center text-white md:text-3xl font-bold">My Todos</h1>
	<TodoForm />
	{#each $todos as todo}
		<Todo {todo} index={todo.id}/>
	{/each}
</main>
