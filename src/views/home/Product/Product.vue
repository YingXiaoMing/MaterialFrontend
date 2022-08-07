<template>
<CustomHeader title="生产情况" />
<div style="background-color: #E9F3FD">
<chart-a :option="option"></chart-a>
<chart-b :option="option"></chart-b>
<chart-c :option="option"></chart-c>
<chart-d :option="option"></chart-d>
</div>

</template>


<script lang="ts">
import ChartA from './ChartA.vue';
import ChartB from './ChartB.vue';
import ChartC from './ChartC.vue';
import ChartD from './ChartD.vue';
import { reactive, toRefs } from 'vue';
import CustomHeader from '@/components/CustomHeader.vue';

export default {
    components: {
    ChartA,
    ChartB,
    ChartC,
    ChartD,
    CustomHeader
},
    setup() {
    }
}
</script>