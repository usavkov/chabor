import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
} from '@constants';
 
export const routing = defineRouting({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  // Hidden for default locale
  localePrefix: 'as-needed',
});
 
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation(routing);