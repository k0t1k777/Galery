export interface Authors {
  id: string;
  name: string;
}

export interface Locations {
  id: string;
  location: string;
}

export interface Pictures {
  id: string;
  imageUrl: string;
  name: string;
  authorId: string;
  created: string;
  locationId: string;
}
