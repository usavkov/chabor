const {
  INSTAGRAM_URL,
  TELEGRAM_URL,
} = process.env;

export const REDIRECT_TARGETS_MAP = new Map([
  ['instagram', INSTAGRAM_URL],
  ['telegram', TELEGRAM_URL],
  ['_default_', INSTAGRAM_URL],
]);
