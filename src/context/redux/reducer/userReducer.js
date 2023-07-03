import * as PathAction from "../PathAction";
const initialState = {
  currentUser: [],
  form: [],
  campaigns: [],
  history: [],
  candidate: [],
  campaignStage: [],
  candidateList: [],
  question: [],
  campainOwner: [],
  accounts: [],
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case PathAction.LOGIN_USER:
      state.currentUser = payload;
      break;
    case PathAction.GET_LIST_FORM:
      state.form = payload;
      break;
    case PathAction.GET_LIST_CAMPAIGNS:
      state.campaigns = payload;
      break;
    case PathAction.GET_LIST_HISTORY:
      state.history = payload;
      break;
    case PathAction.GET_LIST_CANDIDATE:
      state.candidate = payload;
      break;
    case PathAction.GET_LIST_CAMPAINGSTAGEID:
      state.campaignStage = payload;

      break;
    case PathAction.GET_LIST_CANDIDATE_CAMPAIGN:
      state.candidateList = payload;
      break;
    case PathAction.GET_LIST_QUESTIONS:
      state.question = payload;
      break;
    case PathAction.GET_CAMPAIGN_OWNER:
      state.campainOwner = payload;
      break;
    case PathAction.GET_LIST_ACCOUNT:
      state.accounts = payload;
      break;
    default:
      return { ...state };
  }
  return { ...state };
}
