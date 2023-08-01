import { server } from "./src/commons/mocks";
import preloadAll from "jest-next-dynamic";

beforeAll(async () => {
  server.listen();
  await preloadAll();
});
afterAll(() => {
  server.close();
});
