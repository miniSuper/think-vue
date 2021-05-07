import { def } from "./utils";

// 得到Array的原型对象  这里存储着Array自身的方法
const arrayPrototype = Array.prototype;

export const arrayMethods = Object.create(arrayPrototype);

// 要被改写的7个数组方法

const methodsNeedChange = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse",
];

methodsNeedChange.forEach(function (methodName) {
  // 备份原来的方法
  const originMethod = arrayPrototype[methodName];

  def(
    arrayMethods,
    methodName,
    function () {
      const result = originMethod.apply(this, arguments);

      const ob = this.__ob__;
      // 把这是数组身上的__ob__取出来，__ob__已经被添加了，为什么已经被添加了？
      // 因为数组肯定不是最高层，比如obj.g 属性是数组，obj不能是数组，第一次遍历obj这个对象的第一层的时候
      // 已经给g属性（就是这个数组）添加了__ob__属性

      // 有三种方法 push \ unshift \ splice 能够插入新项 现在要把插入的新项也要变成observe的

      let inserted = [];

      switch (methodName) {
        case "push":
        case "unshift":
          inserted = arguments;
          break;
        case "splice":
          // splice 格式是splice(下标，数量，插入的新项)
          inserted = Array.prototype.slice.call(arguments, 2);
          break;
      }
      // 判断有没有要插入的新项,让新项也变为响应的
      if (inserted && inserted.length) {
        ob.observeArray(inserted);
      }
      ob.dep.notify();
      return result;
    },
    false
  );
});
