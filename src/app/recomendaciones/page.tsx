'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Home, Gamepad2, Layers, User, BarChart3, Settings, Bell, Search, ChevronDown, Menu, X, Eye, Edit, Filter } from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Gamepad2, label: 'Recomendaciones', href: '/recomendaciones' },
  { icon: Layers, label: 'Etapas', href: '/etapas' },
  { icon: User, label: 'Perfil', href: '/perfil' },
  { icon: BarChart3, label: 'Estadísticas', href: '/estadisticas' },
  { icon: Settings, label: 'Configuración', href: '/configuracion' },
]

const recomendaciones = [
  { id: 1, nino: 'Mateo González', edad: '2 años', etapa: 'Etapa 2-2.5 años', juego: 'Clasificación por Color', estado: 'PENDIENTE', fecha: '10 Abr 2026', inicial: 'M', color: 'bg-green-500' },
  { id: 2, nino: 'Sofía Martínez', edad: '1.5 años', etapa: 'Etapa 12-18 meses', juego: 'Andador de Empujar', estado: 'EN_REVISION', fecha: '09 Abr 2026', inicial: 'S', color: 'bg-amber-500' },
  { id: 3, nino: 'Lucas Rodríguez', edad: '2.5 años', etapa: 'Etapa 2.5-3 años', juego: 'Vidrio para Verter', estado: 'APROBADA', fecha: '08 Abr 2026', inicial: 'L', color: 'bg-blue-500' },
  { id: 4, nino: 'Valentina López', edad: '7 meses', etapa: 'Etapa 6-9 meses', juego: 'Caja con Objetos', estado: 'RECHAZADA', fecha: '07 Abr 2026', inicial: 'V', color: 'bg-red-500' },
  { id: 5, nino: 'Diego Fernández', edad: '1 año', etapa: 'Etapa 9-12 meses', juego: 'Encajables de Formas', estado: 'PENDIENTE', fecha: '06 Abr 2026', inicial: 'D', color: 'bg-purple-500' },
]

const getBadgeClass = (estado: string) => {
  switch (estado) {
    case 'PENDIENTE': return 'bg-yellow-100 text-yellow-800'
    case 'EN_REVISION': return 'bg-blue-100 text-blue-800'
    case 'APROBADA': return 'bg-green-100 text-green-800'
    case 'RECHAZADA': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const getEstadoLabel = (estado: string) => {
  switch (estado) {
    case 'PENDIENTE': return 'Pendiente'
    case 'EN_REVISION': return 'En Revisión'
    case 'APROBADA': return 'Aprobada'
    case 'RECHAZADA': return 'Rechazada'
    default: return estado
  }
}

export default function RecomendacionesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [filtroEtapa, setFiltroEtapa] = useState('todas')
  const [filtroEstado, setFiltroEstado] = useState('todos')

  const filtered = recomendaciones.filter(r => {
    if (filtroEtapa !== 'todas' && !r.etapa.includes(filtroEtapa)) return false
    if (filtroEstado !== 'todos' && r.estado !== filtroEstado) return false
    return true
  })

  return (
    <div className="min-h-screen flex">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 bg-primary-light">
          <span className="text-white text-xl font-bold">Montessori</span>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white"><X size={24} /></button>
        </div>
        <nav className="mt-8 px-4">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${item.href === '/recomendaciones' ? 'bg-white/20 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
              <item.icon size={20} className="mr-3" />{item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-surface border-b border-border flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden"><Menu size={24} /></button>
            <h1 className="text-xl font-semibold">Recomendaciones</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell size={20} /><span className="absolute top-0 right-0 w-5 h-5 bg-error text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 bg-background overflow-auto">
          {/* Filtros */}
          <div className="bg-surface rounded-xl p-4 border border-border shadow-sm mb-6 flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <span className="text-sm font-medium">Filtros:</span>
            </div>
            <select value={filtroEtapa} onChange={(e) => setFiltroEtapa(e.target.value)} className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option value="todas">Todas las etapas</option>
              <option value="0-3">0-3 meses</option>
              <option value="3-6">3-6 meses</option>
              <option value="6-9">6-9 meses</option>
              <option value="9-12">9-12 meses</option>
              <option value="12-18">12-18 meses</option>
            </select>
            <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)} className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option value="todos">Todos los estados</option>
              <option value="PENDIENTE">Pendiente</option>
              <option value="EN_REVISION">En Revisión</option>
              <option value="APROBADA">Aprobada</option>
              <option value="RECHAZADA">Rechazada</option>
            </select>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition text-sm">Nueva Recomendación</button>
          </div>

          {/* Tabla */}
          <div className="bg-surface rounded-xl border border-border shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">Niño</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Etapa Actual</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Juego Recomendado</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Estado</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Fecha</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((rec) => (
                  <tr key={rec.id} className="border-b border-border hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${rec.color} rounded-full flex items-center justify-center text-white text-sm font-medium`}>{rec.inicial}</div>
                        <div>
                          <div className="font-medium">{rec.nino}</div>
                          <div className="text-xs text-gray-500">{rec.edad}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{rec.etapa}</td>
                    <td className="px-4 py-3 text-sm">{rec.juego}</td>
                    <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${getBadgeClass(rec.estado)}`}>{getEstadoLabel(rec.estado)}</span></td>
                    <td className="px-4 py-3 text-sm text-gray-500">{rec.fecha}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button className="p-1.5 bg-primary text-white rounded hover:bg-primary-light"><Eye size={14} /></button>
                        <button className="p-1.5 bg-secondary text-white rounded hover:bg-secondary-light"><Edit size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}