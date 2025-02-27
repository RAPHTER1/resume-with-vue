<template>
    <div class="text-left text-black">
        <h1 class="text-4xl font-bold">{{ name }}</h1>
        <p class="text-lg">{{ jobTitle }}</p>
        <p class="text-sm mt-2">{{ email }} | {{ phone }}</p>
        <p>Lorem Ipsum is simply dummy text of the printin standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it  </p>
    </div>
</template>
  
<script setup>
  defineProps({
    name: String,
    jobTitle: String,
    email: String,
    phone: String
  });
</script>
  