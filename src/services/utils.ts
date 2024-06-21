export default function buildQueryString(params: any) {
  const searchParams = new URLSearchParams();

  for (const key in params) {
    if (params[key]) {
      searchParams.append(key, params[key]);
    }
  }

  return searchParams.toString();
};