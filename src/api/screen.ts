import { API_CONFIG } from 'config'

interface ClickScreenParams {
  x: number
  y: number
}

interface ClickScreenOptions {
  baseUrl?: string
}

export const clickScreen = async (params: ClickScreenParams, options?: ClickScreenOptions) => {
  const baseUrl = options?.baseUrl ?? API_CONFIG.BASE_URL
  const response = await fetch(`${baseUrl}${API_CONFIG.API_PREFIX}/click`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  })

  if (!response.ok) {
    throw new Error('Failed to click screen')
  }

  return response.json()
}
