declare module '*.png' {
  const content: string
  export default content
}
declare module '*.webp' {
  const content: string
  export default content
}
declare module '*.svg' {
  const content: string
  export default content
}
declare module '*.jpg' {
  const content: string
  export default content
}
declare module '*.gif' {
  const content: string
  export default content
}

interface ImportMetaEnv {
  readonly FRONTEND_SERVER_DOMAIN: string
  readonly FRONTEND_SENTRY_ENV_NAME: string
  readonly FRONTEND_SERVER_USE_HTTPS: string
  readonly FRONTEND_SENTRY_ENABLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
