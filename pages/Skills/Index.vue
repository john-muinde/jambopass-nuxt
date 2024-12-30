<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
defineProps({
    skills: Object
})
</script>

<template>

    <Head title="Skills Index" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="leading-tight font-semibold text-xl text-gray-800 dark:text-gray-200">
                Skills Index
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class=" overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                    <div class="p-4 text-gray-900 dark:text-gray-100 flex justify-end items-center w-100">
                        <Link :href="route('skills.create')" as="button"
                            class="px-4 py-2 bg-indigo-500 dark:bg-indigo-800 hover:bg-indigo-900 text-gray-900 dark:text-gray-100 rounded-md">
                        Create Skill
                        </Link>
                    </div>


                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Skill Image
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Skill Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="skill in skills.data" :key="skill.id"
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <td class="px-6 py-4">
                                        {{ skill.id }}
                                    </td>
                                    </th>
                                    <td class="p-4">
                                        <img :src="skill.image" class="w-12 md:w-12 max-w-full max-h-full"
                                            :alt="skill.name">
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ skill.name }}
                                    </td>
                                    <td class="px-6 py-4">
                                        <Link :href="route('skills.edit', skill.id)"
                                            class="font-medium text-blue-500 hover:text-blue-700 mr-2">
                                        Edit
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>