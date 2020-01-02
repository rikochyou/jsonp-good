export interface JsonpConfig {
  url: string
  funcName: string
  timeout?: number
  params?: any
}

export interface JsonpPromise<T = any> extends Promise<T> {}

export interface Window {
  funcName: string
}
