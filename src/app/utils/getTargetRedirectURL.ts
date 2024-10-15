import { REDIRECT_TARGETS_MAP } from "@constants";

export const getTargetRedirectURL = (target: string) => {
  const url = REDIRECT_TARGETS_MAP.get(target) || REDIRECT_TARGETS_MAP.get('_default_');

  return url;
};
