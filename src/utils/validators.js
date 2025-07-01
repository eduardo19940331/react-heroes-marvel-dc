export const isString = val => typeof val === 'string';
export const isStringRequired = val => typeof val === 'string' && val.trim().length > 0;
export const isNumber = val => typeof val === 'number';
export const isNumberRequired = val => typeof val === 'number';
export const isFunction = val => typeof val === 'function';
export const isArray = val => Array.isArray(val);
export const isUrl = val => typeof val === 'string' && /^https?:\/\//.test(val);
export const isBoolean = val => typeof val === 'boolean';