interface QueryParams {
  currentPage?: string;
  pagesAmount?: string;
  inputValue?: string;
  authorId?: string;
  locationId?: string;
  fromDate?: string;
  beforeDate?: string;
}

export default function buildQueryString(params: QueryParams): string  {
  const searchParams = new URLSearchParams();

  if (params.currentPage && params.pagesAmount) {
    searchParams.append('_page', params.currentPage);
    searchParams.append('_limit', params.pagesAmount);
  }

  if (params.inputValue) {
    searchParams.append('q', params.inputValue);
  }

  if (params.authorId) {
    searchParams.append('authorId', params.authorId);
  }

  if (params.locationId) {
    searchParams.append('locationId', params.locationId);
  }

  if (params.fromDate) {
    searchParams.append('created_gte', params.fromDate);
  }

  if (params.beforeDate) {
    searchParams.append('created_lte', params.beforeDate);
  }

  return searchParams.toString();
}
