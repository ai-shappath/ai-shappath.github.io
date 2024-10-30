<template>
  <div class="url-preview-card max-w-xl rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
    <!-- Favicon and domain section -->
    <div class="flex items-center gap-2 mb-2">
      <img 
        :src="favicon" 
        :alt="domain"
        class="w-4 h-4"
        @error="handleFaviconError"
      />
      <span class="text-sm text-gray-600">{{ domain }}</span>
    </div>

    <!-- Title and link -->
    <a 
      :href="url" 
      target="_blank" 
      rel="noopener noreferrer"
      class="block mb-2"
    >
      <h3 class="text-xl font-medium text-blue-600 hover:underline">{{ title }}</h3>
    </a>

    <!-- Description -->
    <p class="text-sm text-gray-700 mb-3">{{ description }}</p>

    <!-- Preview image or fallback -->
    <div v-if="previewImage && showImage" class="w-full h-40">
      <img
        :src="previewImage"
        :alt="title"
        class="w-full h-40 object-cover rounded-md"
        @error="handleImageError"
      />
    </div>
    
    <!-- Fallback when no image -->
    <div 
      v-else
      class="w-full h-40 rounded-md bg-gray-100 flex items-center justify-center"
    >
      <div class="text-center p-4">
        <svg 
          class="w-8 h-8 mx-auto mb-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p class="text-sm text-gray-500">No preview available</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UrlPreviewCard',
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    previewImage: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      favicon: null,
      showImage: true
    }
  },
  computed: {
    domain() {
      try {
        const url = new URL(this.url)
        return url.hostname
      } catch (e) {
        return ''
      }
    }
  },
  created() {
    this.setFavicon()
  },
  methods: {
    setFavicon() {
      try {
        const url = new URL(this.url)
        this.favicon = `${url.protocol}//${url.hostname}/favicon.ico`
      } catch (e) {
        this.favicon = null
      }
    },
    handleFaviconError() {
      this.favicon = null
    },
    handleImageError() {
      this.showImage = false
    }
  }
}
</script>