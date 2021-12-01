import {AuthEnum} from "../../../types";

export default class BaseNode {
  public docId: string;
  public auth: AuthEnum | undefined = AuthEnum.DEVELOPMENT;

  constructor(docId: string, auth: AuthEnum | undefined) {
    this.docId = docId;
    this.auth = auth;
  }
}