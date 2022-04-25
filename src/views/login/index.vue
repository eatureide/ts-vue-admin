<template>
    <h1>登录</h1>
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/type/cmmon'
import { onMounted, ref } from 'vue'

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
    getLoginInfo().then((res) => {
        console.log(res)
    })
})

</script>