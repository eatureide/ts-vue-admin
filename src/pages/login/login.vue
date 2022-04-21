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
    userName: [{
        required: true,
        message: '请输入用户名',
        trigger: 'onBlur',
    }],
    password: [{
        required: true,
        message: '请输入验证码',
        trigger: 'onBlur',
    }]
})

const submitForm = async (formEl: FormInstance) => {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        console.log(valid, fields)
    })
}

</script>

<template>
    <div class="login">
        <el-card class="box-card">
            <el-form :model="ruleForm" ref="ruleFormRef" label-position="top">
                <el-form-item label="输入用户名" prop="userName" :rules="rules.userName">
                    <el-input v-model="ruleForm.userName" />
                </el-form-item>
                <el-form-item label="输入密码" prop="password" :rules="rules.password">
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