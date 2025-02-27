<template>
  <div class="flex flex-col text-left text-black space-y-3">
      <!-- Nom -->
      <h1 class="text-4xl font-bold">{{ name }}</h1>

      <!-- Titre de recherche -->
      <h2 class="text-2xl font-semibold text-primary-800">
          <span class="text-primary-700 font-bold">RECHERCHE :</span> Alternance (Cloud) DevOps Engineer
      </h2>

      <!-- Description -->
      <p class="text-gray-900 text-justify">
          <strong>Autodidacte</strong>, <strong>polyvalent</strong> et <strong>proactif</strong>, mon approche analytique et pragmatique 
          me permet de détecter les points de friction, d’y trouver des solutions et d’optimiser les processus pour maximiser la performance. 
          Dans cette optique, je n’ai pas peur d’explorer de nouvelles approches, d’assimiler de nouveaux concepts et de m’adapter aux évolutions. 
          <strong>Curieux</strong> et <strong>enthousiaste</strong>, je considère chaque expérience comme une opportunité d’apprentissage et de progression.
      </p>
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
