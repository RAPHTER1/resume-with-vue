<template>
    <div class=" bg-primary-500 p-4">
        <h2 class=" text-secondary-700 font-bold text-xl ">{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<script setup>
    defineProps({
        title: String,
    });
</script>