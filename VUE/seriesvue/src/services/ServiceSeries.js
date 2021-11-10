import Global from "./../components/Global";
import axios from "axios";

export default class ServiceSeries {
  getSeries() {
    return new Promise(function (resolve) {
      var request = "/api/Series";
      var url = Global.urlSeries + request;
      axios.get(url).then((res) => {
        resolve(res.data);
      });
    });
  }
}
