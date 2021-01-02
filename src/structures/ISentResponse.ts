import IResponse from './IResponse';
import ISentResponseData from './ISentResponseData';

export default interface ISentResponse extends IResponse {
  data: ISentResponseData;
}
