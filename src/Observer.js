import { def } from "./utils.js";
import defineReactive from "./defineReactive.js";
import { arrayMethods } from "./array";
import observe from "./observe.js";
import Dep from "./Dep.js";

export default class Observer {
  constructor(value) {
    // 每一个Observer实例身上，都有一个dep
    this.dep = new Dep();

    def(value, "__ob__", this, false); //给实例添加了__ob__属性，值是这次new的实例
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  // 遍历 对象
  walk(value) {
    for (let k in value) {
      defineReactive(value, k);
    }
  }
  // 数组的特殊遍历
  observeArray(arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
      // 逐项进行observe
      observe(arr[i]);
    }
  }
}
