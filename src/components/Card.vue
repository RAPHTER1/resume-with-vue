<template>
    <div class=" bg-primary-500 p-4">
        <h2 class=" text-primary-700 font-extrabold text-xl ">{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<script setup>
    defineProps({
        title: String,
    });
</script>