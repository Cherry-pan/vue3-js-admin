```js
// html
<swiper
    ref="mySwiper"
    :options="swiperOption"
    v-if="homeBanner.length"
>
    <swiper-slide v-for="(item, index) in homeBanner" :key="index">
    <img class="imgUrl" :src="item.imageUrl" alt="首页轮播图" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
</swiper>
data(){
    return{
        swiperOption: {
            watchSlidesVisibility: true /*避免出现bug*/,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            loop: true,
        },
        homeBanner: [],
    }
}
```    
`数据是写死的时候，能够loop:true是有效的;数据是动态获取的loop:true就会失效。但是在上加上v-if="homeBanner.length"有效解决`
