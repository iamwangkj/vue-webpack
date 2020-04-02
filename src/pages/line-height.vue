<template>
  <div class="page">
    <!-- <ol>
      <li>line-height是可以继承的。</li>
      <li>块的高度不是由文字撑起来的。</li>
      <li>单行文本垂直居中一定要设置height吗？</li>
      <li>line-height:1.5和line-height:150的区别</li>
    </ol>
    <hr>-->
    <!-- https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height -->
    <section>
      <i>line-height: normal（默认，取决于用户端，约为1.2，这取决于元素的 font-family。）</i>
      <p>我是文字</p>
    </section>

    <section>
      <i>line-height: 1</i>
      <p style="line-height:1;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:10px;">我是文字</p>
      <h6>阿朱的方式</h6>
      <p style="line-height:1;font-weight:bold;font-size:10px;padding-top:1px;margin-top:-1px;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:10px;padding-top:2px;margin-top:-2px;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:10px;padding-top:3px;margin-top:-3px;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:10px;padding-top:4px;margin-top:-4px;">我是文字</p>
      <hr>
      <p style="line-height:1;font-weight:bold;font-size:24px;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:24px;padding-top:1px;margin-top:-1px;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:24px;padding-top:2px;margin-top:-2px;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:24px;padding-top:3px;margin-top:-3px;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:24px;padding-top:4px;margin-top:-4px;">我是文字</p>
      <hr>
      <p style="line-height:1;font-weight:bold;font-size:8px;;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:8px;padding-top:1px;margin-top:-1px;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:8px;padding-top:2px;margin-top:-2px;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:8px;padding-top:3px;margin-top:-3px;">我是文字</p>
      <p style="line-height:1;font-weight:bold;font-size:8px;padding-top:4px;margin-top:-4px;">我是文字</p>
    </section>

    <section>
      <i>line-height: 2</i>
      <p style="line-height:2;">我是文字</p>
    </section>

    <section>
      <i>块的高度是由font-size决定的吗？</i>
      <p style="font-size:24px;">我是文字</p>
      <p style="font-size:12px;">我是文字</p>
      <p style="font-size:0px;">我是文字</p>

      <p style="font-size:0px; line-height: 24px;">我是文字</p>
      <p style="font-size:24px; line-height: 10px;">我是文字</p>
      <p style="font-size:24px; line-height: 24px;">我是文字</p>
    </section>

    <section>
      <i>单行文字的垂直居中需要设置height吗？</i>
      <br />
      <code>常看到这种写法：div{height:50px;line-height:50px;}</code>
      <div style="line-height:40px;font-size:12px;background:#d1d1d1;">我是第一行</div>
      <div style="line-height:40px;font-size:24px;background:#ddd;">我是第二行</div>
      <div style="line-height:40px;font-size:36px;background:#ccc;">我是第三行</div>
    </section>

    <section>
      <i>line-height:1.5和line-height:150%有区别吗？</i>
      <br />
      <div style="line-height:150%;background:#ccc;">我是第一行</div>
      <div style="line-height:1.5;background:#ddd;">我是第二行</div>
      <hr />
      <div style="line-height:150%;background:#ccc;">
        <p style="font-size:30px;width:100px;">我是第一行</p>
      </div>
      <div style="line-height:1.5;background:#ddd;">
        <p style="font-size:30px;width:100px;">我是第二行</p>
      </div>
    </section>

    <section style="font-size: 16px;">
      <i>算算</i>
      <br />
      <!-- 16*150%=24 -->
      <div style="line-height:150%;">
        <p style="font-size:30px;width:100px;">我是第1.1行</p>
        <p style="font-size:40px;width:100px;">我是第1.2行</p>
      </div>
      <div style="line-height:1.5;">
        <!-- 30*1.5=45 -->
        <p style="font-size:30px;width:100px;">我是第2.1行</p>
        <p style="font-size:40px;width:100px;">我是第2.2行</p>
      </div>
    </section>
  </div>
</template>
<script>
import { randomColor } from '../utils/color'
export default {
  methods: {
    getRandomColor (item) {
      return randomColor()
    }
  }
}
</script>
<style lang="scss" scoped>
section {
  padding: 10px 0;
  margin-bottom: 30px;
  background-color: #ccc;
}

p {
  color: #fff;
  background-color: #3f3f3f;
  margin: 5px 0;
  overflow: hidden;
}
</style>
