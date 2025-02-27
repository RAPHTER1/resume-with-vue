<script setup>
import Card from '@/components/Card.vue';
import { formations } from '@/data.js';
</script>

<template>
    <Card title="FORMATION">
        <ul class="space-y-4">
            <li v-for="(formation, index) in formations" :key="index" class=" flex flex-col border-b pb-2">
                <strong>{{ formation.title }}</strong>
                <div>{{ formation.school }}, {{ formation.location }}</div>
                <div class="text-gray-500">{{ formation.year }}</div>

            </li>

        </ul>
    </Card>
</template>