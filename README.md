# @yuxia/format-clog

[![NPM version](https://img.shields.io/npm/v/@yuxia/format-clog.svg?style=flat)](https://npmjs.com/package/@yuxia/format-clog)
[![NPM downloads](http://img.shields.io/npm/dm/@yuxia/format-clog.svg?style=flat)](https://npmjs.com/package/@yuxia/format-clog)

## 描述
样式化输出到浏览器终端。
```ts
console.log("%c style", "color:#fff;font-size:20px;background:linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);")
```

```ts
export const dcu = (desc: string, style = r, ...args: any[]) => {
  clog(`%c -------------${formatData(desc)}--------------- `, style);
  clog(...args);
  clog(`%c --------------${formatData(desc)}-------------- `, style);
}
```

## Install

```bash
$ pnpm install
```

```bash
$ npm run dev
$ npm run build
```

## Options

TODO

## LICENSE

MIT
