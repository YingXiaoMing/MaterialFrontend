
<template>
    <CustomHeader title="通知" />
    <vant-cell-group>
        <van-cell title="关于做好疫情防控通知" icon="chat-o" is-link value="已读"></van-cell>
        <van-cell title="会议通知" icon="chat-o">
            <template #right-icon>
                <van-badge dot><div class="van-cell__value"><span>未读</span></div></van-badge>
                <van-icon name="arrow" class="van-cell__right-icon"></van-icon>
            </template>
        </van-cell>
        <van-cell title="关于通勤车调整通知" icon="chat-o" value="已读" is-link></van-cell>
    </vant-cell-group>
</template>