export class CelebrityChangeType {
    id: number;
    birthname: string;
    static Biographical: any;

}

export class Celebrity {
    id: number;
    birthname: string;
}

export class CelebrityMoviesPerYear {
  year: number;
  celebrities: any;
}

export class CelebrityMoviesPerYears {
  id: number;
  year: number;
  birthName: string;
}

export class Years {
  year: number;
}

export class filmsData {
  year: string;
  movieCount: number;
}