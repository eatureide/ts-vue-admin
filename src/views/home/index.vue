<template>
    <h1>首页</h1>
    <p>{{ store.state.count }}</p>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'

const store = useStore()

</script>

<style lang="scss">
h1 {
    color: $color
}
</style>