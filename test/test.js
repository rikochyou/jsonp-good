var jsonpG = require('../dist/jsonp-good.es5.js')

var test = require('tape')

test('basic jsonp', function(t) {
  t.plan(1)
  var obj = {
    beep: 'boop',
    yo: 'dawg'
  }
  jsonpG({
    url: 'http://jsfiddle.net/echo/jsonp/',
    funcName: 'jp0',
    params: {
      beep: 'boop',
      yo: 'dawg'
    }
  }).then(data => {
    t.deepEqual(data, obj)
  })
})

test('timeout', function(t) {
  t.plan(1)
  jsonpG({
    url: 'http://jsfiddle.net/echo/jsonp/',
    funcName: 'jp0',
    timeout: 3000,
    params: {
      delay: 5
    }
  }).catch(e => {
    t.ok(e instanceof Error)
  })
})
