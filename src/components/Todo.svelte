<script>
	import { deleteTodo, toggleTodoCompleted } from '../stores/todoStore';

	export let todo;
</script>

<div class="bg-white rounded mb-2 flex shadow-lg items-center">
	<input type="checkbox" class="mx-2 form-checkbox h-5 w-5" name="completed" checked={todo.completed} on:change={toggleTodoCompleted(todo.id)} />
	<span class={`text-black text-left py-1 px-1 flex-1 ${todo.completed? 'line-through': ''}`} for="completed">{todo.text}</span>
    <button class="bg-red-600 px-5 py-2 rounded-r font-bold" on:click={deleteTodo(todo.id)}>X</button>
</div>
