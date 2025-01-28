<script setup></script>

<template>
  <main>
    <div class="px-5 md:px-16 my-5">
      <div class="grid grid-cols-3 p-5 mb-10">
        <div class="col-span-3 md:col-span-1 p-3">
          <img
            class="rounded-md object-cover"
            src="https://imageio.forbes.com/specials-images/imageserve/640e3166569159b2e37aa269/African-American-lawyer-fighting-for-justice-/960x0.jpg?format=jpg&width=960"
            alt="lawyersimage"
          />
          <div class="grid grid-cols-2 gap-2 mt-2 text-center">
            <p
              v-if="topRated"
              class="p-2 bg-red-600 rounded-full text-xs text-white font-bold col-span-2"
            >
              Top Rated
            </p>
            <p
              class="p-2 bg-blue-400 rounded-full text-xs text-white font-bold"
            >
              5 Awards
            </p>
            <p
              class="p-2 bg-blue-400 rounded-full text-xs text-white font-bold"
            >
              Personal Injury
            </p>
          </div>
        </div>
        <div class="col-span-3 md:col-span-2 bg-white rounded-lg p-3">
          <p
            :class="
              topRated
                ? 'text-3xl font-bold mb-2 text-blue-600 underline'
                : 'text-xl font-bold mb-2 text-blue-600 underline'
            "
          >
            Lloyd Nick <i v-if="topRated" class="pi pi-verified"></i>
          </p>
          <p class="text-xl font-semibold mb-2 text-gray-500">
            Legal Leads Group
          </p>
          <p class="text-xl font-bold mb-2">📞 (469) 544-5445</p>
          <p class="text-lg mb-5">Dallas, Texas</p>
          <p class="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            quaerat, fugiat nulla harum reprehenderit amet, neque mollitia
            doloribus totam eum debitis velit nisi quod quas aliquam illo,
            molestiae placeat nesciunt!
          </p>
          <div
            class="gap-4 grid grid-cols-1"
            :class="topRated ? 'md:grid-cols-3' : 'md:grid-cols-2'"
          >
            <button
              :class="
                topRated
                  ? 'bg-indigo-600 px-4 py-2 font-bold text-white rounded-full w-full hover:bg-indigo-700 transition-all duration-150 hover:shadow-md cursor-pointer'
                  : 'text-md w-full underline text-blue-400 hover:cursor-pointer'
              "
            >
              Call Lloyd Now
            </button>
            <button
              v-if="topRated"
              class="bg-indigo-600 px-4 py-2 font-bold text-white rounded-full w-full hover:bg-indigo-700 transition-all duration-150 hover:shadow-md cursor-pointer"
            >
              Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-16 my-5">
      <div>
        <h1 class="text-3xl font-bold">Awards</h1>
      </div>
      <div>
        <h1 class="text-3xl font-bold">Education</h1>
      </div>
      <div>
        <h1 class="text-3xl font-bold">Offices</h1>
      </div>
      <div>
        <h1 class="text-3xl font-bold">Reviews</h1>
      </div>
      <div>
        <h1 class="text-3xl font-bold">Website</h1>
      </div>
    </div>
  </main>
</template>
