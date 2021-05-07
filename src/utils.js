export const def = function (obj, key, value, enumerable) {
  Object.defineProperty(obj, key, {
    value,
    writable: true,
    enumerable,
    configurable: true,
  });
};
