'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Home, Gamepad2, Layers, User, BarChart3, Settings, Bell, 
  Menu, X, Calendar, Clock, MapPin
} from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Gamepad2, label: 'Recomendaciones', href: '/recomendaciones' },
  { icon: Layers, label: 'Etapas', href: '/etapas' },
  { icon: User, label: 'Perfil', href: '/perfil' },
  { icon: BarChart3, label: 'Estadísticas', href: '/estadisticas' },
  { icon: Settings, label: 'Configuración', href: '/configuracion' },
]

const timelineStages = [
  { label: '0-3m', completed: true },
  { label: '3-6m', completed: true },
  { label: '6-9m', completed: true },
  { label: '9-12m', completed: true },
  { label: '12-18m', completed: true },
  { label: '18-24m', completed: true },
  { label: '2-2.5a', completed: false, current: true },
  { label: '2.5-3a', completed: false },
  { label: '3-3.5a', completed: false },
  { label: '3.5-4a', completed: false },
]

const recentRecommendations = [
  { name: 'Clasificación por Color', status: 'Pendiente', date: '10 Abr 2026', statusColor: 'bg-warning text-white' },
  { name: 'Cesta de Tesoros', status: 'Aprobada', date: '05 Abr 2026', statusColor: 'bg-success text-white' },
  { name: 'Vidrio para Verter', status: 'Aprobada', date: '28 Mar 2026', statusColor: 'bg-success text-white' },
  { name: 'Andador de Empujar', status: 'Rechazada', date: '20 Mar 2026', statusColor: 'bg-error text-white' },
]

export default function Perfil() {
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
                item.href === '/perfil'
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
            <h1 className="text-xl font-semibold text-foreground font-[family-name:var(--font-display)]">Perfil del Estudiante</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-5 h-5 bg-error text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
          </div>
        </header>

        {/* Profile Content */}
        <main className="flex-1 p-6 bg-background overflow-auto">
          {/* Profile Card */}
          <div className="bg-surface rounded-2xl p-6 border border-border shadow-sm mb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="w-28 h-28 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                M
              </div>
              
              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-foreground font-[family-name:var(--font-display)] mb-2">
                  Mateo González
                </h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>15 Jun 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>~2 años</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Etapa 2-2.5 años</span>
                  </div>
                </div>
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-sm text-foreground">
                  <strong>Nota:</strong> Excelente progreso en clasificación por color. Recomendación de siguiente etapa pendiente.
                </div>
              </div>
            </div>
          </div>

          {/* Montessori Timeline */}
          <div className="bg-surface rounded-2xl p-6 border border-border shadow-sm mb-6">
            <h2 className="text-lg font-semibold mb-6 font-[family-name:var(--font-display)]">
              Línea de Tiempo de Desarrollo Montessori
            </h2>
            
            <div className="relative overflow-x-auto pb-4">
              <div className="flex items-center min-w-max">
                {timelineStages.map((stage, idx) => (
                  <div key={idx} className="flex items-center">
                    {/* Stage node */}
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium border-2 ${
                        stage.current
                          ? 'bg-accent border-accent text-white shadow-lg shadow-accent/30 scale-110'
                          : stage.completed
                            ? 'bg-secondary border-secondary text-white'
                            : 'bg-white border-border text-gray-400'
                      }`}>
                        {stage.completed ? '✓' : idx + 1}
                      </div>
                      <span className={`mt-2 text-xs font-medium whitespace-nowrap ${
                        stage.current ? 'text-accent font-bold' : stage.completed ? 'text-secondary' : 'text-gray-400'
                      }`}>
                        {stage.label}
                      </span>
                    </div>
                    
                    {/* Connector line */}
                    {idx < timelineStages.length - 1 && (
                      <div className={`w-8 h-0.5 mx-1 ${
                        stage.completed ? 'bg-secondary' : 'bg-border'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <span className="text-gray-600">Completado</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-gray-600">Etapa Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-border" />
                <span className="text-gray-600">Pendiente</span>
              </div>
            </div>
          </div>

          {/* Recent Recommendations */}
          <div className="bg-surface rounded-2xl p-6 border border-border shadow-sm">
            <h2 className="text-lg font-semibold mb-4 font-[family-name:var(--font-display)]">
              Historial de Recomendaciones
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Actividad</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Estado</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {recentRecommendations.map((rec, idx) => (
                    <tr key={idx} className="border-b border-border last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Gamepad2 size={16} className="text-primary" />
                          </div>
                          <span className="font-medium text-foreground">{rec.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${rec.statusColor}`}>
                          {rec.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-500">{rec.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
