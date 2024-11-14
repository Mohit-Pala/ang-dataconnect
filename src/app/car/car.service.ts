import { Injectable } from '@angular/core';
import { Car } from '../models/carModel';

// list car by id
import { listCarById, ListCarByIdData } from '../../../dataconnect-generated/js/default-connector';
// list all cars

// add new car

// update car

// delete car


@Injectable({
  providedIn: 'root'
})


export class CarService {
  
  handleGetCarById = async (
    carID: string
  ): Promise<ListCarByIdData['car'] | null> => {
    try {
      const response = await listCarById({ id: carID })
      if (response.data.car) {
        return response.data.car
      }
      return null
    } catch (error) {
      console.error('Error fetching car by ID:', error)
      return null
    }
  }
}
