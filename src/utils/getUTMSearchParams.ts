import { UTM } from '@constants';

export const getUTMSearchParams = (searchParams = {}) => {
  const urlSearchParams = new URLSearchParams(searchParams);

  return Object.values(UTM).reduce((acc, key) => {
    const value = urlSearchParams.get(key);

    if (value) {
      acc.set(key, value);
    }

    return acc;
  }, new URLSearchParams());
}