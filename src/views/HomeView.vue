<script setup>
import LawFirmCard from "@/components/LawFirmCard.vue";
import AboutUsCard from "@/components/AboutUsCard.vue";
import IntrestingInfo from "@/components/IntrestingInfo.vue";
import LawyerSearchBar from "@/components/LawyerSearchBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <div class="px-5 md:px-16 my-5">
      <LawyerSearchBar />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-8 px-5 md:px-16 gap-5">
      <div class="md:col-span-8 lg:col-span-6 col-span-1">
        <p
          class="mb-2 text-gray-400 font-xs lg:text-right md:text-right sm:text-right"
        >
          Top Rated = Sponsored Selectees
          <span class="relative group">
            <i
              class="pi pi-info-circle cursor-pointer text-blue-400 group-hover:text-blue-700"
            ></i>
            <div
              class="absolute top-0 right-0 my-6 hidden group-hover:block bg-indigo-200 text-black text-xs p-2 rounded shadow-lg z-10 text-center"
            >
              Sponsored Selectees are not endorsed or selected by any legal
              advisor. Inclusion in this category is based solely on a paid
              subscription.
            </div>
          </span>
        </p>
        <LawFirmCard :top-rated="true" :top-searched="true" />
        <LawFirmCard :top-searched="true" />
        <LawFirmCard />
      </div>
      <div class="md:col-span-8 lg:col-span-2 col-span-1">
        <AboutUsCard />
        <IntrestingInfo />
      </div>
    </div>
    <div class="">
      <footer class="bg-indigo-200 text-black p-4 text-center mt-5">
        <p>Win My Case 2025 ©</p>
        <p>All Rights Reserved</p>
        <div></div>
      </footer>
    </div>
  </main>
</template>
