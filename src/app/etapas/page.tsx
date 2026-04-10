'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Home, Gamepad2, Layers, User, BarChart3, Settings, Bell,
  Menu, X, ChevronDown
} from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Gamepad2, label: 'Recomendaciones', href: '/recomendaciones' },
  { icon: Layers, label: 'Etapas', href: '/etapas' },
  { icon: User, label: 'Perfil', href: '/perfil' },
  { icon: BarChart3, label: 'Estadísticas', href: '/estadisticas' },
  { icon: Settings, label: 'Configuración', href: '/configuracion' },
]

const etapas = [
  {
    nombre: 'Etapa 0-3 meses',
    badge: '0-3 meses',
    descripcion: 'Estimulación sensorial inicial',
    progreso: 85,
    cantidadJuegos: 4,
    juegos: 'Mobile Mununi • Pañuelos de Colores • Sonajeros • Espejo Blando',
  },
  {
    nombre: 'Etapa 3-6 meses',
    badge: '3-6 meses',
    descripcion: 'Exploración motriz',
    progreso: 70,
    cantidadJuegos: 5,
    juegos: 'Cesta de Tesoros • Anillos • Tejidos • Pelotas • Dientes',
  },
  {
    nombre: 'Etapa 6-9 meses',
    badge: '6-9 meses',
    descripcion: 'Coordinación ojo-mano',
    progreso: 60,
    cantidadJuegos: 6,
    juegos: 'Object Permanence Box • Stacking • Nesting • Cuerda • Puzzles',
  },
  {
    nombre: 'Etapa 9-12 meses',
    badge: '9-12 meses',
    descripcion: 'Movilidad y exploración',
    progreso: 55,
    cantidadJuegos: 7,
    juegos: 'Andador • Formas • Sonidos • Texturas • Clasificación',
  },
  {
    nombre: 'Etapa 12-18 meses',
    badge: '12-18 meses',
    descripcion: 'Primeros pasos y lenguaje',
    progreso: 40,
    cantidadJuegos: 5,
    juegos: 'Andador Empujar • Encajables • Primeras Palabras',
  },
  {
    nombre: 'Etapa 18-24 meses',
    badge: '18-24 meses',
    descripcion: 'Independencia y autonomía',
    progreso: 35,
    cantidadJuegos: 6,
    juegos: 'Vidrio Verter • Marco Broches • Limpiar Mesa',
  },
]

function getProgressColor(progreso: number) {
  if (progreso >= 75) return 'bg-green-500'
  if (progreso >= 50) return 'bg-yellow-500'
  return 'bg-red-500'
}

export default function EtapasPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 bg-primary-light">
          <span className="text-white text-xl font-bold">Montessori</span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-8 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                item.href === '/etapas'
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center px-4 py-3 text-white/70 hover:bg-white/10 rounded-lg cursor-pointer">
            <User size={20} className="mr-3" />
            <div>
              <p className="text-sm font-medium text-white">Admin</p>
              <p className="text-xs">admin@montessori.cl</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-foreground">Etapas Montessori</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-5 h-5 bg-error text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-medium">A</div>
              <ChevronDown size={16} />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-background overflow-auto">
          {/* Banner */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 mb-6 text-white">
            <h1 className="text-2xl font-bold mb-2 font-[family-name:var(--font-display)]">
              Etapas de Desarrollo Montessori 🧒
            </h1>
            <p className="text-white/80">
              Explora cada etapa del desarrollo con juegos diseñados para estimular el crecimiento integral de los niños.
            </p>
          </div>

          {/* Stage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {etapas.map((etapa, idx) => (
              <div key={idx} className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                {/* Card Header */}
                <div className="bg-primary p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{etapa.nombre}</h3>
                    <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                      {etapa.badge}
                    </span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">{etapa.descripcion}</p>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">Progreso</span>
                      <span className="text-sm font-bold text-foreground">{etapa.progreso}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(etapa.progreso)}`}
                        style={{ width: `${etapa.progreso}%` }}
                      />
                    </div>
                  </div>

                  {/* Game Count */}
                  <div className="flex items-center gap-2 mb-3">
                    <Gamepad2 size={16} className="text-secondary" />
                    <span className="text-sm font-medium text-foreground">
                      {etapa.cantidadJuegos} juegos
                    </span>
                  </div>

                  {/* Game Names */}
                  <div className="border-t border-border pt-3">
                    <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wide">Juegos incluidos:</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{etapa.juegos}</p>
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-4 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition flex items-center justify-center gap-2">
                    <Layers size={16} />
                    Ver Detalle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
