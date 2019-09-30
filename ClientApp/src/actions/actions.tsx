﻿import { IRegStoreState, IFamily } from "../store/RegStoreState";
import { ThunkDispatch } from "redux-thunk";

export enum FamilyActionsEnum {
  GetFamily = "GET_FAMILY",
  AddFamily = "ADD_FAMILY",
}

export interface GetFamilyActionType {
  type: FamilyActionsEnum,
  payload: any
}

export interface AddFamilyActionType {
  type: FamilyActionsEnum,
  payload: any
}

export type FamilyActionType = GetFamilyActionType | AddFamilyActionType;

export function GetFamily(family: IFamily): GetFamilyActionType {
  return {
    type: FamilyActionsEnum.GetFamily,
    payload: family
  };
}

export function AddFamily(): AddFamilyActionType {
  return {
    type: FamilyActionsEnum.AddFamily,
    payload: null
  };
}

export function GetFamilyData() {
  return async (dispatch: ThunkDispatch<IRegStoreState, {}, FamilyActionType>) => {
    var resp = await fetch('/api/families/1');

    var json = await resp.json() as IFamily;
    dispatch(GetFamily(json));
  }
}
