import { Time } from "@angular/common";

export interface Concierto {
  id?: number,
  nombre: string,
  fecha: string,
  hora: string,
  imagen?: string,
  entradas_vendidas: number,
  lugar: string,
  categoria: string,
  precio: number
}
