export class Ingredient{
  //created in shared folder, so that both the components can use it
  // public name : string;
  // public amount : number;
  //
  // constructor(name:string, amount: number){
  //   this.name = name;
  //   this.amount = amount;
  // }

  // shortcut does same work as above
  constructor(public name:string, public amount: number){  }
}
