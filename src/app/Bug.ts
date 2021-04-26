export class Bug{
  id:String;
  name:string;
  priority:string;
  projectId:string;
  module:string;
  type:string;
  status:string="NEW";
  buildVersion:string;
  severity:string;
  testerId:string;
  developerId:string;
  synopsis:string;
  description:string;
  eta:Date;
  save(){

  }
}
