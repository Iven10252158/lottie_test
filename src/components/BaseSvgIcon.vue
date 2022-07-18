<script setup lang="ts">

interface Props {
  name: string
}

const props = defineProps<Props>()

const iconName = computed(() => `#icon-${props.name}`)

</script>
<template>
  <svg>
    <use :xlink:href="iconName" />
  </svg>
</template>
