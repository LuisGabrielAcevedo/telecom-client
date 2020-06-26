import { Model } from "lgx-axios-dev-tools";
import { BASE_URL, APP_KEY } from "src/constants";

export default class Base extends Model {
  baseUrl() {
    return BASE_URL;
  }
}

Base.getInstance().interceptors.request.use((request) => {
  request.url = request.url + `&appid=${APP_KEY}`;
  return request;
});
