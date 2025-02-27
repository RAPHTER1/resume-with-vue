<script setup>
import { contacts } from "@/data.js"; 
import Card from "@/components/Card.vue";
</script>

<template>
    <Card :title="contacts.title">
        <div class="flex gap-2 my-2">
            <img src="/icons/phone.png" alt="Phone Icon" class="w-6 h-6">
            <span class="text-gray-800">{{ contacts.phone }}</span>
        </div>
        <div class="flex gap-2 my-2">
            <img src="/icons/email.png" alt="Mail Icon" class="w-6 h-6">
            <span class="text-gray-800">{{ contacts.email }}</span>
        </div>
        <div class="flex gap-2 my-2">
            <img src="/icons/position.png" alt="Position Icon" class="w-6 h-6">
            <span class="text-gray-800">{{ contacts.position }}</span>
        </div>
        <div class="flex gap-2 my-2 items-center">
            <img src="/icons/linkedin.svg" alt="LinkedIn Icon" class="w-6 h-6">
            <a :href="contacts.linkedinUrl" target="_blank" rel="noopener noreferrer" class="text-gray-800 no-underline flex items-center gap-1">
                <span>{{ contacts.linkedin }}</span>
                <img src="/icons/pointer.svg" alt="Pointer Icon" class="w-4 h-4 opacity-70">
            </a>
        </div>
        <div class="flex gap-2 items-center">
            <img src="/icons/github.png" alt="GitHub Icon" class="w-6 h-6">
            <a :href="contacts.githubUrl" target="_blank" rel="noopener noreferrer" class="text-gray-800 no-underline flex items-center gap-1">
                <span>{{ contacts.github }}</span>
                <img src="/icons/pointer.svg" alt="Pointer Icon" class="w-4 h-4 opacity-70">
            </a>
        </div>
    </Card>
</template>
