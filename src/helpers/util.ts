const OtoString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return OtoString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
