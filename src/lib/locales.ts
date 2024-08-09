import {
  DE,
  ES,
  FlagComponent,
  FR,
  IT,
  US,
} from "country-flag-icons/react/3x2";

interface Locale {
  key: string;
  icon: FlagComponent;
  generated?: boolean;
}

export const locales: Locale[] = [
  {
    key: "en",
    icon: US,
  },
  {
    key: "de",
    icon: DE,
  },
  {
    key: "fr",
    icon: FR,
    generated: true,
  },
  {
    key: "it",
    icon: IT,
    generated: true,
  },
  {
    key: "es",
    icon: ES,
    generated: true,
  },
];

export const localesAsStrings = locales.map((locale) => locale.key);
