<template>
    <div class="text-right">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                    class="flex flex-row justify-center items-center rounded-md text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    <button class="bg-yellow-500 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white dark:text-black" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                    <ChevronDownIcon class="h-6 w-6 text-violet-200 hover:text-violet-100 font-bold"
                        aria-hidden="true" />
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div class="px-1 py-1">
                        <!-- Check if the user is null -->
                        <template v-if="$page.props.auth.user == null">
                            <MenuItem v-slot="{ active }">
                            <button
                                :class="[active ? 'bg-yellow-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                                <UserPlusIcon :active="active" class="mr-2 h-5 w-5 text-yellow-400"
                                    aria-hidden="true" />
                                Register
                            </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <button
                                :class="[active ? 'bg-yellow-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                                <ArrowRightIcon :active="active" class="mr-2 h-5 w-5 text-yellow-400"
                                    aria-hidden="true" />
                                Login
                            </button>
                            </MenuItem>
                        </template>

                        <!-- Show these items if the user is authenticated -->
                        <template v-else>
                            <MenuItem v-slot="{ active }">
                            <button
                                :class="[active ? 'bg-yellow-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                                <UserIcon :active="active" class="mr-2 h-5 w-5 text-yellow-400" aria-hidden="true" />
                                Profile
                            </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <button
                                :class="[active ? 'bg-yellow-500 text-white' : 'text-gray-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm']">
                                <ArrowLeftIcon :active="active" class="mr-2 h-5 w-5 text-yellow-400"
                                    aria-hidden="true" />
                                Logout
                            </button>
                            </MenuItem>
                        </template>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
// Importing Heroicons instead of local icons
import { UserIcon, ArrowRightIcon, UserPlusIcon, ArrowLeftIcon } from '@heroicons/vue/20/solid'

</script>
