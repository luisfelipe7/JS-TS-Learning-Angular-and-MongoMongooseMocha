export class Book {

  // Attributes of the book
  public id?: number;
  public name?: string;
  public writer?: string;
  public price?: number;

  // Constructor for my Book Class
  constructor(id?: number, name?: string, writer?: string, price?: number) {
    this.id = id;
    this.name = name;
    this.writer = writer;
    this.price = price;
  }

  // Return Value Not Defined if the Value is null or undefined
  getAttributeByValue(typeOfAttribute: number): any {
    let isNull = false;
    let valueToReturn: any;
    if(this != null){
    switch (typeOfAttribute) {
      case 1:
        if (this.id == null) {
          isNull = true;
        } else {
          valueToReturn = this.id;
        }
        break;
      case 2:
        if (this.name == null) {
          isNull = true;
        } else {
          valueToReturn = this.name;
        }
        break;
      case 3:
        if (this.writer == null) {
          isNull = true;
        } else {
          valueToReturn = this.writer;
        }
        break;
      case 4:
        if (this.price == null) {
          isNull = true;
        } else {
          valueToReturn = this.price
        }
        break;
    }
  }else{
    isNull=true;
  }
  if (isNull) {
    return "Value not Defined";
  } else {
    return valueToReturn;
  }

  }

}
