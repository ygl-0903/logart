
import { r, b, g } from './style'
import { formatData } from './utils';

// 内置导出
export const clog = console.log;
export const cwarn = console.warn;
export const cerror = console.error;
export const cinfo = console.info;
export const cdebug = console.debug;
export const ctable = console.table;
export const ctrace = console.trace;
export const cgroup = console.group;
export const cgroupCollapsed = console.groupCollapsed;
export const cgroupEnd = console.groupEnd;
export const ccount = console.count;
export const ccountReset = console.countReset;
export const ctime = console.time;
export const ctimeLog = console.timeLog;
export const ctimeEnd = console.timeEnd;
export const cclear = console.clear;
export const cassert = console.assert;
export const cdir = console.dir;
export const cdirxml = console.dirxml;
export const ctimeStamp = console.timeStamp;


// desc红色字体
export const cr = (desc: string, ...args: any[]) => {
  clog(`%c ${formatData(desc)}`, r, ...args);
}
// desc蓝色字体
export const cb = (desc: string, ...args: any[]) => {
  clog(`%c ${formatData(desc)}`, b, ...args);
}
// desc绿色字体
export const cg = (desc: string, ...args: any[]) => {
  clog(`%c ${formatData(desc)}`, g, ...args);
}

// desc 样式自定义输出
export const c = (desc: string, style = r, ...args: any[]) => {
  clog(`%c ${formatData(desc)}`, style, ...args);
}

// Divider
// 分割线输出
export const dcu = (desc: string, style = r, ...args: any[]) => {
  clog(`%c -------------${formatData(desc)}--------------- `, style);
  clog(...args);
  clog(`%c --------------${formatData(desc)}-------------- `, style);
}

export const dcx = (desc: string, style = r, ...args: any[]) => {
  clog(`%c **************${formatData(desc)}************** `, style);
  clog(...args);
  clog(`%c **************${formatData(desc)}************** `, style);
}

export default {
  cr,
  cb,
  cg,
  c,
  dcu,
  dcx,
  clog,
  cwarn,
  cerror,
  cinfo,
  cdebug,
  ctable,
  ctrace,
  cgroup,
  cgroupCollapsed,
  cgroupEnd,
  ccount,
  ccountReset,
  ctime,
  ctimeLog,
  ctimeEnd,
  cclear,
  cassert,
  cdir,
  cdirxml,
  ctimeStamp
}
