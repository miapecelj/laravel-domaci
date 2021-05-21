import { Category } from "./category.model";

export interface Book{
  id:number;
  name:string;
  writer:string;
  url:string;
  category_id:number;
  category:Category;
}
