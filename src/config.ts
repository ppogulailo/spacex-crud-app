export const BASE_URL:string='https://api.spacexdata.com/v4/launches/';

export const ALL_URL_QUERY:string=BASE_URL+'query';

export const searchByOneItem = (id:string|undefined)=> BASE_URL + id
