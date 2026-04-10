'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Home, Gamepad2, Layers, User, BarChart3, Settings, Bell, 
  Menu, X, TrendingUp, Users, CheckCircle, ClipboardList, Clock
} from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Gamepad2, label: 'Recomendaciones', href: '/recomendaciones' },
  { icon: Layers, label: 'Etapas', href: '/etapas' },
  { icon: User, label: 'Perfil', href: '/perfil' },
  { icon: BarChart3, label: 'Estadísticas', href: '/estadisticas' },
  { icon: Settings, label: 'Configuración', href: '/configuracion' },
]

const statCards = [
  {
    title: 'Recomendaciones este mes',
    value: '45',
    change: '+12% vs mes anterior',
    icon: ClipboardList,
    iconBg: 'bg-[#1E3A5F]',
  },
  {
    title: 'Tasa de aceptación',
    value: '87%',
    change: '+5% vs mes anterior',
    icon: CheckCircle,
    iconBg: 'bg-[#2D8B7A]',
  },
  {
    title: 'Niños activos',
    value: '28',
    change: '+3 nuevos este mes',
    icon: Users,
    iconBg: 'bg-[#D4A843]',
  },
  {
    title: 'Juegos más usados',
    value: '16',
    change: 'Torre Rosa: más popular',
    icon: Gamepad2,
    iconBg: 'bg-[#1E3A5F]',
  },
  {
    title: 'Tiempo medio respuesta',
    value: '3.2 días',
    change: '-0.5 días vs mes anterior',
    icon: Clock,
    iconBg: 'bg-[#2D8B7A]',
  },
  {
    title: 'Etapas cubiertas',
    value: '12/16',
    change: '75% cobertura',
    icon: Layers,
    iconBg: 'bg-[#D4A843]',
  },
]

export default function Estadisticas() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1E3A5F] transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 bg-[#162d4a]">
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
                item.href === '/estadisticas'
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
        <header className="h-16 bg-white border-b border-[#E0D8CC] flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold text-[#1E3A5F]">Estadísticas</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-[#1E3A5F] rounded-full flex items-center justify-center text-white font-medium">A</div>
            </button>
          </div>
        </header>

        {/* Statistics Content */}
        <main className="flex-1 p-6 bg-[#F5F0E8] overflow-auto">
          {/* Page Title */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Panel de Estadísticas</h2>
            <p className="text-gray-600">Visualiza el rendimiento del sistema de recomendaciones Montessori.</p>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {statCards.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-[#E0D8CC] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-[#1E3A5F] mb-2">{stat.value}</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp size={14} className={
                        stat.change.startsWith('+') || stat.change.startsWith('-0') 
                          ? 'text-[#2D8B7A]' 
                          : 'text-gray-400'
                      } />
                      <span className={`text-sm ${
                        stat.change.startsWith('+') || stat.change.startsWith('-0')
                          ? 'text-[#2D8B7A]'
                          : 'text-gray-500'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`${stat.iconBg} p-3 rounded-lg`}>
                    <stat.icon size={24} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white rounded-xl border border-[#E0D8CC] shadow-sm overflow-hidden">
            <div className="p-5 border-b border-[#E0D8CC]">
              <h3 className="text-lg font-semibold text-[#1E3A5F]">Tendencia de Recomendaciones</h3>
              <p className="text-sm text-gray-500">Evolución mensual del sistema</p>
            </div>
            <div className="h-80 bg-gradient-to-br from-[#1E3A5F]/5 via-[#2D8B7A]/10 to-[#D4A843]/5 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 size={64} className="mx-auto text-[#1E3A5F]/30 mb-4" />
                <p className="text-lg font-medium text-[#1E3A5F]/60">Chart.js - Recomendaciones por Mes</p>
                <p className="text-sm text-gray-400 mt-1">Área de gráfico interactiva</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}