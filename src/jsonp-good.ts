import { JsonpConfig, JsonpPromise } from './types'
import { buildURL } from './helpers/url'
import jsonp from './core/jsonp'

function jsonpG(config: JsonpConfig) {
  processConfig(config)
  //发送请求
  return jsonp(config)
}

function processConfig(config: JsonpConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: JsonpConfig): string {
  const { url, funcName, params } = config
  return buildURL(url, funcName!, params)
}
export default jsonpG
