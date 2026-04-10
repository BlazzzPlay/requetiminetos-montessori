import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL!

const prisma = new PrismaClient({
  adapter: new PrismaPg(connectionString),
})

async function main() {
  // Crear usuario administrador
  await prisma.user.upsert({
    where: { email: 'admin@montessori.cl' },
    update: {},
    create: {
      email: 'admin@montessori.cl',
      name: 'Administrador',
      password: 'admin123',
      role: 'ADMINISTRADOR',
    },
  })

  // Crear etapas Montessori
  const etapas = [
    { id: 1, nombre: 'Etapa 0-3 meses', rangoEdad: '0-3 meses', descripcion: 'Desarrollo sensorial inicial', orden: 1, color: '#E8F5E9' },
    { id: 2, nombre: 'Etapa 3-6 meses', rangoEdad: '3-6 meses', descripcion: 'Exploración motriz', orden: 2, color: '#E3F2FD' },
    { id: 3, nombre: 'Etapa 6-9 meses', rangoEdad: '6-9 meses', descripcion: 'Coordinación ojo-mano', orden: 3, color: '#FFF3E0' },
    { id: 4, nombre: 'Etapa 9-12 meses', rangoEdad: '9-12 meses', descripcion: 'Movilidad y exploración', orden: 4, color: '#F3E5F5' },
    { id: 5, nombre: 'Etapa 12-18 meses', rangoEdad: '12-18 meses', descripcion: 'Primeros pasos y lenguaje', orden: 5, color: '#E0F7FA' },
    { id: 6, nombre: 'Etapa 18-24 meses', rangoEdad: '18-24 meses', descripcion: 'Independencia y autonomía', orden: 6, color: '#FCE4EC' },
    { id: 7, nombre: 'Etapa 2-2.5 años', rangoEdad: '2-2.5 años', descripcion: 'Orden y secuencias', orden: 7, color: '#E8EAF6' },
    { id: 8, nombre: 'Etapa 2.5-3 años', rangoEdad: '2.5-3 años', descripcion: 'Vida práctica avanzada', orden: 8, color: '#FFF8E1' },
    { id: 9, nombre: 'Etapa 3-3.5 años', rangoEdad: '3-3.5 años', descripcion: 'Sensorial refinado', orden: 9, color: '#E0F2F1' },
    { id: 10, nombre: 'Etapa 3.5-4 años', rangoEdad: '3.5-4 años', descripcion: 'Lenguaje expandido', orden: 10, color: '#FBE9E7' },
    { id: 11, nombre: 'Etapa 4-4.5 años', rangoEdad: '4-4.5 años', descripcion: 'Matemáticas concreto', orden: 11, color: '#F1F8E9' },
    { id: 12, nombre: 'Etapa 4.5-5 años', rangoEdad: '4.5-5 años', descripcion: 'Escritura creativa', orden: 12, color: '#E8F5E9' },
    { id: 13, nombre: 'Etapa 5-5.5 años', rangoEdad: '5-5.5 años', descripcion: 'Lectura comprensiva', orden: 13, color: '#E3F2FD' },
    { id: 14, nombre: 'Etapa 5.5-6 años', rangoEdad: '5.5-6 años', descripcion: 'Matemáticas avanzada', orden: 14, color: '#FFF3E0' },
    { id: 15, nombre: 'Etapa 6+ años', rangoEdad: '6+ años', descripcion: 'Integración cultural', orden: 15, color: '#F3E5F5' },
    { id: 16, nombre: 'Etapa Avanzada', rangoEdad: '6+ años avanzado', descripcion: 'Proyectos y colaboración', orden: 16, color: '#E0F7FA' },
  ]

  for (const etapa of etapas) {
    await prisma.etapa.upsert({
      where: { id: etapa.id },
      update: etapa,
      create: etapa,
    })
  }

  // Crear juegos de ejemplo
  const juegos = [
    { nombre: 'Mobile Munari', descripcion: 'Móvil de contraste visual para estimulación', materiales: ['Esferas pintadas', 'Varillas', 'Hilo'], objetivos: ['Estimulación visual', 'Concentración'], presentacion: 'Colgar a 30cm sobre la cuna', variaciones: ['Cambiar colores', 'Mover posición'], etapaId: 1, categoria: 'Sensorial' },
    { nombre: 'Pañuelos de Colores', descripcion: 'Tela ligera para seguimiento visual', materiales: ['Pañuelos de seda'], objetivos: ['Seguimiento visual', 'Coordinación'], presentacion: 'Mover lentamente frente al bebé', variaciones: ['Diferentes velocidades', 'Jugar al cu-cu'], etapaId: 2, categoria: 'Sensorial' },
    { nombre: 'Cesta de Tesoros', descripcion: 'Objetos variados para exploración táctil', materiales: ['Cesta', 'Objetos naturales variados'], objetivos: ['Exploración táctil', 'Desarrollo sensorial'], presentacion: 'Ofrecer la cesta al bebé sentado', variaciones: ['Cambiar objetos', 'Texturas diferentes'], etapaId: 3, categoria: 'Sensorial' },
    { nombre: 'Caja con Objetos', descripcion: 'Caja con aberturas para introducir formas', materiales: ['Caja de madera', 'Objetos de diferentes formas'], objetivos: ['Coordinación', 'Causa-efecto'], presentacion: 'Demostrar cómo introducir objetos', variaciones: ['Diferentes tamaños', 'Formas variadas'], etapaId: 4, categoria: 'Motriz' },
    { nombre: 'Andador de Empujar', descripcion: 'Carro para practicar primeros pasos', materiales: ['Carro de madera con ruedas'], objetivos: ['Marcha', 'Equilibrio', 'Confianza'], presentacion: 'Ofrecer el andador al niño de pie', variaciones: ['Diferentes superficies', 'Agregar peso'], etapaId: 5, categoria: 'Motriz' },
    { nombre: 'Encajables de Formas', descripcion: 'Figuras geométricas para encajar', materiales: ['Tablero', 'Formas de madera'], objetivos: ['Formas', 'Resolución problemas'], presentacion: 'Mostrar una forma a la vez', variaciones: ['Más formas', 'Ciegas'], etapaId: 6, categoria: 'Cognitivo' },
    { nombre: 'Clasificación por Color', descripcion: 'Objetos para clasificar por color', materiales: ['Cuencos', 'Objetos de colores'], objetivos: ['Clasificación', 'Colores'], presentacion: 'Demostrar separar por color', variaciones: ['Más colores', 'Mezclar categorías'], etapaId: 7, categoria: 'Cognitivo' },
    { nombre: 'Vidrio para Verter', descripcion: 'Juego de verter agua', materiales: ['Jarra', 'Vaso', 'Bandeja'], objetivos: ['Vida práctica', 'Coordinación'], presentacion: 'Demostrar verter lentamente', variaciones: ['Diferentes líquidos', 'Más recipientes'], etapaId: 8, categoria: 'Vida Práctica' },
    { nombre: 'Torre Rosa', descripcion: 'Cubos degradados para apilar', materiales: ['10 cubos de madera rosa'], objetivos: ['Tamaño', 'Concentración'], presentacion: 'Traer cubos uno a uno', variaciones: ['Bajar', 'Apagar luces', 'Vendar ojos'], etapaId: 9, categoria: 'Sensorial' },
    { nombre: 'Alfabeto Móvil', descripcion: 'Letras de madera para formar palabras', materiales: ['Letras móviles', 'Tablero'], objetivos: ['Lectura', 'Escritura'], presentacion: 'Introducir sonidos primero', variaciones: ['Palabras cortas', 'Frases'], etapaId: 10, categoria: 'Lenguaje' },
    { nombre: 'Barras Numéricas', descripcion: 'Barras para concepto de cantidad', materiales: ['Barras rojas y azules'], objetivos: ['Números', 'Cantidad'], presentacion: 'Contar cada barra', variaciones: ['Tarjetas numéricas', 'Combinar'], etapaId: 11, categoria: 'Matemáticas' },
    { nombre: 'Caja de Arena', descripcion: 'Trazado de letras en arena', materiales: ['Caja', 'Arena fina'], objetivos: ['Escritura', 'Letras'], presentacion: 'Trazar letra mientras se nombra', variaciones: ['Mayúsculas', 'Minúsculas', 'Palabras'], etapaId: 12, categoria: 'Lenguaje' },
    { nombre: 'Banco de Palabras', descripcion: 'Lectura con objetos', materiales: ['Objetos', 'Tarjetas con palabras'], objetivos: ['Lectura', 'Vocabulario'], presentacion: 'Leer y emparejar', variaciones: ['Frases simples', 'Historias'], etapaId: 13, categoria: 'Lenguaje' },
    { nombre: 'Tablero de Sumas', descripcion: 'Material concreto para sumar', materiales: ['Tablero', 'Fichas'], objetivos: ['Suma', 'Matemáticas'], presentacion: 'Problemas concretos primero', variaciones: ['Sumas llevando', 'Restas'], etapaId: 14, categoria: 'Matemáticas' },
    { nombre: 'Mapas del Mundo', descripcion: 'Puzzle de continentes', materiales: ['Mapa puzzle', 'Control de error'], objetivos: ['Geografía', 'Cultura'], presentacion: 'Un continente a la vez', variaciones: ['Países', 'Capitales'], etapaId: 15, categoria: 'Cultural' },
    { nombre: 'Línea del Tiempo', descripcion: 'Proyecto de historia personal', materiales: ['Rollo de papel', 'Marcadores'], objetivos: ['Historia', 'Proyecto'], presentacion: 'Comenzar con eventos personales', variaciones: ['Historia familiar', 'Comunidad'], etapaId: 16, categoria: 'Cultural' },
  ]

  for (let i = 0; i < juegos.length; i++) {
    const juego = juegos[i]
    await prisma.juego.create({
      data: {
        nombre: juego.nombre,
        descripcion: juego.descripcion,
        materiales: juego.materiales,
        objetivos: juego.objetivos,
        presentacion: juego.presentacion,
        variaciones: juego.variaciones,
        etapaId: juego.etapaId,
        categoria: juego.categoria,
      },
    })
  }

  // Crear niños de ejemplo
  const ninos = [
    { nombre: 'Mateo', apellido: 'González', fechaNacimiento: new Date('2024-06-15') },
    { nombre: 'Sofía', apellido: 'Martínez', fechaNacimiento: new Date('2024-03-20') },
    { nombre: 'Lucas', apellido: 'Rodríguez', fechaNacimiento: new Date('2023-12-10') },
    { nombre: 'Valentina', apellido: 'López', fechaNacimiento: new Date('2024-09-05') },
    { nombre: 'Diego', apellido: 'Fernández', fechaNacimiento: new Date('2024-01-28') },
  ]

  for (const nino of ninos) {
    await prisma.nino.create({ data: nino })
  }

  console.log('Seed completado exitosamente')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })