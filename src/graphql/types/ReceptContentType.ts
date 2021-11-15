export type ReceptContent = {
    id: string;
    uri: string;
    title: string;
    content: string;
    tags: {
        nodes: {
            name: 'string'
        }[]
    };
    singlePaketAfc: {
      tooltip: null | string;
      tips: string;
      tidFormat: "min" | "h";
      tid: number;
      svarighetsgrad: 'Lätt' | 'Medel' | 'Svår';
      saHarGorDu: string;
      kortBeskrivning: string;
      images: {
        localFile: {
          childrenImageSharp: {
            original: {
              src: string;
            }
            fixed: {
              src: string;
            }
          }[]
        }
      }[]
    }
}