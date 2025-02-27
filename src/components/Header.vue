<template>
    <div class=" flex justify-between pb-3 pt-6 px-6">
        <Content class="w-125"
            name="Raphaël FARY-OLAX" 
            jobTitle="Ingénieur DevOps" 
            email="rapha@example.com" 
            phone="+33 6 12 34 56 78"
        />
        <Photo class="w-36" />
    </div>
</template>

<script setup>
import Content from '@/components/Header/Content.vue';
import Photo from '@/components/Header/Photo.vue';
</script>
