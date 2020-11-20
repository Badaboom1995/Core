const serverUrl = 'http://localhost:3001'
const commonHeaders: HeadersInit = new Headers()
commonHeaders.set('Content-Type', 'application/json')

export const makeRequest = async (url, method, body?) => {
  const JWT = localStorage.reflectJWT
  if (JWT) commonHeaders.append('Authorization', `Bearer ${JWT}`)
  const fetchConfig: any = { method, headers: commonHeaders }
  if (body) fetchConfig.body = JSON.stringify(body)
  const response = await fetch(`${serverUrl}${url}`, fetchConfig)
  const data = await response.json()

  commonHeaders.delete('Authorization')
  return data
}
