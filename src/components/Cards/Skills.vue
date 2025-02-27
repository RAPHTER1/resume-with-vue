<script setup>
import { skills } from '@/data.js';
import Card from '@/components/Card.vue';
</script>

<template>
    <Card title="COMPETENCES" class="pb-0">
        <div v-for="(category, index) in skills" :key="index" class="mb-3">
            <h3 class="font-semibold text-lg">{{ category.category }}</h3>
            <ul class="space-y-1">
                <li v-for="(skill, i) in category.list" :key="i" class="flex justify-between items-center border-b pb-0">
                    <span class="">{{ skill.name }}</span>
                    <div class="flex space-x-1">
                        <span
                            v-for="(dot, j) in Array.from({length: 3})"
                            :key="j"
                            :class="j < skill.level ? 'bg-green-500' : 'bg-gray-300'"
                            class="w-3 h-3 rounded-full"
                        ></span>
                    </div>
                </li>
            </ul>
        </div>
    </Card>
</template>