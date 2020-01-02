import { buildURL } from '../../src/helpers/url'
import { textSpanContainsPosition } from 'typescript'

describe('helpers: url', () => {
  describe('buildURL', () => {
    test('should support null params', () => {
      expect(buildURL('/foo', 'jp0')).toBe('/foo?callback=jp0')
    })

    test('should support params', () => {
      expect(buildURL('/foo', 'jp0', { foo: 'bar' })).toBe('/foo?foo=bar&callback=jp0')
    })

    test('should ignore if some param value is null', () => {
      expect(buildURL('/foo', 'jp0', { foo: 'bar', baz: null })).toBe('/foo?foo=bar&callback=jp0')
    })

    test('should ignore if the only param is null', () => {
      expect(buildURL('/foo', 'jp0', { foo: null })).toBe('/foo')
    })

    test('should support object params', () => {
      expect(buildURL('/foo', 'jp0', { foo: { bar: 'baz' } })).toBe(
        '/foo?foo=' + encodeURI('{"bar":"baz"}' + '&callback=jp0')
      )
    })

    test('should support Date params', () => {
      const date = new Date()
      expect(buildURL('/foo', 'jp0', { date })).toBe(
        '/foo?date=' + date.toISOString() + '&callback=jp0'
      )
    })

    test('should support array params', () => {
      expect(buildURL('/foo', 'jp0', { foo: ['bar', 'baz'] })).toBe(
        '/foo?foo[]=bar&foo[]=baz&callback=jp0'
      )
    })

    test('should support special params', () => {
      expect(buildURL('/foo', 'jp0', { foo: '@:$, ' })).toBe('/foo?foo=@:$,+&callback=jp0')
    })

    test('should support existing params', () => {
      expect(buildURL('/foo?foo=bar', 'jp0', { bar: 'baz' })).toBe(
        '/foo?foo=bar&bar=baz&callback=jp0'
      )
    })

    // 舍弃 url 哈希值
    test('should correct discard url hash mark', () => {
      expect(buildURL('/foo?foo=bar#hash', 'jp0', { bar: 'baz' })).toBe(
        '/foo?foo=bar&bar=baz&callback=jp0'
      )
    })
  })
})
