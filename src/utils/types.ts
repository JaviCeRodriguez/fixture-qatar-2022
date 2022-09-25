export interface CountryType {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface GroupType {
  id: number;
  name: string;
  countries: CountryType[];
}

export interface MatchType {
  id: number;
  country1: CountryType;
  country2: CountryType;
  score1: number;
  score2: number;
  date: string;
}

export interface GroupModalType {
  id: number;
  name: string;
  matchs: MatchType[];
  isOpen: boolean;
  onClose: () => void;
}
