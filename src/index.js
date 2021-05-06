var obj = {};
Object.defineProperty(obj, "a", {
  enumerable: true,
  get() {
    console.log("正在访问obj的a属性");
    return 11;
  },
  set() {
    console.log("正在改变obj的a属性");
  },
});
Object.defineProperty(obj, "b", {
  enumerable: true,
  get() {
    console.log("正在访问obj的b属性");
    return 22;
  },
  set() {
    console.log("正在改变obj的b属性");
  },
});
Object.defineProperty(obj, "c", {
  enumerable: true,
  get() {
    console.log("正在访问obj的b属性");
    return 33;
  },
  set() {
    console.log("正在改变obj的c属性");
  },
});
obj.a++;
obj.b++;
obj.c++;
Object.keys(obj).forEach((key) => {
  console.log(key, "->", obj[key]);
});
