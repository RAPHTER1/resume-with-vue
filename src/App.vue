<script setup>
import Contact from '@/components/Cards/Contact.vue';
import Header from '@/components/Header.vue';
import Formation from '@/components/Cards/Formation.vue';
import Skills from './components/Cards/Skills.vue';
import Footer from './components/Footer.vue';
import Experience from './components/Cards/Experience.vue';
import Profile from './components/Cards/Profile.vue';
</script>

<template>
  <!-- Conteneur principal -->
  <div class="w-[794px] h-[1123px] flex flex-col"> 

    <!-- HEADER -->
    <Header style="page-break-after: avoid;" />

    <!-- 2 COLONNES -->
    <div class="flex flex-1 pt-3 px-6 justify-between">
      
      <!-- COLONNE GAUCHE -->
      <div class="w-[34%] flex flex-col space-y-3">

        <Contact />
        <Profile />
        <Formation />
        <Skills />

      </div>

      <!-- COLONNE DROITE -->
      <div class="flex-1 min-w-0 flex flex-col pl-6">

        <Experience />
        
      </div>
    </div>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>
