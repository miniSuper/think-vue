import observe from "./observe";
import Watcher from "./Watcher";
var obj = {
  a: {
    m: {
      n: 5,
    },
  },
  b: 4,
  g: [11, 22, 33, 44],
};

observe(obj);

// console.log(obj);

// obj.g.splice(1, 0, [222, 333, 444]);
// obj.b = 5555;
// obj.g.push("aaaa");
// console.log("obj.g", obj.g.push(333));

new Watcher(obj, "a.m.n", (val) => {
  console.log("五角星", val);
});

obj.a.m.n = 555;
