<template>
  <div class="flex flex-col text-left text-black space-y-3">
      <!-- Nom -->
      <h1 class="text-4xl font-bold">{{ contacts.firstName }} {{ contacts.lastName }}</h1>

  </div>
</template>

<script setup>
import { contacts } from '@/data2.js';
</script>
