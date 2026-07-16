const AUTH_KEY = 'shidokan_admin_session'

export const MOCK_CREDENTIALS = {
  email: 'admin@shidokan.com',
  password: 'shidokan123',
}

export function isLoggedIn(): boolean {
  if (typeof window === 'undefined') return false
  return window.localStorage.getItem(AUTH_KEY) === '1'
}

export function login(email: string, password: string): boolean {
  const ok = email.trim().toLowerCase() === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password
  if (ok) {
    window.localStorage.setItem(AUTH_KEY, '1')
  }
  return ok
}

export function logout(): void {
  window.localStorage.removeItem(AUTH_KEY)
}
