# jsonp-good

一个用`jsonp`发送跨域请求的模块，返回一个`Promise`对象。

## 安装

```js
$ npm install jsonp-good
```

## 参数说明

```js
jsonpG({
  url: 'http://xxxx/xxxx/',
  funcName: 'fake',
  timeout: 3000,
  params: {
    a: '1',
    b: '2'
  }
})
  .then(res => console.log(res))
  .catch(e => console.log(e))
```

- `url`：**必选参数** ！！！请求的完整地址
- `funcName`：**必选参数**！！！回调函数的名字，随便叫什么都可以，总之必须要写，而且要保证该名字是全局唯一的
- `timeout`: 可选参数，超时时间设置，单位是 ms，默认值 6000
- `params`：可选参数，就是所谓的 query string 啦~

```js
// 支持的params形式，为了方便演示，url使用了相对路径
// 不传params，最终url: /foo?callback=fake
jsonpG({
    url: '/base/get'
    funcName: 'fake'
})


// 普通
jsonpG({
    url: 'http://xxxx/xxxx.com',
    funcName: 'fake',
    params: {
        foo: 'bar'
    }
})

// 数组
jsonpG({
    url: 'http://xxxx/xxxx.com',
    funcName: 'fake',
    params: {
        foo: ['bar', 'baz']
    }
})

// 对象
jsonpG({
    url: 'http://xxxx/xxxx.com',
    funcName: 'fake',
    params: {
        foo: {
      		bar: 'baz'
    	}
    }
})

// Date 类型
jsonpG({
    url: 'http://xxxx/xxxx.com',
    funcName: 'fake',
    params: {
        date
    }
})

// 特殊字符支持, 对于字符 @、:、$、,、、[、]，允许出现在 url 中的，不会被 encode
jsonpG({
    url: 'http://xxxx/xxxx.com',
    funcName: 'fake',
    params: {
        foo: '@:$, '
    }
})

// 空值忽略
jsonpG({
    url: 'http://xxxx/xxxx.com',
    funcName: 'fake',
    params: {
        foo: 'bar',
    	baz: null
    }
})

// 丢弃 url 中的哈希标记
jsonpG({
    url: '/base/get#hash',
    funcName: 'fake',
    params: {
		foo: 'bar'
    }
})
```
