<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    skills: Array
});

const form = useForm({
    name: '',
    image: null,
    skills_id: "",
    project_url: "",
});

const submit = () => {
    form.post(route('projects.store'));
};
</script>

<template>

    <Head title="New Project" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="leading-tight font-semibold text-xl text-gray-800 dark:text-gray-200">
                New Project
            </h2>
        </template>
        <div class="py-12">
            <div class="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 w-max mx-auto sm:px-6 lg:px-10">
                <div class="p-4 text-gray-900 dark:text-gray-100 flex justify-center items-center">
                    <form @submit.prevent="submit">
                        <div>
                            <InputLabel for="name" value="Name" />
                            <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" autofocus />
                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>
                        <div>
                            <InputLabel for="skills_id" value="Project Skill" />
                            <select v-model="form.skills_id" id="skills_id" name="skills_id"
                                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-900 dark:text-gray-300">
                                <option v-for="skill in skills" :key="skill.id" :value="skill.id">{{ skill.name }}
                                </option>
                            </select>
                            <InputError class="mt-2" :message="form.errors.name" />
                        </div>
                        <div>
                            <InputLabel for="project_url" value="Project Url" />
                            <TextInput id="project_url" type="url" class="mt-1 block w-full"
                                v-model="form.project_url" />
                            <InputError class="mt-2" :message="form.errors.project_url" />
                        </div>
                        <div>
                            <InputLabel for="image" value="Image" />
                            <input id="image" type="file" class="mt-1 block w-full"
                                @change="(event) => form.image = event.target.files[0]" />
                            <InputError class="mt-2" :message="form.errors.image" />
                        </div>

                        <div class="mt-4 flex items-center justify-end">
                            <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing">
                                Create Project
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
