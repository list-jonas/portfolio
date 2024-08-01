import { FlagComponent } from "country-flag-icons/react/3x2";
import { US, DE, FR, IT, ES } from 'country-flag-icons/react/3x2'

interface Locale {
  key: string;
  icon: FlagComponent;
}

export const locales: Locale[] = [{
  key: 'en',
  icon: US
}, {
  key: 'de',
  icon: DE
}, {
  key: 'fr',
  icon: FR
}, {
  key: 'it',
  icon: IT
}, {
  key: 'es',
  icon: ES
}];

export const localesAsStrings = locales.map(locale => locale.key);