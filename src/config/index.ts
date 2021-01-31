interface Iconfig {
  apiUrl: string;
  homeUrl: string;
}

export const config: Iconfig = {
  apiUrl: 'http://localhost:8085',
  homeUrl: 'localhost:8080', //not use yet
};
