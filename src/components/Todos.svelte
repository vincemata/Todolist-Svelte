<!-- <script lang="ts">
	let tasks = [
		{
			isChecked:false,name:"Create"
		},
		{
			isChecked:false,name:"Update"
		},
		{
			isChecked:false,name:"Delete"
		}
		];

	let task = "";


	//localStorage
	//Typescript
	//Update



	function removeTask(){
		tasks.pop();
		tasks = tasks;
	}

	function handleSubmit(){
		tasks.push({ isChecked: false, name:task });
		tasks = tasks;
		task = "";
	}

</script>

<h1>Todo List</h1>
<form on:submit={handleSubmit}>
	<input type="text" bind:value={task}>
	<input type="submit" placeholder="Add-btn">
</form>




{#each tasks as task}

	<input type="checkbox" bind:checked={task.isChecked} />

	{#if task.isChecked }
		<p>Task Completed</p>
	{:else}
		<p>Task Not Completed</p>
	{/if}

	<input class="task" type="text" placeholder={task.name}>
	<button on:click={removeTask}>Delete btn</button>
{/each}


<style>
	input{
		display: block;
	}
	.task{
		border: none;
		box-sizing: border-box;
		color:black!important;
	}
</style> -->