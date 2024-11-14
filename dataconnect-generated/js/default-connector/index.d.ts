import { ConnectorConfig, DataConnect, MutationRef, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;



export interface Car_Key {
  id: UUIDString;
  __typename?: 'Car_Key';
}

export interface CreateCarData {
  car_insert: Car_Key;
}

export interface CreateCarVariables {
  id: UUIDString;
  make: string;
  model: string;
  releaseYear?: number | null;
  color: string;
  electric?: boolean | null;
}

export interface DeleteCarData {
  car_delete?: Car_Key | null;
}

export interface DeleteCarVariables {
  id?: UUIDString | null;
}

export interface UpdateCarData {
  car_update?: Car_Key | null;
}

export interface UpdateCarVariables {
  id: UUIDString;
  make: string;
  model: string;
  releaseYear?: number | null;
  color: string;
  electric?: boolean | null;
}



/* Allow users to create refs without passing in DataConnect */
export function createCarRef(vars: CreateCarVariables): MutationRef<CreateCarData, CreateCarVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createCarRef(dc: DataConnect, vars: CreateCarVariables): MutationRef<CreateCarData,CreateCarVariables>;

export function createCar(vars: CreateCarVariables): MutationPromise<CreateCarData, CreateCarVariables>;
export function createCar(dc: DataConnect, vars: CreateCarVariables): MutationPromise<CreateCarData,CreateCarVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateCarRef(vars: UpdateCarVariables): MutationRef<UpdateCarData, UpdateCarVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateCarRef(dc: DataConnect, vars: UpdateCarVariables): MutationRef<UpdateCarData,UpdateCarVariables>;

export function updateCar(vars: UpdateCarVariables): MutationPromise<UpdateCarData, UpdateCarVariables>;
export function updateCar(dc: DataConnect, vars: UpdateCarVariables): MutationPromise<UpdateCarData,UpdateCarVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteCarRef(vars?: DeleteCarVariables): MutationRef<DeleteCarData, DeleteCarVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteCarRef(dc: DataConnect, vars?: DeleteCarVariables): MutationRef<DeleteCarData,DeleteCarVariables>;

export function deleteCar(vars?: DeleteCarVariables): MutationPromise<DeleteCarData, DeleteCarVariables>;
export function deleteCar(dc: DataConnect, vars?: DeleteCarVariables): MutationPromise<DeleteCarData,DeleteCarVariables>;


