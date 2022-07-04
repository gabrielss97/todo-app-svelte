<script lang="ts">
    import {addTodo} from '../stores/todoStore.js'
	let todo: string = '';
    function handleSubmit() {
        addTodo(todo)
        todo = '';
    }
</script>

<form class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb-2">
		<label for="todo" class="text-left font-bold text-white mb-3">Todo</label>
		<input bind:value={todo} class="focus:outline-0 p-2 rounded-t-lg border-2 border-white" type="text" id="todo" name="todo" placeholder="Qual a tarefa?" />
		<button type="submit" class="bg-black text-white font-bold rounded-b-lg py-2 border-2 border-white shadow-md shadow-gray-500/50">Submit</button>
	</div>
</form>
