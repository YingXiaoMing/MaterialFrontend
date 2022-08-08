<script setup lang="ts">
	import { computed, reactive, ref, toRefs } from 'vue'
	import { useRouter } from 'vue-router'
	import logo from '@/assets/me/banner.jpg'
	import d1 from '@/assets/home/d1.png'
	import d2 from '@/assets/home/d2.png'
	import d3 from '@/assets/home/d3.png'
	import d4 from '@/assets/home/d4.png'
	import d5 from '@/assets/home/d5.png'
	import d6 from '@/assets/home/d6.png'
	import d7 from '@/assets/home/d7.png'
	import d8 from '@/assets/home/d8.png'
	import HomeHeader from './HomeHeader.vue'
	const router = useRouter()

	let JumpPage = function(name:string) {
		router.push({
			name
		});
	}
	const useShowList = () => {
		const state = reactive({
			list: [
				{title: '进厂捡斤', src: d1},
				{title: '出厂捡斤', src: d4},
				{title: '厂内捡斤', src: d5},
				
			]
		})
		return toRefs(state)
	}
	const { list }  = useShowList()

</script>

<template>
	<div>
		<HomeHeader></HomeHeader>
		<!-- <CustomHeader title="XX超市" /> -->
		<div class="py-3 px-3">
			<div class="title py-2 flex-start align-items-center">
				<van-image width="100rem" :src="logo" radius="10px"/>
			</div>
		</div>
		<div class="dashboard-key-container" @click="JumpPage('Product')">
			<div class="flex-between dashboard-key-header">
				<div class="dz-font-size-15 dz-font-bold">
					生产情况<span class="dz_text">(截止2022/08/09最新的数据)</span>
				</div>
				<div class="flex-between">
					<div class="dz-font-size-12" style="color: rgb(178, 179, 193);">更多</div>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="flex-between dashboard-key">
				<div class="dashboard-key-item bg1">
					<p>生铁日产量</p>
					<div class="dashboard-key-item-title">1800</div>
				</div>
				<div class="dashboard-key-item bg2">
					<p>生铁月产量</p>
					<div class="dashboard-key-item-title">15789.84</div>
				</div>
			</div>
		</div>
		<div class="dashboard-key-container" @click="JumpPage('Product')">
			<div class="flex-between dashboard-key-header">
				<div class="dz-font-size-15 dz-font-bold">
					销售情况<span class="dz_text">(截止2022/08/09最新的数据)</span>
				</div>
				<div class="flex-between">
					<div class="dz-font-size-12" style="color: rgb(178, 179, 193);">更多</div>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="flex-between dashboard-key">
				<div class="dashboard-key-item bg1">
					<p>生铁日销量</p>
					<div class="dashboard-key-item-title">2300</div>
				</div>
				<div class="dashboard-key-item bg2">
					<p>生铁月销量</p>
					<div class="dashboard-key-item-title">14756.66</div>
				</div>
				<div class="dashboard-key-item bg3">
					<p>水渣日销量</p>
					<div class="dashboard-key-item-title">1603.25</div>
				</div>
				<div class="dashboard-key-item bg4">
					<p>水渣月销量</p>
					<div class="dashboard-key-item-title">13898.88</div>
				</div>
				<div class="dashboard-key-item bg1">
					<p>当日回款（元）</p>
					<div class="dashboard-key-item-title">3,000,000</div>
				</div>
				<div class="dashboard-key-item bg2">
					<p>当月回款（元）</p>
					<div class="dashboard-key-item-title">35,000,000</div>
				</div>
				<div class="dashboard-key-item bg3 big">
					<div>
						<p>当日新签合同个数（个）</p>
						<div class="dashboard-key-item-title">3</div>
					</div>
					<div>
						<p>当日新签合同重量（kg）</p>
						<div class="dashboard-key-item-title">5000</div>
					</div>
				</div>
				<div class="dashboard-key-item bg4 big">
					<div>
						<p>当月新签合同个数（个）</p>
						<div class="dashboard-key-item-title">16</div>
					</div>
					<div>
						<p>当月新签合同重量（kg）</p>
						<div class="dashboard-key-item-title">97,591</div>
					</div>
				</div>
				
			</div>
		</div>
		<div class="dashboard-key-container" @click="JumpPage('Product')">
			<div class="flex-between dashboard-key-header">
				<div class="dz-font-size-15 dz-font-bold">
					采购情况<span class="dz_text">(截止2022/08/09最新的数据)</span>
				</div>
				<div class="flex-between">
					<div class="dz-font-size-12" style="color: rgb(178, 179, 193);">更多</div>
					<van-icon name="arrow" />
				</div>
			</div>
			<div class="flex-between dashboard-key">
				<div class="dashboard-key-item bg1 big">
					<div>
						<p>当日矿粉到车数量(车)</p>
						<div class="dashboard-key-item-title">30</div>
					</div>
					<div>
						<p>当日矿粉到车重量(kg)</p>
						<div class="dashboard-key-item-title">1800</div>
					</div>
					
				</div>
				<div class="dashboard-key-item bg2 big">
					<div>
						<p>当月矿粉到车数量(车)</p>
						<div class="dashboard-key-item-title">300</div>
					</div>
					<div>
						<p>当月矿粉到车重量(kg)</p>
						<div class="dashboard-key-item-title">18000</div>
					</div>
				</div>
				<div class="dashboard-key-item bg3 big">
					<div>
						<p>当日焦炭到车数量(车)</p>
						<div class="dashboard-key-item-title">15</div>
					</div>
					<div>
						<p>当日焦炭到车重量(kg)</p>
						<div class="dashboard-key-item-title">500</div>
					</div>
					
				</div>
				<div class="dashboard-key-item bg4 big">
					<div>
						<p>当月焦炭到车数量(车)</p>
						<div class="dashboard-key-item-title">150</div>
					</div>
					<div>
						<p>当月焦炭到车重量(kg)</p>
						<div class="dashboard-key-item-title">1600</div>
					</div>
				</div>
				<div class="dashboard-key-item bg1 big">
					<div>
						<p>当日其它到车数量(车)</p>
						<div class="dashboard-key-item-title">10</div>
					</div>
					<div>
						<p>当日其它到车重量(kg)</p>
						<div class="dashboard-key-item-title">400</div>
					</div>
				</div>
				<div class="dashboard-key-item bg2 big">
					<div>
						<p>当月其它到车数量(车)</p>
						<div class="dashboard-key-item-title">120</div>
					</div>
					<div>
						<p>当日其它到车重量(kg)</p>
						<div class="dashboard-key-item-title">6760</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<van-row gutter="22" class="dashboard-menu">
				<template v-for="(item, index) in list" :key="index">
					<van-col span="8">
						<div class="dashboard-menu-item">
							<van-image width="38px" height="38px" :src="item.src"></van-image>
							<div class="vudz-font-size-13">{{ item.title }}</div>
						</div>
					</van-col>
				</template>
			</van-row>
		</div>
		
	</div>
