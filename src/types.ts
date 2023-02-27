export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
  };

  
export type Pagination = {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
};


export type Url = {
  url: string;
};