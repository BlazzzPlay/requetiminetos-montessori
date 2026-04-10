'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Home, Gamepad2, Layers, User, BarChart3, Settings, Bell, Menu, X,
  Users, BellRing, Calendar, Link as LinkIcon, Search, ChevronDown
} from 'lucide-react'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Gamepad2, label: 'Recomendaciones', href: '/recomendaciones' },
  { icon: Layers, label: 'Etapas', href: '/etapas' },
  { icon: User, label: 'Perfil', href: '/perfil' },
  { icon: BarChart3, label: 'Estadísticas', href: '/estadisticas' },
  { icon: Settings, label: 'Configuración', href: '/configuracion' },
]

const tabs = [
  { id: 'usuarios', label: 'Usuarios', icon: Users },
  { id: 'notificaciones', label: 'Notificaciones', icon: BellRing },
  { id: 'calendario', label: 'Calendario', icon: Calendar },
  { id: 'integraciones', label: 'Integraciones', icon: LinkIcon },
]

const users = [
  { name: 'Admin', role: 'Administrador', email: 'admin@montessori.cl', initial: 'A', color: 'bg-primary' },
  { name: 'María García', role: 'Especialista', email: 'maria.garcia@montessori.cl', initial: 'M', color: 'bg-secondary' },
  { name: 'Carlos López', role: 'Terapeuta', email: 'carlos.lopez@montessori.cl', initial: 'C', color: 'bg-accent' },
]

const integrations = [
  { name: 'Educare/HIS', description: 'Sistema de información de salud', status: 'connected' },
  { name: 'Google Calendar', description: 'Sincronización de calendario y citas', status: 'connected' },
  { name: 'PDF Export', description: 'Exportar reportes a formato PDF', status: 'available' },
]

export default function Configuracion() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentPage, setCurrentPage] = useState('/configuracion')
  const [activeTab, setActiveTab] = useState('usuarios')

  const [emailNotif, setEmailNotif] = useState(true)
  const [pushNotif, setPushNotif] = useState(false)
  const [weeklyDigest, setWeeklyDigest] = useState(true)

  const [syncFrequency, setSyncFrequency] = useState('cada-hora')

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 bg-primary/80">
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
              onClick={() => setCurrentPage(item.href)}
              className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors ${
                currentPage === item.href
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
            <h1 className="text-xl font-semibold text-foreground">Configuración</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 border border-border rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 bg-background overflow-auto">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Usuarios Tab */}
          {activeTab === 'usuarios' && (
            <div className="bg-surface rounded-xl border border-border shadow-sm">
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h2 className="text-lg font-semibold">Gestión de Usuarios</h2>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition text-sm">
                  Agregar Usuario
                </button>
              </div>
              <div className="divide-y divide-border">
                {users.map((user, idx) => (
                  <div key={idx} className="flex items-center justify-between p-5 hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 ${user.color} rounded-full flex items-center justify-center text-white font-medium`}>
                        {user.initial}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.role === 'Administrador'
                          ? 'bg-primary/10 text-primary'
                          : user.role === 'Especialista'
                          ? 'bg-secondary/10 text-secondary'
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {user.role}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <ChevronDown size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notificaciones Tab */}
          {activeTab === 'notificaciones' && (
            <div className="bg-surface rounded-xl border border-border shadow-sm">
              <div className="p-5 border-b border-border">
                <h2 className="text-lg font-semibold">Preferencias de Notificación</h2>
                <p className="text-sm text-gray-500 mt-1">Configura cómo y cuándo recibir notificaciones</p>
              </div>
              <div className="divide-y divide-border">
                {/* Email Notifications */}
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-medium text-foreground">Notificaciones por Email</p>
                    <p className="text-sm text-gray-500">Recibir alertas de actividad por correo electrónico</p>
                  </div>
                  <button
                    onClick={() => setEmailNotif(!emailNotif)}
                    className={`w-12 h-7 rounded-full transition-colors relative ${emailNotif ? 'bg-secondary' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${emailNotif ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>

                {/* Push Notifications */}
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-medium text-foreground">Notificaciones Push</p>
                    <p className="text-sm text-gray-500">Recibir notificaciones en tiempo real en el navegador</p>
                  </div>
                  <button
                    onClick={() => setPushNotif(!pushNotif)}
                    className={`w-12 h-7 rounded-full transition-colors relative ${pushNotif ? 'bg-secondary' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${pushNotif ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>

                {/* Weekly Digest */}
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-medium text-foreground">Resumen Semanal</p>
                    <p className="text-sm text-gray-500">Recibir un resumen de actividad cada semana</p>
                  </div>
                  <button
                    onClick={() => setWeeklyDigest(!weeklyDigest)}
                    className={`w-12 h-7 rounded-full transition-colors relative ${weeklyDigest ? 'bg-secondary' : 'bg-gray-300'}`}
                  >
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${weeklyDigest ? 'left-6' : 'left-1'}`} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Calendario Tab */}
          {activeTab === 'calendario' && (
            <div className="space-y-6">
              {/* Google Calendar Card */}
              <div className="bg-surface rounded-xl border border-border shadow-sm p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Calendar size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Google Calendar</p>
                      <p className="text-sm text-gray-500">Sincronización de citas y eventos</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Conectado
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Tu cuenta de Google Calendar está vinculada y sincronizando correctamente.
                </p>
                <button className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-gray-50 transition">
                  Desconectar
                </button>
              </div>

              {/* Sync Frequency */}
              <div className="bg-surface rounded-xl border border-border shadow-sm p-5">
                <h3 className="font-medium text-foreground mb-4">Frecuencia de Sincronización</h3>
                <div className="flex flex-wrap gap-3">
                  {['en-vivo', 'cada-hora', 'cada-6h', 'diario'].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setSyncFrequency(freq)}
                      className={`px-4 py-2 rounded-lg text-sm border transition ${
                        syncFrequency === freq
                          ? 'bg-primary text-white border-primary'
                          : 'border-border hover:bg-gray-50'
                      }`}
                    >
                      {freq === 'en-vivo' ? 'En vivo' :
                       freq === 'cada-hora' ? 'Cada hora' :
                       freq === 'cada-6h' ? 'Cada 6 horas' : 'Diario'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Integraciones Tab */}
          {activeTab === 'integraciones' && (
            <div className="bg-surface rounded-xl border border-border shadow-sm">
              <div className="p-5 border-b border-border">
                <h2 className="text-lg font-semibold">Integraciones Disponibles</h2>
                <p className="text-sm text-gray-500 mt-1">Conecta servicios externos para ampliar funcionalidades</p>
              </div>
              <div className="divide-y divide-border">
                {integrations.map((integration, idx) => (
                  <div key={idx} className="flex items-center justify-between p-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <LinkIcon size={20} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{integration.name}</p>
                        <p className="text-sm text-gray-500">{integration.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        integration.status === 'connected'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {integration.status === 'connected' ? 'Conectado' : 'Disponible'}
                      </span>
                      <button className={`px-4 py-2 rounded-lg text-sm transition ${
                        integration.status === 'connected'
                          ? 'border border-border hover:bg-gray-50'
                          : 'bg-primary text-white hover:bg-primary/90'
                      }`}>
                        {integration.status === 'connected' ? 'Configurar' : 'Conectar'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}