</template>



<style lang="scss" scoped>
  h1 {
    display: block;
    font-size: 40px;
    text-align: center; 
    padding: 20px 0;
  }
  ul {
    li {
      display: block;
      font-size: 20px;
      padding: 20px 0;
      text-align: center;
    }
  }
  .dashboard-menu {
	  margin: 0 0.5rem;
	  margin-bottom: 50px;
	  .dashboard-menu-item {
		  line-height: 14px;
		  margin-bottom: 18px;
		  text-align: center;
		  .vudz-font-size-13 {
			  font-size: 13px!important
		  }
	  }
  }
  .dashboard-key {
	  flex-wrap: wrap;
	  margin-top: 2px;
	  .dashboard-key-item {
		  width: calc(50% - 12px);
		  height: 58px;
		  padding: 15px 0 0 10px;
		  line-height: 22px;
		  margin-bottom: 4px;
		  background-repeat: no-repeat;
		  background-size: cover;
		  &.big {
			height: 98px;
		  }
		  p {
			  font-size: 13px;
			  color: grey;
			  font-weight: 300;
		  }
		  .dashboard-key-item-title {
			  color: rgb(26, 40, 60);
			  font-size: 18px;
			  font-weight: 600;
		  }
		  &.bg1 {
			  background-image: url('/src/assets/home/bg1.png');
		  }
		  &.bg2 {
			  background-image: url('/src/assets/home/bg2.png');
		  }
		  &.bg3 {
			  background-image: url('/src/assets/home/bg3.png');
		  }
		  &.bg4 {
			  background-image: url('/src/assets/home/bg4.png');
		  }

	  }
  }

  
  .dashboard-key-container {
	  flex-wrap: wrap;
	  border-radius: 10px;
	  box-shadow: 0 1px 10px -2px rgb(0 0 0 / 15%);
	  margin: 14px;
	  padding: 13px;
	  .dashboard-key-header {
		  width: 100%;
		  margin-bottom: 12px;
		  .dz_text {
			  color: rgb(157, 158, 174);
			  font-weight: normal;
			  margin-left: 5px;
			  font-size: 10px;
		  }
	  }
  }
</style>