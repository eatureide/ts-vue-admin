<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

onMounted(() => { })
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    userName: '',
    password: ''
})

const rules = reactive<FormRules>({
    userName: {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change',
    },
})

const submitForm = (formEl: FormInstance | undefined) => {
    
}


</script>

<template>
    <div class="login">
        <el-card class="box-card">
            <el-form :model="ruleForm" ref="ruleFormRef" label-position="top" :rules="rules">
                <el-form-item label="输入用户名" :rules="[{
                    required: true,
                    message: '请输入用户名',
                    trigger: 'blur',
                }]">
                    <el-input v-model="ruleForm.userName" />
                </el-form-item>
                <el-form-item label="输入密码" :rules="[{
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur',
                }]">
                    <el-input v-model="ruleForm.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<style lang="less">
@import './login.less';
</style>