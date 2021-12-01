import BaseNode from "../base/BaseNode";

export default class DocNode extends BaseNode {
  public description: string;

  constructor({docId, auth, description}: DocNode) {
    super(docId, auth);
    this.docId = docId;
    this.auth = auth;
    this.description = description;
  }
}