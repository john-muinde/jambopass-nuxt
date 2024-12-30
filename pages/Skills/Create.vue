<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    image: null,
});

const submit = () => {
    form.post(route('skills.store'));
};
</script>

<template>

    <Head title="New Skill" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="leading-tight font-semibold text-xl text-gray-800 dark:text-gray-200">
                New Skill
            </h2>
        </template>
        <div class="py-12">
            <div class="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 w-max mx-auto sm:px-6 lg:px-10">
                <div class="p-4 text-gray-900 dark:text-gray-100 flex justify-center items-center">
                    <form @submit.prevent="submit">
                        <div>
                            <InputLabel for="name" value="Name" />
                            <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.name" autofocus
                                autocomplete="username" />
                            <InputError class="mt-2" :message="form.errors.name" />
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
                                Create Skill
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
