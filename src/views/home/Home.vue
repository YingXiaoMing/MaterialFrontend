<script setup lang="ts">
	import { computed, reactive, ref, toRefs } from 'vue'
	
	import logo from '@/assets/banner.png'
	import d1 from '@/assets/home/d1.png'
	import d2 from '@/assets/home/d2.png'
	import d3 from '@/assets/home/d3.png'
	import d4 from '@/assets/home/d4.png'
	import d5 from '@/assets/home/d5.png'
	import d6 from '@/assets/home/d6.png'
	import d7 from '@/assets/home/d7.png'
	import d8 from '@/assets/home/d8.png'
import HomeHeader from './HomeHeader.vue'

	const useShowList = () => {
		const state = reactive({
			list: [
				{title: '关键指标', src: d1},
				{title: '资金', src: d2},
				{title: '费用', src: d3},
				{title: '往来', src: d4},
				{title: '资金负债表', src: d5},
				{title: '利润表', src: d6},
				{title: '科目余额表', src: d7},
				{title: '明细账', src: d8},
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
				<van-image width="100rem" :src="logo" />
			</div>
		</div>
		<div>
			<van-row gutter="22" class="dashboard-menu">
				<template v-for="(item, index) in list" :key="index">
					<van-col span="6">
						<div class="dashboard-menu-item">
							<van-image width="38px" height="38px" :src="item.src"></van-image>
							<div class="vudz-font-size-13">{{ item.title }}</div>
						</div>
					</van-col>
				</template>
			</van-row>
		</div>
		<div class="dashboard-key-container">
			<div class="flex-between dashboard-key-header">
				<div class="dz-font-size-15 dz-font-bold">
					关键指标<span class="dz_text">(2022年的本年累计数据)</span>
				</div>
				<div class="flex-between">
					<div class="dz-font-size-12" style="color: rgb(178, 179, 193);">更多</div>
					<van-image width="6px" height="6px" src="/src/assets/home/more.png"></van-image>
				</div>
			</div>
			<div class="flex-between dashboard-key">
				<div class="dashboard-key-item bg1">
					<p>营业收入(元)</p>
					<div class="dashboard-key-item-title">306,797.50</div>
				</div>
				<div class="dashboard-key-item bg2">
					<p>销售费用(元)</p>
					<div class="dashboard-key-item-title">0.00</div>
				</div>
				<div class="dashboard-key-item bg3">
					<p>管理费用(元)</p>
					<div class="dashboard-key-item-title">97,591.00</div>
				</div>
				<div class="dashboard-key-item bg4">
					<p>财务费用(元)</p>
					<div class="dashboard-key-item-title">0.00</div>
				</div>
			</div>
			
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
		  p {
			  font-size: 13px;
			  color: grey;
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