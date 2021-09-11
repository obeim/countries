export interface selectItem {
  name: string;
  value: string;
}
interface currencie {
  code: string;
  name: string;
  symbol: string;
}
interface language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
export interface country {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
  alpha3Code: string;
  nativeName?: string;
  subregion?: string;
  borders?: Array<string>;
  topLevelDomain?: Array<string>;
  currencies?: Array<currencie>;
  languages?: Array<language>;
}
