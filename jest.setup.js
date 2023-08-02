import { server } from "./src/commons/mocks";

beforeAll(async () => {
  server.listen();
});
afterAll(() => {
  server.close();
});
