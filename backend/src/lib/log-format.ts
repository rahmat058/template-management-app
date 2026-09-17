// One pattern for both environments, so a line reads the same everywhere. Morgan's built-in 'dev' and
// 'combined' formats are colour/order functions we cannot extend, so a custom format drops the ANSI
// colours in favour of a consistent shape.
export const REQUEST_LOG_FORMAT = ':method :url :status :response-time ms - :res[content-length] [ :requestId ]'

// Production additionally prefixes the client IP, which is what TRUST_PROXY exists to make accurate.
export const PRODUCTION_LOG_FORMAT = `:remote-addr ${REQUEST_LOG_FORMAT}`
