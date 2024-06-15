import CONFIG from './config';

const API_ENDPOINT = {
  TRASH_LIST: `${CONFIG.BASE_URL}/trash`,
  TRASH_DETAIL: (id) => `${CONFIG.BASE_URL}/trash/${id}`,
  TRASH_FINISHED: `${CONFIG.BASE_URL}/finished`,
  TRASH_FINISHED_DETAIL: (id) => `${CONFIG.BASE_URL}/finished/${id}`,
  CITIES_LIST: `${CONFIG.BASE_URL}/cities`,
};

export default API_ENDPOINT;
