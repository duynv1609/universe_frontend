export interface GenresModel {
  id: number;
  slug: string;
  name: {
    vi: string;
    en: string;
  };
  children: [
    {
      id: number;
      slug: string;
      name: {
        vi: string;
        en: string;
      };
    }
  ];
}
