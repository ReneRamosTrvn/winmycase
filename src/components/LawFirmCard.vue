<script setup>
var lawyerInfo = {
  name: "Rene",
  surName: "Ramos",
  company: "TechWorkshop",
  location: "Mexico, Nuevo Leon",
  topRated: true,
  verified: true,
  awards: 5,
  reviews: 300,
};
</script>

<template>
  <main>
    <div
      class="grid grid-cols-3 bg-[#F4F4F4] rounded-2xl text-center p-10 mb-10 gap-5"
    >
      <div class="col-span-3 lg:col-span-1">
        <div class="flex justify-center items-center">
          <img
            class="rounded-full w-[200px] h-[200px] object-cover"
            src="https://imgs.search.brave.com/Gs4xSLwCHolonc_8uAN1GCwS5HMeBXLfDHF4h8ZF1GY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzAzLzI4Lzcz/LzM2MF9GXzkwMzI4/NzMxOV9SSURBalVU/aWdBclFiTDJJYWN2/MEhnbjRyMFJLSGx3/bi5qcGc"
            alt="A centered image"
          />
        </div>
        <div
          v-if="lawyerInfo.topRated"
          class="flex justify-center items-center bg-[#C1FF72] rounded-full w-35 h-8 m-auto mb-5"
        >
          <i style="color: #6c9d2e" class="pi pi-check-circle"></i>
          <span class="text-[#6c9d2e] p-1.5">Top Rated</span>
        </div>
        <div>
          <i style="color: #737373" class="pi pi-map-marker"></i
          ><span class="text-[#737373] p-1">{{ lawyerInfo.location }}</span>
        </div>
      </div>
      <div class="col-span-3 lg:col-span-2 text-center lg:text-left">
        <p class="text-4xl mb-4">
          {{ lawyerInfo.name + " " + lawyerInfo.surName }}
          <i v-if="lawyerInfo.verified" class="pi pi-verified"></i>
        </p>
        <p class="text-3xl text-[#35A898] mb-5">{{ lawyerInfo.company }}</p>
        <div
          class="flex flex-wrap gap-5 text-center lg:text-left items-center justify-center lg:items-center lg:justify-start"
        >
          <p><i class="pi pi-link text-2xl"></i></p>
          <p><i class="pi pi-home text-2xl"></i></p>
          <button
            class="bg-[#35A898] rounded-full text-white px-8 py-2 hover:bg-[#2C8D80] transition-colors duration-150 w-full lg:w-auto"
          >
            Call {{ lawyerInfo.name }} Now
          </button>
          <button
            class="bg-[#35A898] rounded-full text-white px-8 py-2 hover:bg-[#2C8D80] transition-colors duration-150 w-full lg:w-auto"
          >
            View Profile
          </button>
          <button
            class="bg-[#35A898] rounded-full text-white px-8 py-2 hover:bg-[#2C8D80] transition-colors duration-150 w-full lg:w-auto"
          >
            Schedule
          </button>
        </div>
        <div class="mt-4 text-blue-900 text-lg">
          <span
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto unde natus labore nobis consequatur aut odit non nulla
            expedita odio, commodi numquam quas impedit ex modi quos distinctio
            quibusdam libero.</span
          >
        </div>
        <div class="flex justify-center gap-20 mt-4 lg:justify-start">
          <span class="flex items-center gap-x-2 text-gray-400">
            <i class="pi pi-trophy text-gray-400"></i>
            <span>{{ lawyerInfo.awards + " " + "Awards" }}</span>
          </span>

          <span class="flex items-center gap-x-2 text-gray-400">
            <i class="pi pi-star text-gray-400"></i>
            <span>{{ lawyerInfo.reviews + " " + "Reviews" }}</span>
          </span>
        </div>
        <div class="mt-5 text-blue-900 lg:text-right">
          <a href="">View Profile></a>
        </div>
      </div>
    </div>
  </main>
</template>
