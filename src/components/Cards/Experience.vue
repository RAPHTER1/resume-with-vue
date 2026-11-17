<script setup>
import { experiences } from "@/data2.js";
import Card from '@/components/Card.vue';
</script>

<template>
    <Card title="PROFESSIONAL EXPERIENCE">
        <div v-for="(exp, index) in experiences" :key="index" class="mb-1">
            <h3 class="text-lg font-bold">{{ exp.title }}</h3>
            <p class="text-gray-600 font-semibold">{{ exp.company }} - {{ exp.location }}</p>
            <p class="text-xs text-gray-500 italic">{{ exp.period }}</p>
            <ul class="mt-2 space-y-1">
                <li v-for="(task, i) in exp.description" :key="i" class="flex items-start gap-2">
                    <span class="text-gray-700">•</span>
                    <span class="text-gray-700">{{ task }}</span>
                </li>
            </ul>
        </div>
    </Card>
</template>