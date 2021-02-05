### 跑马灯

```js
<el-carousel>
    <el-carousel-item
        class="carousel flex"
        v-for="(item1, index1) in returnData"
        :key="index1"
    >
        <div class="item-img flex" v-for="(item, i) in item1" :key="i">
        <img class="imgUrl" :src="item.url" alt="" />
        <div class="item-img-right">
            <div class="name">{{ item.name }}</div>
            <div class="item-title">{{ item.declaration }}</div>
        </div>
        </div>
    </el-carousel-item>
</el-carousel>
```

- 后台返回的数据格式

```js
data:[
    {
      declaration: "3333333555"
      id: "47cc781a-11b2-481c-a353-e3795f42d1cf"
      name: "灵梦"
    },
     {
      declaration: "3333333555"
      id: "47cc7381a-11b2-481c-a353-e3795f42d1cf"
      name: "灵梦1"
    },
     {
      declaration: "3333333555"
      id: "47cc3781a-11b2-481c-a353-e3795f42d1cf"
      name: "灵梦2"
    },
]
```
    后台返回的这个格式数据肯定是不能直接放页面的，前端这边得处理一下，我这里处理的方法可能有些问题，但是能够实现。
 
```js
// 将数组处理成嵌套数组的形式
group(array, subGroupLength) {
  let index = 0;
  let newArray = [];
  while (index < array.length) {
    newArray.push(array.slice(index, (index += subGroupLength)));
  }
  return newArray;
}
// 处理返回数据的格式，如果长度是偶数的话就/2,奇数的话就取余+1
  this.returnData = this.$utils.group(
    this.returnData,
    data.length % 2 == 0 ? data.length / 2 : (data.length % 2) + 1
  );
```

