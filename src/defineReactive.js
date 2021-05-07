import observe from "./observe";
import Dep from "./Dep.js";

export default function defineReactive(data, key, val) {
  const dep = new Dep();
  if (arguments.length === 2) {
    val = data[key];
  }

  let childOb = observe(val);

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 如果现在处于一个依赖的收集阶段
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
      }
      return val;
    },
    set(newValue) {
      if (val === newValue) {
        return;
      }
      val = newValue;
      // 当设置了新值 ，这个新值也要被observe
      childOb = observe(newValue);
      dep.notify();
    },
  });
}
