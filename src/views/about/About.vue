<script setup lang="ts">
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import { storeToRefs  } from 'pinia'
	import { usePiniaState } from '@/store/testPinia'
	import { useRouter } from 'vue-router'
	import logo from '@/assets/logo.png'

	// vuex
	// const vuexStore = useStore()

	// pinia
	const piniaStore = usePiniaState()

	const router = useRouter()


	// 跳转路由页面

	let JumpPage = function(name:string) {
		router.push({
			name
		});
	}



	// vuex
	// const  userName  = computed(() => vuexStore.state.userNmae)

	// 通过storeToRefs方法将存储在pinia里的数据解构出来，保持state响应性
	const  { userName }  = storeToRefs(piniaStore)
	const { getUserNmae } = piniaStore
	

    const handleBtn = () =>{
		// vuex
		// vuexStore.commit('userName','真乖，如果对您有帮助请在github上点个星星哦~')

		// pinia
     	getUserNmae('真乖，如果对您有帮助请在github上点个星星哦~')
    }

</script>

<template>
	<div class="about">
		<div class="user-row flex-start">
			<img src="/src/assets/me/banner.jpg" />
		</div>
		<div class="width-100"></div>
		<div class="module-content">
			<div class="flex-between">
				<van-icon name="user-o" class="module-icon"/>
				<div class="flex-between module-item" @click="JumpPage('Info')">
					<span>我的信息</span>
					<img style="width: 8px" src="/src/assets/me/arrow.png" />
				</div>
			</div>
			<div class="flex-between">
				<van-icon name="bullhorn-o" class="module-icon"/>
				<div class="flex-between module-item" @click="JumpPage('Msg')">
					<span>通知</span>
					<img style="width: 8px" src="/src/assets/me/arrow.png" />
				</div>
			</div>
			<div class="flex-between">
				<van-icon name="shield-o" class="module-icon"/>
				<div class="flex-between module-item">
					<span>在线支持</span>
					<img style="width: 8px" src="/src/assets/me/arrow.png" />
				</div>
			</div>
			
		</div>
	</div>
</template>



<style lang="scss" scoped>
.width-100 {
	height: 6px;
	background-color: rgb(245, 245, 250);
	width: 100%;
}
.module-content {
	padding: 0px 16px;
	.module-icon {
		font-size: 22px;
		line-height: 24px;
		width: 24px;
		margin-right: 12px;
		height: 24px;
	}
	.module-item {
		width: 100%;
		padding: 13px 0;
		font-size: 13px;
		font-weight: 500;
		color: #333;
		line-height: 24px;
		border-bottom: 2px solid #ececec;
		span {
			margin-top: 5px;
		}
	}
}
.user-row {
	// padding: 20px 14px 20px;
	// border-bottom: 7px solid rgba(76,217,100,.04);
	img {
		width: 100%;
		height: 100%;
		// width: 55px;
		// height: 268px;
		// border-radius: 50%;
		// margin-bottom: 14px;
		border: none;
	}
	.user_name {
		font-size: 22px;
		font-weight: 500;
	}
	.user_phone {
		font-size: 12px;
		margin-top: 6px;
		color: rgb(153, 153, 153);
		margin-left: 4px;
	}
	

}
</style>