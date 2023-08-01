import type { Writable } from "svelte/store";
import { localStorageStore } from "@skeletonlabs/skeleton";

export const taskStore: Writable<Task[]> = localStorageStore("taskStore", []);





