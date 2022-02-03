import App from './app';

class Server {
  constructor(port) {
    this.PORT = port;
    this.app = new App().app;
  }

  async serve() {
    try {
      const add = await this.app.listen(this.PORT);
      // eslint-disable-next-line no-console
      console.log('runnning at ', add);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('something went wrong', error);
    }
  }
}

export default Server;
