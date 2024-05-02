export const getUrlParams = (url: string, searchParams?: string) => {
  try {
    const urlString = new URL(url);

    const pathname = urlString?.pathname;
    const host = urlString?.host;

    const urlParams = urlString.searchParams?.get(searchParams as string);
    return { url, urlParams, pathname, host };
  } catch (err: any) {
    console.log("Error: Please enter a valid url");
  }
};
