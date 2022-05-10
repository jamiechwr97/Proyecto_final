export interface Artista {
  id_artista?: number,
  nombre: string,
  fecha_nacimiento: Date,
  pais_nacimiento: string,
  lugar_nacimiento: string,
  imagen?: string,
  categoria: string
}
