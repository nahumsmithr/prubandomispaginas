<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Velora Tracker | Premium Tier</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- jsPDF & AutoTable -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js"></script>

    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        veloraDark: '#080c14',
                        veloraCard: '#0f1622',
                        veloraBorder: 'rgba(255,255,255,0.06)',
                        veloraAccent: '#3b82f6',
                        veloraGreen: '#10b981',
                        veloraSidebar: '#090d16',
                    },
                    boxShadow: {
                        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
                        'glow-green': '0 0 20px rgba(16, 185, 129, 0.2)',
                    }
                }
            }
        }
    </script>
    
    <style>
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #080c14; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 9999px; }
        ::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
        
        .glass-card { 
            background-color: #0f1622; 
            border: 1px solid rgba(255, 255, 255, 0.06); 
            backdrop-filter: blur(16px); 
        }
        .glass-panel { 
            background: rgba(15, 22, 34, 0.7); 
            border: 1px solid rgba(255, 255, 255, 0.1); 
            backdrop-filter: blur(20px); 
        }
        .text-glow { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
        .text-glow-green { text-shadow: 0 0 10px rgba(16, 185, 129, 0.5); }
        
        .fade-in { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { 
            from { opacity: 0; transform: translateY(8px); } 
            to { opacity: 1; transform: translateY(0); } 
        }
    </style>
</head>
<body class="bg-veloraDark text-gray-100 font-sans h-screen flex overflow-hidden">

    <!-- ========================================== -->
    <!-- 1. GLOBAL LOADER                           -->
    <!-- ========================================== -->
    <div id="global-loader" class="fixed inset-0 z-[200] bg-veloraDark flex flex-col items-center justify-center transition-opacity duration-500">
        <i class="fas fa-cube text-5xl text-veloraAccent animate-pulse mb-4"></i>
        <div class="text-white font-bold tracking-widest uppercase text-sm">Iniciando Sistema</div>
        <div class="text-gray-500 text-xs mt-2">Conectando a base de datos segura...</div>
    </div>

    <!-- ========================================== -->
    <!-- 2. PANTALLA DE LOGIN / REGISTRO            -->
    <!-- ========================================== -->
    <div id="auth-screen" class="fixed inset-0 z-[100] bg-veloraDark flex flex-col items-center justify-center hidden">
        <!-- Efectos de fondo -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-veloraAccent/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div class="w-full max-w-md glass-panel p-8 rounded-3xl shadow-2xl relative z-10 mx-4 border border-veloraBorder">
            <div class="text-center mb-8">
                <i class="fas fa-cube text-4xl text-veloraAccent mb-3 drop-shadow-lg"></i>
                <h1 class="text-2xl font-black text-white tracking-widest uppercase">VELORA</h1>
                <p class="text-xs text-gray-400 font-bold tracking-widest mt-1 uppercase" id="auth-subtitle">Acceso al Sistema</p>
            </div>

            <form id="auth-form" class="space-y-5" onsubmit="handleAuth(event)">
                <div id="register-fields" class="hidden space-y-5">
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Nombre Completo</label>
                        <div class="relative">
                            <i class="fas fa-user absolute left-4 top-3.5 text-gray-500"></i>
                            <input type="text" id="auth-name" class="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-veloraBorder rounded-xl text-white text-sm focus:border-veloraAccent transition font-medium" placeholder="Ej. Carlos Martínez">
                        </div>
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Usuario o Correo</label>
                    <div class="relative">
                        <i class="fas fa-envelope absolute left-4 top-3.5 text-gray-500"></i>
                        <input type="text" id="auth-email" class="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-veloraBorder rounded-xl text-white text-sm focus:border-veloraAccent transition font-medium" placeholder="tucorreo@empresa.com" required>
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Contraseña</label>
                    <div class="relative">
                        <i class="fas fa-lock absolute left-4 top-3.5 text-gray-500"></i>
                        <input type="password" id="auth-password" class="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-veloraBorder rounded-xl text-white text-sm focus:border-veloraAccent transition font-medium" placeholder="••••••••" required>
                    </div>
                </div>

                <button type="submit" id="auth-btn" class="w-full py-3 mt-4 bg-gradient-to-r from-blue-600 to-veloraAccent text-white rounded-xl font-black tracking-widest uppercase text-sm shadow-glow hover:scale-[1.02] transition-transform">
                    Ingresar
                </button>
            </form>

            <div class="mt-6 text-center">
                <button type="button" onclick="toggleAuthMode()" id="auth-toggle-btn" class="text-xs text-gray-400 hover:text-white font-bold transition">
                    ¿No tienes cuenta? <span class="text-veloraAccent">Regístrate aquí</span>
                </button>
            </div>
        </div>
    </div>

    <!-- ========================================== -->
    <!-- 3. APP CONTAINER (MAIN INTERFACE)          -->
    <!-- ========================================== -->
    
    <!-- SIDEBAR -->
    <aside id="app-sidebar" class="w-64 bg-veloraSidebar flex flex-col flex-shrink-0 z-40 border-r border-veloraBorder hidden md:flex relative h-full">
        <div class="p-6 border-b border-veloraBorder flex flex-col gap-1 relative overflow-hidden">
            <span class="text-2xl font-black tracking-wider text-white flex items-center gap-2 relative z-10">
                <i class="fas fa-cube text-veloraAccent"></i> VELORA
            </span>
            <span class="text-[10px] tracking-widest text-gray-500 font-bold uppercase relative z-10" id="sidebar-role-label">Premium Tier</span>
        </div>
        
        <nav class="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
            <button onclick="showView('dashboard')" id="nav-dashboard" class="w-full text-left px-4 py-3 flex items-center gap-4 rounded-xl text-white bg-slate-800/50 shadow-glow font-medium transition-all">
                <i class="fas fa-chart-pie w-5 text-center text-lg text-veloraAccent"></i> Dashboard
            </button>
            <button onclick="showView('leads')" id="nav-leads" class="w-full text-left px-4 py-3 flex items-center gap-4 rounded-xl hover:bg-slate-800/40 text-slate-300 font-medium transition-all">
                <i class="fas fa-filter w-5 text-center text-lg text-orange-500"></i> Leads
            </button>
            <button onclick="showView('clients')" id="nav-clients" class="w-full text-left px-4 py-3 flex items-center gap-4 rounded-xl hover:bg-slate-800/40 text-slate-300 font-medium transition-all">
                <i class="fas fa-users w-5 text-center text-lg text-veloraGreen"></i> Clientes
            </button>
            
            <div id="admin-nav-section" class="hidden pt-6 pb-2">
                <div class="px-4 text-[10px] font-black text-gray-600 uppercase tracking-widest mb-2">Administración</div>
                <button onclick="showView('admin')" id="nav-admin" class="w-full text-left px-4 py-3 flex items-center gap-4 rounded-xl hover:bg-slate-800/40 text-purple-400 font-bold transition-all">
                    <i class="fas fa-shield-alt w-5 text-center text-lg text-purple-500"></i> Admin Panel
                </button>
            </div>
        </nav>
        
        <div class="p-4 border-t border-veloraBorder bg-slate-950/40">
            <div class="flex items-center gap-3 mb-4 px-2">
                <div class="w-10 h-10 rounded-full bg-slate-800 border border-veloraBorder flex items-center justify-center text-sm font-bold text-white shadow-inner" id="user-avatar-icon">U</div>
                <div class="flex-1 overflow-hidden">
                    <p class="text-xs font-bold text-white truncate" id="user-display-name">Usuario</p>
                    <p class="text-[10px] text-gray-500 uppercase tracking-wider" id="user-display-role">Normal</p>
                </div>
                <button onclick="performLogout()" class="text-gray-500 hover:text-red-500 transition" title="Cerrar Sesión">
                    <i class="fas fa-sign-out-alt"></i>
                </button>
            </div>
            <button onclick="openContactModal()" class="w-full py-3 bg-gradient-to-r from-blue-600 to-veloraAccent hover:from-blue-700 text-white rounded-xl font-bold shadow-glow transition-all flex items-center justify-center gap-2">
                <i class="fas fa-plus-circle text-lg"></i> Crear Registro
            </button>
        </div>
    </aside>

    <!-- MOBILE NAV BTN -->
    <button onclick="toggleMobileMenu()" class="md:hidden absolute top-4 left-4 z-50 p-2.5 bg-veloraCard rounded-lg border border-veloraBorder shadow text-gray-300 hover:text-white transition">
        <i class="fas fa-bars text-lg"></i>
    </button>

    <!-- MAIN CONTENT AREA -->
    <main class="flex-1 flex flex-col h-screen overflow-hidden relative w-full bg-veloraDark hidden" id="app-main-view">
        
        <!-- HEADER SUPERIOR -->
        <header class="border-b border-veloraBorder px-8 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-10 pl-16 md:pl-8 bg-veloraSidebar/50">
            <div>
                <h2 id="topbar-title" class="text-2xl font-black text-white tracking-tight">Executive Overview</h2>
                <p id="topbar-subtitle" class="text-xs text-gray-500 font-bold uppercase tracking-wider mt-0.5">Visión unificada de llamadas</p>
            </div>
            
            <div class="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
                
                <!-- ESTADO DE CONEXIÓN FIREBASE -->
                <div id="db-status-badge" class="px-3.5 py-2 bg-slate-950/80 border border-red-500/30 text-red-500 rounded-xl flex items-center gap-2 text-xs font-bold tracking-wider transition-all shadow-sm">
                    <span class="relative flex h-2.5 w-2.5">
                        <span id="db-status-ping" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span id="db-status-dot" class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span id="db-status-text">DESCONECTADO</span>
                </div>

                <!-- MENÚ DE HERRAMIENTAS GLOBALES -->
                <div class="relative group hidden sm:block">
                    <button class="px-4 py-2 bg-veloraCard border border-veloraBorder text-gray-300 rounded-xl hover:bg-slate-800/50 flex items-center gap-2 transition text-sm font-semibold">
                        <i class="fas fa-cog text-gray-400"></i> Herramientas <i class="fas fa-chevron-down text-xs ml-1"></i>
                    </button>
                    <div class="absolute right-0 mt-2 w-64 bg-veloraCard rounded-xl shadow-2xl border border-veloraBorder opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                        
                        <label for="csv-upload" class="cursor-pointer w-full text-left px-4 py-3 hover:bg-slate-800/40 flex items-center gap-3 text-sm font-medium text-gray-300 border-b border-veloraBorder transition m-0 block">
                            <i class="fas fa-file-import text-veloraGreen w-4 text-center"></i> Importar Excel (CSV)
                        </label>
                        <input type="file" id="csv-upload" accept=".csv" onchange="importCSV(event)" class="hidden">
                        
                        <button onclick="exportCSV()" class="w-full text-left px-4 py-3 hover:bg-slate-800/40 flex items-center gap-3 text-sm font-medium text-gray-300 border-b border-veloraBorder transition">
                            <i class="fas fa-file-export text-veloraAccent w-4 text-center"></i> Exportar Datos (CSV)
                        </button>

                        <button onclick="openReportModal()" class="w-full text-left px-4 py-3 hover:bg-slate-800/40 flex items-center gap-3 text-sm font-medium text-gray-300 border-b border-veloraBorder transition">
                            <i class="fas fa-file-pdf text-orange-400 w-4 text-center"></i> Reporte General PDF
                        </button>
                        
                        <button onclick="performLogout()" class="w-full text-left px-4 py-3 hover:bg-red-500/10 hover:text-red-400 flex items-center gap-3 text-sm font-medium text-gray-400 transition">
                            <i class="fas fa-sign-out-alt w-4 text-center"></i> Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- CONTAINER VISTAS -->
        <div class="flex-1 overflow-y-auto p-4 sm:p-8 relative scroll-smooth bg-gradient-to-b from-[#080c14] to-[#04060a]" id="main-container">
            
            <!-- VISTA: DASHBOARD -->
            <div id="view-dashboard" class="fade-in space-y-6">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="glass-card rounded-2xl p-6 lg:col-span-2 flex flex-col">
                        <div class="flex justify-between items-center mb-6">
                            <div>
                                <h3 class="text-lg font-bold text-white tracking-wide">Desempeño de Llamadas</h3>
                                <p class="text-xs text-gray-400" id="dash-chart-subtitle">Últimos 7 días</p>
                            </div>
                            <div class="text-right">
                                <span class="text-xs font-bold text-gray-400 block">TOTAL SEMANAL</span>
                                <span class="text-2xl font-black text-veloraAccent text-glow" id="chart-total-count">0</span>
                            </div>
                        </div>
                        <div class="relative flex-1 min-h-[220px]">
                            <canvas id="callsChart"></canvas>
                        </div>
                    </div>
                    
                    <div class="glass-card rounded-2xl p-6 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-md font-bold text-white uppercase tracking-wider">Top Prospectos</h3>
                                <span class="text-xs font-bold text-veloraAccent cursor-pointer hover:underline" onclick="showView('leads')">Ver Todos</span>
                            </div>
                            <div class="space-y-4" id="top-leads-list">
                                <!-- Dinámico -->
                            </div>
                        </div>
                        <div class="border-t border-veloraBorder pt-4 mt-4 flex items-center justify-between text-sm">
                            <span class="text-gray-400 font-medium">Calidad de Embudo</span>
                            <span class="font-bold text-veloraGreen text-glow-green" id="funnel-ratio">0% Clientes</span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="glass-card rounded-2xl p-6 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Totales</span>
                            <h4 class="text-3xl font-black mt-1 text-white" id="stat-total">0</h4>
                        </div>
                        <div class="w-12 h-12 rounded-xl bg-slate-900 border border-veloraBorder flex items-center justify-center text-veloraAccent shadow-glow">
                            <i class="fas fa-address-book text-xl"></i>
                        </div>
                    </div>
                    <div class="glass-card rounded-2xl p-6 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Leads</span>
                            <h4 class="text-3xl font-black mt-1 text-orange-500" id="stat-leads">0</h4>
                        </div>
                        <div class="w-12 h-12 rounded-xl bg-slate-900 border border-veloraBorder flex items-center justify-center text-orange-500">
                            <i class="fas fa-filter text-xl"></i>
                        </div>
                    </div>
                    <div class="glass-card rounded-2xl p-6 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Clientes</span>
                            <h4 class="text-3xl font-black mt-1 text-veloraGreen text-glow-green" id="stat-clients">0</h4>
                        </div>
                        <div class="w-12 h-12 rounded-xl bg-slate-900 border border-veloraBorder flex items-center justify-center text-veloraGreen shadow-glow-green">
                            <i class="fas fa-users text-xl"></i>
                        </div>
                    </div>
                    <div class="glass-card rounded-2xl p-6 flex items-center justify-between">
                        <div>
                            <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Llamadas</span>
                            <h4 class="text-3xl font-black mt-1 text-purple-500" id="stat-calls">0</h4>
                        </div>
                        <div class="w-12 h-12 rounded-xl bg-slate-900 border border-veloraBorder flex items-center justify-center text-purple-500">
                            <i class="fas fa-phone-volume text-xl"></i>
                        </div>
                    </div>
                </div>

                <div class="glass-card rounded-2xl overflow-hidden">
                    <div class="px-6 py-4 border-b border-veloraBorder flex justify-between items-center bg-slate-950/20">
                        <h3 class="font-bold text-white tracking-wide">Últimas Interacciones (Tiempo Real)</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse" id="recent-table">
                            <thead>
                                <tr class="border-b border-veloraBorder text-gray-400 text-[11px] uppercase font-bold tracking-widest bg-slate-950/10">
                                    <th class="py-4 px-6">Contacto</th>
                                    <th class="py-4 px-6">Tipo</th>
                                    <th class="py-4 px-6">Teléfono</th>
                                    <th class="py-4 px-6 hidden sm:table-cell">Agente</th>
                                    <th class="py-4 px-6">Último Estado</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-veloraBorder">
                                <!-- Dinámico -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- VISTA: DIRECTORIO -->
            <div id="view-list" class="hidden fade-in h-full">
                <div class="glass-card rounded-2xl overflow-hidden flex flex-col h-[calc(100vh-140px)]">
                    <div class="px-6 py-5 border-b border-veloraBorder flex justify-between items-center gap-4 bg-slate-950/20">
                        <div class="flex items-center gap-3">
                            <div id="list-icon" class="w-10 h-10 rounded-lg bg-slate-900 border border-veloraBorder flex items-center justify-center text-lg">
                                <i class="fas fa-folder-open"></i>
                            </div>
                            <div>
                                <h3 id="list-title" class="text-xl font-black text-white">Directorio</h3>
                                <p id="list-count" class="text-xs text-gray-500 font-bold uppercase">0 registros</p>
                            </div>
                        </div>
                        <div class="relative w-80">
                            <input type="text" id="search-input" onkeyup="searchDirectory()" placeholder="Buscar por nombre, tel o email..." class="w-full pl-10 pr-4 py-2.5 bg-slate-950/60 border border-veloraBorder rounded-xl text-sm text-gray-200 focus:border-veloraAccent outline-none transition">
                            <i class="fas fa-search absolute left-3.5 top-3.5 text-gray-500 text-xs"></i>
                        </div>
                    </div>
                    <div class="overflow-auto flex-1">
                        <table class="w-full text-left border-collapse" id="directory-table">
                            <thead class="sticky top-0 bg-veloraCard/95 backdrop-blur shadow z-10 border-b border-veloraBorder">
                                <tr class="text-[10px] text-gray-400 uppercase tracking-widest font-black">
                                    <th class="py-4 px-6">Nombre Completo</th>
                                    <th class="py-4 px-6 hidden sm:table-cell">Email</th>
                                    <th class="py-4 px-6">Teléfono</th>
                                    <th class="py-4 px-6 hidden sm:table-cell">Agente</th>
                                    <th class="py-4 px-6 text-center">Interacciones</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-veloraBorder font-medium">
                                <!-- Dinámico -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- VISTA: DETALLE (PERFIL) -->
            <div id="view-detail" class="hidden fade-in space-y-6">
                <div class="flex justify-between items-center mb-2">
                    <button onclick="goBack()" class="flex items-center gap-2 text-slate-400 hover:text-white transition font-bold bg-slate-900/60 border border-veloraBorder px-4 py-2 rounded-xl text-sm shadow-sm">
                        <i class="fas fa-arrow-left"></i> Regresar
                    </button>
                    <div class="flex gap-2">
                        <button onclick="editCurrentContact()" class="px-4 py-2 bg-slate-900 text-gray-300 hover:text-white rounded-xl border border-veloraBorder text-sm font-bold transition">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button onclick="deleteCurrentContact()" class="px-4 py-2 bg-slate-900 text-gray-400 hover:text-red-500 rounded-xl border border-veloraBorder text-sm font-bold transition">
                            <i class="fas fa-trash-alt"></i> Borrar
                        </button>
                    </div>
                </div>
                
                <div class="glass-card rounded-2xl overflow-hidden">
                    <div class="bg-gradient-to-br from-slate-950 via-veloraSidebar to-[#05080e] px-8 py-10 flex flex-col md:flex-row items-center gap-8 relative border-b border-veloraBorder">
                        <div class="absolute -top-24 -right-24 w-96 h-96 bg-veloraAccent/10 rounded-full blur-3xl mix-blend-screen"></div>
                        <div class="w-24 h-24 rounded-2xl border border-veloraBorder bg-slate-900/80 flex items-center justify-center text-4xl font-extrabold shadow-2xl relative z-10 text-white" id="detail-avatar"></div>
                        <div class="flex-1 relative z-10">
                            <div class="flex items-center gap-3 mb-2">
                                <h1 id="detail-name" class="text-3xl font-extrabold text-white">Cargando...</h1>
                                <span id="detail-badge" class="px-3 py-1 text-xs font-black rounded-lg uppercase tracking-widest border">LEAD</span>
                            </div>
                            <div class="flex gap-6 text-gray-400 text-sm font-bold uppercase tracking-wider mt-4">
                                <span><i class="fas fa-phone text-veloraAccent"></i> <span id="detail-phone" class="text-gray-300 ml-1">---</span></span>
                                <span><i class="fas fa-envelope text-veloraAccent"></i> <span id="detail-email" class="text-gray-300 ml-1">---</span></span>
                                <span><i class="fas fa-user-shield text-purple-400"></i> <span id="detail-owner" class="text-gray-300 ml-1">---</span></span>
                            </div>
                        </div>
                        <button onclick="exportToPDF()" class="relative z-10 px-6 py-3 bg-gradient-to-r from-emerald-500 to-veloraGreen text-white rounded-xl font-bold shadow-glow-green transition">
                            <i class="fas fa-file-pdf"></i> Ficha PDF
                        </button>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-veloraBorder">
                        <!-- Formulario Llamada -->
                        <div class="p-8 bg-slate-950/20">
                            <h3 class="text-lg font-extrabold text-white mb-6"><i class="fas fa-phone-volume text-veloraAccent mr-2"></i> Registrar Gestión</h3>
                            <form id="call-form" onsubmit="saveCall(event)" class="space-y-5">
                                <div>
                                    <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Fecha y Hora</label>
                                    <input type="datetime-local" id="call-date" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm" required>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Resultado / Estado</label>
                                    <select id="call-status" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm" required>
                                        <option value="" disabled selected>Seleccione...</option>
                                        <option value="Contestó - Interesado">🟢 Contestó - Interesado</option>
                                        <option value="Contestó - No Interesado">🔴 Contestó - No Interesado</option>
                                        <option value="Buzón de voz">🟡 Buzón de voz</option>
                                        <option value="No contestó">⚫ No contestó</option>
                                        <option value="Cita Agendada">🟣 Cita Agendada</option>
                                        <option value="Venta Cerrada">✅ Venta Cerrada (WIN)</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Notas del Seguimiento</label>
                                    <textarea id="call-notes" rows="4" class="w-full px-4 py-3 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm resize-none" required></textarea>
                                </div>
                                <button type="submit" class="w-full py-3 bg-veloraAccent text-white rounded-xl font-bold shadow-glow hover:bg-blue-600 transition">
                                    <i class="fas fa-save"></i> Guardar
                                </button>
                            </form>
                        </div>

                        <!-- Timeline Historial -->
                        <div class="p-8 lg:col-span-2 bg-veloraSidebar/20">
                            <div class="flex justify-between items-center mb-6 pb-4 border-b border-veloraBorder">
                                <h3 class="text-lg font-extrabold text-white"><i class="fas fa-history text-gray-400 mr-2"></i> Historial</h3>
                                <span class="text-xs bg-slate-950 border border-veloraBorder text-gray-400 px-3 py-1 rounded-full font-bold" id="history-count">0</span>
                            </div>
                            <div class="relative px-2">
                                <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-800 rounded-full"></div>
                                <ul id="calls-timeline" class="space-y-6 relative z-10">
                                    <!-- Dinámico -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- VISTA: ADMIN PANEL -->
            <div id="view-admin" class="hidden fade-in space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div class="glass-card rounded-2xl p-6 border-t-2 border-purple-500">
                        <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Usuarios Activos</span>
                        <h4 class="text-3xl font-black mt-1 text-white" id="admin-stat-users">0</h4>
                    </div>
                    <div class="glass-card rounded-2xl p-6 border-t-2 border-veloraAccent">
                        <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Leads Globales</span>
                        <h4 class="text-3xl font-black mt-1 text-white" id="admin-stat-leads">0</h4>
                    </div>
                    <div class="glass-card rounded-2xl p-6 border-t-2 border-veloraGreen">
                        <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Clientes Globales</span>
                        <h4 class="text-3xl font-black mt-1 text-white" id="admin-stat-clients">0</h4>
                    </div>
                </div>

                <div class="glass-card rounded-2xl overflow-hidden">
                    <div class="px-6 py-5 border-b border-veloraBorder flex justify-between items-center bg-slate-950/20">
                        <h3 class="font-bold text-white"><i class="fas fa-users-cog text-purple-500 mr-2"></i> Gestión de Usuarios</h3>
                        <button onclick="openUserModal()" class="px-4 py-2 bg-purple-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/20 hover:bg-purple-700 transition">
                            <i class="fas fa-user-plus"></i> Nuevo Agente
                        </button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse" id="admin-users-table">
                            <thead>
                                <tr class="border-b border-veloraBorder text-gray-400 text-[10px] uppercase font-bold bg-slate-950/10">
                                    <th class="py-4 px-6">Usuario / Credenciales</th>
                                    <th class="py-4 px-6">Nivel de Acceso</th>
                                    <th class="py-4 px-6 text-center">Sus Leads</th>
                                    <th class="py-4 px-6 text-center">Sus Clientes</th>
                                    <th class="py-4 px-6 text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-veloraBorder">
                                <!-- Dinámico -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- ========================================== -->
    <!-- 4. MODALES REUTILIZABLES                   -->
    <!-- ========================================== -->
    
    <!-- Modal: Crear/Editar Ficha de Contacto -->
    <div id="contact-modal" class="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[150] flex items-center justify-center opacity-0 transition-opacity duration-300">
        <div class="glass-card rounded-2xl w-full max-w-xl mx-4 transform scale-95 transition-transform flex flex-col" id="contact-modal-box">
            <div class="px-6 py-4 border-b border-veloraBorder flex justify-between items-center bg-slate-950/40 rounded-t-2xl">
                <h3 class="text-lg font-black text-white" id="modal-title"><i class="fas fa-user-plus text-veloraAccent"></i> Ficha</h3>
                <button onclick="closeContactModal()" class="text-gray-400 hover:text-white transition"><i class="fas fa-times"></i></button>
            </div>
            <div class="p-6">
                <form id="contact-form" onsubmit="saveContactForm(event)" class="space-y-4">
                    <input type="hidden" id="form-contact-id">
                    <div>
                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre Completo *</label>
                        <input type="text" id="form-name" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm" required>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Clasificación *</label>
                            <select id="form-type" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm" required>
                                <option value="lead">Prospecto (LEAD)</option>
                                <option value="client">Cliente (CLIENT)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Teléfono *</label>
                            <input type="tel" id="form-phone" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm" required>
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Correo (Opcional)</label>
                        <input type="email" id="form-email" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Dirección / Notas (Opcional)</label>
                        <textarea id="form-address" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm resize-none"></textarea>
                    </div>
                </form>
            </div>
            <div class="px-6 py-4 border-t border-veloraBorder bg-slate-950/40 rounded-b-2xl flex justify-end gap-3">
                <button type="button" onclick="closeContactModal()" class="px-5 py-2.5 bg-slate-900 border border-veloraBorder text-gray-300 font-bold rounded-xl hover:bg-slate-800 transition">Cancelar</button>
                <button type="submit" form="contact-form" class="px-6 py-2.5 bg-veloraAccent text-white font-bold rounded-xl shadow-glow hover:bg-blue-600 transition">Guardar Registro</button>
            </div>
        </div>
    </div>

    <!-- Modal: Generar Reporte PDF General -->
    <div id="report-modal" class="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[150] flex items-center justify-center opacity-0 transition-opacity duration-300">
        <div class="glass-card rounded-2xl w-full max-w-sm mx-4 transform scale-95 transition-transform flex flex-col" id="report-modal-box">
            <div class="px-6 py-4 border-b border-veloraBorder flex justify-between items-center bg-slate-950/40 rounded-t-2xl">
                <h3 class="text-lg font-black text-white"><i class="fas fa-file-pdf text-orange-500"></i> Reporte PDF</h3>
                <button onclick="closeReportModal()" class="text-gray-400 hover:text-white transition"><i class="fas fa-times"></i></button>
            </div>
            <div class="p-6">
                <form id="report-form" onsubmit="generateGeneralReport(event)" class="space-y-4">
                    <div>
                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Frecuencia</label>
                        <select id="report-period" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm" required>
                            <option value="daily">Diario (Interacciones Hoy)</option>
                            <option value="weekly">Semanal (Últimos 7 días)</option>
                            <option value="monthly">Mensual (Últimos 30 días)</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Filtro de Interfaz</label>
                        <select id="report-filter" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm" required>
                            <option value="all">Todos los registros</option>
                            <option value="lead">Solo Prospectos (Leads)</option>
                            <option value="client">Solo Clientes Cerrados</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="px-6 py-4 border-t border-veloraBorder bg-slate-950/40 rounded-b-2xl">
                <button type="submit" form="report-form" class="w-full py-3 bg-orange-500 hover:bg-orange-600 transition text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2">
                    <i class="fas fa-download"></i> Descargar Documento
                </button>
            </div>
        </div>
    </div>

    <!-- Modal: Administrar Usuarios (Admin Panel) -->
    <div id="user-modal" class="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[150] flex items-center justify-center opacity-0 transition-opacity duration-300">
        <div class="glass-card rounded-2xl w-full max-w-md mx-4 transform scale-95 transition-transform flex flex-col" id="user-modal-box">
            <div class="px-6 py-4 border-b border-veloraBorder flex justify-between items-center bg-slate-950/40 rounded-t-2xl">
                <h3 class="text-lg font-black text-white" id="user-modal-title"><i class="fas fa-user-shield text-purple-500"></i> Cuenta</h3>
                <button onclick="closeUserModal()" class="text-gray-400 hover:text-white transition"><i class="fas fa-times"></i></button>
            </div>
            <div class="p-6">
                <form id="user-form" onsubmit="saveUserForm(event)" class="space-y-4">
                    <input type="hidden" id="edit-user-uid">
                    <div>
                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Nombre Real</label>
                        <input type="text" id="new-user-name" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm focus:border-purple-500 transition" required>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Usuario/Email *</label>
                        <input type="text" id="new-user-email" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm focus:border-purple-500 transition" required>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Contraseña *</label>
                        <input type="text" id="new-user-pass" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm focus:border-purple-500 transition" required>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Rol de Permisos *</label>
                        <select id="new-user-role" class="w-full px-4 py-2.5 bg-slate-900/60 border border-veloraBorder rounded-xl text-white text-sm focus:border-purple-500 transition" required>
                            <option value="normal">Agente Normal (Ve sus propios datos)</option>
                            <option value="admin">Administrador (Ve datos globales)</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="px-6 py-4 border-t border-veloraBorder bg-slate-950/40 rounded-b-2xl">
                <button type="submit" form="user-form" id="user-submit-btn" class="w-full py-3 bg-purple-600 hover:bg-purple-700 transition text-white font-bold rounded-xl shadow-lg shadow-purple-500/20">Guardar Cambios</button>
            </div>
        </div>
    </div>

    <!-- UI: Toasts y Confirmaciones -->
    <div id="toast" class="fixed bottom-6 right-6 transform transition-all duration-300 translate-y-24 opacity-0 bg-slate-950 border border-veloraBorder text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 z-[300]">
        <div id="toast-icon" class="text-veloraGreen text-2xl"><i class="fas fa-check-circle"></i></div>
        <div class="flex flex-col">
            <span id="toast-title" class="font-black text-sm">Éxito</span>
            <span id="toast-message" class="text-xs text-gray-400">Hecho.</span>
        </div>
    </div>

    <div id="confirm-modal" class="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[250] flex items-center justify-center opacity-0 transition-opacity duration-300">
        <div class="glass-card rounded-2xl w-full max-w-sm mx-4 transform scale-95 transition-transform p-6 text-center" id="confirm-modal-box">
            <div class="w-14 h-14 rounded-xl bg-red-500/10 text-red-500 mx-auto mb-4 flex items-center justify-center border border-red-500/20">
                <i class="fas fa-exclamation-triangle text-xl animate-pulse"></i>
            </div>
            <h3 class="text-lg font-black text-white mb-1" id="confirm-title">¿Seguro?</h3>
            <p class="text-xs text-gray-400 mb-6" id="confirm-msg">Esta acción se sincronizará y no se puede deshacer.</p>
            <div class="flex gap-3">
                <button onclick="closeModal()" class="flex-1 py-2.5 bg-slate-900 text-gray-300 rounded-xl font-bold border border-veloraBorder hover:bg-slate-800 transition">Cancelar</button>
                <button id="confirm-btn" class="flex-1 py-2.5 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition shadow-lg">Confirmar</button>
            </div>
        </div>
    </div>

    <!-- ========================================== -->
    <!-- 5. JAVASCRIPT: FIREBASE & LÓGICA CORE      -->
    <!-- ========================================== -->
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, doc, setDoc, collection, query, onSnapshot, deleteDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        // Configuración oficial de tu Firebase
        const userFirebaseConfig = {
            apiKey: "AIzaSyD2fytCdF9re-36Op7Nhx4KXmwqZVM8F5E",
            authDomain: "callreport-8a323.firebaseapp.com",
            databaseURL: "https://callreport-8a323-default-rtdb.firebaseio.com",
            projectId: "callreport-8a323",
            storageBucket: "callreport-8a323.firebasestorage.app",
            messagingSenderId: "520764678129",
            appId: "1:520764678129:web:59ce1c31c1b8280f29ae50",
            measurementId: "G-D5Y2GV53D8"
        };
        const firebaseConfig = typeof __firebase_config !== 'undefined' && __firebase_config ? JSON.parse(__firebase_config) : userFirebaseConfig;
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'velora-tracker-master';

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);

        // Variables de Estado Global
        window.allContacts = []; 
        window.allUsers = []; 
        window.visibleContacts = []; 
        window.currentUser = null;
        window.currentContactId = null; 
        window.currentView = 'dashboard'; 
        window.currentListType = 'lead'; 
        window.callsChartInstance = null;
        let authStateResolved = false;

        // --------------------------------------------------------
        // HELPERS UI Y NOTIFICACIONES
        // --------------------------------------------------------
        window.showToast = (title, msg, type='success') => {
            document.getElementById('toast-title').innerText = title; 
            document.getElementById('toast-message').innerText = msg;
            const icon = document.getElementById('toast-icon');
            if(type === 'success') { 
                icon.className = 'text-veloraGreen text-2xl'; 
                icon.innerHTML = '<i class="fas fa-check-circle"></i>'; 
            } else if(type === 'error') { 
                icon.className = 'text-red-500 text-2xl'; 
                icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>'; 
            }
            const t = document.getElementById('toast'); 
            t.classList.remove('translate-y-24', 'opacity-0'); 
            setTimeout(() => t.classList.add('translate-y-24', 'opacity-0'), 3500);
        };

        let confirmCb = null;
        window.showConfirm = (title, msg, cb) => {
            document.getElementById('confirm-title').innerText = title; 
            document.getElementById('confirm-msg').innerText = msg; 
            confirmCb = cb;
            const m = document.getElementById('confirm-modal'); 
            m.classList.remove('hidden'); 
            setTimeout(() => {
                m.classList.remove('opacity-0'); 
                document.getElementById('confirm-modal-box').classList.remove('scale-95');
            }, 10);
        };

        window.closeModal = () => {
            const m = document.getElementById('confirm-modal'); 
            m.classList.add('opacity-0'); 
            document.getElementById('confirm-modal-box').classList.add('scale-95'); 
            setTimeout(() => {
                m.classList.add('hidden'); 
                confirmCb = null;
            }, 300);
        };

        document.getElementById('confirm-btn').addEventListener('click', () => { 
            if(confirmCb) confirmCb(); 
            window.closeModal(); 
        });

        window.updateConnectionStatus = (isOnline) => {
            const b = document.getElementById('db-status-badge');
            const t = document.getElementById('db-status-text');
            const d = document.getElementById('db-status-dot');
            const p = document.getElementById('db-status-ping');
            if(isOnline && navigator.onLine) { 
                b.className = "px-3.5 py-2 bg-slate-950/80 border border-emerald-500/30 text-veloraGreen rounded-xl flex items-center gap-2 text-xs font-bold transition shadow-glow-green"; 
                t.innerText = "NUBE CONECTADA"; 
                d.className = "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"; 
                p.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"; 
            } else { 
                b.className = "px-3.5 py-2 bg-slate-950/80 border border-red-500/30 text-red-500 rounded-xl flex items-center gap-2 text-xs font-bold transition shadow-lg"; 
                t.innerText = "DESCONECTADO"; 
                d.className = "relative inline-flex rounded-full h-2 w-2 bg-red-500"; 
                p.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"; 
            }
        };
        window.addEventListener('online', () => window.updateConnectionStatus(true)); 
        window.addEventListener('offline', () => window.updateConnectionStatus(false));

        // --------------------------------------------------------
        // FUNCIONES FIREBASE DE SINCRONIZACIÓN
        // --------------------------------------------------------
        window.saveContactToDatabase = async (c) => {
            if (!auth.currentUser) return;
            // Asegura que los registros siempre tengan un propietario (Agente)
            if(!c.ownerId) { 
                c.ownerId = window.currentUser.uid; 
                c.ownerName = window.currentUser.name; 
            }
            await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'contacts', c.id), c);
        };

        window.deleteContactFromDatabase = async (id) => {
            await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'contacts', id));
        };

        // --------------------------------------------------------
        // SISTEMA DE AUTENTICACIÓN Y ROLES
        // --------------------------------------------------------
        let authMode = 'login';
        window.toggleAuthMode = () => {
            authMode = authMode === 'login' ? 'register' : 'login';
            document.getElementById('register-fields').classList.toggle('hidden', authMode === 'login');
            document.getElementById('auth-btn').innerText = authMode === 'login' ? 'Ingresar' : 'Crear Cuenta';
            document.getElementById('auth-subtitle').innerText = authMode === 'login' ? 'Acceso al Sistema' : 'Registro de Agente';
            document.getElementById('auth-toggle-btn').innerHTML = authMode === 'login' ? '¿No tienes cuenta? <span class="text-veloraAccent">Regístrate aquí</span>' : '¿Ya tienes cuenta? <span class="text-veloraAccent">Inicia Sesión</span>';
        };

        window.handleAuth = async (e) => {
            e.preventDefault(); 
            const email = document.getElementById('auth-email').value.trim(); 
            const pass = document.getElementById('auth-password').value.trim();
            
            if(authMode === 'login') {
                const u = window.allUsers.find(x => x.email.toLowerCase() === email.toLowerCase() && x.password === pass);
                if(u) {
                    processLogin(u); 
                } else {
                    window.showToast("Error", "Credenciales incorrectas", "error");
                }
            } else {
                const name = document.getElementById('auth-name').value.trim(); 
                if(!name) return window.showToast("Error", "Nombre obligatorio", "error");
                if(email.length < 3) return window.showToast("Error", "Usuario/Correo no válido", "error");
                if(window.allUsers.find(x => x.email.toLowerCase() === email.toLowerCase())) return window.showToast("Error", "Usuario ya existe", "error");
                
                // Crear usuario Normal por defecto
                const newU = { uid: 'u_' + Date.now(), name, email, password: pass, role: 'normal' };
                await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'app_users', newU.uid), newU);
                
                processLogin(newU); 
                window.showToast("Bienvenido", "Cuenta creada exitosamente", "success");
            }
        };

        function processLogin(u) {
            window.currentUser = u; 
            localStorage.setItem('velora_auth_session', JSON.stringify(u));
            
            document.getElementById('auth-screen').classList.add('hidden');
            document.getElementById('app-sidebar').classList.remove('hidden'); 
            document.getElementById('app-main-view').classList.remove('hidden');
            
            document.getElementById('user-display-name').innerText = u.name; 
            document.getElementById('user-display-role').innerText = u.role === 'admin' ? 'Administrador' : 'Agente';
            document.getElementById('user-avatar-icon').innerText = u.name.charAt(0).toUpperCase();
            
            if(u.role === 'admin') {
                document.getElementById('admin-nav-section').classList.remove('hidden');
                document.getElementById('sidebar-role-label').innerText = 'ADMIN TIER'; 
                document.getElementById('sidebar-role-label').className = 'text-[10px] tracking-widest text-purple-400 font-bold uppercase relative z-10';
            } else {
                document.getElementById('admin-nav-section').classList.add('hidden');
                document.getElementById('sidebar-role-label').innerText = 'AGENT TIER'; 
                document.getElementById('sidebar-role-label').className = 'text-[10px] tracking-widest text-veloraAccent font-bold uppercase relative z-10';
            }
            
            filterDataAndRender();
        }

        window.performLogout = () => {
            window.currentUser = null; 
            localStorage.removeItem('velora_auth_session');
            document.getElementById('auth-form').reset(); 
            document.getElementById('auth-screen').classList.remove('hidden');
            document.getElementById('app-sidebar').classList.add('hidden'); 
            document.getElementById('app-main-view').classList.add('hidden');
        };

        // Regla esencial de privacidad
        function filterDataAndRender() {
            if(!window.currentUser) return;
            // Un Agente normal SOLO VE LO SUYO. El Admin ve TODO.
            window.visibleContacts = window.currentUser.role === 'admin' 
                ? window.allContacts 
                : window.allContacts.filter(c => c.ownerId === window.currentUser.uid);
            
            if(window.currentView === 'dashboard') {
                window.updateDashboard(); 
            } else if(window.currentView === 'leads' || window.currentView === 'clients') {
                window.renderDirectory(window.currentListType); 
            } else if(window.currentView === 'admin' && window.currentUser.role === 'admin') {
                window.renderAdmin();
            } else if (window.currentView === 'detail' && window.currentContactId) {
                window.openProfile(window.currentContactId);
            }
        }

        // --------------------------------------------------------
        // INICIO DE FIREBASE REAL-TIME
        // --------------------------------------------------------
        const init = async () => {
            try { 
                if(typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                    await signInWithCustomToken(auth, __initial_auth_token); 
                } else {
                    await signInAnonymously(auth); 
                }
            } catch(e) { 
                window.updateConnectionStatus(false); 
            }
        }; 
        init();

        onAuthStateChanged(auth, async (user) => {
            if(user) {
                // Auto-generador del usuario Maestro para evitar bloqueos iniciales
                const admDoc = doc(db, 'artifacts', appId, 'public', 'data', 'app_users', 'admin_nahum');
                const s = await getDoc(admDoc); 
                if(!s.exists()) {
                    await setDoc(admDoc, { uid: 'admin_nahum', name: 'Nahum', email: 'nahumsmithr', password: '28011512', role: 'admin' });
                }
                
                // Listener Tiempo Real: USUARIOS
                onSnapshot(query(collection(db, 'artifacts', appId, 'public', 'data', 'app_users')), snap => {
                    window.allUsers = []; 
                    snap.forEach(d => window.allUsers.push(d.data()));
                    if(window.currentUser && window.currentView === 'admin') window.renderAdmin();
                });

                // Listener Tiempo Real: CONTACTOS
                onSnapshot(query(collection(db, 'artifacts', appId, 'public', 'data', 'contacts')), snap => {
                    window.allContacts = []; 
                    snap.forEach(d => window.allContacts.push(d.data()));
                    
                    if(!authStateResolved) {
                        authStateResolved = true;
                        document.getElementById('global-loader').classList.add('opacity-0'); 
                        setTimeout(() => document.getElementById('global-loader').classList.add('hidden'), 500);
                        
                        // Retomar sesión si existía en LocalStorage
                        const ses = localStorage.getItem('velora_auth_session');
                        if(ses && window.allUsers.find(x => x.uid === JSON.parse(ses).uid)) {
                            processLogin(JSON.parse(ses)); 
                        } else {
                            document.getElementById('auth-screen').classList.remove('hidden');
                        }
                    } else {
                        // Sincronizar Vistas en Tiempo Real
                        filterDataAndRender();
                    }
                    window.updateConnectionStatus(true);
                }, () => window.updateConnectionStatus(false));
            } else {
                window.updateConnectionStatus(false);
            }
        });

        // --------------------------------------------------------
        // NAVEGACIÓN Y VISTAS UI
        // --------------------------------------------------------
        window.toggleMobileMenu = () => document.getElementById('app-sidebar').classList.toggle('hidden');
        
        window.showView = (viewName) => {
            if(!window.currentUser) return;
            
            // Ocultar todas las vistas
            ['dashboard','list','detail','admin'].forEach(x => document.getElementById(`view-${x}`).classList.add('hidden'));
            
            // Limpiar estilos de botones del menú
            ['nav-dashboard','nav-leads','nav-clients','nav-admin'].forEach(x => { 
                const btn = document.getElementById(x); 
                if(btn) {
                    btn.classList.remove('bg-slate-800/50','text-white'); 
                    btn.classList.add('text-slate-300');
                } 
            });

            if(window.innerWidth < 768) document.getElementById('app-sidebar').classList.add('hidden');
            const topTitle = document.getElementById('topbar-title');

            if(viewName === 'dashboard') { 
                document.getElementById('view-dashboard').classList.remove('hidden'); 
                topTitle.innerText = "Executive Overview"; 
                document.getElementById('nav-dashboard').classList.add('bg-slate-800/50','text-white'); 
                window.updateDashboard(); 
            } else if(viewName === 'leads') { 
                document.getElementById('view-list').classList.remove('hidden'); 
                topTitle.innerText = "Directorio de Leads"; 
                document.getElementById('list-title').innerText = "Prospectos (Leads)"; 
                document.getElementById('nav-leads').classList.add('bg-slate-800/50','text-white'); 
                window.currentListType = 'lead'; 
                document.getElementById('search-input').value = ''; 
                window.renderDirectory('lead'); 
            } else if(viewName === 'clients') { 
                document.getElementById('view-list').classList.remove('hidden'); 
                topTitle.innerText = "Directorio de Clientes"; 
                document.getElementById('list-title').innerText = "Cartera Segura"; 
                document.getElementById('nav-clients').classList.add('bg-slate-800/50','text-white'); 
                window.currentListType = 'client'; 
                document.getElementById('search-input').value = ''; 
                window.renderDirectory('client'); 
            } else if(viewName === 'admin' && window.currentUser.role === 'admin') { 
                document.getElementById('view-admin').classList.remove('hidden'); 
                topTitle.innerText = "Panel de Administración"; 
                document.getElementById('nav-admin').classList.add('bg-slate-800/50','text-white'); 
                window.renderAdmin(); 
            }
            window.currentView = viewName;
        };
        
        window.goBack = () => window.showView(window.currentListType === 'lead' ? 'leads' : 'clients');

        // --------------------------------------------------------
        // DASHBOARD PRINCIPAL
        // --------------------------------------------------------
        window.updateDashboard = () => {
            const data = window.visibleContacts;
            const leadsCount = data.filter(c => c.type === 'lead').length; 
            const clientsCount = data.filter(c => c.type === 'client').length;
            
            let totalCalls = 0; 
            data.forEach(c => totalCalls += (c.calls ? c.calls.length : 0));
            
            document.getElementById('stat-total').innerText = data.length; 
            document.getElementById('stat-leads').innerText = leadsCount; 
            document.getElementById('stat-clients').innerText = clientsCount; 
            document.getElementById('stat-calls').innerText = totalCalls;
            document.getElementById('funnel-ratio').innerText = `${data.length > 0 ? Math.round((clientsCount / data.length) * 100) : 0}% Clientes`;

            // Llenar tabla reciente (Últimas 5 llamadas)
            const tbody = document.querySelector('#recent-table tbody'); 
            tbody.innerHTML = '';
            const recent = [...data].sort((a,b) => { 
                const dA = a.calls && a.calls.length > 0 ? new Date(a.calls[a.calls.length-1].date).getTime() : 0; 
                const dB = b.calls && b.calls.length > 0 ? new Date(b.calls[b.calls.length-1].date).getTime() : 0; 
                return dB - dA; 
            }).slice(0, 5);

            if(recent.length === 0) {
                tbody.innerHTML = `<tr><td colspan="5" class="py-10 text-center text-gray-500 bg-slate-900/10">Sin datos recientes.</td></tr>`;
            } else {
                recent.forEach(c => {
                    const stat = (c.calls && c.calls.length > 0) ? c.calls[c.calls.length-1].status : 'No gestionado';
                    const bc = c.type === 'lead' ? 'bg-orange-500/10 text-orange-400' : 'bg-emerald-500/10 text-veloraGreen';
                    const initials = c.name.substring(0,2).toUpperCase();
                    
                    tbody.innerHTML += `
                        <tr class="hover:bg-slate-800/40 cursor-pointer transition-colors" onclick="window.openProfile('${c.id}')">
                            <td class="py-3 px-6">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-xs font-bold text-white border border-veloraBorder">${initials}</div>
                                    <span class="font-bold text-gray-200">${c.name}</span>
                                </div>
                            </td>
                            <td class="py-3 px-6"><span class="px-2 py-1 rounded text-[9px] font-bold uppercase border border-white/5 ${bc}">${c.type}</span></td>
                            <td class="py-3 px-6 text-sm text-gray-400">${c.phone}</td>
                            <td class="py-3 px-6 text-xs text-purple-400 hidden sm:table-cell font-bold">${c.ownerName || 'Sis'}</td>
                            <td class="py-3 px-6 text-sm text-gray-300 font-bold">${stat}</td>
                        </tr>
                    `;
                });
            }

            // Top Prospectos Rápidos
            const topL = document.getElementById('top-leads-list'); 
            topL.innerHTML = '';
            
            const leadsArr = data.filter(c => c.type === 'lead').slice(0,3);
            if(leadsArr.length === 0) {
                topL.innerHTML = `<div class="text-xs text-gray-500 text-center py-6 font-semibold">Sin prospectos registrados</div>`;
            } else {
                leadsArr.forEach(l => {
                    const ini = l.name.substring(0,2).toUpperCase();
                    topL.innerHTML += `
                        <div class="flex items-center justify-between p-3 rounded-xl bg-slate-900/40 border border-veloraBorder cursor-pointer hover:border-veloraAccent transition" onclick="window.openProfile('${l.id}')">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded bg-slate-950 text-veloraAccent flex items-center justify-center text-xs font-bold">${ini}</div>
                                <div><p class="text-xs font-bold text-white">${l.name}</p><p class="text-[10px] text-gray-500">${l.phone}</p></div>
                            </div>
                            <i class="fas fa-chevron-right text-[10px] text-veloraAccent"></i>
                        </div>
                    `;
                });
            }

            // Gráfico Chart.js Interactivo
            const ctx = document.getElementById('callsChart').getContext('2d'); 
            if(window.callsChartInstance) window.callsChartInstance.destroy();
            
            const lbl = [], dts = [0,0,0,0,0,0,0]; 
            const td = new Date(); 
            td.setHours(0,0,0,0);
            
            for(let i=6; i>=0; i--) { 
                const d = new Date(td); 
                d.setDate(d.getDate()-i); 
                lbl.push(d.toLocaleDateString(undefined,{weekday:'short',day:'numeric'})); 
            }
            
            data.forEach(c => { 
                if(c.calls) {
                    c.calls.forEach(call => { 
                        const cd = new Date(call.date); 
                        cd.setHours(0,0,0,0); 
                        const dif = Math.ceil(Math.abs(td - cd) / (1000*60*60*24)); 
                        if(dif < 7 && cd <= td) { 
                            const ix = 6 - dif; 
                            if(ix >= 0 && ix < 7) dts[ix]++; 
                        } 
                    });
                }
            });
            
            document.getElementById('chart-total-count').innerText = dts.reduce((a,b) => a+b, 0);
            
            const gr = ctx.createLinearGradient(0,0,0,200); 
            gr.addColorStop(0, 'rgba(59, 130, 246, 0.4)'); 
            gr.addColorStop(1, 'rgba(8, 12, 20, 0.05)');
            
            window.callsChartInstance = new Chart(ctx, { 
                type: 'line', 
                data: { 
                    labels: lbl, 
                    datasets: [{ 
                        data: dts, 
                        borderColor: '#3b82f6', 
                        backgroundColor: gr, 
                        fill: true, 
                        tension: 0.4,
                        pointBackgroundColor: '#3b82f6'
                    }] 
                }, 
                options: { 
                    responsive: true, 
                    maintainAspectRatio: false, 
                    plugins: { legend: { display: false } }, 
                    scales: { 
                        y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.03)' } }, 
                        x: { grid: { display: false } } 
                    } 
                } 
            });
        };

        // --------------------------------------------------------
        // DIRECTORIO Y PERFIL (EXPEDIENTE)
        // --------------------------------------------------------
        window.renderDirectory = (type) => {
            const term = document.getElementById('search-input').value.toLowerCase();
            const tbody = document.querySelector('#directory-table tbody'); 
            tbody.innerHTML = '';
            
            let filtered = window.visibleContacts.filter(c => c.type === type);
            if(term) {
                filtered = filtered.filter(c => c.name.toLowerCase().includes(term) || c.phone.includes(term));
            }
            
            document.getElementById('list-count').innerText = `${filtered.length} REGISTROS ACTIVOS`;
            
            if(!filtered.length) {
                return tbody.innerHTML = `<tr><td colspan="5" class="py-16 text-center text-gray-500 bg-veloraCard/20"><i class="fas fa-folder-open text-4xl mb-4"></i><p>Sin resultados.</p></td></tr>`;
            }

            filtered.forEach(c => {
                const ini = c.name.substring(0,2).toUpperCase();
                const cc = c.calls ? c.calls.length : 0;
                
                tbody.innerHTML += `
                    <tr class="hover:bg-slate-800/40 cursor-pointer transition-colors" onclick="window.openProfile('${c.id}')">
                        <td class="py-4 px-6">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded bg-slate-900 border border-veloraBorder text-white flex items-center justify-center font-black">${ini}</div>
                                <span class="font-extrabold text-gray-200">${c.name}</span>
                            </div>
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-400 hidden sm:table-cell">${c.email||'---'}</td>
                        <td class="py-4 px-6 text-sm text-gray-300 font-bold">${c.phone}</td>
                        <td class="py-4 px-6 text-xs text-purple-400 hidden sm:table-cell font-bold"><i class="fas fa-user text-[10px] mr-1"></i> ${c.ownerName || 'Sistema'}</td>
                        <td class="py-4 px-6 text-center">
                            <div class="inline-flex px-3 py-1 rounded bg-slate-900 border border-veloraBorder text-xs font-bold text-gray-400">
                                <i class="fas fa-history mr-1.5 text-veloraAccent"></i>${cc} LST
                            </div>
                        </td>
                    </tr>
                `;
            });
        };
        
        window.searchDirectory = () => window.renderDirectory(window.currentListType);

        window.openProfile = (id) => {
            const c = window.visibleContacts.find(x => x.id === id); 
            if(!c) return;
            
            window.currentContactId = id; 
            window.currentListType = c.type;
            
            ['dashboard','list','admin'].forEach(x => document.getElementById(`view-${x}`).classList.add('hidden')); 
            document.getElementById('view-detail').classList.remove('hidden');
            
            document.getElementById('detail-name').innerText = c.name; 
            document.getElementById('detail-phone').innerText = c.phone; 
            document.getElementById('detail-email').innerText = c.email || 'No proporcionado'; 
            document.getElementById('detail-owner').innerText = c.ownerName || 'No asignado'; 
            document.getElementById('detail-avatar').innerText = c.name.substring(0,2).toUpperCase();
            
            const badge = document.getElementById('detail-badge'); 
            badge.innerText = c.type; 
            badge.className = c.type === 'lead' 
                ? 'px-3 py-1 text-xs font-black rounded border bg-orange-500/10 text-orange-400 border-orange-500/20' 
                : 'px-3 py-1 text-xs font-black rounded border bg-emerald-500/10 text-veloraGreen border-emerald-500/20';

            window.renderTimeline(); 
            // Ajustar fecha del formulario a actual
            const nowLocal = new Date();
            nowLocal.setMinutes(nowLocal.getMinutes() - nowLocal.getTimezoneOffset());
            document.getElementById('call-date').value = nowLocal.toISOString().slice(0,16);
            document.getElementById('call-status').value = '';
            document.getElementById('call-notes').value = '';
        };

        // Renderizado del historial de llamadas (Timeline)
        window.renderTimeline = () => {
            const c = window.visibleContacts.find(x => x.id === window.currentContactId); 
            const t = document.getElementById('calls-timeline'); 
            t.innerHTML = '';
            
            document.getElementById('history-count').innerText = `${c.calls ? c.calls.length : 0} Registros`;
            
            if(!c.calls || c.calls.length === 0) {
                return t.innerHTML = `<div class="ml-12 py-10 text-center text-gray-500 bg-slate-900/20 rounded-2xl border border-dashed border-veloraBorder"><p>Historial Vacío</p></div>`;
            }

            [...c.calls].sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(call => {
                const dt = new Date(call.date); 
                const isT = new Date().toDateString() === dt.toDateString();
                
                let iconClass = 'fa-history';
                let colorClass = 'text-gray-400';
                let bgClass = 'bg-slate-900 border-veloraBorder';
                
                const statLower = call.status.toLowerCase();
                if(statLower.includes('interesado') && !statLower.includes('no')) {
                    iconClass = 'fa-check-circle'; colorClass = 'text-blue-400'; bgClass = 'bg-blue-500/10 border-blue-500/20';
                } else if(statLower.includes('cerrada')) {
                    iconClass = 'fa-trophy'; colorClass = 'text-emerald-400'; bgClass = 'bg-emerald-500/10 border-emerald-500/20';
                } else if(statLower.includes('no interesado')) {
                    iconClass = 'fa-times-circle'; colorClass = 'text-red-400'; bgClass = 'bg-red-500/10 border-red-500/20';
                }

                t.innerHTML += `
                    <li class="relative pl-12 fade-in">
                        <div class="absolute left-0 top-1 w-10 h-10 bg-slate-950 border rounded-xl flex items-center justify-center z-10 ${bgClass} ${colorClass}">
                            <i class="fas ${iconClass}"></i>
                        </div>
                        <div class="bg-slate-900/40 p-4 rounded-xl border border-veloraBorder">
                            <div class="flex justify-between items-center mb-2">
                                <div class="text-xs font-bold text-gray-400">
                                    <i class="far fa-calendar-alt mr-1"></i> ${isT ? 'Hoy' : dt.toLocaleDateString()} a las ${dt.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}
                                </div>
                                <span class="text-xs font-bold border border-white/5 rounded px-2 py-1 ${colorClass} ${bgClass}">${call.status}</span>
                            </div>
                            <p class="text-gray-300 text-sm mt-3">${call.notes}</p>
                        </div>
                    </li>
                `;
            });
        };

        window.saveCall = async (e) => {
            e.preventDefault(); 
            const c = window.visibleContacts.find(x => x.id === window.currentContactId); 
            if(!c) return;
            
            if(!c.calls) c.calls = []; 
            const stat = document.getElementById('call-status').value;
            const dt = document.getElementById('call-date').value;
            const note = document.getElementById('call-notes').value;

            c.calls.push({ id: 'c_' + Date.now(), date: dt, status: stat, notes: note });
            
            if(stat === 'Venta Cerrada' && c.type === 'lead') {
                window.showConfirm("¡VENTA LOGRADA!", "Has cerrado la venta. ¿Promover a la Cartera de Clientes Automáticamente?", async () => { 
                    c.type = 'client'; 
                    await window.saveContactToDatabase(c); 
                    window.showToast("Excelente", "Promovido a Cliente de Cartera.", "success"); 
                    window.openProfile(c.id); 
                });
            } else { 
                await window.saveContactToDatabase(c); 
                window.showToast("Guardado", "Gestión guardada exitosamente.", "success"); 
                window.openProfile(c.id); 
            }
        };

        // --------------------------------------------------------
        // CRUD CONTACTOS Y MODALES
        // --------------------------------------------------------
        window.openContactModal = (id = null) => {
            document.getElementById('contact-form').reset();
            document.getElementById('modal-title').innerHTML = id ? '<i class="fas fa-edit text-veloraAccent"></i> Modificar Ficha' : '<i class="fas fa-plus text-veloraAccent"></i> Nueva Ficha';
            
            if(id) { 
                const c = window.visibleContacts.find(x => x.id === id); 
                document.getElementById('form-contact-id').value = c.id; 
                document.getElementById('form-name').value = c.name; 
                document.getElementById('form-type').value = c.type; 
                document.getElementById('form-phone').value = c.phone; 
                document.getElementById('form-email').value = c.email || ''; 
                document.getElementById('form-address').value = c.address || ''; 
            } else { 
                document.getElementById('form-contact-id').value = ''; 
                if(window.currentView === 'leads' || window.currentView === 'clients') {
                    document.getElementById('form-type').value = window.currentListType;
                }
            }
            
            const m = document.getElementById('contact-modal'); 
            m.classList.remove('hidden'); 
            setTimeout(() => {
                m.classList.remove('opacity-0'); 
                document.getElementById('contact-modal-box').classList.remove('scale-95');
            }, 10);
        };

        window.closeContactModal = () => { 
            const m = document.getElementById('contact-modal'); 
            m.classList.add('opacity-0'); 
            document.getElementById('contact-modal-box').classList.add('scale-95'); 
            setTimeout(() => m.classList.add('hidden'), 300); 
        };

        window.saveContactForm = async (e) => {
            e.preventDefault(); 
            const id = document.getElementById('form-contact-id').value;
            
            // Si es nuevo, preparo el objeto base
            const cObj = id ? window.visibleContacts.find(x => x.id === id) : { id: 'id_' + Date.now(), calls: [], ownerId: window.currentUser.uid, ownerName: window.currentUser.name };
            
            cObj.name = document.getElementById('form-name').value; 
            cObj.type = document.getElementById('form-type').value; 
            cObj.phone = document.getElementById('form-phone').value; 
            cObj.email = document.getElementById('form-email').value; 
            cObj.address = document.getElementById('form-address').value;
            
            await window.saveContactToDatabase(cObj); 
            window.showToast("Éxito", id ? "Ficha Actualizada" : "Ficha Creada", "success"); 
            window.closeContactModal();
        };

        window.editCurrentContact = () => { 
            if(window.currentContactId) window.openContactModal(window.currentContactId); 
        };
        window.deleteCurrentContact = () => { 
            if(!window.currentContactId) return; 
            window.showConfirm("Eliminar Ficha", "¿Confirma la eliminación permanente de este registro?", async () => { 
                await window.deleteContactFromDatabase(window.currentContactId); 
                window.showToast("Eliminado", "Ficha borrada de la base de datos.", "error"); 
                window.goBack(); 
            }); 
        };

        // --------------------------------------------------------
        // PANEL DE ADMINISTRACIÓN
        // --------------------------------------------------------
        window.renderAdmin = () => {
            document.getElementById('admin-stat-users').innerText = window.allUsers.length; 
            document.getElementById('admin-stat-leads').innerText = window.allContacts.filter(c => c.type === 'lead').length; 
            document.getElementById('admin-stat-clients').innerText = window.allContacts.filter(c => c.type === 'client').length;
            
            const tb = document.querySelector('#admin-users-table tbody'); 
            tb.innerHTML = '';
            
            window.allUsers.forEach(u => {
                const uC = window.allContacts.filter(c => c.ownerId === u.uid);
                const rB = u.role === 'admin' ? '<span class="text-purple-400 bg-purple-500/10 px-2 py-1 rounded text-[10px] font-bold border border-purple-500/20">ADMIN</span>' : '<span class="text-veloraAccent bg-blue-500/10 px-2 py-1 rounded text-[10px] font-bold border border-blue-500/20">AGENTE NORMAL</span>';
                
                tb.innerHTML += `
                    <tr class="hover:bg-slate-800/30 transition-colors">
                        <td class="py-3 px-6">
                            <p class="font-bold text-white">${u.name}</p>
                            <p class="text-[10px] text-gray-500">${u.email} <span class="opacity-50 ml-1">(P: ${u.password})</span></p>
                        </td>
                        <td class="py-3 px-6">${rB}</td>
                        <td class="py-3 px-6 text-center text-orange-400 font-bold">${uC.filter(c => c.type === 'lead').length}</td>
                        <td class="py-3 px-6 text-center text-veloraGreen font-bold">${uC.filter(c => c.type === 'client').length}</td>
                        <td class="py-3 px-6 text-right">
                            <div class="flex justify-end gap-3">
                                <button onclick="window.openUserModal('${u.uid}')" class="text-gray-400 hover:text-purple-400 transition" title="Editar Permisos"><i class="fas fa-edit"></i></button>
                                ${u.uid !== window.currentUser.uid ? `<button onclick="window.deleteUser('${u.uid}')" class="text-gray-500 hover:text-red-500 transition" title="Revocar Cuenta"><i class="fas fa-trash-alt"></i></button>` : '<span class="text-[10px] text-purple-400 font-bold">TÚ</span>'}
                            </div>
                        </td>
                    </tr>
                `;
            });
        };

        window.openUserModal = (uid = null) => {
            document.getElementById('user-form').reset(); 
            const t = document.getElementById('user-modal-title');
            
            if(uid) { 
                const u = window.allUsers.find(x => x.uid === uid); 
                t.innerHTML = '<i class="fas fa-user-edit text-purple-500"></i> Modificar Cuenta'; 
                document.getElementById('edit-user-uid').value = u.uid; 
                document.getElementById('new-user-name').value = u.name; 
                document.getElementById('new-user-email').value = u.email; 
                document.getElementById('new-user-pass').value = u.password; 
                document.getElementById('new-user-role').value = u.role; 
            } else { 
                t.innerHTML = '<i class="fas fa-user-plus text-purple-500"></i> Crear Cuenta de Agente'; 
                document.getElementById('edit-user-uid').value = ''; 
            }
            
            const m = document.getElementById('user-modal'); 
            m.classList.remove('hidden'); 
            setTimeout(() => {
                m.classList.remove('opacity-0'); 
                document.getElementById('user-modal-box').classList.remove('scale-95');
            }, 10);
        };

        window.closeUserModal = () => { 
            const m = document.getElementById('user-modal'); 
            m.classList.add('opacity-0'); 
            document.getElementById('user-modal-box').classList.add('scale-95'); 
            setTimeout(() => m.classList.add('hidden'), 300); 
        };

        window.saveUserForm = async (e) => {
            e.preventDefault(); 
            const uid = document.getElementById('edit-user-uid').value; 
            const email = document.getElementById('new-user-email').value.trim();
            const pass = document.getElementById('new-user-pass').value.trim();
            const name = document.getElementById('new-user-name').value.trim();
            const role = document.getElementById('new-user-role').value;

            if(uid) { 
                const target = window.allUsers.find(x => x.uid === uid); 
                if(target.email !== email && window.allUsers.find(x => x.email === email)) {
                    return window.showToast("Error", "Este correo ya pertenece a otro usuario", "error"); 
                }
                await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'app_users', uid), { ...target, name, email, password: pass, role }); 
                
                // Actualizar propia sesión si era el admin activo editándose a sí mismo
                if(uid === window.currentUser.uid) {
                    window.currentUser = { ...window.currentUser, name, email, password: pass, role };
                    localStorage.setItem('velora_auth_session', JSON.stringify(window.currentUser));
                    document.getElementById('user-display-name').innerText = name;
                }
            } else { 
                if(window.allUsers.find(x => x.email === email)) return window.showToast("Error", "Correo ya registrado", "error"); 
                const id = 'u_' + Date.now(); 
                await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'app_users', id), { uid: id, name, email, password: pass, role, created: new Date().toISOString() }); 
            }
            window.showToast("Actualización Segura", "Credenciales aplicadas", "success"); 
            window.closeUserModal();
        };

        window.deleteUser = (uid) => { 
            window.showConfirm("Eliminar Agente", "¿Está seguro? Sus leads quedarán registrados pero sin dueño activo.", async () => { 
                await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'app_users', uid)); 
                window.showToast("Usuario Eliminado", "", "error"); 
            }); 
        };

        // --------------------------------------------------------
        // IMPORTACIÓN Y EXPORTACIÓN INTELIGENTE (CSV/PDF)
        // --------------------------------------------------------
        window.importCSV = (e) => {
            const f = e.target.files[0]; 
            if(!f) return; 
            const r = new FileReader();
            r.onload = async (ev) => {
                const rows = ev.target.result.split('\n'); 
                let a = 0;
                for(let i=1; i < rows.length; i++) {
                    const c = rows[i].split(','); 
                    if(c.length >= 3 && c[0].trim() !== '') {
                        // Importación inteligente
                        const tp = c[1] ? c[1].trim().toLowerCase() : ''; 
                        const mapT = (tp === 'client' || tp === 'cliente' || tp === 'clientes') ? 'client' : 'lead';
                        
                        await window.saveContactToDatabase({ 
                            id: 'id_' + Date.now() + Math.random(), 
                            name: c[0].trim(), 
                            type: mapT, 
                            phone: c[2].trim(), 
                            email: c[3] ? c[3].trim() : '', 
                            address: c[4] ? c[4].trim() : '', 
                            ownerId: window.currentUser.uid, 
                            ownerName: window.currentUser.name, 
                            calls: [] 
                        }); 
                        a++;
                    }
                }
                window.showToast("Importado Exitosamente", `${a} registros vinculados a tu cartera.`, "success"); 
                document.getElementById('csv-upload').value = '';
            }; 
            r.readAsText(f);
        };

        window.exportCSV = () => {
            if(!window.visibleContacts.length) return window.showToast("Error", "No hay datos para exportar", "error");
            let csv = "Nombre,Clasificacion,Telefono,Email,Direccion,TotalLlamadas\n"; 
            window.visibleContacts.forEach(c => {
                csv += `"${c.name}","${c.type}","${c.phone}","${c.email||''}","${c.address||''}","${c.calls ? c.calls.length : 0}"\n`;
            });
            const l = document.createElement("a"); 
            l.href = URL.createObjectURL(new Blob([csv], { type:'text/csv' })); 
            l.download = `Velora_Backup_${Date.now()}.csv`; 
            l.click();
        };

        // REPORTES GENERALES (PDF)
        window.openReportModal = () => { 
            const m = document.getElementById('report-modal'); 
            m.classList.remove('hidden'); 
            setTimeout(() => {
                m.classList.remove('opacity-0'); 
                document.getElementById('report-modal-box').classList.remove('scale-95');
            }, 10); 
        };
        
        window.closeReportModal = () => { 
            const m = document.getElementById('report-modal'); 
            m.classList.add('opacity-0'); 
            document.getElementById('report-modal-box').classList.add('scale-95'); 
            setTimeout(() => m.classList.add('hidden'), 300); 
        };
        
        window.generateGeneralReport = (e) => {
            e.preventDefault(); 
            const per = document.getElementById('report-period').value; 
            const fil = document.getElementById('report-filter').value;
            const { jsPDF } = window.jspdf; 
            const doc = new jsPDF();
            
            // Paleta Premium Velora
            const darkBlue = [15, 22, 34];
            const accentBlue = [59, 130, 246];
            const textDark = [30, 41, 59];
            const textMuted = [100, 116, 139];

            // Header Doc
            doc.setFillColor(...darkBlue); doc.rect(0, 0, 210, 35, 'F');
            doc.setTextColor(255); doc.setFontSize(24); doc.setFont("helvetica", "bold");
            doc.text("VELORA", 14, 22);

            const pt = per === 'daily' ? 'Reporte Diario' : per === 'weekly' ? 'Reporte Semanal' : 'Reporte Mensual'; 
            doc.setFontSize(10); doc.setFont("helvetica", "normal");
            doc.text(pt.toUpperCase() + " DE GESTIONES", 115, 22);

            const nw = new Date(); 
            let st = new Date(); 
            if(per === 'daily') st.setHours(0,0,0,0); 
            else if(per === 'weekly') st.setDate(nw.getDate() - 7); 
            else st.setDate(nw.getDate() - 30);
            
            let tc = 0, ti = 0, tv = 0; 
            const rows = [];
            
            window.visibleContacts.forEach(c => {
                if(fil !== 'all' && c.type !== fil) return;
                if(c.calls) {
                    c.calls.forEach(call => { 
                        const cd = new Date(call.date); 
                        if(cd >= st && cd <= nw) { 
                            tc++; 
                            const lwr = call.status.toLowerCase();
                            if(lwr.includes('interesado') && !lwr.includes('no')) ti++; 
                            if(lwr.includes('cerrada')) tv++; 
                            rows.push([`${cd.toLocaleDateString()} ${cd.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}`, c.name, call.status, c.ownerName || 'Sistema']); 
                        } 
                    });
                }
            });
            rows.sort((a,b) => new Date(b[0]) - new Date(a[0]));

            doc.setTextColor(...textDark); doc.setFontSize(16); doc.setFont("helvetica", "bold"); 
            doc.text("Resumen de Productividad", 14, 50);

            // Cajas Visuales
            doc.setFillColor(248, 250, 252); doc.setDrawColor(226, 232, 240);
            doc.roundedRect(14, 55, 55, 25, 2, 2, 'FD');
            doc.roundedRect(77, 55, 55, 25, 2, 2, 'FD');
            doc.roundedRect(140, 55, 56, 25, 2, 2, 'FD');

            doc.setTextColor(...textMuted); doc.setFontSize(9); doc.setFont("helvetica", "bold");
            doc.text("TOTAL LLAMADAS", 41.5, 63, null, null, "center");
            doc.text("INTERESADOS", 104.5, 63, null, null, "center");
            doc.text("CIERRES / VENTAS", 168, 63, null, null, "center");

            doc.setTextColor(...accentBlue); doc.setFontSize(22); doc.setFont("helvetica", "bold");
            doc.text(`${tc}`, 41.5, 75, null, null, "center");
            doc.setTextColor(24, 160, 251); doc.text(`${ti}`, 104.5, 75, null, null, "center");
            doc.setTextColor(16, 185, 129); doc.text(`${tv}`, 168, 75, null, null, "center");

            // Tabla Striped
            doc.autoTable({ 
                startY: 95, head: [["Fecha / Hora", "Contacto Evaluado", "Estado", "Agente"]], body: rows, theme: 'striped', 
                headStyles: { fillColor: darkBlue, textColor: 255, fontStyle: 'bold' },
                bodyStyles: { textColor: textDark }, alternateRowStyles: { fillColor: [248, 250, 252] },
                styles: { fontSize: 9, cellPadding: 5 }, columnStyles: { 0: { cellWidth: 35 }, 2: { fontStyle: 'bold' } }
            });

            // Footer
            const pageCount = doc.internal.getNumberOfPages();
            for(let i = 1; i <= pageCount; i++) {
                doc.setPage(i); doc.setFontSize(8); doc.setTextColor(...textMuted);
                doc.text(`Documento Confidencial - Generado vía Velora Tracker Premium`, 14, 290);
                doc.text(`Página ${i} de ${pageCount}`, 185, 290);
                doc.setDrawColor(226, 232, 240); doc.line(14, 285, 196, 285);
            }

            doc.save(`Velora_${pt.replace(' ','_')}_${Date.now()}.pdf`); 
            window.closeReportModal(); 
            window.showToast("Reporte Listo", "Documento PDF descargado.", "success");
        };

        // REPORTE EXPEDIENTE (PDF INDIVIDUAL)
        window.exportToPDF = () => {
            const c = window.visibleContacts.find(x => x.id === window.currentContactId); 
            if(!c) return;
            const { jsPDF } = window.jspdf; const doc = new jsPDF();
            
            const darkBlue = [15, 22, 34];
            const accentBlue = [59, 130, 246];
            const textDark = [30, 41, 59];
            const textMuted = [100, 116, 139];

            doc.setFillColor(...darkBlue); doc.rect(0, 0, 210, 35, 'F');
            doc.setTextColor(255); doc.setFontSize(24); doc.setFont("helvetica", "bold");
            doc.text("VELORA", 14, 22);
            
            doc.setFillColor(...accentBlue); doc.roundedRect(165, 15, 30, 8, 1, 1, 'F');
            doc.setFontSize(9); doc.setFont("helvetica", "bold");
            doc.text(c.type.toUpperCase(), 180, 20, null, null, "center");

            doc.setTextColor(...textDark); doc.setFontSize(16); doc.setFont("helvetica", "bold");
            doc.text("Expediente de Contacto", 14, 50);
            
            doc.setFillColor(241, 245, 249); doc.roundedRect(14, 55, 182, 35, 2, 2, 'F');
            doc.setFontSize(10);
            
            doc.setTextColor(...textMuted); doc.setFont("helvetica", "normal"); doc.text("Nombre Completo:", 20, 65);
            doc.setTextColor(...textDark); doc.setFont("helvetica", "bold"); doc.text(c.name, 20, 70);

            doc.setTextColor(...textMuted); doc.setFont("helvetica", "normal"); doc.text("Teléfono:", 90, 65);
            doc.setTextColor(...textDark); doc.setFont("helvetica", "bold"); doc.text(c.phone, 90, 70);

            doc.setTextColor(...textMuted); doc.setFont("helvetica", "normal"); doc.text("Correo:", 145, 65);
            doc.setTextColor(...textDark); doc.setFont("helvetica", "bold"); doc.text(c.email || 'N/A', 145, 70);

            doc.setTextColor(...textMuted); doc.setFont("helvetica", "normal"); doc.text("Agente Asignado:", 20, 80);
            doc.setTextColor(...textDark); doc.setFont("helvetica", "bold"); doc.text(c.ownerName || 'Sistema', 20, 85);

            const tr = []; 
            (c.calls||[]).forEach(x => { 
                const d = new Date(x.date); 
                tr.push([`${d.toLocaleDateString()}\n${d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}`, x.status, x.notes]); 
            });
            
            doc.autoTable({ 
                startY: 100, head: [["Fecha y Hora", "Estado", "Notas de Gestión"]], body: tr, theme: 'striped', 
                headStyles: { fillColor: darkBlue, textColor: 255, fontStyle: 'bold' }, bodyStyles: { textColor: textDark }, alternateRowStyles: { fillColor: [248, 250, 252] },
                styles: { fontSize: 9, cellPadding: 5 }, columnStyles: { 0: { cellWidth: 35 }, 1: { cellWidth: 45, fontStyle: 'bold' }, 2: { cellWidth: 'auto' } }
            });

            const pageCount = doc.internal.getNumberOfPages();
            for(let i = 1; i <= pageCount; i++) {
                doc.setPage(i); doc.setFontSize(8); doc.setTextColor(...textMuted);
                doc.text(`Documento Confidencial - Generado vía Velora Tracker Premium`, 14, 290);
                doc.text(`Página ${i} de ${pageCount}`, 185, 290);
                doc.setDrawColor(226, 232, 240); doc.line(14, 285, 196, 285);
            }
            
            doc.save(`Velora_Expediente_${c.name.replace(/\s+/g,'_')}.pdf`);
            window.showToast("Descargado", "La Ficha Ejecutiva ha sido generada.", "success");
        };
    </script>
</body>
</html>
