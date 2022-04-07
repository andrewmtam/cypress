<template>
  <pre
    class="bg-white h-[calc(100%-70px)] text-sm p-24px text-red-500 overflow-auto whitespace-pre-wrap break-all"
    v-html="scriptError"
  />
</template>

<script setup lang="ts">
import ansiToHtml from 'ansi-to-html'
import { computed } from 'vue'

const convert = new ansiToHtml({
  fg: '#000',
  bg: '#fff',
  newline: false,
  escapeXML: true,
  stream: false,
})

const props = defineProps<{ error: string }>()

const scriptError = computed(() => {
  console.log(props.error)

  return convert.toHtml(props.error)
})

</script>
