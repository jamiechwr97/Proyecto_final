export interface User {
  id?: number,
  nombre: string,
  usuario: string,
  correo: string,
  password: string,
  fecha_nacimiento: Date,
  pais_nacimiento: string,
  imagen?: string,
  tipo_usuario: number
}
