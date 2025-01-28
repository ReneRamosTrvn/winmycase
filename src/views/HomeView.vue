<script setup>
import LawFirmCard from "@/components/LawFirmCard.vue";
import AboutUsCard from "@/components/AboutUsCard.vue";
import IntrestingInfo from "@/components/IntrestingInfo.vue";
import LawyerSearchBar from "@/components/LawyerSearchBar.vue";
</script>

<template>
  <main>
    <div class="px-5 md:px-16 my-5">
      <LawyerSearchBar />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-8 px-5 md:px-16 gap-5">
      <div class="md:col-span-6 col-span-1">
        <p class="mb-2 text-gray-400 font-xs text-right">
          Top Rated = Sponsored Selectees <i class="pi pi-info-circle"></i>
        </p>
        <LawFirmCard :top-rated="true" :top-searched="true" />
        <LawFirmCard :top-searched="true" />
        <LawFirmCard />
      </div>
      <div class="md:col-span-2 col-span-1">
        <AboutUsCard />
        <IntrestingInfo />
      </div>
    </div>
  </main>
</template>
