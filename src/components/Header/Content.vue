<template>
  <div class="flex flex-col text-left text-black space-y-3">
      <!-- Nom -->
      <h1 class="text-4xl font-bold">{{ contacts.firstName }} {{ contacts.lastName }}</h1>

      <!-- Titre de recherche -->
      <h2 class="text-2xl font-semibold text-primary-800">
          <span class="text-primary-700 font-bold">RECHERCHE :</span> {{ description.recherche }}
      </h2>

      <!-- Description -->
      <p class="text-gray-900 text-justify" v-html="description.content" />
  </div>
</template>

<script setup>
import { contacts } from '@/data.js';
import { description } from '@/data.js';
</script>
