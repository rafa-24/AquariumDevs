<template>
    <div class="container mx-auto px-4 py-12 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-teal-700 mb-8">
        Our Locations
      </h1>
      <div class="w-full max-w-4xl mx-auto mb-12">
        <div class="h-px bg-teal-300 w-full mb-8"></div>
        <p class="text-lg text-gray-700 mb-8">
          Members of the Koombea team work from Chicago, Miami, Barranquilla, San
          Francisco, New York, Bogotá, Washington, D.C., and many other places scattered
          around the globe.
        </p>
        <div class="h-px bg-teal-300 w-full"></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div v-for="location in locations" :key="location.name" class="flex flex-col items-center">
          <div class="w-24 h-24 mb-4">
            <component :is="location.icon" class="w-full h-full text-teal-500" />
          </div>
          <span class="text-lg font-semibold text-teal-700">{{ location.name }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineComponent, h } from 'vue'
  
  const IconBarranquilla = defineComponent({
    render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
      h('polyline', { points: '9 22 9 12 15 12 15 22' })
    ])
  })
  
  const IconChicago = defineComponent({
    render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' }),
      h('circle', { cx: '12', cy: '7', r: '4' })
    ])
  })
  
  const IconMiami = defineComponent({
    render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M18 8h1a4 4 0 0 1 0 8h-1' }),
      h('path', { d: 'M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z' }),
      h('line', { x1: '6', y1: '1', x2: '6', y2: '4' }),
      h('line', { x1: '10', y1: '1', x2: '10', y2: '4' }),
      h('line', { x1: '14', y1: '1', x2: '14', y2: '4' })
    ])
  })
  
  const IconNewYork = defineComponent({
    render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('path', { d: 'M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z' })
    ])
  })
  
  const IconSanFrancisco = defineComponent({
    render: () => h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
      h('line', { x1: '3', y1: '12', x2: '21', y2: '12' }),
      h('path', { d: 'M3 6h.01M21 6h.01M3 18h.01M21 18h.01' })
    ])
  })
  
  const locations = [
    { name: 'Barranquilla', icon: IconBarranquilla },
    { name: 'Chicago', icon: IconChicago },
    { name: 'Miami', icon: IconMiami },
    { name: 'New York', icon: IconNewYork },
    { name: 'San Francisco', icon: IconSanFrancisco },
  ]
  </script>