'use client'

import { useState } from 'react'
import { 
  Home, Gamepad2, Layers, User, BarChart3, Settings, Bell, 
  Search, ChevronDown, LogOut, Menu, X
} from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Gamepad2, label: 'Recomendaciones', href: '/recomendaciones' },
  { icon: Layers, label: 'Etapas', href: '/etapas' },
  { icon: User, label: 'Perfil', href: '/perfil' },
  { icon: BarChart3, label: 'Estadísticas', href: '/estadisticas' },
  { icon: Settings, label: 'Configuración', href: '/configuracion' },
]

const kpiData = [
  { label: 'Juegos Activos', value: '24', icon: Gamepad2, color: 'bg-blue-500' },
  { label: 'Recomendaciones Pendientes', value: '12', icon: Bell, color: 'bg-yellow-500' },
  { label: 'Tasa de Aprobación', value: '87%', icon: BarChart3, color: 'bg-green-500' },
  { label: 'Tiempo Medio', value: '3.2 días', icon: Home, color: 'bg-purple-500' },
]

const recentActivity = [
  { name: 'María García', action: 'Aprobó recomendación de Torre Rosa', time: 'Hace 2h' },
  { name: 'Carlos López', action: 'Agregó nuevo juego a Etapa 9-12m', time: 'Hace 4h' },
  { name: 'Ana Martínez', action: 'Solicitó revisión de Cesta Tesoros', time: 'Hace 1d' },
]

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentPage, setCurrentPage] = useState('/')

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
            <a
              key={item.href}
              href={item.href}
              onClick={() => setCurrentPage(item.href)}
              className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                currentPage === item.href 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon size={20} className="mr-3" />
              {item.label}
            </a>
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
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar juegos, etapas, niños..."
                className="pl-10 pr-4 py-2 border border-border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
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

        {/* Dashboard Content */}
        <main className="flex-1 p-6 bg-background overflow-auto">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 mb-6 text-white">
            <h1 className="text-2xl font-bold mb-2 font-[family-name:var(--font-display)]">
              ¡Bienvenido al Sistema de Recomendaciones! 👋
            </h1>
            <p className="text-white/80">
              Gestiona y visualiza recomendaciones de juegos Montessori de forma intuitiva y colaborativa.
            </p>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {kpiData.map((kpi, idx) => (
              <div key={idx} className="bg-surface rounded-xl p-5 border border-border shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{kpi.label}</p>
                    <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                  </div>
                  <div className={`${kpi.color} p-3 rounded-lg`}>
                    <kpi.icon size={24} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-surface rounded-xl p-5 border border-border shadow-sm mb-6">
            <h2 className="text-lg font-semibold mb-4">Acciones Rápidas</h2>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition flex items-center gap-2">
                <Gamepad2 size={18} />
                Nueva Recomendación
              </button>
              <button className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-light transition flex items-center gap-2">
                <User size={18} />
                Agregar Niño
              </button>
              <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-light transition flex items-center gap-2">
                <Layers size={18} />
                Ver Etapas
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-surface rounded-xl p-5 border border-border shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Actividad Reciente</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium">
                    {activity.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.name}</p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}