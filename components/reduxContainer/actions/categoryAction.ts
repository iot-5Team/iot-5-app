import { CATEGORY_CHANGE, CategoryAction } from "../types";

export function categoryChangeAction(click:string):CategoryAction{
  return {
    type:CATEGORY_CHANGE,
    payload:click
  }
}
