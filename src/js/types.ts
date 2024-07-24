export interface Fact {
  title: string;
  description: string;
}

export interface Data {
  title: string;
  dates: number[];
  facts: Fact[];
}
