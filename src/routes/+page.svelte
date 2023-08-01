<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { taskStore } from "../stores/store";

	let taskInput = "";

	const addTask = () => {
		const addToast: ToastSettings = {
			message: 'Added Tasked Successfully.',
			background: 'variant-filled-success'
		};
		const inputToast: ToastSettings = {
			message: 'Please Input Something',
			background: 'variant-filled-warning'
		};
		if(taskInput == ""){
			toastStore.trigger(inputToast);
		}
		else{
			$taskStore = [
			{
				isChecked:false,
				name:taskInput,
				editing:false
			},
			...$taskStore
			];
			toastStore.trigger(addToast);
			taskInput = "";
		}

	}

	const deleteTask = (index:number) => {
		const deletedToast: ToastSettings = {
			message: 'Task Deleted Successfully.',
			background: 'variant-filled-error'
		};
		const confirmModal: ModalSettings = {
			type: 'confirm',
			title: 'Please Confirm',
			body: 'Are you sure you want to delete?',
		response: (r: boolean) => {
			if(r) {
				$taskStore = $taskStore.filter((task, taskIndex) => taskIndex !== index);	
				toastStore.trigger(deletedToast);
			}
		}
	};
		modalStore.trigger(confirmModal);

	}

	const editTask = (i:number, isEditing:boolean) => {
		const savedToast: ToastSettings = {
			message: 'Saved Successfully.',
			background: 'variant-filled-success'
		};

		if(isEditing){
			$taskStore[i].editing = isEditing;
		}
		else{
			$taskStore[i].editing = isEditing;
			toastStore.trigger(savedToast);
		}
	}

</script>

<main>
	<div class="container m-auto p-4">
		<h1 class="text-2xl text-center mb-2 font-bold">Todo List Using Svelte</h1>
		<div class="mb-2 px-2">
			<input class="input w-9/12" type="text" bind:value={taskInput}>
			<button on:click={() => addTask()} class="btn variant-filled-primary w-40" type="button">Add Task</button>
		</div>

		<div class="task-list overflow-y-auto px-2">
			{#each $taskStore as task, index}
				<div class="task card h-32 mb-2 mt-2 p-4">
					{#if task.editing}
						<input class="task input w-96 h-12 text-lg mb-2 p-4" type="text" bind:value={task.name}>
					{:else}
						<p class="w-max h-12 text-2xl mb-2 font-bold">{task.name}</p>
					{/if}

					<div class="flex">
						<input class="checkbox mr-2" type="checkbox" bind:checked={task.isChecked} />
							{#if task.isChecked }
							<p class="w-52 text-sm">Task Completed</p>
						{:else}
							<p class="w-52 text-sm">Task Not Completed</p>
						{/if}

						{#if task.editing}
							<button  class="btn variant-filled-primary mr-2 w-24" type="button" on:click={() => {editTask(index,false)}}>Save</button>
						{:else}
							<button class="btn variant-filled-secondary mr-2 w-24" type="button" on:click={() => {editTask(index,true)}}>Edit</button>
						{/if}
						<button class="btn variant-filled-error w-24" type="button" on:click={() => {deleteTask(index)}}>Delete</button>
					</div>

				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	main{	
		margin: 0 auto;
		height: 1080px;
		width: 100%;
		max-width: 1920px;
	}
	.container{
		height: 900px;
		width: 720px;
	}
	.task-list{
		height: 51.5rem;
	}
</style>