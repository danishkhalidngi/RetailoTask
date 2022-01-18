export type PayloadProps = {
  search: string;
  limit: number;
  offset: number;
};

export type ModalItemType = {
  isVisible: boolean;
  data: any;
};

export type paginationObjType = {
  total_count: number;
  count: number;
  offset: number;
};

export type GiphsObjectType = {
  loading: boolean;
  giphsData: Array<any>;
  giphsError: string;
  paginationObj: paginationObjType | any;
  search: string;
};

export type GiphsReducerType = {
  Giphs: GiphsObjectType;
};

export type GiphsDataType = {
  analytics?: object;
  analytics_response_payload?: string;
  bitly_gif_url?: string;
  bitly_url?: string;
  content_url?: string;
  embed_url?: string;
  id?: string;
  images?: any;
  import_datetime?: string;
  is_sticker?: number;
  rating?: string;
  slug?: string;
  source?: string;
  source_post_url?: string;
  source_tld?: string;
  title?: string;
  trending_datetime?: string;
  type?: string;
  url?: string;
  user?: any;
  username?: string;
};

export type GiphsPayloadActionType = {
  response: GiphsDataType;
  reqData: PayloadProps;
};

export type GiphsActionType = {
  err?: string;
  payload?: any;
  key?: string;
  type?: string;
  register?: any;
  rehydrate?: any;
};
