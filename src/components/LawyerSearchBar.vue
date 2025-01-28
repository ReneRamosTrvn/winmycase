<script setup></script>

<template>
  <main>
    <div className="bg-gray-100 p-5 rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
        <div className="flex flex-col">
          <label
            className="text-xl font-bold text-gray-800 mb-2"
            htmlFor="legal-issue"
            >Legal Issue</label
          >
          <input
            id="legal-issue"
            className="bg-indigo-200 w-full rounded-full border-2 border-indigo-400"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-xl font-bold text-gray-800 mb-2"
            htmlFor="location"
            >Location</label
          >
          <input
            id="location"
            className="bg-indigo-200 w-full rounded-full border-2 border-indigo-400"
            type="text"
          />
        </div>
        <div className="flex items-end">
          <button
            className="bg-indigo-600 px-4 py-2 font-bold text-white rounded-full w-full"
          >
            Find a Lawyer
          </button>
        </div>
      </div>
      <p className="text-gray-500 text-xs">
        Enter information in at least one field
        <span className="text-red-400">(required)</span>
      </p>
    </div>
  </main>
</template>
