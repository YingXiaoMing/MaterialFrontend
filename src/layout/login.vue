<template>
    <div class="login-container">
        <div class="login-header">
            <div>辽宁高端金属材料</div>
            <div>有限公司</div>
        </div>
        <div class="login-content">
          <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field
                        v-model="username"
                        left-icon="manager"
                        name="用户名"
                        label="用户名"
                        size="large"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        left-icon="lock"
                        name="密码"
                        label="密码"
                        size="large"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" size="large" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>

        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'


export default {
  setup() {
    const username = ref('admin');
    const password = ref('123456');
    const router = useRouter()
    const onSubmit = (values) => {
      console.log('submit', values);
      router.push({
        name: 'Home'
      });
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
};

</script>
<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100vh;
    background: #E9F3FD;
    .login-content {
        width: 100%;
        border-radius: 20px;
        background-color: #fff;
        height: 80%;
    }
    .login-header {
        display: flex;
        flex-direction: column;
        // margin: 0 auto;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        font-weight: bold;
        width: 100%;
        text-align: center;
        color: #2a71e4;
        letter-spacing: 6px;
        line-height: 39px;
        height: 20%;

    }
}
</style>