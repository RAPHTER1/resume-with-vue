<script setup>
import { description } from '@/data2.js';
import Card from '@/components/Card.vue';
</script>

<template>
    <Card title="PROFILE">
        <p class="text-gray-900 text-justify text-sm" v-html="description.content" />
    </Card>
</template>
