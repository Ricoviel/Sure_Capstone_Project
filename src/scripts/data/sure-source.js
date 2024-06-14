import API_ENDPOINT from '../globals/api-endpoint';

class SureDBSource {
  static async trashList() {
    const response = await fetch(API_ENDPOINT.TRASH_LIST);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.results;
  }

  static async detailTrash(id) {
    const response = await fetch(API_ENDPOINT.TRASH_DETAIL(id));
    console.log('Hasil:', id);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.results;
  }

  static async trashFinished() {
    const response = await fetch(API_ENDPOINT.TRASH_FINISHED);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.results;
  }

  static async trashFinishedDetail(id) {
    const response = await fetch(API_ENDPOINT.TRASH_FINISHED_DETAIL(id));
    console.log('Hasil:', id);
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.results;
  }
}

export default SureDBSource;
