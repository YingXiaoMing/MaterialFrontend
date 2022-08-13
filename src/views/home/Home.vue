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
	import { CountTo  } from 'vue3-count-to'
	const router = useRouter()
	let JumpPage = function(name:string) {
		router.push({
			name
		});
	}
	const useShowList = () => {
		const state = reactive({
			list: [
				{title: '进厂捡斤', src: d1, name: 'Solution'},
				{title: '出厂捡斤', src: d4, name: 'Detail'},
				{title: '厂内捡斤', src: d5, name: 'Interval'},
				
			]
		})
		return toRefs(state)
	}
	const { list }  = useShowList()

</script>

<template>
	<div>
		<div class="py-1 px-3">
			<div class="title py-2 flex-start align-items-center">
				<van-image width="100rem" height="4.2rem" :src="logo" radius="10px"/>
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
					<div class="dashboard-key-item-title"><count-to :end-val="1800"></count-to></div>
				</div>
				<div class="dashboard-key-item bg2">
					<p>生铁月产量</p>
					<div class="dashboard-key-item-title"><count-to :end-val="15789.84"></count-to></div>
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
					<div class="dashboard-key-item-title"><count-to :end-val="2300"></count-to></div>
				</div>
				<div class="dashboard-key-item bg2">
					<p>生铁月销量</p>
					<div class="dashboard-key-item-title"><count-to :end-val="14756.66"></count-to></div>
				</div>
				<div class="dashboard-key-item bg3">
					<p>水渣日销量</p>
					<div class="dashboard-key-item-title">
						<count-to :end-val="1603.25"></count-to>
					</div>
				</div>
				<div class="dashboard-key-item bg4">
					<p>水渣月销量</p>
					<div class="dashboard-key-item-title">
						<count-to :end-val="13898.88"></count-to>
					</div>
				</div>
				<div class="dashboard-key-item bg1">
					<p>当日回款（元）</p>
					<div class="dashboard-key-item-title">
						<count-to :end-val="2315.62" prefix='¥'></count-to>
					</div>
				</div>
				<div class="dashboard-key-item bg2">
					<p>当月回款（元）</p>
					<div class="dashboard-key-item-title">
						<count-to :end-val="35000000" prefix='¥'></count-to>
					</div>
				</div>
				<div class="dashboard-key-item bg3">
					<div>
						<p>当日新签合同</p>
						<div class="dashboard-key-item-title">
							<div class="left">
								<count-to :end-val="3"></count-to><span class="dashboard-key-item-title-unit">个</span>
							</div>
							<div class="right">
								<count-to :end-val="5000"></count-to><span class="dashboard-key-item-title-unit">吨</span>
							</div>
						</div>
					</div>
				</div>
				<div class="dashboard-key-item bg4">
					<div>
						<p>当月新签合同</p>
						<div class="dashboard-key-item-title">
							<div class="left">
								<count-to :end-val="12"></count-to><span class="dashboard-key-item-title-unit">个</span>
							</div>
							<div class="right">
								<count-to :end-val="125703"></count-to><span class="dashboard-key-item-title-unit">吨</span>
							</div>
						</div>
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
				<div class="dashboard-key-item bg1">
					<div>
						<p>当日矿粉到车</p>
						<div class="dashboard-key-item-title">
							<div class="left">
								<count-to :end-val="30"></count-to><span class="dashboard-key-item-title-unit">车</span>
							</div>
							<div class="right">
								<count-to :end-val="1800"></count-to><span class="dashboard-key-item-title-unit">kg</span>
							</div>
						</div>
					</div>
				</div>
					
				<div class="dashboard-key-item bg2">
					<div>
						<p>当月矿粉到车</p>
						<div class="dashboard-key-item-title">
							<div class="left">
								<count-to :end-val="452"></count-to><span class="dashboard-key-item-title-unit">车</span>
							</div>
							<div class="right">
								<count-to :end-val="365240"></count-to><span class="dashboard-key-item-title-unit">kg</span>
							</div>
						</div>
					</div>
				</div>
				<div class="dashboard-key-item bg3">
					<div>
						<p>当日焦炭到车</p>
						<div class="dashboard-key-item-title">
							<div class="left">
								<count-to :end-val="15"></count-to><span class="dashboard-key-item-title-unit">车</span>
							</div>
							<div class="right">
								<count-to :end-val="500"></count-to><span class="dashboard-key-item-title-unit">kg</span>
							</div>
						</div>
					</div>
				</div>
				<div class="dashboard-key-item bg4">
					<div>
						<p>当月焦炭到车</p>
						<div class="dashboard-key-item-title">
							<div class="left">
								<count-to :end-val="225"></count-to><span class="dashboard-key-item-title-unit">车</span>
							</div>
							<div class="right">
								<count-to :end-val="17800"></count-to><span class="dashboard-key-item-title-unit">kg</span>
							</div>
						</div>
					</div>
				</div>
				<div class="dashboard-key-item bg1">
					<div>
						<p>当月其它到车</p>
						<div class="dashboard-key-item-title">
							<div class="left">
								<count-to :end-val="10"></count-to><span class="dashboard-key-item-title-unit">车</span>
							</div>
							<div class="right">
								<count-to :end-val="15302"></count-to><span class="dashboard-key-item-title-unit">kg</span>
							</div>
						</div>
					</div>
				</div>
				<div class="dashboard-key-item bg2">
					<div>
						<p>当月其它到车</p>
						<div class="dashboard-key-item-title">
							<div class="left">
								<count-to :end-val="132"></count-to><span class="dashboard-key-item-title-unit">车</span>
							</div>
							<div class="right">
								<count-to :end-val="24815"></count-to><span class="dashboard-key-item-title-unit">kg</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<van-row gutter="22" class="dashboard-menu">
				<template v-for="(item, index) in list" :key="index">
					<van-col span="8" @click="JumpPage(item.name)">
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
		  padding: 6px 0 0 10px;
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
			  margin-top: 3px;
			  padding-right: 4px;
			  font-size: 22px;
			  font-weight: 600;
			  .dashboard-key-item-title-unit {
				color: grey;
				font-size: 10px;
				margin-left: 4px;
			  }
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