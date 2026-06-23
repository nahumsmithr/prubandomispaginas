<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Velora | Premium CRM & Workspace</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    
    <!-- jsPDF & AutoTable -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.28/jspdf.plugin.autotable.min.js"></script>

    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- Google Identity Services & GAPI para Google Calendar -->
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script src="https://apis.google.com/js/api.js" async defer></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        veloraDark: '#080c14',
                        veloraCard: '#0f1622',
                        veloraBorder: 'rgba(255,255,255,0.08)',
                        veloraAccent: '#3b82f6',
                        veloraGreen: '#10b981',
                        veloraSidebar: '#05080f',
                    },
                    boxShadow: {
                        'glow': '0 0 20px rgba(59, 130, 246, 0.25)',
                        'glow-green': '0 0 20px rgba(16, 185, 129, 0.3)',
                        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
                    }
                }
            }
        }
    </script>
    
    <style>
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 9999px; }
        ::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
        
        .glass-card { 
            background-color: rgba(15, 22, 34, 0.85); 
            border: 1px solid rgba(255, 255, 255, 0.06); 
            backdrop-filter: blur(24px); 
            -webkit-backdrop-filter: blur(24px);
        }
        
        .glass-panel { 
            background: rgba(15, 22, 34, 0.7); 
            border: 1px solid rgba(255, 255, 255, 0.1); 
            backdrop-filter: blur(20px); 
        }
        
        .text-glow { text-shadow: 0 0 12px rgba(59, 130, 246, 0.6); }
        .text-glow-green { text-shadow: 0 0 12px rgba(16, 185, 129, 0.6); }
        
        .fade-in { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeIn { 
            from { opacity: 0; transform: translateY(10px); } 
            to { opacity: 1; transform: translateY(0); } 
        }

        /* --- SISTEMA DE FONDOS DINÁMICOS --- */
        .theme-monolith { background: linear-gradient(to bottom right, #080c14, #04060a) !important; }
        .theme-cyberpunk { background: linear-gradient(135deg, #05080f 0%, #1e0730 50%, #02040a 100%) !important; }
        .theme-emerald { background: radial-gradient(circle at top right, #022c22, #020617, #000000) !important; }
        .theme-crimson { background: radial-gradient(circle at top left, #300303, #020617, #000000) !important; }
        .theme-nebula { background: radial-gradient(ellipse at center, #2e1065 0%, #080c14 60%, #000000 100%) !important; }
        .theme-aurora {
            background: linear-gradient(45deg, #05080f, #12102e, #022c22, #05080f) !important;
            background-size: 400% 400% !important;
            animation: gradientBG 15s ease infinite !important;
        }
        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .cyber-btn {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cyber-btn:active {
            transform: scale(0.95);
        }
    </style>
</head>
<body class="bg-veloraDark text-gray-100 font-sans h-screen flex overflow-hidden theme-monolith relative" id="app-body">

    <canvas id="bg-space-canvas" class="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"></canvas>

    <!-- ========================================== -->
    <!-- 1. GLOBAL LOADER                           -->
    <!-- ========================================== -->
    <div id="global-loader" class="fixed inset-0 z-[200] bg-veloraDark flex flex-col items-center justify-center transition-opacity duration-500">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-pulse mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3b82f6"/>
            <path d="M2 17L12 22L22 17" stroke="#3b82f6" stroke-width="2" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#3b82f6" stroke-width="2" stroke-linejoin="round"/>
        </svg>
        <div class="text-white font-black tracking-widest uppercase text-sm">VELORA WORKSPACE</div>
        <div class="text-gray-500 text-xs mt-2">Cargando módulos de sincronización avanzada...</div>
    </div>

    <!-- ========================================== -->
    <!-- 2. PANTALLA DE LOGIN / REGISTRO            -->
    <!-- ========================================== -->
    <div id="auth-screen" class="fixed inset-0 z-[100] bg-veloraDark flex flex-col items-center justify-center hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-veloraAccent/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="w-full max-w-md glass-panel p-10 rounded-[2rem] shadow-2xl relative z-10 mx-4 border border-white/10">
            <div class="text-center mb-10 flex flex-col items-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3b82f6"/>
                    <path d="M2 17L12 22L22 17" stroke="#3b82f6" stroke-width="2" stroke-linejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#3b82f6" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                <h1 class="text-3xl font-black text-white tracking-[0.2em] uppercase">VELORA</h1>
                <p class="text-[10px] text-veloraAccent font-bold tracking-[0.3em] mt-2 uppercase" id="auth-subtitle">Workspace</p>
            </div>

            <form id="auth-form" class="space-y-6" onsubmit="handleAuth(event)">
                <div id="register-fields" class="hidden space-y-6">
                    <div>
                        <div class="relative">
                            <i class="fas fa-user absolute left-4 top-4 text-gray-500"></i>
                            <input type="text" id="auth-name" class="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-veloraBorder rounded-2xl text-white text-sm focus:border-veloraAccent focus:bg-slate-900/80 outline-none transition font-medium" placeholder="Nombre Completo">
                        </div>
                    </div>
                </div>

                <div>
                    <div class="relative">
                        <i class="fas fa-envelope absolute left-4 top-4 text-gray-500"></i>
                        <input type="text" id="auth-email" class="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-veloraBorder rounded-2xl text-white text-sm focus:border-veloraAccent focus:bg-slate-900/80 outline-none transition font-medium" placeholder="Correo de Acceso" required>
                    </div>
                </div>

                <div>
                    <div class="relative">
                        <i class="fas fa-lock absolute left-4 top-4 text-gray-500"></i>
                        <input type="password" id="auth-password" class="w-full pl-12 pr-4 py-3.5 bg-black/40 border border-veloraBorder rounded-2xl text-white text-sm focus:border-veloraAccent focus:bg-slate-900/80 outline-none transition font-medium" placeholder="Clave de Acceso" required>
                    </div>
                </div>

                <button type="submit" id="auth-btn" class="w-full py-4 mt-2 bg-white text-veloraDark rounded-2xl font-black tracking-widest uppercase text-xs hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] cyber-btn">
                    Ingresar al Workspace
                </button>
            </form>

            <div class="mt-8 text-center">
                <button type="button" onclick="toggleAuthMode()" id="auth-toggle-btn" class="text-xs text-gray-400 hover:text-white font-medium transition">
                    ¿No tienes cuenta? <span class="text-veloraAccent font-bold">Regístrate aquí</span>
                </button>
            </div>
        </div>
    </div>

    <!-- SIDEBAR -->
    <aside id="app-sidebar" class="w-[280px] bg-veloraSidebar flex flex-col flex-shrink-0 z-40 border-r border-veloraBorder hidden md:flex relative h-full">
        <!-- Logo Area -->
        <div class="p-8 border-b border-veloraBorder flex items-center justify-center gap-3 relative overflow-hidden bg-gradient-to-b from-slate-900/50 to-transparent">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-glow">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3b82f6"/>
                <path d="M2 17L12 22L22 17" stroke="#3b82f6" stroke-width="2" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#3b82f6" stroke-width="2" stroke-linejoin="round"/>
            </svg>
            <span class="text-2xl font-black tracking-[0.15em] text-white mt-1">VELORA</span>
        </div>

        <!-- GAMIFICACIÓN: Tarjeta de Nivel RPG -->
        <div class="mx-5 mt-6 p-4 rounded-2xl bg-gradient-to-br from-purple-900/40 to-slate-900/60 border border-purple-500/20 shadow-glow-purple">
            <div class="flex justify-between items-center mb-1">
                <span class="text-[10px] font-black tracking-widest text-purple-400 uppercase">SISTEMA CORTEX</span>
                <span class="text-xs font-black text-white bg-purple-600 px-2 py-0.5 rounded-md" id="rpg-level-badge">LV 1</span>
            </div>
            <p class="text-[11px] font-bold text-gray-300">Rango: <span class="text-white font-black" id="rpg-rank-text">Operador Novato</span></p>
            <div class="mt-3">
                <div class="flex justify-between text-[9px] text-gray-400 font-bold mb-1">
                    <span>XP TOTAL: <span id="rpg-xp-text">0</span>/100</span>
                    <span id="rpg-streak-days">🔥 0 días</span>
                </div>
                <div class="w-full h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5">
                    <div id="rpg-xp-bar" class="h-full bg-gradient-to-r from-purple-500 to-veloraAccent w-[0%] transition-all duration-500"></div>
                </div>
            </div>
        </div>
        
        <nav class="flex-1 py-6 px-5 space-y-2 overflow-y-auto">
            <p class="text-[10px] font-bold text-gray-600 uppercase tracking-widest px-3 mb-3">Principal</p>
            <button onclick="showView('dashboard')" id="nav-dashboard" class="w-full text-left px-4 py-3.5 flex items-center gap-4 rounded-xl text-white bg-slate-800/60 shadow-glow font-bold transition-all border border-veloraBorder cyber-btn">
                <i class="fas fa-chart-pie w-5 text-center text-lg text-veloraAccent"></i> Dashboard
            </button>
            <button onclick="showView('leads')" id="nav-leads" class="w-full text-left px-4 py-3.5 flex items-center gap-4 rounded-xl hover:bg-slate-800/40 text-gray-400 hover:text-white font-bold transition-all border border-transparent cyber-btn">
                <i class="fas fa-filter w-5 text-center text-lg text-orange-500"></i> Directorio/CRM <span class="ml-auto text-[10px] bg-slate-800 px-2 py-0.5 rounded-md" id="sidebar-leads-count">0</span>
            </button>
            <button onclick="showView('tasks')" id="nav-tasks" class="w-full text-left px-4 py-3.5 flex items-center gap-4 rounded-xl hover:bg-slate-800/40 text-gray-400 hover:text-white font-bold transition-all border border-transparent cyber-btn">
                <i class="fas fa-calendar-check w-5 text-center text-lg text-yellow-500"></i> Eisenhower Matrix <span class="ml-auto text-[10px] bg-slate-800 px-2 py-0.5 rounded-md text-yellow-500 font-black" id="sidebar-tasks-count">0</span>
            </button>
            <button onclick="showView('habits')" id="nav-habits" class="w-full text-left px-4 py-3.5 flex items-center gap-4 rounded-xl hover:bg-slate-800/40 text-gray-400 hover:text-white font-bold transition-all border border-transparent cyber-btn">
                <i class="fas fa-seedling w-5 text-center text-lg text-emerald-400"></i> Hábitos & Pomodoro
            </button>
            
            <p class="text-[10px] font-bold text-purple-500/70 uppercase tracking-widest px-3 pt-6 mb-3">Avanzado</p>
            <button onclick="showView('customizer')" id="nav-customizer" class="w-full text-left px-4 py-3.5 flex items-center gap-4 rounded-xl hover:bg-slate-800/40 text-gray-400 hover:text-white font-bold transition-all border border-transparent cyber-btn">
                <i class="fas fa-sliders-h w-5 text-center text-lg text-purple-400"></i> Personalizar Workspace
            </button>
            
            <div id="admin-nav-section" class="hidden pt-6">
                <p class="text-[10px] font-bold text-purple-500/70 uppercase tracking-widest px-3 mb-3">Workspace Admin</p>
                <button onclick="showView('admin')" id="nav-admin" class="w-full text-left px-4 py-3.5 flex items-center gap-4 rounded-xl hover:bg-purple-900/20 text-gray-400 hover:text-purple-300 font-bold transition-all border border-transparent cyber-btn">
                    <i class="fas fa-shield-alt w-5 text-center text-lg text-purple-500"></i> Panel de Control
                </button>
            </div>

            <div class="pt-6">
                <p class="text-[10px] font-bold text-gray-600 uppercase tracking-widest px-3 mb-3">Preferencias</p>
                <button onclick="showView('settings')" id="nav-settings" class="w-full text-left px-4 py-3.5 flex items-center gap-4 rounded-xl hover:bg-slate-800/40 text-gray-400 hover:text-white font-bold transition-all border border-transparent cyber-btn">
                    <i class="fas fa-cog w-5 text-center text-lg text-gray-400"></i> Configuración
                </button>
            </div>
        </nav>
        
        <!-- Perfil inferior -->
        <div class="p-6 border-t border-veloraBorder bg-black/20">
            <div class="flex items-center gap-3">
                <img id="sidebar-avatar" src="" alt="Avatar" class="w-12 h-12 rounded-xl object-cover border border-veloraBorder hidden bg-slate-800">
                <div id="sidebar-avatar-fallback" class="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 border border-veloraBorder flex items-center justify-center text-sm font-black text-white shadow-inner">U</div>
                
                <div class="flex-1 overflow-hidden">
                    <p class="text-sm font-bold text-white truncate" id="user-display-name">Usuario</p>
                    <p class="text-[10px] text-veloraAccent font-black uppercase tracking-wider" id="user-display-role">Normal</p>
                </div>
            </div>
            <button onclick="openContactModal()" class="w-full mt-6 py-3.5 bg-white text-veloraDark hover:bg-gray-200 rounded-xl font-black uppercase text-[11px] tracking-widest shadow-glow transition-all flex items-center justify-center gap-2 cyber-btn">
                <i class="fas fa-plus"></i> Nuevo Contacto
            </button>
        </div>
    </aside>

    <!-- MOBILE NAV BTN -->
    <button onclick="toggleMobileMenu()" class="md:hidden absolute top-4 left-4 z-50 p-2.5 bg-veloraCard rounded-lg border border-veloraBorder shadow text-gray-300 hover:text-white transition cyber-btn">
        <i class="fas fa-bars text-lg"></i>
    </button>

    <!-- MAIN CONTENT AREA -->
    <main class="flex-1 flex flex-col h-screen overflow-hidden relative w-full bg-transparent hidden z-10" id="app-main-view">
        
        <!-- HEADER SUPERIOR -->
        <header class="px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-10 pl-16 md:pl-8 bg-gradient-to-b from-veloraDark/80 to-transparent">
            <div>
                <h2 id="topbar-title" class="text-3xl font-black text-white tracking-tight">Executive Overview</h2>
                <p id="topbar-subtitle" class="text-xs text-veloraAccent font-bold uppercase tracking-widest mt-1">Métricas en tiempo real</p>
            </div>
            
            <div class="flex items-center gap-4 w-full sm:w-auto flex-wrap sm:flex-nowrap">
                
                <!-- SINTETIZADOR ZEN DRONE DE FOCUS -->
                <button onclick="toggleAmbientDrone()" id="btn-zen-drone" class="px-4 py-2.5 bg-slate-900/60 border border-purple-500/20 text-purple-400 rounded-full flex items-center gap-2 text-[10px] font-black tracking-widest uppercase hover:text-white hover:bg-slate-800 transition shadow-sm backdrop-blur-md cyber-btn" title="Activa un sintetizador espacial de fondo para focus">
                    <i class="fas fa-wave-square animate-pulse"></i> <span id="zen-drone-text">Zen Ambient: Off</span>
                </button>

                <!-- Sincronización Google Calendar -->
                <button id="btn-google-auth" onclick="handleGoogleAuth()" class="px-4 py-2.5 bg-slate-900/60 border border-veloraBorder text-gray-300 rounded-full flex items-center gap-2 text-[10px] font-black tracking-widest uppercase hover:text-white hover:bg-slate-800 transition shadow-sm backdrop-blur-md cyber-btn">
                    <i class="fab fa-google text-red-500"></i> <span id="google-auth-text">Google Cal Desconectado</span>
                </button>

                <!-- ESTADO DE CONEXIÓN FIREBASE -->
                <div id="db-status-badge" class="px-4 py-2.5 bg-slate-900/60 border border-veloraBorder text-red-500 rounded-full flex items-center gap-2 text-[10px] font-black tracking-widest transition-all shadow-sm backdrop-blur-md">
                    <span class="relative flex h-2.5 w-2.5">
                        <span id="db-status-ping" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span id="db-status-dot" class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span id="db-status-text">OFFLINE</span>
                </div>

                <!-- MENÚ DE HERRAMIENTAS GLOBALES -->
                <div class="relative group hidden sm:block">
                    <button class="px-5 py-2.5 glass-card text-white rounded-full hover:bg-white/10 flex items-center gap-2 transition text-xs font-bold tracking-widest uppercase cyber-btn">
                        <i class="fas fa-bolt text-veloraAccent"></i> Acciones <i class="fas fa-chevron-down text-[10px] ml-1 opacity-50"></i>
                    </button>
                    <div class="absolute right-0 mt-2 w-64 glass-card rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden py-2">
                        
                        <label for="csv-upload" class="cursor-pointer w-full text-left px-5 py-3 hover:bg-white/5 flex items-center gap-3 text-sm font-medium text-gray-300 transition m-0 block">
                            <div class="w-8 h-8 rounded-lg bg-veloraGreen/10 flex items-center justify-center text-veloraGreen"><i class="fas fa-file-import"></i></div> Importar Excel (CSV)
                        </label>
                        <input type="file" id="csv-upload" accept=".csv" onchange="importCSV(event)" class="hidden">
                        
                        <button onclick="exportCSV()" class="w-full text-left px-5 py-3 hover:bg-white/5 flex items-center gap-3 text-sm font-medium text-gray-300 transition">
                            <div class="w-8 h-8 rounded-lg bg-veloraAccent/10 flex items-center justify-center text-veloraAccent"><i class="fas fa-file-export"></i></div> Exportar Datos (CSV)
                        </button>

                        <button onclick="openReportModal()" class="w-full text-left px-5 py-3 hover:bg-white/5 flex items-center gap-3 text-sm font-medium text-gray-300 transition">
                            <div class="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500"><i class="fas fa-file-pdf"></i></div> Reporte General PDF
                        </button>
                        
                        <div class="h-px w-full bg-veloraBorder my-2"></div>

                        <button onclick="performLogout()" class="w-full text-left px-5 py-3 hover:bg-red-500/10 hover:text-red-400 flex items-center gap-3 text-sm font-medium text-gray-400 transition">
                            <div class="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500"><i class="fas fa-power-off"></i></div> Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- CAJA DE CAPTURA RÁPIDA (MIND DUMP) -->
        <div class="px-8 mb-4">
            <div class="glass-card rounded-2xl p-1 px-4 flex items-center gap-4 border border-white/5 focus-within:border-veloraAccent/40 transition-colors shadow-glow">
                <i class="fas fa-brain text-purple-400 animate-pulse"></i>
                <input type="text" id="mind-dump-input" onkeydown="handleMindDump(event)" placeholder="¿Qué tienes en mente? Escríbelo y presiona Enter para crear una tarea rápida..." class="flex-1 bg-transparent py-3 text-sm text-gray-200 placeholder-gray-500 outline-none">
                <span class="text-[9px] font-black text-gray-500 uppercase tracking-widest bg-black/40 px-2 py-1 rounded">Captura Rápida</span>
            </div>
        </div>

        <!-- CONTENEDOR DE VISTAS -->
        <div class="flex-1 overflow-y-auto p-4 sm:p-8 relative scroll-smooth" id="main-container">
            
            <!-- ================================== -->
            <!-- VISTA 1: DASHBOARD                 -->
            <!-- ================================== -->
            <div id="view-dashboard" class="fade-in space-y-6">
                <!-- Metrics Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div class="glass-card rounded-3xl p-6 relative overflow-hidden group">
                        <div class="absolute -right-4 -top-4 w-24 h-24 bg-veloraAccent/20 rounded-full blur-2xl group-hover:bg-veloraAccent/40 transition-colors"></div>
                        <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Base Total</span>
                        <h4 class="text-4xl font-black mt-2 text-white" id="stat-total">0</h4>
                    </div>
                    <div class="glass-card rounded-3xl p-6 relative overflow-hidden group">
                        <div class="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl group-hover:bg-orange-500/40 transition-colors"></div>
                        <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Leads Activos</span>
                        <h4 class="text-4xl font-black mt-2 text-orange-400" id="stat-leads">0</h4>
                    </div>
                    <div class="glass-card rounded-3xl p-6 relative overflow-hidden group">
                        <div class="absolute -right-4 -top-4 w-24 h-24 bg-veloraGreen/20 rounded-full blur-2xl group-hover:bg-veloraGreen/40 transition-colors"></div>
                        <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Clientes (Wins)</span>
                        <h4 class="text-4xl font-black mt-2 text-veloraGreen text-glow-green" id="stat-clients">0</h4>
                    </div>
                    <div class="glass-card rounded-3xl p-6 relative overflow-hidden group">
                        <div class="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/40 transition-colors"></div>
                        <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Gestiones (Llamadas)</span>
                        <h4 class="text-4xl font-black mt-2 text-purple-400" id="stat-calls">0</h4>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Dashboard central y Agenda de Hoy -->
                    <div class="glass-card rounded-3xl p-6 lg:col-span-2 flex flex-col">
                        <div class="flex justify-between items-end mb-8">
                            <div>
                                <h3 class="text-xl font-bold text-white tracking-wide">Rendimiento Operativo</h3>
                                <p class="text-xs text-gray-500 mt-1" id="dash-chart-subtitle">Volumen de llamadas en los últimos 7 días</p>
                            </div>
                            <div class="text-right">
                                <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Total Semanal</span>
                                <span class="text-3xl font-black text-veloraAccent text-glow block mt-1" id="chart-total-count">0</span>
                            </div>
                        </div>
                        <div class="relative flex-1 min-h-[250px]">
                            <canvas id="callsChart"></canvas>
                        </div>
                    </div>
                    
                    <div class="glass-card rounded-3xl p-6 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="text-sm font-black text-white uppercase tracking-widest">Top Prospectos</h3>
                                <button class="text-[10px] font-bold text-veloraAccent uppercase tracking-widest bg-veloraAccent/10 px-3 py-1.5 rounded-full hover:bg-veloraAccent/20 transition cyber-btn" onclick="showView('leads')">Ver Todos</button>
                            </div>
                            <div class="space-y-3" id="top-leads-list">
                                <!-- Dinámico -->
                            </div>
                        </div>
                        <div class="mt-6 pt-6 border-t border-veloraBorder">
                            <p class="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Tasa de Conversión</p>
                            <div class="flex items-center gap-4">
                                <div class="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div class="h-full bg-veloraGreen shadow-glow-green transition-all duration-1000" id="funnel-bar" style="width: 0%"></div>
                                </div>
                                <span class="font-black text-veloraGreen text-glow-green" id="funnel-ratio">0%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-6">
                    <div class="glass-card rounded-3xl p-6">
                        <div class="flex justify-between items-center border-b border-veloraBorder pb-4 mb-4">
                            <div>
                                <h3 class="font-black text-white text-md uppercase tracking-wider"><i class="fas fa-calendar-day text-yellow-500 mr-2"></i> Tu Agenda para Hoy</h3>
                                <p class="text-xs text-gray-500 mt-1">Llamadas, correos y citas programadas para resolver el día de hoy</p>
                            </div>
                            <button onclick="showView('tasks')" class="text-[10px] font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1.5 rounded-full hover:bg-yellow-500/20 transition uppercase tracking-widest cyber-btn">Ver Calendario Completo</button>
                        </div>
                        <div id="dashboard-today-tasks" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <!-- Dinámico -->
                        </div>
                    </div>
                </div>

                <div class="glass-card rounded-3xl overflow-hidden">
                    <div class="px-8 py-6 border-b border-veloraBorder flex justify-between items-center bg-white/5">
                        <h3 class="font-bold text-white tracking-wide">Interacciones Recientes</h3>
                        <span class="text-[10px] font-black bg-veloraAccent/20 text-veloraAccent px-3 py-1 rounded-full border border-veloraAccent/30"><i class="fas fa-circle text-[8px] animate-pulse mr-1"></i> LIVE</span>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse" id="recent-table">
                            <thead>
                                <tr class="text-[10px] text-gray-500 uppercase font-black tracking-widest border-b border-veloraBorder bg-black/20">
                                    <th class="py-5 px-8">Identidad</th>
                                    <th class="py-5 px-8">Clasificación</th>
                                    <th class="py-5 px-8">Contacto</th>
                                    <th class="py-5 px-8 hidden sm:table-cell">Responsable</th>
                                    <th class="py-5 px-8">Último Estado</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-veloraBorder">
                                <!-- Dinámico -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- ================================== -->
            <!-- VISTA 2: DIRECTORIO (LEADS/CLIENTS)-->
            <!-- ================================== -->
            <div id="view-list" class="hidden fade-in h-full">
                <div class="glass-card rounded-3xl overflow-hidden flex flex-col h-[calc(100vh-160px)]">
                    <div class="px-8 py-6 border-b border-veloraBorder bg-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                            <h3 id="list-title" class="text-2xl font-black text-white tracking-wide">Directorio</h3>
                            <p id="list-count" class="text-[10px] text-veloraAccent font-black uppercase tracking-widest mt-1">0 registros encontrados</p>
                        </div>
                        
                        <div class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                            <!-- Filtros rápidos -->
                            <div class="flex bg-black/40 p-1 rounded-xl border border-veloraBorder overflow-x-auto w-full sm:w-auto hide-scroll">
                                <button onclick="quickFilter('all')" id="qf-all" class="qf-btn active px-4 py-2 rounded-lg text-xs font-bold text-white bg-white/10 transition whitespace-nowrap cyber-btn">Todos</button>
                                <button onclick="quickFilter('interesado')" id="qf-int" class="qf-btn px-4 py-2 rounded-lg text-xs font-bold text-gray-400 hover:text-white transition whitespace-nowrap cyber-btn">Interesados</button>
                                <button onclick="quickFilter('cerrada')" id="qf-cer" class="qf-btn px-4 py-2 rounded-lg text-xs font-bold text-gray-400 hover:text-white transition whitespace-nowrap cyber-btn">Cierres</button>
                            </div>

                            <div class="relative w-full sm:w-64">
                                <i class="fas fa-search absolute left-4 top-3.5 text-gray-500 text-sm"></i>
                                <input type="text" id="search-input" onkeyup="searchDirectory()" placeholder="Buscar..." class="w-full pl-11 pr-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-sm text-white focus:border-veloraAccent outline-none transition font-medium">
                            </div>
                        </div>
                    </div>
                    <div class="overflow-auto flex-1">
                        <table class="w-full text-left border-collapse" id="directory-table">
                            <thead class="sticky top-0 bg-veloraCard/95 backdrop-blur-md shadow z-10 border-b border-veloraBorder">
                                <tr class="text-[10px] text-gray-500 uppercase tracking-widest font-black">
                                    <th class="py-5 px-8">Nombre Completo</th>
                                    <th class="py-5 px-8 hidden sm:table-cell">Email</th>
                                    <th class="py-5 px-8">Teléfono</th>
                                    <th class="py-5 px-8 hidden sm:table-cell">Agente</th>
                                    <th class="py-5 px-8 text-right">Interacciones</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-veloraBorder font-medium">
                                <!-- Dinámico -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- ================================== -->
            <!-- VISTA 3: EXPEDIENTE (DETALLE)      -->
            <!-- ================================== -->
            <div id="view-detail" class="hidden fade-in space-y-6">
                <div class="flex justify-between items-center mb-2">
                    <button onclick="goBack()" class="flex items-center gap-2 text-gray-400 hover:text-white transition font-bold text-xs uppercase tracking-widest bg-black/40 border border-veloraBorder px-4 py-2.5 rounded-full cyber-btn">
                        <i class="fas fa-arrow-left"></i> Volver
                    </button>
                    <div class="flex gap-2">
                        <button onclick="editCurrentContact()" class="w-10 h-10 flex items-center justify-center bg-black/40 text-gray-300 hover:text-white rounded-full border border-veloraBorder transition cyber-btn" title="Editar"><i class="fas fa-pen"></i></button>
                        <button onclick="deleteCurrentContact()" class="w-10 h-10 flex items-center justify-center bg-black/40 text-gray-400 hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 rounded-full border border-veloraBorder transition cyber-btn" title="Eliminar"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
                
                <div class="glass-card rounded-3xl overflow-hidden">
                    <div class="p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8 relative border-b border-veloraBorder bg-white/5 overflow-hidden">
                        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-veloraAccent/20 rounded-full blur-[80px]"></div>
                        
                        <div class="w-32 h-32 rounded-3xl border border-white/20 bg-gradient-to-br from-slate-800 to-black flex items-center justify-center text-5xl font-black shadow-2xl relative z-10 text-white" id="detail-avatar"></div>
                        <div class="flex-1 relative z-10 text-center md:text-left">
                            <div class="flex flex-col md:flex-row items-center gap-4 mb-4">
                                <h1 id="detail-name" class="text-4xl font-black text-white tracking-tight">Cargando...</h1>
                                <span id="detail-badge" class="px-3 py-1.5 text-[10px] font-black rounded-lg uppercase tracking-widest border">LEAD</span>
                            </div>
                            <div class="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 text-gray-300 text-sm font-bold mt-2">
                                <span class="flex items-center gap-2"><i class="fas fa-phone text-veloraAccent"></i> <span id="detail-phone">---</span></span>
                                <span class="flex items-center gap-2"><i class="fas fa-envelope text-veloraAccent"></i> <span id="detail-email">---</span></span>
                                <span class="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-veloraBorder"><i class="fas fa-user-shield text-purple-400"></i> Agente: <span id="detail-owner" class="text-white">---</span></span>
                            </div>
                        </div>
                        <div class="flex gap-2 relative z-10">
                            <button onclick="openTaskModalForContact()" class="px-5 py-4 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 rounded-2xl font-black uppercase tracking-widest text-xs transition cyber-btn">
                                <i class="fas fa-calendar-plus mr-1"></i> Agendar Tarea
                            </button>
                            <button onclick="exportToPDF()" class="px-8 py-4 bg-white text-veloraDark rounded-2xl font-black uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-gray-200 transition cyber-btn">
                                <i class="fas fa-file-pdf mr-2"></i> Exportar Ficha
                            </button>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-veloraBorder">
                        <!-- Formulario -->
                        <div class="p-8 lg:p-10 bg-black/20">
                            <h3 class="text-sm font-black text-white mb-6 uppercase tracking-widest"><i class="fas fa-plus-circle text-veloraAccent mr-2"></i> Registrar Acción</h3>
                            <form id="call-form" onsubmit="saveCall(event)" class="space-y-6">
                                <div>
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Fecha y Hora</label>
                                    <input type="datetime-local" id="call-date" class="w-full px-4 py-3 bg-black/50 border border-veloraBorder rounded-xl text-white text-sm focus:border-veloraAccent outline-none" required>
                                </div>
                                <div>
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Resultado / Interacción</label>
                                    <div class="relative">
                                        <select id="call-status" class="w-full px-4 py-3 bg-black/50 border border-veloraBorder rounded-xl text-white text-sm appearance-none focus:border-veloraAccent outline-none" required>
                                            <option value="" disabled selected>Seleccionar estado...</option>
                                        </select>
                                        <i class="fas fa-chevron-down text-xs absolute right-4 top-4 text-gray-500 pointer-events-none"></i>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Detalles</label>
                                    <textarea id="call-notes" rows="5" class="w-full px-4 py-3 bg-black/50 border border-veloraBorder rounded-xl text-white text-sm resize-none focus:border-veloraAccent outline-none" placeholder="Minuta de la conversación..." required></textarea>
                                </div>
                                <button type="submit" class="w-full py-4 bg-veloraAccent text-white rounded-xl font-black uppercase tracking-widest text-xs shadow-glow hover:bg-blue-600 transition cyber-btn">
                                    Guardar
                                </button>
                            </form>
                        </div>

                        <!-- Timeline -->
                        <div class="p-8 lg:p-10 lg:col-span-2">
                            <div class="flex justify-between items-center mb-8 pb-4 border-b border-veloraBorder">
                                <h3 class="text-sm font-black text-white uppercase tracking-widest"><i class="fas fa-history text-gray-500 mr-2"></i> Timeline de Gestión</h3>
                                <span class="text-[10px] bg-black/50 border border-veloraBorder text-veloraAccent px-3 py-1.5 rounded-lg font-black tracking-widest" id="history-count">0 Acciones</span>
                            </div>
                            <div class="relative px-2">
                                <div class="absolute left-6 top-0 bottom-0 w-px bg-veloraBorder"></div>
                                <ul id="calls-timeline" class="space-y-8 relative z-10">
                                    <!-- Dinámico -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ================================== -->
            <!-- VISTA 4: TAREAS (EISENHOWER MATRIX)-->
            <!-- ================================== -->
            <div id="view-tasks" class="hidden fade-in space-y-6">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                        <h3 class="text-xl font-black text-white uppercase tracking-wider">Priorización Metodológica: Matriz de Eisenhower</h3>
                        <p class="text-xs text-gray-400 mt-1">Organiza tus tareas en cuadrantes para optimizar tus decisiones de productividad diaria.</p>
                    </div>
                    <button onclick="openTaskModal()" class="px-5 py-3 bg-yellow-500 hover:bg-yellow-600 text-veloraDark rounded-xl font-black uppercase text-xs tracking-widest transition shadow-lg flex items-center gap-2 cyber-btn">
                        <i class="fas fa-calendar-plus"></i> Nueva Tarea
                    </button>
                </div>

                <!-- Matriz de Eisenhower de 4 Cuadrantes -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" id="eisenhower-matrix-container">
                    
                    <!-- Cuadrante 1: Urgente e Importante -->
                    <div class="glass-card rounded-3xl p-6 border-l-4 border-red-500 flex flex-col h-[350px]">
                        <div class="flex justify-between items-center mb-4 border-b border-veloraBorder pb-3">
                            <span class="text-xs font-black text-red-400 uppercase tracking-widest"><i class="fas fa-fire mr-1.5"></i> 1. Hacer de Inmediato (Urgente + Importante)</span>
                            <span id="task-badge-q1" class="text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-full font-bold">0</span>
                        </div>
                        <div id="tasks-q1" class="space-y-3 flex-1 overflow-y-auto pr-2">
                            <!-- Dinámico -->
                        </div>
                    </div>

                    <!-- Cuadrante 2: No Urgente pero Importante -->
                    <div class="glass-card rounded-3xl p-6 border-l-4 border-blue-500 flex flex-col h-[350px]">
                        <div class="flex justify-between items-center mb-4 border-b border-veloraBorder pb-3">
                            <span class="text-xs font-black text-blue-400 uppercase tracking-widest"><i class="fas fa-calendar-alt mr-1.5"></i> 2. Programar (No Urgente + Importante)</span>
                            <span id="task-badge-q2" class="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-bold">0</span>
                        </div>
                        <div id="tasks-q2" class="space-y-3 flex-1 overflow-y-auto pr-2">
                            <!-- Dinámico -->
                        </div>
                    </div>

                    <!-- Cuadrante 3: Urgente pero No Importante -->
                    <div class="glass-card rounded-3xl p-6 border-l-4 border-orange-500 flex flex-col h-[350px]">
                        <div class="flex justify-between items-center mb-4 border-b border-veloraBorder pb-3">
                            <span class="text-xs font-black text-orange-400 uppercase tracking-widest"><i class="fas fa-user-friends mr-1.5"></i> 3. Delegar / Automatizar (Urgente + No Importante)</span>
                            <span id="task-badge-q3" class="text-[10px] bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2.5 py-1 rounded-full font-bold">0</span>
                        </div>
                        <div id="tasks-q3" class="space-y-3 flex-1 overflow-y-auto pr-2">
                            <!-- Dinámico -->
                        </div>
                    </div>

                    <!-- Cuadrante 4: Ni Urgente Ni Importante -->
                    <div class="glass-card rounded-3xl p-6 border-l-4 border-gray-500 flex flex-col h-[350px]">
                        <div class="flex justify-between items-center mb-4 border-b border-veloraBorder pb-3">
                            <span class="text-xs font-black text-gray-400 uppercase tracking-widest"><i class="fas fa-trash-alt mr-1.5"></i> 4. Eliminar / Archivar (No Urgente + No Importante)</span>
                            <span id="task-badge-q4" class="text-[10px] bg-gray-500/10 text-gray-400 border border-gray-500/20 px-2.5 py-1 rounded-full font-bold">0</span>
                        </div>
                        <div id="tasks-q4" class="space-y-3 flex-1 overflow-y-auto pr-2">
                            <!-- Dinámico -->
                        </div>
                    </div>

                </div>

                <!-- Historial de Tareas Completadas -->
                <div class="glass-card rounded-3xl p-6">
                    <h3 class="text-sm font-black text-white uppercase tracking-wider mb-4"><i class="fas fa-check-circle text-veloraGreen mr-2"></i> Tareas Completadas Recientemente</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="tasks-completed-grid">
                        <!-- Dinámico -->
                    </div>
                </div>
            </div>

            <!-- ================================== -->
            <!-- VISTA 5: HÁBITOS & ENFOQUE POMODORO-->
            <!-- ================================== -->
            <div id="view-habits" class="hidden fade-in space-y-6">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    <!-- Pomodoro Timer Widget -->
                    <div class="glass-card rounded-3xl p-8 flex flex-col items-center justify-between text-center relative overflow-hidden">
                        <div class="absolute -left-12 -top-12 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
                        <div class="relative">
                            <span class="text-[10px] font-black text-red-500 uppercase tracking-widest block mb-1">MÓDULO DE ENFOQUE PROFUNDO</span>
                            <h3 class="text-lg font-black text-white uppercase tracking-wider">TEMPORIZADOR POMODORO</h3>
                        </div>

                        <!-- Timer Display -->
                        <div class="my-8 relative flex items-center justify-center">
                            <svg class="w-48 h-48 transform -rotate-90">
                                <circle cx="96" cy="96" r="80" stroke="rgba(255,255,255,0.05)" stroke-width="8" fill="transparent"/>
                                <circle id="pomodoro-progress" cx="96" cy="96" r="80" stroke="#ef4444" stroke-width="8" fill="transparent" stroke-dasharray="502" stroke-dashoffset="0" class="transition-all duration-1000"/>
                            </svg>
                            <div class="absolute flex flex-col items-center">
                                <span class="text-4xl font-black text-white tracking-widest" id="pomodoro-time">25:00</span>
                                <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1" id="pomodoro-status-label">ENFOQUE</span>
                            </div>
                        </div>

                        <!-- Timer Controls -->
                        <div class="flex gap-4 w-full">
                            <button id="btn-pomodoro-start" onclick="togglePomodoro()" class="flex-1 py-3.5 bg-red-500 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-red-600 transition shadow-[0_0_15px_rgba(239,68,68,0.3)] cyber-btn">
                                Iniciar
                            </button>
                            <button onclick="resetPomodoro()" class="px-5 py-3.5 bg-black/40 border border-veloraBorder text-gray-400 rounded-2xl font-black uppercase text-xs hover:text-white hover:bg-black/60 transition cyber-btn">
                                <i class="fas fa-undo"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Habit Tracker -->
                    <div class="glass-card rounded-3xl p-8 lg:col-span-2 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-6 pb-4 border-b border-veloraBorder">
                                <div>
                                    <h3 class="text-lg font-black text-white uppercase tracking-wider">Control de Hábitos Diarios</h3>
                                    <p class="text-xs text-gray-500 mt-1">Registra tu consistencia en objetivos personales y profesionales para hoy.</p>
                                </div>
                                <button onclick="openAddHabitModal()" class="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 text-emerald-400 rounded-xl font-black text-[10px] uppercase tracking-widest transition cyber-btn">
                                    Nuevo Hábito
                                </button>
                            </div>

                            <!-- Listado de Hábitos para Hoy -->
                            <div class="space-y-4" id="habits-list-today">
                                <!-- Dinámico -->
                            </div>
                        </div>

                        <div class="mt-8 pt-6 border-t border-veloraBorder flex justify-between items-center text-xs text-gray-500">
                            <span>Consistencia Promedio Hoy:</span>
                            <span class="font-black text-emerald-400 text-glow-green" id="habits-today-percentage">0%</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- ================================== -->
            <!-- VISTA 6: PERSONALIZAR WORKSPACE    -->
            <!-- ================================== -->
            <div id="view-customizer" class="hidden fade-in space-y-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    
                    <!-- Configuración de Categorías de Tareas -->
                    <div class="glass-card rounded-3xl p-8 space-y-6">
                        <div>
                            <h3 class="text-lg font-black text-white uppercase tracking-wider"><i class="fas fa-tags text-purple-400 mr-2"></i> Categorías de Tarea</h3>
                            <p class="text-xs text-gray-500 mt-1">Crea tus propias etiquetas con colores y emojis personalizados.</p>
                        </div>

                        <!-- Formulario para agregar categoría de tarea -->
                        <form onsubmit="handleAddCustomCategory(event, 'task')" class="flex gap-2">
                            <input type="text" id="custom-task-emoji" placeholder="📂" class="w-12 text-center bg-black/40 border border-veloraBorder rounded-xl text-white outline-none focus:border-purple-500 text-lg" required>
                            <input type="text" id="custom-task-name" placeholder="Nueva Categoría..." class="flex-1 px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm outline-none focus:border-purple-500 font-medium" required>
                            <button type="submit" class="px-5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-black uppercase text-xs tracking-widest transition cyber-btn"><i class="fas fa-plus"></i></button>
                        </form>

                        <div class="space-y-3" id="custom-task-categories-list">
                            <!-- Cargado Dinámicamente -->
                        </div>
                    </div>

                    <!-- Configuración de Estados de Interacción / Bitácora -->
                    <div class="glass-card rounded-3xl p-8 space-y-6">
                        <div>
                            <h3 class="text-lg font-black text-white uppercase tracking-wider"><i class="fas fa-heartbeat text-blue-400 mr-2"></i> Estados de Interacción</h3>
                            <p class="text-xs text-gray-500 mt-1">Personaliza los estados aplicables a tu bitácora de seguimiento.</p>
                        </div>

                        <!-- Formulario para agregar estado de interacción -->
                        <form onsubmit="handleAddCustomCategory(event, 'interaction')" class="flex gap-2">
                            <input type="text" id="custom-int-emoji" placeholder="📞" class="w-12 text-center bg-black/40 border border-veloraBorder rounded-xl text-white outline-none focus:border-blue-500 text-lg" required>
                            <input type="text" id="custom-int-name" placeholder="Ej: Demostración Realizada" class="flex-1 px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm outline-none focus:border-blue-500 font-medium" required>
                            <button type="submit" class="px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black uppercase text-xs tracking-widest transition cyber-btn"><i class="fas fa-plus"></i></button>
                        </form>

                        <div class="space-y-3" id="custom-int-categories-list">
                            <!-- Cargado Dinámicamente -->
                        </div>
                    </div>

                </div>
            </div>

            <!-- ================================== -->
            <!-- VISTA 7: CONFIGURACIÓN (SETTINGS)  -->
            <!-- ================================== -->
            <div id="view-settings" class="hidden fade-in space-y-6">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    <!-- Tarjeta de Perfil -->
                    <div class="glass-card rounded-3xl p-8 flex flex-col items-center text-center border-t-2 border-veloraAccent">
                        <div class="relative group cursor-pointer mb-6" onclick="document.getElementById('profile-upload').click()">
                            <img id="settings-avatar" src="" class="w-32 h-32 rounded-full object-cover border-4 border-veloraDark shadow-xl hidden bg-slate-800">
                            <div id="settings-avatar-fallback" class="w-32 h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border-4 border-veloraDark flex items-center justify-center text-4xl font-black text-white shadow-xl">U</div>
                            
                            <div class="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                <i class="fas fa-camera text-white text-xl"></i>
                            </div>
                            <input type="file" id="profile-upload" accept="image/*" class="hidden" onchange="handleProfileImageUpload(event)">
                        </div>
                        
                        <h3 class="text-2xl font-black text-white" id="settings-name-display">Usuario</h3>
                        <p class="text-xs font-bold text-veloraAccent uppercase tracking-widest mt-1 mb-4" id="settings-role-display">Rol</p>
                        <p class="text-sm text-gray-400 bg-black/40 px-4 py-2 rounded-lg border border-veloraBorder w-full" id="settings-email-display">correo@ejemplo.com</p>
                    </div>

                    <!-- Formulario Datos y Entorno -->
                    <div class="glass-card rounded-3xl p-8 lg:col-span-2">
                        <h3 class="text-sm font-black text-white uppercase tracking-widest mb-6 border-b border-veloraBorder pb-4">Información Personal</h3>
                        <form onsubmit="saveProfileSettings(event)" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Nombre Mostrado</label>
                                    <input type="text" id="setting-name" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-veloraAccent outline-none" required>
                                </div>
                                <div>
                                    <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Número Telefónico</label>
                                    <input type="tel" id="setting-phone" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-veloraAccent outline-none" placeholder="Opcional">
                                </div>
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Cargo / Bio Breve</label>
                                <input type="text" id="setting-bio" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-veloraAccent outline-none" placeholder="Ej. Senior Sales Executive">
                            </div>
                            <div class="pt-4 text-right">
                                <button type="submit" class="px-8 py-3 bg-white text-veloraDark rounded-xl font-black uppercase text-xs tracking-widest shadow-glow hover:bg-gray-200 transition cyber-btn">
                                    Guardar Cambios
                                </button>
                            </div>
                        </form>

                        <!-- INTEGRACIÓN DE GOOGLE CALENDAR CLIENT ID -->
                        <h3 class="text-sm font-black text-white uppercase tracking-widest mt-8 mb-6 border-b border-veloraBorder pb-4"><i class="fab fa-google text-red-500 mr-2"></i> Integración Google Cloud</h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Google OAuth Client ID</label>
                                <div class="flex gap-3">
                                    <input type="text" id="setting-google-client-id" class="flex-1 px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-xs focus:border-red-500 outline-none font-mono" placeholder="Pega tu Client ID de Google Cloud aquí...">
                                    <button onclick="saveGoogleClientId()" class="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-black uppercase text-xs tracking-widest transition shadow-glow cyber-btn">Guardar ID</button>
                                </div>
                                <p class="text-[10px] text-gray-500 mt-2">Este identificador permite conectar tu cuenta de correo a Google Calendar para programar tareas directamente en la agenda real.</p>
                            </div>
                        </div>

                        <h3 class="text-sm font-black text-white uppercase tracking-widest mt-12 mb-6 border-b border-veloraBorder pb-4">Entorno Visual (Workspace)</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <button onclick="applyTheme('theme-monolith')" class="theme-btn theme-monolith relative rounded-xl h-24 border border-veloraBorder overflow-hidden group shadow-lg cyber-btn">
                                <div class="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition flex items-center justify-center p-2 text-center">
                                    <span class="text-white font-black tracking-widest text-[10px]">MONOLITH (DEFAULT)</span>
                                </div>
                            </button>
                            <button onclick="applyTheme('theme-cyberpunk')" class="theme-btn theme-cyberpunk relative rounded-xl h-24 border border-veloraBorder overflow-hidden group shadow-lg cyber-btn">
                                <div class="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition flex items-center justify-center p-2 text-center">
                                    <span class="text-white font-black tracking-widest text-[10px]">CYBER NEON</span>
                                </div>
                            </button>
                            <button onclick="applyTheme('theme-emerald')" class="theme-btn theme-emerald relative rounded-xl h-24 border border-veloraBorder overflow-hidden group shadow-lg cyber-btn">
                                <div class="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition flex items-center justify-center p-2 text-center">
                                    <span class="text-white font-black tracking-widest text-[10px]">EMERALD CORE</span>
                                </div>
                            </button>
                            <button onclick="applyTheme('theme-crimson')" class="theme-btn theme-crimson relative rounded-xl h-24 border border-veloraBorder overflow-hidden group shadow-lg cyber-btn">
                                <div class="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition flex items-center justify-center p-2 text-center">
                                    <span class="text-white font-black tracking-widest text-[10px]">CRIMSON</span>
                                </div>
                            </button>
                            <button onclick="applyTheme('theme-nebula')" class="theme-btn theme-nebula relative rounded-xl h-24 border border-veloraBorder overflow-hidden group shadow-lg cyber-btn">
                                <div class="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition flex items-center justify-center p-2 text-center">
                                    <span class="text-white font-black tracking-widest text-[10px]">COSMIC VOID</span>
                                </div>
                            </button>
                            <button onclick="applyTheme('theme-aurora')" class="theme-btn theme-aurora relative rounded-xl h-24 border border-veloraBorder overflow-hidden group shadow-lg cyber-btn">
                                <div class="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition flex items-center justify-center p-2 text-center">
                                    <span class="text-white font-black tracking-widest text-[10px] animate-pulse">AURORA (LIVE)</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ================================== -->
            <!-- VISTA 8: ADMIN PANEL               -->
            <!-- ================================== -->
            <div id="view-admin" class="hidden fade-in space-y-6">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div class="glass-card rounded-3xl p-6 border-t-2 border-purple-500">
                        <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Usuarios Activos</span>
                        <h4 class="text-4xl font-black mt-2 text-white" id="admin-stat-users">0</h4>
                    </div>
                    <div class="glass-card rounded-3xl p-6 border-t-2 border-veloraAccent">
                        <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Leads Globales</span>
                        <h4 class="text-4xl font-black mt-2 text-white" id="admin-stat-leads">0</h4>
                    </div>
                    <div class="glass-card rounded-3xl p-6 border-t-2 border-veloraGreen">
                        <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Clientes Globales</span>
                        <h4 class="text-4xl font-black mt-2 text-white" id="admin-stat-clients">0</h4>
                    </div>
                </div>

                <div class="glass-card rounded-3xl overflow-hidden">
                    <div class="px-8 py-6 border-b border-veloraBorder flex justify-between items-center bg-white/5">
                        <h3 class="font-bold text-white tracking-wide"><i class="fas fa-shield-alt text-purple-500 mr-2"></i> Control de Accesos</h3>
                        <button onclick="openUserModal()" class="px-5 py-2.5 bg-purple-600 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:bg-purple-700 transition cyber-btn">
                            <i class="fas fa-plus mr-1"></i> Agente
                        </button>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse" id="admin-users-table">
                            <thead>
                                <tr class="border-b border-veloraBorder text-gray-500 text-[10px] uppercase font-black tracking-widest bg-black/20">
                                    <th class="py-5 px-8">Usuario / Credenciales</th>
                                    <th class="py-5 px-8">Permisos</th>
                                    <th class="py-5 px-8 text-center">Leads Asignados</th>
                                    <th class="py-5 px-8 text-center">Clientes (Wins)</th>
                                    <th class="py-5 px-8 text-right">Manejo</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-veloraBorder font-medium">
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
    
    <!-- Modal: Crear/Editar Tarea -->
    <div id="task-modal" class="hidden fixed inset-0 bg-veloraDark/95 backdrop-blur-sm z-[150] flex items-center justify-center opacity-0 transition-opacity duration-300">
        <div class="glass-card rounded-3xl w-full max-w-lg mx-4 transform scale-95 transition-transform flex flex-col" id="task-modal-box">
            <div class="px-8 py-6 border-b border-veloraBorder flex justify-between items-center bg-white/5 rounded-t-3xl">
                <h3 class="text-lg font-black text-white uppercase tracking-widest" id="task-modal-title"><i class="fas fa-calendar-check text-yellow-500 mr-2"></i> Agendar Tarea</h3>
                <button onclick="closeTaskModal()" class="w-8 h-8 rounded-full bg-black/50 text-gray-400 hover:text-white border border-veloraBorder flex items-center justify-center transition cyber-btn"><i class="fas fa-times"></i></button>
            </div>
            <div class="p-8">
                <form id="task-form" onsubmit="saveTaskForm(event)" class="space-y-5">
                    <input type="hidden" id="form-task-id">
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Título de la Tarea / Seguimiento *</label>
                        <input type="text" id="task-form-title" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-yellow-500 outline-none font-medium" placeholder="Ej. Terminar diseño de prototipo..." required>
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Fecha y Hora Límite *</label>
                            <input type="datetime-local" id="task-form-date" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-yellow-500 outline-none" required>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Asociar Contacto (Opcional)</label>
                            <div class="relative">
                                <select id="task-form-contact" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm appearance-none focus:border-yellow-500 outline-none font-bold">
                                    <option value="none">Sin contacto</option>
                                </select>
                                <i class="fas fa-chevron-down text-xs absolute right-4 top-4 text-gray-500 pointer-events-none"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Categoría *</label>
                            <div class="relative">
                                <select id="task-form-category" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm appearance-none focus:border-yellow-500 outline-none font-bold" required>
                                </select>
                                <i class="fas fa-chevron-down text-xs absolute right-4 top-4 text-gray-500 pointer-events-none"></i>
                            </div>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Cuadrante Eisenhower *</label>
                            <div class="relative">
                                <select id="task-form-quadrant" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm appearance-none focus:border-yellow-500 outline-none font-bold" required>
                                    <option value="Q1">🔥 Q1: Hacer (Urgente + Importante)</option>
                                    <option value="Q2">📅 Q2: Programar (No Urgente + Importante)</option>
                                    <option value="Q3">🤝 Q3: Delegar (Urgente + No Importante)</option>
                                    <option value="Q4">🗑️ Q4: Eliminar (No Urgente + No Importante)</option>
                                </select>
                                <i class="fas fa-chevron-down text-xs absolute right-4 top-4 text-gray-500 pointer-events-none"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Prioridad *</label>
                        <div class="relative">
                            <select id="task-form-priority" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm appearance-none focus:border-yellow-500 outline-none font-bold" required>
                                <option value="Alta">🔴 Alta (Crítica)</option>
                                <option value="Media">🟡 Media (Normal)</option>
                                <option value="Baja">🔵 Baja (Informativa)</option>
                            </select>
                            <i class="fas fa-chevron-down text-xs absolute right-4 top-4 text-gray-500 pointer-events-none"></i>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Notas de Instrucción</label>
                        <textarea id="task-form-notes" rows="3" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm resize-none focus:border-yellow-500 outline-none font-medium" placeholder="Escribe el objetivo de la tarea..."></textarea>
                    </div>
                    <div class="flex items-center gap-3 bg-slate-900/40 p-4 rounded-xl border border-veloraBorder">
                        <input type="checkbox" id="task-form-sync-google" class="w-4 h-4 text-veloraAccent bg-black border-veloraBorder rounded focus:ring-veloraAccent">
                        <label for="task-form-sync-google" class="text-xs font-black text-gray-300 uppercase tracking-wider cursor-pointer">Sincronizar con Google Calendar 📅</label>
                    </div>
                </form>
            </div>
            <div class="px-8 py-5 border-t border-veloraBorder bg-black/20 rounded-b-3xl flex justify-end gap-3">
                <button type="button" onclick="closeTaskModal()" class="px-6 py-3 bg-transparent border border-veloraBorder text-gray-400 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white/5 transition cyber-btn">Cancelar</button>
                <button type="submit" form="task-form" class="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-veloraDark font-black text-xs uppercase tracking-widest rounded-xl shadow-lg transition cyber-btn">Agendar</button>
            </div>
        </div>
    </div>

    <!-- Modal: Agregar Hábito -->
    <div id="habit-modal" class="hidden fixed inset-0 bg-veloraDark/95 backdrop-blur-sm z-[150] flex items-center justify-center opacity-0 transition-opacity duration-300">
        <div class="glass-card rounded-3xl w-full max-w-md mx-4 transform scale-95 transition-transform flex flex-col" id="habit-modal-box">
            <div class="px-8 py-6 border-b border-veloraBorder flex justify-between items-center bg-white/5 rounded-t-3xl">
                <h3 class="text-lg font-black text-white uppercase tracking-widest"><i class="fas fa-seedling text-emerald-400 mr-2"></i> Crear Hábito</h3>
                <button onclick="closeAddHabitModal()" class="w-8 h-8 rounded-full bg-black/50 text-gray-400 hover:text-white border border-veloraBorder flex items-center justify-center transition cyber-btn"><i class="fas fa-times"></i></button>
            </div>
            <div class="p-8">
                <form id="habit-form" onsubmit="saveHabitForm(event)" class="space-y-5">
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Emoji *</label>
                        <input type="text" id="habit-form-emoji" placeholder="🏃‍♂️" class="w-16 text-center py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-lg focus:border-emerald-500 outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Nombre del Hábito *</label>
                        <input type="text" id="habit-form-name" placeholder="Ej. Beber 2L de agua" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-emerald-500 outline-none" required>
                    </div>
                </form>
            </div>
            <div class="px-8 py-5 border-t border-veloraBorder bg-black/20 rounded-b-3xl flex justify-end gap-3">
                <button type="button" onclick="closeAddHabitModal()" class="px-6 py-3 bg-transparent border border-veloraBorder text-gray-400 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white/5 transition cyber-btn">Cancelar</button>
                <button type="submit" form="habit-form" class="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-lg transition cyber-btn">Crear</button>
            </div>
        </div>
    </div>

    <!-- Modal: Crear/Editar Ficha de Contacto -->
    <div id="contact-modal" class="hidden fixed inset-0 bg-veloraDark/90 backdrop-blur-sm z-[150] flex items-center justify-center opacity-0 transition-opacity duration-300">
        <div class="glass-card rounded-3xl w-full max-w-xl mx-4 transform scale-95 transition-transform flex flex-col" id="contact-modal-box">
            <div class="px-8 py-6 border-b border-veloraBorder flex justify-between items-center bg-white/5 rounded-t-3xl">
                <h3 class="text-lg font-black text-white uppercase tracking-widest" id="modal-title"><i class="fas fa-cube text-veloraAccent mr-2"></i> Ficha</h3>
                <button onclick="closeContactModal()" class="w-8 h-8 rounded-full bg-black/50 text-gray-400 hover:text-white border border-veloraBorder flex items-center justify-center transition cyber-btn"><i class="fas fa-times"></i></button>
            </div>
            <div class="p-8">
                <form id="contact-form" onsubmit="saveContactForm(event)" class="space-y-5">
                    <input type="hidden" id="form-contact-id">
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Nombre Completo *</label>
                        <input type="text" id="form-name" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-veloraAccent outline-none" required>
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Clasificación *</label>
                            <div class="relative">
                                <select id="form-type" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm appearance-none focus:border-veloraAccent outline-none" required>
                                    <option value="lead">Prospecto (LEAD)</option>
                                    <option value="client">Cliente (CLIENT)</option>
                                </select>
                                <i class="fas fa-chevron-down text-xs absolute right-4 top-4 text-gray-500 pointer-events-none"></i>
                            </div>
                        </div>
                        <div>
                            <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Teléfono *</label>
                            <input type="tel" id="form-phone" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-veloraAccent outline-none" required>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Correo (Opcional)</label>
                        <input type="email" id="form-email" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-veloraAccent outline-none">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Notas Empresa (Opcional)</label>
                        <textarea id="form-address" rows="2" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm resize-none focus:border-veloraAccent outline-none"></textarea>
                    </div>
                </form>
            </div>
            <div class="px-8 py-5 border-t border-veloraBorder bg-black/20 rounded-b-3xl flex justify-end gap-3">
                <button type="button" onclick="closeContactModal()" class="px-6 py-3 bg-transparent border border-veloraBorder text-gray-400 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white/5 transition cyber-btn">Cancelar</button>
                <button type="submit" form="contact-form" class="px-8 py-3 bg-white text-veloraDark font-black text-xs uppercase tracking-widest rounded-xl shadow-glow hover:bg-gray-200 transition cyber-btn">Guardar</button>
            </div>
        </div>
    </div>

    <!-- Modal: Generar Reporte PDF General -->
    <div id="report-modal" class="hidden fixed inset-0 bg-veloraDark/90 backdrop-blur-sm z-[150] flex items-center justify-center opacity-0 transition-opacity duration-300">
        <div class="glass-card rounded-2xl w-full max-w-md mx-4 transform scale-95 transition-transform flex flex-col" id="report-modal-box">
            <div class="px-8 py-6 border-b border-veloraBorder flex justify-between items-center bg-white/5 rounded-t-3xl">
                <h3 class="text-lg font-black text-white uppercase tracking-widest"><i class="fas fa-file-pdf text-orange-500 mr-2"></i> Reporte PDF</h3>
                <button onclick="closeReportModal()" class="w-8 h-8 rounded-full bg-black/50 text-gray-400 hover:text-white border border-veloraBorder flex items-center justify-center transition cyber-btn"><i class="fas fa-times"></i></button>
            </div>
            <div class="p-8">
                <form id="report-form" onsubmit="generateGeneralReport(event)" class="space-y-6">
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Frecuencia</label>
                        <div class="relative">
                            <select id="report-period" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm appearance-none focus:border-orange-500 outline-none" required>
                                <option value="daily">Diario (Interacciones Hoy)</option>
                                <option value="weekly">Semanal (Últimos 7 días)</option>
                                <option value="monthly">Mensual (Últimos 30 días)</option>
                            </select>
                            <i class="fas fa-chevron-down text-xs absolute right-4 top-4 text-gray-500 pointer-events-none"></i>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Filtro Inteligente</label>
                        <div class="relative">
                            <select id="report-filter" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm appearance-none focus:border-orange-500 outline-none" required>
                                <option value="all">Todo el Portafolio</option>
                                <option value="lead">Solo Prospectos (Leads)</option>
                                <option value="client">Solo Cartera (Clientes)</option>
                            </select>
                            <i class="fas fa-chevron-down text-xs absolute right-4 top-4 text-gray-500 pointer-events-none"></i>
                        </div>
                    </div>
                    
                    <div id="report-agent-container" class="hidden">
                        <label class="block text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-2"><i class="fas fa-shield-alt mr-1"></i> Análisis por Agente</label>
                        <div class="relative">
                            <select id="report-agent" class="w-full px-4 py-3 bg-purple-900/10 border border-purple-500/30 rounded-xl text-white text-sm appearance-none focus:border-purple-500 outline-none">
                                <option value="all">Toda la empresa (Global)</option>
                            </select>
                            <i class="fas fa-chevron-down text-xs absolute right-4 top-4 text-purple-400 pointer-events-none"></i>
                        </div>
                    </div>
                </form>
            </div>
            <div class="px-8 py-5 border-t border-veloraBorder bg-black/20 rounded-b-3xl">
                <button type="submit" form="report-form" class="w-full py-4 bg-orange-500 hover:bg-orange-600 transition text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2 cyber-btn">
                    <i class="fas fa-download"></i> Descargar Documento
                </button>
            </div>
        </div>
    </div>

    <!-- Modal: Administrar Usuarios (Admin Panel) -->
    <div id="user-modal" class="hidden fixed inset-0 bg-veloraDark/90 backdrop-blur-sm z-[150] flex items-center justify-center opacity-0 transition-opacity duration-300">
        <div class="glass-card rounded-3xl w-full max-w-md mx-4 transform scale-95 transition-transform flex flex-col" id="user-modal-box">
            <div class="px-8 py-6 border-b border-veloraBorder flex justify-between items-center bg-white/5 rounded-t-3xl">
                <h3 class="text-lg font-black text-white uppercase tracking-widest" id="user-modal-title"><i class="fas fa-user-shield text-purple-500 mr-2"></i> Cuenta</h3>
                <button onclick="closeUserModal()" class="w-8 h-8 rounded-full bg-black/50 text-gray-400 hover:text-white border border-veloraBorder flex items-center justify-center transition cyber-btn"><i class="fas fa-times"></i></button>
            </div>
            <div class="p-8">
                <form id="user-form" onsubmit="saveUserForm(event)" class="space-y-5">
                    <input type="hidden" id="edit-user-uid">
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Nombre Real</label>
                        <input type="text" id="new-user-name" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-purple-500 outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Usuario/Email *</label>
                        <input type="text" id="new-user-email" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-purple-500 outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Contraseña *</label>
                        <input type="text" id="new-user-pass" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm focus:border-purple-500 outline-none" required>
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Nivel de Acceso *</label>
                        <div class="relative">
                            <select id="new-user-role" class="w-full px-4 py-3 bg-black/40 border border-veloraBorder rounded-xl text-white text-sm appearance-none focus:border-purple-500 outline-none" required>
                                <option value="normal">Agente Normal (Asignaciones)</option>
                                <option value="admin">Administrador (Mando Global)</option>
                            </select>
                            <i class="fas fa-chevron-down text-xs absolute right-4 top-4 text-gray-500 pointer-events-none"></i>
                        </div>
                    </div>
                </form>
            </div>
            <div class="px-8 py-5 border-t border-veloraBorder bg-black/20 rounded-b-3xl">
                <button type="submit" form="user-form" id="user-submit-btn" class="w-full py-3 bg-purple-600 hover:bg-purple-700 transition text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)] cyber-btn">Guardar Cambios</button>
            </div>
        </div>
    </div>

    <!-- Modal: ¡LEVEL UP! (Celebración Gamificada) -->
    <div id="level-up-modal" class="hidden fixed inset-0 bg-black/80 backdrop-blur-md z-[300] flex items-center justify-center opacity-0 transition-opacity duration-500">
        <div class="glass-card rounded-[2.5rem] w-full max-w-sm mx-4 p-8 text-center border-2 border-purple-500 shadow-glow-purple transform scale-90 transition-transform duration-500" id="level-up-box">
            <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 to-veloraAccent mx-auto mb-6 flex items-center justify-center border-4 border-white/20 shadow-glow animate-bounce">
                <i class="fas fa-trophy text-4xl text-white"></i>
            </div>
            <span class="text-[10px] font-black tracking-widest text-purple-400 uppercase">EVOLUCIÓN COMPLETA</span>
            <h3 class="text-3xl font-black text-white mt-1 uppercase">¡Sube de Nivel!</h3>
            <p class="text-xs text-gray-400 mt-2 mb-6">Has acumulado suficiente XP para ascender al siguiente rango operativo en Velora.</p>
            <div class="p-4 rounded-2xl bg-black/40 border border-purple-500/20 mb-6 flex justify-around items-center">
                <div>
                    <span class="text-[10px] font-bold text-gray-500 uppercase block">Nivel Anterior</span>
                    <span class="text-lg font-black text-gray-400" id="lvl-up-prev">LV -</span>
                </div>
                <i class="fas fa-chevron-right text-purple-400"></i>
                <div>
                    <span class="text-[10px] font-bold text-purple-400 uppercase block">Nuevo Nivel</span>
                    <span class="text-2xl font-black text-purple-300 text-glow-green" id="lvl-up-next">LV -</span>
                </div>
            </div>
            <button onclick="closeLevelUpModal()" class="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-black text-xs tracking-widest uppercase shadow-lg transition cyber-btn">Aceptar Recompensa</button>
        </div>
    </div>

    <!-- UI: Toasts y Confirmaciones -->
    <div id="toast" class="fixed bottom-6 right-6 transform transition-all duration-300 translate-y-24 opacity-0 glass-card text-white px-6 py-5 rounded-2xl shadow-2xl flex items-center gap-4 z-[300]">
        <div id="toast-icon" class="text-veloraGreen text-2xl"><i class="fas fa-check-circle"></i></div>
        <div class="flex flex-col">
            <span id="toast-title" class="font-black text-sm uppercase tracking-widest">Éxito</span>
            <span id="toast-message" class="text-xs text-gray-400 mt-1">Hecho.</span>
        </div>
    </div>

    <div id="confirm-modal" class="hidden fixed inset-0 bg-veloraDark/90 backdrop-blur-sm z-[250] flex items-center justify-center opacity-0 transition-opacity duration-300">
        <div class="glass-card rounded-3xl w-full max-w-sm mx-4 transform scale-95 transition-transform p-8 text-center" id="confirm-modal-box">
            <div class="w-16 h-16 rounded-full bg-red-500/10 text-red-500 mx-auto mb-6 flex items-center justify-center border border-red-500/20">
                <i class="fas fa-exclamation-triangle text-2xl animate-pulse"></i>
            </div>
            <h3 class="text-lg font-black text-white mb-2 uppercase tracking-widest" id="confirm-title">¿Seguro?</h3>
            <p class="text-xs text-gray-400 mb-8" id="confirm-msg">Esta acción se sincronizará y no se puede deshacer.</p>
            <div class="flex gap-4">
                <button onclick="closeModal()" class="flex-1 py-3 bg-transparent text-gray-400 rounded-xl font-black text-[10px] uppercase tracking-widest border border-veloraBorder hover:bg-white/5 transition cyber-btn">Cancelar</button>
                <button id="confirm-btn" class="flex-1 py-3 bg-red-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition shadow-lg cyber-btn">Confirmar</button>
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
        window.allTasks = [];
        window.visibleTasks = [];
        window.allHabits = [];
        window.currentUser = null;
        window.currentContactId = null; 
        window.currentView = 'dashboard'; 
        window.currentListType = 'lead'; 
        window.callsChartInstance = null;
        let authStateResolved = false;

        // Categorías Personalizadas Predeterminadas
        window.workspaceConfig = {
            googleClientId: localStorage.getItem('velora_google_client_id') || '',
            taskCategories: [
                { emoji: "📞", name: "Llamada de Venta" },
                { emoji: "✉️", name: "Enviar Correo" },
                { emoji: "🖥️", name: "Demostración" },
                { emoji: "📄", name: "Enviar Contrato" },
                { emoji: "🤝", name: "Reunión Presencial" },
                { emoji: "🚀", name: "Despliegue" }
            ],
            interactionStatuses: [
                { emoji: "🔥", name: "Contestó - Interesado" },
                { emoji: "❌", name: "Contestó - No Interesado" },
                { emoji: "⏳", name: "Buzón de voz" },
                { emoji: "📅", name: "Cita Agendada" },
                { emoji: "⭐", name: "Venta Cerrada" }
            ]
        };

        // --------------------------------------------------------
        // MOTOR DE AUDIO SINCRÓNICO INTEGRADO
        // --------------------------------------------------------
        let audioCtx = null;
        let ambientOscillator = null;
        let ambientGainNode = null;

        function initAudioContext() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
        }

        window.playSynthSound = (frequency, type, duration, volume) => {
            try {
                initAudioContext();
                if (audioCtx.state === 'suspended') {
                    audioCtx.resume();
                }
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                
                osc.type = type;
                osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
                
                gain.gain.setValueAtTime(volume, audioCtx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
                
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                
                osc.start();
                osc.stop(audioCtx.currentTime + duration);
            } catch (e) {}
        };

        window.playClickSound = () => {
            window.playSynthSound(1200, 'sine', 0.08, 0.15);
        };

        window.playSuccessSound = () => {
            try {
                initAudioContext();
                const notes = [523.25, 659.25, 783.99, 1046.50];
                notes.forEach((freq, idx) => {
                    setTimeout(() => {
                        window.playSynthSound(freq, 'triangle', 0.35, 0.12);
                    }, idx * 75);
                });
            } catch(e) {}
        };

        window.playLevelUpSound = () => {
            try {
                initAudioContext();
                const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50, 1318.51];
                notes.forEach((freq, idx) => {
                    setTimeout(() => {
                        window.playSynthSound(freq, 'sine', 0.5, 0.15);
                    }, idx * 60);
                });
            } catch(e) {}
        };

        window.toggleAmbientDrone = () => {
            try {
                initAudioContext();
                const btn = document.getElementById('btn-zen-drone');
                const text = document.getElementById('zen-drone-text');

                if (ambientOscillator) {
                    ambientOscillator.stop();
                    ambientOscillator = null;
                    text.innerText = "Zen Ambient: Off";
                    btn.classList.replace('text-purple-300', 'text-purple-400');
                    btn.classList.remove('ring-2', 'ring-purple-500/50');
                } else {
                    if (audioCtx.state === 'suspended') {
                        audioCtx.resume();
                    }
                    ambientOscillator = audioCtx.createOscillator();
                    ambientGainNode = audioCtx.createGain();

                    ambientOscillator.type = 'sine';
                    ambientOscillator.frequency.setValueAtTime(110, audioCtx.currentTime);

                    const lowpass = audioCtx.createBiquadFilter();
                    lowpass.type = 'lowpass';
                    lowpass.frequency.setValueAtTime(250, audioCtx.currentTime);

                    ambientGainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);

                    ambientOscillator.connect(lowpass);
                    lowpass.connect(ambientGainNode);
                    ambientGainNode.connect(audioCtx.destination);

                    ambientOscillator.start();
                    text.innerText = "Zen Ambient: On";
                    btn.classList.replace('text-purple-400', 'text-purple-300');
                    btn.classList.add('ring-2', 'ring-purple-500/50');
                    window.showToast("Zen Drone Activo", "Sintetizador de concentración encendido.", "success");
                }
            } catch(e) {}
        };

        document.addEventListener('click', (e) => {
            if (e.target.closest('.cyber-btn') || e.target.closest('button')) {
                window.playClickSound();
            }
        });

        // --------------------------------------------------------
        // SISTEMA DE GAMIFICACIÓN / RPG CORE
        // --------------------------------------------------------
        window.rpgState = {
            xp: 0,
            level: 1,
            streak: 0,
            lastActivityDate: null
        };

        function loadRPGState() {
            const saved = localStorage.getItem('velora_rpg_state');
            if (saved) {
                window.rpgState = JSON.parse(saved);
            }
            updateRPGUI();
        }

        function saveRPGState() {
            localStorage.setItem('velora_rpg_state', JSON.stringify(window.rpgState));
            updateRPGUI();
        }

        window.gainXP = (amount) => {
            window.rpgState.xp += amount;
            if (window.rpgState.xp >= 100) {
                window.rpgState.xp = window.rpgState.xp % 100;
                window.rpgState.level += 1;
                triggerLevelUpCelebration();
            }
            saveRPGState();
        };

        function triggerLevelUpCelebration() {
            window.playLevelUpSound();
            document.getElementById('lvl-up-prev').innerText = `LV ${window.rpgState.level - 1}`;
            document.getElementById('lvl-up-next').innerText = `LV ${window.rpgState.level}`;
            
            const modal = document.getElementById('level-up-modal');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                document.getElementById('level-up-box').classList.remove('scale-90');
            }, 50);

            spawnParticles(window.innerWidth / 2, window.innerHeight / 2, '#a855f7', 80);
        }

        window.closeLevelUpModal = () => {
            const modal = document.getElementById('level-up-modal');
            modal.classList.add('opacity-0');
            document.getElementById('level-up-box').classList.add('scale-90');
            setTimeout(() => modal.classList.add('hidden'), 500);
        };

        function updateRPGUI() {
            document.getElementById('rpg-level-badge').innerText = `LV ${window.rpgState.level}`;
            document.getElementById('rpg-xp-text').innerText = window.rpgState.xp;
            document.getElementById('rpg-xp-bar').style.width = `${window.rpgState.xp}%`;
            document.getElementById('rpg-streak-days').innerText = `🔥 ${window.rpgState.streak} días`;

            const ranks = [
                "Operador Novato", "Planificador Junior", "Estratega Pragmático", 
                "Maestro de Enfoque", "Arquitecto del Tiempo", "Titán del Pipeline", 
                "Córtex Supremo"
            ];
            const rankIndex = Math.min(Math.floor((window.rpgState.level - 1) / 3), ranks.length - 1);
            document.getElementById('rpg-rank-text').innerText = ranks[rankIndex];
        }

        function checkDailyStreak() {
            const todayStr = new Date().toDateString();
            if (window.rpgState.lastActivityDate !== todayStr) {
                if (window.rpgState.lastActivityDate) {
                    const yesterday = new Date();
                    yesterday.setDate(yesterday.getDate() - 1);
                    if (window.rpgState.lastActivityDate === yesterday.toDateString()) {
                        window.rpgState.streak += 1;
                    } else {
                        window.rpgState.streak = 1;
                    }
                } else {
                    window.rpgState.streak = 1;
                }
                window.rpgState.lastActivityDate = todayStr;
                saveRPGState();
            }
        }

        // --------------------------------------------------------
        // SISTEMA DE CAPTURA RÁPIDA (MIND DUMP)
        // --------------------------------------------------------
        window.handleMindDump = async (e) => {
            if (e.key === 'Enter') {
                const text = e.target.value.trim();
                if (!text) return;

                window.playSynthSound(800, 'triangle', 0.15, 0.2);

                const taskId = 't_' + Date.now();
                const nowLocal = new Date();
                nowLocal.setMinutes(nowLocal.getMinutes() - nowLocal.getTimezoneOffset());

                const taskObj = {
                    id: taskId,
                    title: text,
                    dueDate: nowLocal.toISOString().slice(0, 16),
                    contactId: null,
                    category: "General",
                    quadrant: "Q1",
                    priority: "Media",
                    notes: "Creada con Captura Rápida (Mind Dump)",
                    status: "pending",
                    ownerId: window.currentUser ? window.currentUser.uid : 'system',
                    ownerName: window.currentUser ? window.currentUser.name : 'Sistema',
                    created: new Date().toISOString()
                };

                await window.saveTaskToDatabase(taskObj);
                e.target.value = '';
                
                const inputRect = e.target.getBoundingClientRect();
                spawnParticles(inputRect.left + 50, inputRect.top + 20, '#3b82f6', 20);

                window.gainXP(15);
                window.showToast("Capturado exitosamente", "Se agendó como tarea prioritaria.", "success");
            }
        };

        // --------------------------------------------------------
        // MOTOR DE PARTÍCULAS INTERACTIVAS
        // --------------------------------------------------------
        const spaceCanvas = document.getElementById('bg-space-canvas');
        const sCtx = spaceCanvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            spaceCanvas.width = window.innerWidth;
            spaceCanvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const stars = [];
        for (let i = 0; i < 60; i++) {
            stars.push({
                x: Math.random() * spaceCanvas.width,
                y: Math.random() * spaceCanvas.height,
                radius: Math.random() * 1.5,
                alpha: Math.random(),
                speed: 0.15 + Math.random() * 0.2
            });
        }

        window.spawnParticles = (x, y, color, count) => {
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: x,
                    y: y,
                    vx: (Math.random() - 0.5) * 8,
                    vy: (Math.random() - 0.5) * 8 - 2,
                    radius: 2 + Math.random() * 4,
                    color: color,
                    alpha: 1,
                    decay: 0.015 + Math.random() * 0.02
                });
            }
        };

        function animateBg() {
            sCtx.clearRect(0, 0, spaceCanvas.width, spaceCanvas.height);

            stars.forEach(star => {
                star.y -= star.speed;
                if (star.y < 0) star.y = spaceCanvas.height;
                sCtx.beginPath();
                sCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                sCtx.fillStyle = `rgba(168, 85, 247, ${star.alpha})`;
                sCtx.fill();
            });

            particles.forEach((p, idx) => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.05;
                p.alpha -= p.decay;

                if (p.alpha <= 0) {
                    particles.splice(idx, 1);
                } else {
                    sCtx.beginPath();
                    sCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    sCtx.fillStyle = p.color;
                    sCtx.globalAlpha = p.alpha;
                    sCtx.fill();
                    sCtx.globalAlpha = 1.0;
                }
            });

            requestAnimationFrame(animateBg);
        }
        animateBg();


        // UI Helpers
        window.showToast = (title, msg, type='success') => {
            document.getElementById('toast-title').innerText = title; 
            document.getElementById('toast-message').innerText = msg;
            const icon = document.getElementById('toast-icon');
            if(type === 'success') { icon.className = 'text-veloraGreen text-2xl'; icon.innerHTML = '<i class="fas fa-check-circle"></i>'; } 
            else if(type === 'error') { icon.className = 'text-red-500 text-2xl'; icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>'; }
            const t = document.getElementById('toast'); 
            t.classList.remove('translate-y-24', 'opacity-0'); 
            setTimeout(() => t.classList.add('translate-y-24', 'opacity-0'), 3500);
        };

        let confirmCb = null;
        window.showConfirm = (title, msg, cb) => {
            document.getElementById('confirm-title').innerText = title; 
            document.getElementById('confirm-msg').innerText = msg; 
            confirmCb = cb;
            const m = document.getElementById('confirm-modal'); m.classList.remove('hidden'); 
            setTimeout(() => { m.classList.remove('opacity-0'); document.getElementById('confirm-modal-box').classList.remove('scale-95'); }, 10);
        };
        window.closeModal = () => {
            const m = document.getElementById('confirm-modal'); m.classList.add('opacity-0'); document.getElementById('confirm-modal-box').classList.add('scale-95'); 
            setTimeout(() => { m.classList.add('hidden'); confirmCb = null; }, 300);
        };
        document.getElementById('confirm-btn').addEventListener('click', () => { if(confirmCb) confirmCb(); window.closeModal(); });

        window.updateConnectionStatus = (isOnline) => {
            const b = document.getElementById('db-status-badge'), t = document.getElementById('db-status-text'), d = document.getElementById('db-status-dot'), p = document.getElementById('db-status-ping');
            if(isOnline && navigator.onLine) { 
                b.className = "px-4 py-2.5 bg-slate-900/60 border border-emerald-500/30 text-veloraGreen rounded-full flex items-center gap-2 text-[10px] font-black tracking-widest transition-all shadow-glow-green backdrop-blur-md"; 
                t.innerText = "ONLINE"; d.className = "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"; p.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"; 
            } else { 
                b.className = "px-4 py-2.5 bg-slate-900/60 border border-red-500/30 text-red-500 rounded-full flex items-center gap-2 text-[10px] font-black tracking-widest transition-all shadow-lg backdrop-blur-md"; 
                t.innerText = "OFFLINE"; d.className = "relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"; p.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"; 
            }
        };
        window.addEventListener('online', () => window.updateConnectionStatus(true)); 
        window.addEventListener('offline', () => window.updateConnectionStatus(false));

        window.saveContactToDatabase = async (c) => {
            if (!auth.currentUser) return;
            if(!c.ownerId) { c.ownerId = window.currentUser.uid; c.ownerName = window.currentUser.name; }
            await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'contacts', c.id), c);
        };
        window.deleteContactFromDatabase = async (id) => await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'contacts', id));

        window.saveTaskToDatabase = async (t) => {
            if (!auth.currentUser) return;
            if (!t.ownerId) { t.ownerId = window.currentUser.uid; t.ownerName = window.currentUser.name; }
            await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'tasks', t.id), t);
        };
        window.deleteTaskFromDatabase = async (id) => await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'tasks', id));

        window.saveHabitToDatabase = async (h) => {
            if (!auth.currentUser) return;
            await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'habits', h.id), h);
        };
        window.deleteHabitFromDatabase = async (id) => await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'habits', id));

        window.saveWorkspaceConfig = async () => {
            if (!auth.currentUser) return;
            await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'workspace_config', 'settings'), window.workspaceConfig);
        };

        let authMode = 'login';
        window.toggleAuthMode = () => {
            authMode = authMode === 'login' ? 'register' : 'login';
            document.getElementById('register-fields').classList.toggle('hidden', authMode === 'login');
            document.getElementById('auth-btn').innerText = authMode === 'login' ? 'Ingresar al Workspace' : 'Crear Workspace';
            document.getElementById('auth-subtitle').innerText = authMode === 'login' ? 'Workspace' : 'Registro';
            document.getElementById('auth-toggle-btn').innerHTML = authMode === 'login' ? '¿No tienes cuenta? <span class="text-veloraAccent font-bold">Regístrate aquí</span>' : '¿Ya tienes cuenta? <span class="text-veloraAccent font-bold">Inicia Sesión</span>';
        };

        window.handleAuth = async (e) => {
            e.preventDefault(); 
            const email = document.getElementById('auth-email').value.trim(); const pass = document.getElementById('auth-password').value.trim();
            if(authMode === 'login') {
                const u = window.allUsers.find(x => x.email.toLowerCase() === email.toLowerCase() && x.password === pass);
                if(u) processLogin(u); else window.showToast("Error", "Credenciales incorrectas", "error");
            } else {
                const name = document.getElementById('auth-name').value.trim(); 
                if(!name || email.length < 3) return window.showToast("Error", "Datos no válidos", "error");
                if(window.allUsers.find(x => x.email.toLowerCase() === email.toLowerCase())) return window.showToast("Error", "Usuario ya existe", "error");
                const newU = { uid: 'u_' + Date.now(), name, email, password: pass, role: 'normal' };
                await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'app_users', newU.uid), newU);
                processLogin(newU); window.showToast("Acceso Autorizado", "Bienvenido a Velora Workspace", "success");
            }
        };

        function updateAvatars(u) {
            const sidebarFallback = document.getElementById('sidebar-avatar-fallback');
            const sidebarImg = document.getElementById('sidebar-avatar');
            const sImg = document.getElementById('settings-avatar');
            const sFallback = document.getElementById('settings-avatar-fallback');

            if(u.avatarBase64) {
                if (sidebarImg) { sidebarImg.src = u.avatarBase64; sidebarImg.classList.remove('hidden'); }
                if (sidebarFallback) sidebarFallback.classList.add('hidden');
                if (sImg) { sImg.src = u.avatarBase64; sImg.classList.remove('hidden'); }
                if (sFallback) sFallback.classList.add('hidden');
            } else {
                const ini = (u.name || u.email).charAt(0).toUpperCase();
                if (sidebarImg) sidebarImg.classList.add('hidden');
                if (sidebarFallback) { sidebarFallback.classList.remove('hidden'); sidebarFallback.innerText = ini; }
                if (sImg) sImg.classList.add('hidden');
                if (sFallback) { sFallback.classList.remove('hidden'); sFallback.innerText = ini; }
            }
        }

        function processLogin(u) {
            window.currentUser = u; localStorage.setItem('velora_auth_session', JSON.stringify(u));
            document.getElementById('auth-screen').classList.add('hidden');
            document.getElementById('app-sidebar').classList.remove('hidden'); document.getElementById('app-main-view').classList.remove('hidden');
            document.getElementById('user-display-name').innerText = u.name; 
            document.getElementById('user-display-role').innerText = u.role === 'admin' ? 'SYSTEM ADMIN' : (u.position || 'WORKSPACE AGENT');
            
            updateAvatars(u);
            loadRPGState();
            checkDailyStreak();
            
            if(u.role === 'admin') {
                document.getElementById('admin-nav-section').classList.remove('hidden');
            } else {
                document.getElementById('admin-nav-section').classList.add('hidden');
            }
            filterDataAndRender();
        }

        window.performLogout = () => {
            window.currentUser = null; localStorage.removeItem('velora_auth_session');
            document.getElementById('auth-form').reset(); document.getElementById('auth-screen').classList.remove('hidden');
            document.getElementById('app-sidebar').classList.add('hidden'); document.getElementById('app-main-view').classList.add('hidden');
        };

        function filterDataAndRender() {
            if(!window.currentUser) return;
            window.visibleContacts = window.currentUser.role === 'admin' ? window.allContacts : window.allContacts.filter(c => c.ownerId === window.currentUser.uid);
            window.visibleTasks = window.currentUser.role === 'admin' ? window.allTasks : window.allTasks.filter(t => t.ownerId === window.currentUser.uid);

            // Cargar datos en Configuración
            document.getElementById('settings-name-display').innerText = window.currentUser.name;
            document.getElementById('settings-role-display').innerText = window.currentUser.role === 'admin' ? 'ADMINISTRADOR' : 'AGENTE';
            document.getElementById('settings-email-display').innerText = window.currentUser.email;
            document.getElementById('setting-name').value = window.currentUser.name;
            document.getElementById('setting-phone').value = window.currentUser.phone || '';
            document.getElementById('setting-bio').value = window.currentUser.position || '';
            document.getElementById('setting-google-client-id').value = window.workspaceConfig.googleClientId || '';

            populateCustomSelects();

            if(window.currentView === 'dashboard') window.updateDashboard(); 
            else if(window.currentView === 'leads' || window.currentView === 'clients') window.renderDirectory(window.currentListType); 
            else if(window.currentView === 'tasks') window.renderTasks();
            else if(window.currentView === 'habits') window.renderHabits();
            else if(window.currentView === 'customizer') window.renderCustomizer();
            else if(window.currentView === 'admin' && window.currentUser.role === 'admin') window.renderAdmin();
            else if(window.currentView === 'detail' && window.currentContactId) window.openProfile(window.currentContactId);
            
            document.getElementById('sidebar-leads-count').innerText = window.visibleContacts.filter(c=>c.type==='lead').length;
            document.getElementById('sidebar-tasks-count').innerText = window.visibleTasks.filter(t=>t.status==='pending').length;
        }

        function populateCustomSelects() {
            const catSelect = document.getElementById('task-form-category');
            if (catSelect) {
                catSelect.innerHTML = '';
                window.workspaceConfig.taskCategories.forEach(cat => {
                    catSelect.innerHTML += `<option value="${cat.name}">${cat.emoji} ${cat.name}</option>`;
                });
            }

            const callSelect = document.getElementById('call-status');
            if (callSelect) {
                callSelect.innerHTML = '<option value="" disabled selected>Seleccionar estado...</option>';
                window.workspaceConfig.interactionStatuses.forEach(st => {
                    callSelect.innerHTML += `<option value="${st.name}">${st.emoji} ${st.name}</option>`;
                });
            }
        }

        setTimeout(() => {
            if (!authStateResolved) {
                authStateResolved = true;
                const loader = document.getElementById('global-loader');
                if(loader) { loader.classList.add('opacity-0'); setTimeout(() => loader.classList.add('hidden'), 500); }
                const ses = localStorage.getItem('velora_auth_session');
                if(ses) { try { processLogin(JSON.parse(ses)); } catch(e) { document.getElementById('auth-screen').classList.remove('hidden'); } } 
                else document.getElementById('auth-screen').classList.remove('hidden');
                window.updateConnectionStatus(false);
            }
        }, 1500); 

        const init = async () => {
            try { 
                if(typeof __initial_auth_token !== 'undefined' && __initial_auth_token) await signInWithCustomToken(auth, __initial_auth_token); 
                else await signInAnonymously(auth); 
            } catch(e) { 
                window.updateConnectionStatus(false); 
                if(!authStateResolved) { authStateResolved = true; document.getElementById('global-loader').classList.add('opacity-0'); setTimeout(() => document.getElementById('global-loader').classList.add('hidden'), 500); document.getElementById('auth-screen').classList.remove('hidden'); }
            }
        }; init();

        onAuthStateChanged(auth, async (user) => {
            if(user) {
                try {
                    const admDoc = doc(db, 'artifacts', appId, 'public', 'data', 'app_users', 'admin_nahum');
                    const s = await getDoc(admDoc); 
                    if(!s.exists()) await setDoc(admDoc, { uid: 'admin_nahum', name: 'Nahum', email: 'nahumsmithr', password: '28011512', role: 'admin' });
                } catch(err) {}

                onSnapshot(doc(db, 'artifacts', appId, 'public', 'data', 'workspace_config', 'settings'), snap => {
                    if (snap.exists()) {
                        window.workspaceConfig = snap.data();
                        // Actualizar localmente por si acaso
                        if(window.workspaceConfig.googleClientId) {
                            localStorage.setItem('velora_google_client_id', window.workspaceConfig.googleClientId);
                        }
                    }
                    filterDataAndRender();
                });
                
                onSnapshot(query(collection(db, 'artifacts', appId, 'public', 'data', 'app_users')), snap => {
                    window.allUsers = []; snap.forEach(d => window.allUsers.push(d.data()));
                    if(window.currentUser) {
                        const updatedSelf = window.allUsers.find(u => u.uid === window.currentUser.uid);
                        if(updatedSelf) { window.currentUser = updatedSelf; localStorage.setItem('velora_auth_session', JSON.stringify(updatedSelf)); updateAvatars(updatedSelf); }
                        if(window.currentView === 'admin') window.renderAdmin();
                    }
                });

                onSnapshot(query(collection(db, 'artifacts', appId, 'public', 'data', 'tasks')), snap => {
                    window.allTasks = [];
                    snap.forEach(d => window.allTasks.push(d.data()));
                    filterDataAndRender();
                });

                onSnapshot(query(collection(db, 'artifacts', appId, 'public', 'data', 'habits')), snap => {
                    window.allHabits = [];
                    snap.forEach(d => window.allHabits.push(d.data()));
                    filterDataAndRender();
                });

                onSnapshot(query(collection(db, 'artifacts', appId, 'public', 'data', 'contacts')), snap => {
                    window.allContacts = []; snap.forEach(d => window.allContacts.push(d.data()));
                    if(!authStateResolved) {
                        authStateResolved = true; document.getElementById('global-loader').classList.add('opacity-0'); setTimeout(() => document.getElementById('global-loader').classList.add('hidden'), 500);
                        const ses = localStorage.getItem('velora_auth_session');
                        if(ses) processLogin(JSON.parse(ses)); else document.getElementById('auth-screen').classList.remove('hidden');
                    } else filterDataAndRender();
                    window.updateConnectionStatus(true);
                }, (error) => {
                    window.updateConnectionStatus(false);
                    if(!authStateResolved) { authStateResolved = true; document.getElementById('global-loader').classList.add('opacity-0'); setTimeout(() => document.getElementById('global-loader').classList.add('hidden'), 500); document.getElementById('auth-screen').classList.remove('hidden'); }
                });
            } else {
                window.updateConnectionStatus(false);
                if(!authStateResolved) { authStateResolved = true; document.getElementById('global-loader').classList.add('opacity-0'); setTimeout(() => document.getElementById('global-loader').classList.add('hidden'), 500); document.getElementById('auth-screen').classList.remove('hidden'); }
            }
        });

        // --------------------------------------------------------
        // NAVEGACIÓN Y VISTAS UI
        // --------------------------------------------------------
        window.toggleMobileMenu = () => document.getElementById('app-sidebar').classList.toggle('hidden');
        
        window.showView = (viewName) => {
            if(!window.currentUser) return;
            ['dashboard','list','detail','admin','settings','tasks', 'habits', 'customizer'].forEach(x => {
                const el = document.getElementById(`view-${x}`);
                if (el) el.classList.add('hidden');
            });
            
            ['nav-dashboard','nav-leads','nav-tasks','nav-habits','nav-customizer','nav-admin','nav-settings'].forEach(x => { 
                const btn = document.getElementById(x); 
                if(btn) { btn.classList.remove('bg-slate-800/60','text-white','shadow-glow', 'border-veloraBorder'); btn.classList.add('text-gray-400', 'border-transparent'); } 
            });

            if(window.innerWidth < 768) document.getElementById('app-sidebar').classList.add('hidden');
            const topTitle = document.getElementById('topbar-title');
            const topSub = document.getElementById('topbar-subtitle');

            if(viewName === 'dashboard') { 
                document.getElementById('view-dashboard').classList.remove('hidden'); 
                topTitle.innerText = "Executive Overview"; topSub.innerText = "Métricas en tiempo real";
                document.getElementById('nav-dashboard').classList.add('bg-slate-800/60','text-white', 'shadow-glow', 'border-veloraBorder'); 
                window.updateDashboard(); 
            } else if(viewName === 'leads') { 
                document.getElementById('view-list').classList.remove('hidden'); 
                topTitle.innerText = "Directorio y Pipeline"; topSub.innerText = "Gestión de Contactos y Base de Datos";
                document.getElementById('list-title').innerText = "Directorio Unificado"; 
                document.getElementById('nav-leads').classList.add('bg-slate-800/60','text-white', 'shadow-glow', 'border-veloraBorder'); 
                window.currentListType = 'lead'; window.currentFilter = 'all'; window.updateQuickFilters(); document.getElementById('search-input').value = ''; window.renderDirectory('lead'); 
            } else if(viewName === 'tasks') {
                document.getElementById('view-tasks').classList.remove('hidden'); 
                topTitle.innerText = "Priorización Estratégica"; topSub.innerText = "Cuadrantes de Eisenhower para tareas del día";
                document.getElementById('nav-tasks').classList.add('bg-slate-800/60','text-white', 'shadow-glow', 'border-veloraBorder');
                window.renderTasks();
            } else if(viewName === 'habits') {
                document.getElementById('view-habits').classList.remove('hidden'); 
                topTitle.innerText = "Crecimiento Diario"; topSub.innerText = "Seguimiento de hábitos y foco profundo Pomodoro";
                document.getElementById('nav-habits').classList.add('bg-slate-800/60','text-white', 'shadow-glow', 'border-veloraBorder');
                window.renderHabits();
            } else if(viewName === 'customizer') {
                document.getElementById('view-customizer').classList.remove('hidden'); 
                topTitle.innerText = "Personalización de Workspace"; topSub.innerText = "Configura tus propias categorías, prioridades y estados";
                document.getElementById('nav-customizer').classList.add('bg-slate-800/60','text-white', 'shadow-glow', 'border-veloraBorder');
                window.renderCustomizer();
            } else if(viewName === 'admin' && window.currentUser.role === 'admin') { 
                document.getElementById('view-admin').classList.remove('hidden'); 
                topTitle.innerText = "Centro de Comando"; topSub.innerText = "Gestión de Accesos y Permisos";
                document.getElementById('nav-admin').classList.add('bg-purple-900/40','text-purple-300', 'border-purple-500/30'); 
                window.renderAdmin(); 
            } else if(viewName === 'settings') {
                document.getElementById('view-settings').classList.remove('hidden'); 
                topTitle.innerText = "Preferencias del Entorno"; topSub.innerText = "Ajustes de Perfil y Estética";
                document.getElementById('nav-settings').classList.add('bg-slate-800/60','text-white', 'shadow-glow', 'border-veloraBorder'); 
            }
            window.currentView = viewName;
        };
        window.goBack = () => window.showView('leads');

        // --------------------------------------------------------
        // DASHBOARD
        // --------------------------------------------------------
        window.updateDashboard = () => {
            const data = window.visibleContacts;
            const leadsCount = data.filter(c => c.type === 'lead').length; const clientsCount = data.filter(c => c.type === 'client').length;
            let totalCalls = 0; data.forEach(c => totalCalls += (c.calls ? c.calls.length : 0));
            
            document.getElementById('stat-total').innerText = data.length; document.getElementById('stat-leads').innerText = leadsCount; document.getElementById('stat-clients').innerText = clientsCount; document.getElementById('stat-calls').innerText = totalCalls;
            const ratio = data.length > 0 ? Math.round((clientsCount / data.length) * 100) : 0;
            document.getElementById('funnel-ratio').innerText = `${ratio}% Win Rate`;
            document.getElementById('funnel-bar').style.width = `${ratio}%`;

            const tbody = document.querySelector('#recent-table tbody'); tbody.innerHTML = '';
            const recent = [...data].sort((a,b) => { const dA = a.calls&&a.calls.length>0 ? new Date(a.calls[a.calls.length-1].date).getTime() : 0; const dB = b.calls&&b.calls.length>0 ? new Date(b.calls[b.calls.length-1].date).getTime() : 0; return dB - dA; }).slice(0, 5);

            if(recent.length === 0) tbody.innerHTML = `<tr><td colspan="5" class="py-10 text-center text-gray-500 bg-white/5">Sin datos recientes.</td></tr>`;
            else recent.forEach(c => {
                const stat = (c.calls && c.calls.length > 0) ? c.calls[c.calls.length-1].status : 'No gestionado';
                const bc = c.type === 'lead' ? 'bg-orange-500/10 text-orange-400 border-orange-500/30' : 'bg-emerald-500/10 text-veloraGreen border-emerald-500/30';
                tbody.innerHTML += `<tr class="hover:bg-white/5 cursor-pointer transition-colors" onclick="window.openProfile('${c.id}')"><td class="py-5 px-8"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-xl bg-black/50 flex items-center justify-center text-sm font-black text-white border border-white/10">${c.name.substring(0,2).toUpperCase()}</div><span class="font-bold text-white">${c.name}</span></div></td><td class="py-5 px-8"><span class="px-3 py-1.5 rounded-lg text-[9px] font-black uppercase border ${bc}">${c.type}</span></td><td class="py-5 px-8 text-sm text-gray-400">${c.phone}</td><td class="py-5 px-8 text-xs text-purple-400 hidden sm:table-cell font-bold">${c.ownerName || 'Sis'}</td><td class="py-5 px-8 text-xs text-gray-300 font-bold uppercase tracking-wider">${stat}</td></tr>`;
            });

            const topL = document.getElementById('top-leads-list'); topL.innerHTML = '';
            const leadsArr = data.filter(c => c.type === 'lead').slice(0,3);
            if(leadsArr.length === 0) topL.innerHTML = `<div class="text-xs text-gray-500 text-center py-6 font-semibold">Sin prospectos</div>`;
            else leadsArr.forEach(l => { topL.innerHTML += `<div class="flex items-center justify-between p-4 rounded-2xl bg-black/30 border border-veloraBorder cursor-pointer hover:border-veloraAccent transition group" onclick="window.openProfile('${l.id}')"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-xl bg-white/5 text-veloraAccent flex items-center justify-center text-sm font-black border border-white/5 group-hover:bg-veloraAccent/20">${l.name.substring(0,2).toUpperCase()}</div><div><p class="text-xs font-black text-white uppercase tracking-wider">${l.name}</p><p class="text-[10px] text-gray-500 mt-1 font-bold tracking-widest">${l.phone}</p></div></div><i class="fas fa-chevron-right text-[10px] text-veloraAccent opacity-0 group-hover:opacity-100 transition-opacity"></i></div>`; });

            // Agenda de Hoy en Dashboard
            const todayContainer = document.getElementById('dashboard-today-tasks');
            todayContainer.innerHTML = '';
            const todayStr = new Date().toDateString();
            const todayTasks = window.visibleTasks.filter(t => t.status === 'pending' && new Date(t.dueDate).toDateString() === todayStr);

            if (todayTasks.length === 0) {
                todayContainer.className = "flex items-center justify-center py-8 bg-white/5 rounded-2xl border border-dashed border-veloraBorder col-span-3 text-center";
                todayContainer.innerHTML = `
                    <div>
                        <i class="fas fa-calendar-check text-2xl text-emerald-400 mb-2"></i>
                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">¡Al día! No tienes tareas prioritarias agendadas para hoy.</p>
                    </div>`;
            } else {
                todayContainer.className = "grid grid-cols-1 md:grid-cols-3 gap-4 col-span-3";
                todayTasks.slice(0, 3).forEach(task => {
                    const taskDate = new Date(task.dueDate);
                    const targetContact = window.visibleContacts.find(c => c.id === task.contactId);
                    
                    let pStyle = 'border-veloraBorder';
                    if (task.priority === 'Alta') pStyle = 'border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.1)]';
                    else if (task.priority === 'Media') pStyle = 'border-orange-400/40';

                    todayContainer.innerHTML += `
                        <div class="p-5 rounded-2xl bg-black/40 border ${pStyle} flex flex-col justify-between">
                            <div>
                                <div class="flex justify-between items-start mb-2">
                                    <span class="px-2 py-0.5 rounded text-[8px] font-black uppercase bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">${task.category || 'Tarea'}</span>
                                    <span class="text-[9px] text-gray-500 font-bold">${taskDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                                </div>
                                <h4 class="text-xs font-black text-white uppercase tracking-wider line-clamp-1">${task.title}</h4>
                                <p class="text-[10px] text-gray-400 mt-2 line-clamp-2">${task.notes || 'Sin descripción.'}</p>
                            </div>
                            <div class="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                                ${targetContact ? `<span class="text-[9px] text-veloraAccent font-bold truncate max-w-[120px] hover:underline cursor-pointer" onclick="window.openProfile('${targetContact.id}')">${targetContact.name}</span>` : '<span class="text-[9px] text-gray-600 font-bold">General</span>'}
                                <button onclick="markTaskComplete('${task.id}', event)" class="text-[9px] font-black text-veloraGreen hover:underline uppercase tracking-widest cyber-btn"><i class="fas fa-check mr-1"></i> Listo</button>
                            </div>
                        </div>
                    `;
                });
            }

            const ctx = document.getElementById('callsChart').getContext('2d'); if(window.callsChartInstance) window.callsChartInstance.destroy();
            const lbl = [], dts = [0,0,0,0,0,0,0]; const td = new Date(); td.setHours(0,0,0,0);
            for(let i=6; i>=0; i--) { const d = new Date(td); d.setDate(d.getDate()-i); lbl.push(d.toLocaleDateString(undefined,{weekday:'short',day:'numeric'})); }
            data.forEach(c => { if(c.calls) c.calls.forEach(call => { const cd = new Date(call.date); cd.setHours(0,0,0,0); const dif = Math.ceil(Math.abs(td - cd) / (1000*60*60*24)); if(dif < 7 && cd <= td) { const ix = 6 - dif; if(ix >= 0 && ix < 7) dts[ix]++; } }); });
            document.getElementById('chart-total-count').innerText = dts.reduce((a,b) => a+b, 0);
            
            const gr = ctx.createLinearGradient(0,0,0,250); gr.addColorStop(0, 'rgba(59, 130, 246, 0.5)'); gr.addColorStop(1, 'rgba(0, 0, 0, 0)');
            window.callsChartInstance = new Chart(ctx, { type: 'line', data: { labels: lbl, datasets: [{ data: dts, borderColor: '#3b82f6', backgroundColor: gr, fill: true, tension: 0.4, pointBackgroundColor: '#fff', pointBorderColor: '#3b82f6', pointBorderWidth: 2, pointRadius: 4 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: {color: '#64748b'} }, x: { grid: { display: false }, ticks: {color: '#64748b', font: {size: 10, weight: 'bold'}} } } } });
        };

        // --------------------------------------------------------
        // DIRECTORIO CON FILTROS
        // --------------------------------------------------------
        window.currentFilter = 'all';
        window.quickFilter = (f) => {
            window.currentFilter = f;
            window.updateQuickFilters();
            window.renderDirectory(window.currentListType);
        };
        window.updateQuickFilters = () => {
            ['qf-all','qf-int','qf-cer'].forEach(id => {
                const el = document.getElementById(id);
                el.className = 'px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap text-gray-400 hover:text-white cyber-btn';
            });
            if(window.currentFilter === 'all') document.getElementById('qf-all').classList.add('bg-white/10', 'text-white');
            if(window.currentFilter === 'interesado') document.getElementById('qf-int').classList.add('bg-blue-500/20', 'text-blue-400');
            if(window.currentFilter === 'cerrada') document.getElementById('qf-cer').classList.add('bg-emerald-500/20', 'text-veloraGreen');
        };

        window.renderDirectory = (type) => {
            const term = document.getElementById('search-input').value.toLowerCase();
            const tbody = document.querySelector('#directory-table tbody'); tbody.innerHTML = '';
            
            let filtered = window.visibleContacts.filter(c => c.type === type);
            if(term) filtered = filtered.filter(c => c.name.toLowerCase().includes(term) || c.phone.includes(term));
            
            if(window.currentFilter !== 'all') {
                filtered = filtered.filter(c => {
                    if(!c.calls || c.calls.length === 0) return false;
                    const lastStatus = c.calls[c.calls.length-1].status.toLowerCase();
                    return lastStatus.includes(window.currentFilter);
                });
            }
            
            document.getElementById('list-count').innerText = `${filtered.length} REGISTROS`;
            if(!filtered.length) return tbody.innerHTML = `<tr><td colspan="5" class="py-16 text-center text-gray-500 bg-black/20"><i class="fas fa-search text-3xl mb-3"></i><p class="text-xs uppercase tracking-widest font-bold">Sin resultados</p></td></tr>`;

            filtered.forEach(c => {
                const ini = c.name.substring(0,2).toUpperCase(); const cc = c.calls ? c.calls.length : 0;
                tbody.innerHTML += `<tr class="hover:bg-white/5 cursor-pointer transition-colors" onclick="window.openProfile('${c.id}')"><td class="py-5 px-8"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-xl bg-black/50 border border-white/10 text-white flex items-center justify-center text-sm font-black">${ini}</div><span class="font-bold text-white">${c.name}</span></div></td><td class="py-5 px-8 text-sm text-gray-400 hidden sm:table-cell">${c.email||'---'}</td><td class="py-5 px-8 text-sm text-gray-300 font-bold">${c.phone}</td><td class="py-5 px-8 text-xs text-purple-400 hidden sm:table-cell font-bold"><i class="fas fa-user-shield text-[10px] mr-1"></i> ${c.ownerName || 'Sistema'}</td><td class="py-5 px-8 text-right"><div class="inline-flex px-3 py-1.5 rounded-lg bg-black/50 border border-veloraBorder text-[10px] font-black tracking-widest uppercase text-gray-400"><i class="fas fa-history mr-1.5 text-veloraAccent"></i>${cc} AC</div></td></tr>`;
            });
        };
        window.searchDirectory = () => window.renderDirectory(window.currentListType);

        // --------------------------------------------------------
        // EXPEDIENTE (DETALLE)
        // --------------------------------------------------------
        window.openProfile = (id) => {
            const c = window.visibleContacts.find(x => x.id === id); if(!c) return;
            window.currentContactId = id; window.currentListType = c.type;
            ['dashboard','list','admin','settings','tasks', 'habits', 'customizer'].forEach(x => {
                const el = document.getElementById(`view-${x}`);
                if (el) el.classList.add('hidden');
            });
            document.getElementById('view-detail').classList.remove('hidden');
            
            document.getElementById('detail-name').innerText = c.name; document.getElementById('detail-phone').innerText = c.phone; document.getElementById('detail-email').innerText = c.email || 'No proporcionado'; document.getElementById('detail-owner').innerText = c.ownerName || 'No asignado'; document.getElementById('detail-avatar').innerText = c.name.substring(0,2).toUpperCase();
            const badge = document.getElementById('detail-badge'); badge.innerText = c.type; badge.className = c.type === 'lead' ? 'px-3 py-1.5 text-[10px] font-black rounded-lg uppercase tracking-widest border bg-orange-500/10 text-orange-400 border-orange-500/30' : 'px-3 py-1.5 text-[10px] font-black rounded-lg uppercase tracking-widest border bg-emerald-500/10 text-veloraGreen border-emerald-500/30';
            window.renderTimeline(); 
            const nowLocal = new Date(); nowLocal.setMinutes(nowLocal.getMinutes() - nowLocal.getTimezoneOffset());
            document.getElementById('call-date').value = nowLocal.toISOString().slice(0,16); document.getElementById('call-status').value = ''; document.getElementById('call-notes').value = '';
        };

        window.renderTimeline = () => {
            const c = window.visibleContacts.find(x => x.id === window.currentContactId); const t = document.getElementById('calls-timeline'); t.innerHTML = '';
            document.getElementById('history-count').innerText = `${c.calls ? c.calls.length : 0} Acciones`;
            if(!c.calls || c.calls.length === 0) return t.innerHTML = `<div class="ml-12 py-10 text-center text-gray-500 bg-black/20 rounded-3xl border border-dashed border-veloraBorder"><p class="text-xs uppercase tracking-widest font-bold">Historial Vacío</p></div>`;
            [...c.calls].sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(call => {
                const dt = new Date(call.date); const isT = new Date().toDateString() === dt.toDateString();
                let iC = 'fa-history', cC = 'text-gray-400', bC = 'bg-black/50 border-veloraBorder'; const stL = call.status.toLowerCase();
                
                const foundStatus = window.workspaceConfig.interactionStatuses.find(st => st.name === call.status);
                const emoji = foundStatus ? foundStatus.emoji : '📝';

                if(stL.includes('interesado') && !stL.includes('no')) { iC = 'fa-check'; cC = 'text-blue-400'; bC = 'bg-blue-500/10 border-blue-500/30'; } 
                else if(stL.includes('cerrada')) { iC = 'fa-trophy'; cC = 'text-emerald-400'; bC = 'bg-emerald-500/10 border-emerald-500/30'; } 
                else if(stL.includes('no interesado')) { iC = 'fa-times'; cC = 'text-red-400'; bC = 'bg-red-500/10 border-red-500/30'; }

                t.innerHTML += `<li class="relative pl-12 fade-in"><div class="absolute left-0 top-1 w-12 h-12 bg-veloraDark border rounded-2xl flex items-center justify-center z-10 shadow-lg ${bC} ${cC} text-lg">${emoji}</div><div class="bg-black/20 p-6 rounded-3xl border border-veloraBorder hover:border-white/10 transition"><div class="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-4"><div class="text-[10px] font-black text-gray-500 uppercase tracking-widest"><i class="far fa-calendar-alt mr-1"></i> ${isT ? 'Hoy' : dt.toLocaleDateString()} <span class="mx-1 opacity-50">|</span> ${dt.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</div><span class="text-[10px] font-black uppercase tracking-widest border border-white/5 rounded-lg px-3 py-1.5 ${cC} ${bC}">${call.status}</span></div><p class="text-gray-300 text-sm leading-relaxed">${call.notes}</p></div></li>`;
            });
        };

        window.saveCall = async (e) => {
            e.preventDefault(); const c = window.visibleContacts.find(x => x.id === window.currentContactId); if(!c) return;
            if(!c.calls) c.calls = []; const stat = document.getElementById('call-status').value;
            c.calls.push({ id: 'c_' + Date.now(), date: document.getElementById('call-date').value, status: stat, notes: document.getElementById('call-notes').value });
            
            window.gainXP(20);

            if(stat === 'Venta Cerrada' && c.type === 'lead') {
                window.showConfirm("¡VENTA LOGRADA!", "Has cerrado la venta. ¿Promover a la Cartera de Clientes Automáticamente?", async () => { 
                    c.type = 'client'; 
                    await window.saveContactToDatabase(c); 
                    window.playSuccessSound();
                    window.gainXP(50);
                    window.showToast("Excelente", "Promovido a Cliente y +50 XP.", "success"); 
                    window.openProfile(c.id); 
                });
            } else { 
                await window.saveContactToDatabase(c); 
                window.playSuccessSound();
                window.showToast("Guardado", "Gestión guardada exitosamente y +20 XP.", "success"); 
                window.openProfile(c.id); 
            }
        };

        // --------------------------------------------------------
        // GESTOR DE TAREAS & REAL GOOGLE CALENDAR SYNC
        // --------------------------------------------------------
        let gapiInited = false;
        let gisinited = false;
        let tokenClient;

        const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

        window.gapiLoadCallback = () => {
            gapi.load('client', async () => {
                await gapi.client.init({
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                });
                gapiInited = true;
                checkGoogleAuthStatus();
                checkPersistedGoogleToken();
            });
        };

        window.gisLoadCallback = () => {
            gisinited = true;
            checkGoogleAuthStatus();
        };

        function checkGoogleAuthStatus() {
            const btnText = document.getElementById('google-auth-text');
            const token = gapi.client.getToken();
            if (token) {
                btnText.innerText = "Google Cal Conectado";
                document.getElementById('btn-google-auth').classList.replace('text-gray-300', 'text-emerald-400');
                document.getElementById('btn-google-auth').classList.add('shadow-glow-green');
            } else {
                btnText.innerText = "Google Cal Desconectado";
                document.getElementById('btn-google-auth').classList.replace('text-emerald-400', 'text-gray-300');
                document.getElementById('btn-google-auth').classList.remove('shadow-glow-green');
            }
        }

        // Restaurar token si existe y no ha expirado
        function checkPersistedGoogleToken() {
            try {
                const tokenStr = localStorage.getItem('gcal_token');
                const expires = localStorage.getItem('gcal_token_expires');
                if (tokenStr && expires && Date.now() < Number(expires)) {
                    gapi.client.setToken(JSON.parse(tokenStr));
                    checkGoogleAuthStatus();
                }
            } catch (e) {
                console.error("No se pudo restaurar la sesión de Google Calendar", e);
            }
        }

        // Conectar Google Calendar Real con el Client ID del panel de configuración
        window.handleGoogleAuth = () => {
            const clientId = window.workspaceConfig.googleClientId;
            if (!clientId || clientId.trim() === '') {
                window.showToast("Configuración Requerida", "Por favor, ingresa tu Google Client ID en Preferencias/Configuración.", "error");
                window.showView('settings');
                return;
            }

            if (!gapiInited || !gisinited) {
                window.showToast("Google API", "La API de Google se está iniciando, espera un segundo.", "error");
                return;
            }

            tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: clientId,
                scope: SCOPES,
                callback: async (resp) => {
                    if (resp.error !== undefined) {
                        throw (resp);
                    }
                    // Guardar y persistir el token de forma local
                    const token = gapi.client.getToken();
                    localStorage.setItem('gcal_token', JSON.stringify(token));
                    localStorage.setItem('gcal_token_expires', (Date.now() + (resp.expires_in * 1000)).toString());
                    
                    window.showToast("Google Calendar", "Sincronización de Agenda Autorizada.", "success");
                    checkGoogleAuthStatus();
                },
            });

            if (gapi.client.getToken() === null) {
                tokenClient.requestAccessToken({prompt: 'consent'});
            } else {
                tokenClient.requestAccessToken({prompt: ''});
            }
        };

        // Guardar el Client ID de Google de manera colectiva en Firebase y LocalStorage
        window.saveGoogleClientId = async () => {
            const inputVal = document.getElementById('setting-google-client-id').value.trim();
            window.workspaceConfig.googleClientId = inputVal;
            localStorage.setItem('velora_google_client_id', inputVal);
            await window.workspaceConfig.googleClientId;
            await window.saveWorkspaceConfig();
            window.showToast("Guardado", "Google Client ID actualizado en la configuración.", "success");
        };

        window.renderTasks = () => {
            const q1List = document.getElementById('tasks-q1');
            const q2List = document.getElementById('tasks-q2');
            const q3List = document.getElementById('tasks-q3');
            const q4List = document.getElementById('tasks-q4');
            const completedGrid = document.getElementById('tasks-completed-grid');

            q1List.innerHTML = ''; q2List.innerHTML = ''; q3List.innerHTML = ''; q4List.innerHTML = ''; completedGrid.innerHTML = '';

            let cQ1 = 0, cQ2 = 0, cQ3 = 0, cQ4 = 0;

            window.visibleTasks.forEach(task => {
                const taskDate = new Date(task.dueDate);
                const dateFormatted = taskDate.toLocaleDateString() + ' ' + taskDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
                const targetContact = window.visibleContacts.find(c => c.id === task.contactId);
                const contactInfo = targetContact ? `<div class="mt-2 text-[10px] bg-slate-955/40 p-1.5 rounded-lg">Asociado a: <strong class="text-veloraAccent cursor-pointer" onclick="window.openProfile('${targetContact.id}')">${targetContact.name}</strong></div>` : '';

                let cardBorder = 'border-veloraBorder';
                if (task.priority === 'Alta') cardBorder = 'border-red-500/40';
                else if (task.priority === 'Media') cardBorder = 'border-orange-400/40';

                const categoryObj = window.workspaceConfig.taskCategories.find(cat => cat.name === task.category);
                const categoryEmoji = categoryObj ? categoryObj.emoji : '📂';

                const taskCardHTML = `
                    <div class="p-4 rounded-xl bg-black/40 border ${cardBorder} hover:border-white/15 transition-all">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="flex items-center gap-1.5 mb-1">
                                    <span class="text-xs">${categoryEmoji}</span>
                                    <span class="text-[9px] font-black uppercase text-gray-400 tracking-wider">${task.category || 'General'}</span>
                                </div>
                                <h4 class="text-xs font-black text-white uppercase tracking-wider">${task.title}</h4>
                                <p class="text-[9px] text-gray-500 mt-0.5">${dateFormatted}</p>
                            </div>
                            <div class="flex gap-1">
                                ${task.status === 'pending' ? `
                                    <button onclick="markTaskComplete('${task.id}', event)" class="w-6 h-6 rounded-lg bg-emerald-500/10 text-veloraGreen hover:bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center transition cyber-btn"><i class="fas fa-check text-[10px]"></i></button>
                                    <button onclick="editTask('${task.id}')" class="w-6 h-6 rounded-lg bg-blue-500/10 text-veloraAccent hover:bg-blue-500/20 border border-blue-500/20 flex items-center justify-center transition cyber-btn"><i class="fas fa-pen text-[9px]"></i></button>
                                ` : ''}
                                <button onclick="deleteTask('${task.id}')" class="w-6 h-6 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 flex items-center justify-center transition cyber-btn"><i class="fas fa-trash-alt text-[9px]"></i></button>
                            </div>
                        </div>
                        ${contactInfo}
                    </div>
                `;

                if (task.status === 'completed') {
                    completedGrid.innerHTML += `
                        <div class="p-3 rounded-xl bg-slate-900/40 border border-veloraBorder flex justify-between items-center opacity-60">
                            <div>
                                <h5 class="text-xs font-bold text-gray-400 line-through">${task.title}</h5>
                                <p class="text-[9px] text-gray-500">Completada</p>
                            </div>
                            <div class="flex gap-2">
                                <button onclick="reopenTask('${task.id}')" class="w-6 h-6 rounded-lg bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border border-yellow-500/20 flex items-center justify-center cyber-btn"><i class="fas fa-undo-alt text-[9px]"></i></button>
                                <button onclick="deleteTask('${task.id}')" class="text-xs text-gray-500 hover:text-red-500 cyber-btn"><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    `;
                } else {
                    const quad = task.quadrant || 'Q2';
                    if (quad === 'Q1') { q1List.innerHTML += taskCardHTML; cQ1++; }
                    else if (quad === 'Q2') { q2List.innerHTML += taskCardHTML; cQ2++; }
                    else if (quad === 'Q3') { q3List.innerHTML += taskCardHTML; cQ3++; }
                    else if (quad === 'Q4') { q4List.innerHTML += taskCardHTML; cQ4++; }
                }
            });

            document.getElementById('task-badge-q1').innerText = cQ1;
            document.getElementById('task-badge-q2').innerText = cQ2;
            document.getElementById('task-badge-q3').innerText = cQ3;
            document.getElementById('task-badge-q4').innerText = cQ4;
        };

        window.openTaskModal = (taskId = null) => {
            document.getElementById('task-form').reset();
            document.getElementById('form-task-id').value = '';
            
            const contactSelect = document.getElementById('task-form-contact');
            contactSelect.innerHTML = '<option value="none">Sin contacto asociado</option>';
            window.visibleContacts.forEach(c => {
                contactSelect.innerHTML += `<option value="${c.id}">${c.name}</option>`;
            });

            const nowLocal = new Date();
            nowLocal.setMinutes(nowLocal.getMinutes() - nowLocal.getTimezoneOffset());
            document.getElementById('task-form-date').value = nowLocal.toISOString().slice(0,16);

            const mTitle = document.getElementById('task-modal-title');

            if (taskId) {
                const task = window.allTasks.find(t => t.id === taskId);
                if (task) {
                    mTitle.innerHTML = '<i class="fas fa-calendar-alt text-yellow-500 mr-2"></i> Reagendar Tarea';
                    document.getElementById('form-task-id').value = task.id;
                    document.getElementById('task-form-title').value = task.title;
                    document.getElementById('task-form-date').value = task.dueDate;
                    document.getElementById('task-form-contact').value = task.contactId || 'none';
                    document.getElementById('task-form-category').value = task.category || '';
                    document.getElementById('task-form-quadrant').value = task.quadrant || 'Q2';
                    document.getElementById('task-form-priority').value = task.priority || 'Media';
                    document.getElementById('task-form-notes').value = task.notes || '';
                }
            } else {
                mTitle.innerHTML = '<i class="fas fa-calendar-check text-yellow-500 mr-2"></i> Agendar Tarea';
            }

            const m = document.getElementById('task-modal');
            m.classList.remove('hidden');
            setTimeout(() => {
                m.classList.remove('opacity-0');
                document.getElementById('task-modal-box').classList.remove('scale-95');
            }, 10);
        };

        window.openTaskModalForContact = () => {
            window.openTaskModal();
            if(window.currentContactId) {
                document.getElementById('task-form-contact').value = window.currentContactId;
            }
        };

        window.closeTaskModal = () => {
            const m = document.getElementById('task-modal');
            m.classList.add('opacity-0');
            document.getElementById('task-modal-box').classList.add('scale-95');
            setTimeout(() => m.classList.add('hidden'), 300);
        };

        window.editTask = (taskId) => {
            window.openTaskModal(taskId);
        };

        window.reopenTask = async (taskId) => {
            const task = window.visibleTasks.find(t => t.id === taskId);
            if (task) {
                task.status = 'pending';
                await window.saveTaskToDatabase(task);
                window.showToast("Tarea Reabierta", "Regresada a la Matriz de Eisenhower.", "success");
            }
        };

        window.saveTaskForm = async (e) => {
            e.preventDefault();
            const id = document.getElementById('form-task-id').value;
            const title = document.getElementById('task-form-title').value.trim();
            const date = document.getElementById('task-form-date').value;
            const contactId = document.getElementById('task-form-contact').value;
            const category = document.getElementById('task-form-category').value;
            const quadrant = document.getElementById('task-form-quadrant').value;
            const priority = document.getElementById('task-form-priority').value;
            const notes = document.getElementById('task-form-notes').value.trim();
            const syncGoogle = document.getElementById('task-form-sync-google').checked;

            let taskObj;

            if (id) {
                const existingTask = window.allTasks.find(t => t.id === id);
                taskObj = {
                    ...existingTask,
                    title,
                    dueDate: date,
                    contactId: contactId === 'none' ? null : contactId,
                    category,
                    quadrant,
                    priority,
                    notes
                };
            } else {
                const taskId = 't_' + Date.now();
                taskObj = {
                    id: taskId,
                    title,
                    dueDate: date,
                    contactId: contactId === 'none' ? null : contactId,
                    category,
                    quadrant,
                    priority,
                    notes,
                    status: 'pending',
                    ownerId: window.currentUser.uid,
                    ownerName: window.currentUser.name,
                    created: new Date().toISOString()
                };
            }

            if (syncGoogle) {
                if (!gapiInited || gapi.client.getToken() === null) {
                    window.showToast("Google Calendar", "No has autenticado tu cuenta real. Pulsa el botón de Google en la barra superior.", "error");
                    return;
                }

                try {
                    window.showToast("Sincronizando", "Enviando evento al calendario real...", "info");
                    
                    const eventDate = new Date(date);
                    const endDate = new Date(eventDate.getTime() + 30 * 60 * 1000); 

                    const event = {
                        'summary': `[VELORA] ${title}`,
                        'description': `${notes}\n\nCategoría: ${category}\nMatriz Eisenhower: ${quadrant}`,
                        'start': {
                            'dateTime': eventDate.toISOString(),
                            'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
                        },
                        'end': {
                            'dateTime': endDate.toISOString(),
                            'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
                        }
                    };

                    const request = gapi.client.calendar.events.insert({
                        'calendarId': 'primary',
                        'resource': event
                    });

                    await new Promise((resolve, reject) => {
                        request.execute(resp => {
                            if (resp.error) reject(resp.error);
                            else resolve(resp);
                        });
                    });

                    window.showToast("Google Calendar", "Sincronizado con éxito en tu calendario real.", "success");
                } catch (err) {
                    window.showToast("Sincronización Fallida", "Se guardó de manera local. Comprueba tus permisos de Google.", "error");
                }
            }

            await window.saveTaskToDatabase(taskObj);
            
            window.gainXP(20);

            window.showToast("Éxito", id ? "Tarea modificada." : "Tarea guardada y +20 XP.", "success");
            window.closeTaskModal();
        };

        window.markTaskComplete = async (taskId, event) => {
            const task = window.visibleTasks.find(t => t.id === taskId);
            if (task) {
                task.status = 'completed';
                await window.saveTaskToDatabase(task);
                
                window.playSuccessSound();

                if (event) {
                    spawnParticles(event.clientX, event.clientY, '#10b981', 40);
                }

                window.gainXP(25);

                window.showToast("¡Tarea Lograda!", "Felicidades, +25 XP ganados.", "success");
            }
        };

        window.deleteTask = async (taskId) => {
            window.showConfirm("Eliminar Tarea", "¿Estás seguro de cancelar y borrar este recordatorio?", async () => {
                await window.deleteTaskFromDatabase(taskId);
                window.showToast("Eliminada", "Tarea borrada.", "error");
            });
        };

        // --------------------------------------------------------
        // HÁBITOS & TEMPORIZADOR POMODORO
        // --------------------------------------------------------
        window.renderHabits = () => {
            const habitsContainer = document.getElementById('habits-list-today');
            habitsContainer.innerHTML = '';

            const todayKey = new Date().toDateString();
            const habits = window.allHabits.filter(h => h.ownerId === window.currentUser.uid);

            if (habits.length === 0) {
                habitsContainer.innerHTML = `<p class="text-xs text-gray-500 italic text-center py-6">No has creado ningún hábito de consistencia. ¡Crea uno para empezar!</p>`;
                document.getElementById('habits-today-percentage').innerText = "0%";
                return;
            }

            let completedCount = 0;

            habits.forEach(habit => {
                const isCompletedToday = habit.history && habit.history[todayKey] === true;
                if (isCompletedToday) completedCount++;

                habitsContainer.innerHTML += `
                    <div class="flex items-center justify-between p-4 bg-black/40 border border-veloraBorder rounded-2xl">
                        <div class="flex items-center gap-4">
                            <span class="text-2xl">${habit.emoji || '🌱'}</span>
                            <div>
                                <h4 class="text-xs font-black text-white uppercase tracking-wider">${habit.name}</h4>
                                <p class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Consecutivos: ${habit.streak || 0} días</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="toggleHabit('${habit.id}', '${todayKey}', event)" class="px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition cyber-btn ${isCompletedToday ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-black/50 text-gray-400 border border-veloraBorder hover:text-white'}">
                                ${isCompletedToday ? '<i class="fas fa-check mr-1.5"></i> Completado' : 'Marcar Listo'}
                            </button>
                            <button onclick="deleteHabit('${habit.id}')" class="text-xs text-gray-600 hover:text-red-400 p-2 cyber-btn"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                `;
            });

            const percentage = Math.round((completedCount / habits.length) * 100) || 0;
            document.getElementById('habits-today-percentage').innerText = `${percentage}%`;
        };

        window.toggleHabit = async (habitId, todayKey, event) => {
            const habit = window.allHabits.find(h => h.id === habitId);
            if (habit) {
                if (!habit.history) habit.history = {};
                const currentStatus = habit.history[todayKey] || false;
                habit.history[todayKey] = !currentStatus;

                if (habit.history[todayKey] === true) {
                    habit.streak = (habit.streak || 0) + 1;
                    window.playSuccessSound();
                    if (event) {
                        spawnParticles(event.clientX, event.clientY, '#10b981', 35);
                    }
                    window.gainXP(15);
                } else {
                    habit.streak = Math.max(0, (habit.streak || 1) - 1);
                }

                await window.saveHabitToDatabase(habit);
                window.showToast("Hábito Actualizado", "Consistencia guardada.", "success");
            }
        };

        window.openAddHabitModal = () => {
            document.getElementById('habit-form').reset();
            const m = document.getElementById('habit-modal');
            m.classList.remove('hidden');
            setTimeout(() => {
                m.classList.remove('opacity-0');
                document.getElementById('habit-modal-box').classList.remove('scale-95');
            }, 10);
        };

        window.closeAddHabitModal = () => {
            const m = document.getElementById('habit-modal');
            m.classList.add('opacity-0');
            document.getElementById('habit-modal-box').classList.add('scale-95');
            setTimeout(() => m.classList.add('hidden'), 300);
        };

        window.saveHabitForm = async (e) => {
            e.preventDefault();
            const emoji = document.getElementById('habit-form-emoji').value.trim();
            const name = document.getElementById('habit-form-name').value.trim();

            const hObj = {
                id: 'h_' + Date.now(),
                emoji,
                name,
                streak: 0,
                history: {},
                ownerId: window.currentUser.uid,
                created: new Date().toISOString()
            };

            await window.saveHabitToDatabase(hObj);
            window.gainXP(10);
            window.showToast("Éxito", "Hábito creado correctamente y +10 XP.", "success");
            window.closeAddHabitModal();
        };

        window.deleteHabit = (id) => {
            window.showConfirm("Eliminar Hábito", "¿Quieres borrar este hábito?", async () => {
                await window.deleteHabitFromDatabase(id);
                window.showToast("Eliminado", "Hábito borrado.", "error");
            });
        };

        // Pomodoro State Variables
        let pomodoroTimer = null;
        let pomodoroTimeLeft = 25 * 60; 
        let pomodoroIsRunning = false;
        let pomodoroMode = 'focus'; 

        window.togglePomodoro = () => {
            if (pomodoroIsRunning) {
                clearInterval(pomodoroTimer);
                pomodoroIsRunning = false;
                document.getElementById('btn-pomodoro-start').innerText = 'Reanudar';
                document.getElementById('btn-pomodoro-start').className = 'flex-1 py-3.5 bg-yellow-500 text-slate-950 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-yellow-600 transition cyber-btn';
            } else {
                pomodoroIsRunning = true;
                document.getElementById('btn-pomodoro-start').innerText = 'Pausar';
                document.getElementById('btn-pomodoro-start').className = 'flex-1 py-3.5 bg-slate-800 text-white border border-veloraBorder rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black/40 transition cyber-btn';
                
                pomodoroTimer = setInterval(() => {
                    pomodoroTimeLeft--;
                    updatePomodoroDisplay();

                    if (pomodoroTimeLeft <= 0) {
                        clearInterval(pomodoroTimer);
                        pomodoroIsRunning = false;
                        
                        if (pomodoroMode === 'focus') {
                            window.playLevelUpSound();
                            window.gainXP(30);
                            window.showToast("¡Enfoque Terminado!", "Toma un descanso y gana +30 XP.", "success");
                            pomodoroMode = 'shortBreak';
                            pomodoroTimeLeft = 5 * 60;
                            document.getElementById('pomodoro-status-label').innerText = 'DESCANSO';
                            document.getElementById('pomodoro-status-label').className = 'text-[10px] font-black text-emerald-400 uppercase tracking-widest mt-1';
                        } else {
                            window.playSuccessSound();
                            window.showToast("Descanso Terminado", "Es hora de regresar al trabajo enfocado.", "success");
                            pomodoroMode = 'focus';
                            pomodoroTimeLeft = 25 * 60;
                            document.getElementById('pomodoro-status-label').innerText = 'ENFOQUE';
                            document.getElementById('pomodoro-status-label').className = 'text-[10px] font-black text-red-500 uppercase tracking-widest mt-1';
                        }

                        resetPomodoroUI();
                    }
                }, 1000);
            }
        };

        window.resetPomodoro = () => {
            clearInterval(pomodoroTimer);
            pomodoroIsRunning = false;
            pomodoroMode = 'focus';
            pomodoroTimeLeft = 25 * 60;
            document.getElementById('pomodoro-status-label').innerText = 'ENFOQUE';
            document.getElementById('pomodoro-status-label').className = 'text-[10px] font-black text-red-500 uppercase tracking-widest mt-1';
            resetPomodoroUI();
        };

        function resetPomodoroUI() {
            document.getElementById('btn-pomodoro-start').innerText = 'Iniciar';
            document.getElementById('btn-pomodoro-start').className = 'flex-1 py-3.5 bg-red-500 text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-red-600 transition shadow-[0_0_15px_rgba(239,68,68,0.3)] cyber-btn';
            updatePomodoroDisplay();
        }

        function updatePomodoroDisplay() {
            const minutes = Math.floor(pomodoroTimeLeft / 60);
            const seconds = pomodoroTimeLeft % 60;
            document.getElementById('pomodoro-time').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            const maxDuration = pomodoroMode === 'focus' ? 25 * 60 : 5 * 60;
            const percentage = (pomodoroTimeLeft / maxDuration) * 502;
            document.getElementById('pomodoro-progress').style.strokeDashoffset = 502 - percentage;
        }

        // --------------------------------------------------------
        // PERSONALIZAR WORKSPACE (CATEGORÍAS Y ESTADOS DINÁMICOS)
        // --------------------------------------------------------
        window.renderCustomizer = () => {
            const taskList = document.getElementById('custom-task-categories-list');
            const intList = document.getElementById('custom-int-categories-list');

            taskList.innerHTML = '';
            intList.innerHTML = '';

            window.workspaceConfig.taskCategories.forEach((cat, index) => {
                taskList.innerHTML += `
                    <div class="flex items-center justify-between p-3.5 bg-black/40 border border-veloraBorder rounded-2xl">
                        <div class="flex items-center gap-3">
                            <span class="text-xl">${cat.emoji}</span>
                            <span class="text-xs font-black text-white uppercase tracking-wider">${cat.name}</span>
                        </div>
                        <button onclick="deleteCustomCategory('task', ${index})" class="text-xs text-gray-500 hover:text-red-400 p-2 cyber-btn"><i class="fas fa-trash-alt"></i></button>
                    </div>
                `;
            });

            window.workspaceConfig.interactionStatuses.forEach((st, index) => {
                intList.innerHTML += `
                    <div class="flex items-center justify-between p-3.5 bg-black/40 border border-veloraBorder rounded-2xl">
                        <div class="flex items-center gap-3">
                            <span class="text-xl">${st.emoji}</span>
                            <span class="text-xs font-black text-white uppercase tracking-wider">${st.name}</span>
                        </div>
                        <button onclick="deleteCustomCategory('interaction', ${index})" class="text-xs text-gray-500 hover:text-red-400 p-2 cyber-btn"><i class="fas fa-trash-alt"></i></button>
                    </div>
                `;
            });
        };

        window.handleAddCustomCategory = async (e, type) => {
            e.preventDefault();
            if (type === 'task') {
                const emoji = document.getElementById('custom-task-emoji').value.trim();
                const name = document.getElementById('custom-task-name').value.trim();
                window.workspaceConfig.taskCategories.push({ emoji, name });
                document.getElementById('custom-task-emoji').value = '';
                document.getElementById('custom-task-name').value = '';
            } else if (type === 'interaction') {
                const emoji = document.getElementById('custom-int-emoji').value.trim();
                const name = document.getElementById('custom-int-name').value.trim();
                window.workspaceConfig.interactionStatuses.push({ emoji, name });
                document.getElementById('custom-int-emoji').value = '';
                document.getElementById('custom-int-name').value = '';
            }

            await window.saveWorkspaceConfig();
            window.showToast("Configuración Actualizada", "Módulo guardado en la nube.", "success");
            window.renderCustomizer();
        };

        window.deleteCustomCategory = async (type, index) => {
            window.showConfirm("Eliminar Parámetro", "¿Seguro de borrar esta categoría? Afectará a los selects del sistema.", async () => {
                if (type === 'task') {
                    window.workspaceConfig.taskCategories.splice(index, 1);
                } else if (type === 'interaction') {
                    window.workspaceConfig.interactionStatuses.splice(index, 1);
                }
                await window.saveWorkspaceConfig();
                window.showToast("Módulo Actualizado", "Configuración de categorías refrescada.", "error");
                window.renderCustomizer();
            });
        };

        // --------------------------------------------------------
        // SETTINGS & PROFILE
        // --------------------------------------------------------
        window.saveProfileSettings = async (e) => {
            e.preventDefault();
            const n = document.getElementById('setting-name').value.trim();
            const p = document.getElementById('setting-phone').value.trim();
            const b = document.getElementById('setting-bio').value.trim();
            
            const updated = { ...window.currentUser, name: n, phone: p, position: b };
            await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'app_users', window.currentUser.uid), updated);
            
            window.currentUser = updated;
            localStorage.setItem('velora_auth_session', JSON.stringify(updated));
            window.showToast("Perfil Actualizado", "Tus datos han sido guardados.", "success");
            filterDataAndRender();
        };

        window.handleProfileImageUpload = (e) => {
            const file = e.target.files[0];
            if(!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                const img = new Image();
                img.onload = async () => {
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 250; const MAX_HEIGHT = 250;
                    let width = img.width; let height = img.height;
                    if (width > height) { if (width > MAX_WIDTH) { height *= MAX_WIDTH / width; width = MAX_WIDTH; } } else { if (height > MAX_HEIGHT) { width *= MAX_HEIGHT / height; height = MAX_HEIGHT; } }
                    canvas.width = width; canvas.height = height;
                    const ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0, width, height);
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    
                    const updated = { ...window.currentUser, avatarBase64: dataUrl };
                    await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'app_users', window.currentUser.uid), updated);
                    window.currentUser = updated;
                    localStorage.setItem('velora_auth_session', JSON.stringify(updated));
                    updateAvatars(updated);
                    window.showToast("Avatar Actualizado", "Foto de perfil subida con éxito.", "success");
                };
                img.src = ev.target.result;
            };
            reader.readAsDataURL(file);
        };

        window.applyTheme = (themeClass) => {
            const allThemes = ['theme-monolith', 'theme-cyberpunk', 'theme-emerald', 'theme-crimson', 'theme-nebula', 'theme-aurora'];
            const body = document.getElementById('app-body');
            allThemes.forEach(t => body.classList.remove(t));
            body.classList.add(themeClass);
            
            document.querySelectorAll('.theme-btn').forEach(btn => {
                btn.classList.remove('ring-4', 'ring-veloraAccent', 'border-transparent');
                btn.classList.add('border-veloraBorder');
            });
            const activeBtn = document.querySelector(`.theme-btn.${themeClass}`);
            if(activeBtn) {
                activeBtn.classList.add('ring-4', 'ring-veloraAccent', 'border-transparent');
                activeBtn.classList.remove('border-veloraBorder');
            }

            localStorage.setItem('velora_theme', themeClass);
            if(window.currentView === 'settings') window.showToast("Entorno Actualizado", "Fondo dinámico aplicado.", "success");
        };

        const savedTheme = localStorage.getItem('velora_theme') || 'theme-monolith';
        window.applyTheme(savedTheme);

        // --------------------------------------------------------
        // CRUD CONTACTOS Y MODALES
        // --------------------------------------------------------
        window.openContactModal = (id = null) => {
            document.getElementById('contact-form').reset();
            document.getElementById('modal-title').innerHTML = id ? '<i class="fas fa-edit text-veloraAccent mr-2"></i> Modificar' : '<i class="fas fa-cube text-veloraAccent mr-2"></i> Nuevo Registro';
            if(id) { 
                const c = window.visibleContacts.find(x => x.id === id); 
                document.getElementById('form-contact-id').value = c.id; document.getElementById('form-name').value = c.name; document.getElementById('form-type').value = c.type; document.getElementById('form-phone').value = c.phone; document.getElementById('form-email').value = c.email || ''; document.getElementById('form-address').value = c.address || ''; 
            } else { 
                document.getElementById('form-contact-id').value = ''; 
                if(window.currentView === 'leads' || window.currentView === 'clients') document.getElementById('form-type').value = window.currentListType;
            }
            const m = document.getElementById('contact-modal'); m.classList.remove('hidden'); setTimeout(() => { m.classList.remove('opacity-0'); document.getElementById('contact-modal-box').classList.remove('scale-95'); }, 10);
        };

        window.closeContactModal = () => { const m = document.getElementById('contact-modal'); m.classList.add('opacity-0'); document.getElementById('contact-modal-box').classList.add('scale-95'); setTimeout(() => m.classList.add('hidden'), 300); };
        window.saveContactForm = async (e) => {
            e.preventDefault(); const id = document.getElementById('form-contact-id').value;
            const cObj = id ? window.visibleContacts.find(x => x.id === id) : { id: 'id_' + Date.now(), calls: [], ownerId: window.currentUser.uid, ownerName: window.currentUser.name };
            cObj.name = document.getElementById('form-name').value; cObj.type = document.getElementById('form-type').value; cObj.phone = document.getElementById('form-phone').value; cObj.email = document.getElementById('form-email').value; cObj.address = document.getElementById('form-address').value;
            await window.saveContactToDatabase(cObj); 
            
            window.gainXP(20);

            window.showToast("Éxito", id ? "Ficha Actualizada" : "Ficha Creada y +20 XP", "success"); window.closeContactModal();
        };

        window.editCurrentContact = () => { if(window.currentContactId) window.openContactModal(window.currentContactId); };
        window.deleteCurrentContact = () => { if(!window.currentContactId) return; window.showConfirm("Eliminar Ficha", "¿Confirma la eliminación permanente?", async () => { await window.deleteContactFromDatabase(window.currentContactId); window.showToast("Eliminado", "Ficha borrada.", "error"); window.goBack(); }); };

        // --------------------------------------------------------
        // PANEL DE ADMINISTRACIÓN
        // --------------------------------------------------------
        window.renderAdmin = () => {
            document.getElementById('admin-stat-users').innerText = window.allUsers.length; document.getElementById('admin-stat-leads').innerText = window.allContacts.filter(c => c.type === 'lead').length; document.getElementById('admin-stat-clients').innerText = window.allContacts.filter(c => c.type === 'client').length;
            const tb = document.querySelector('#admin-users-table tbody'); tb.innerHTML = '';
            
            window.allUsers.forEach(u => {
                const uC = window.allContacts.filter(c => c.ownerId === u.uid);
                const rB = u.role === 'admin' ? '<span class="text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-lg text-[9px] font-black border border-purple-500/30 uppercase tracking-widest">ADMIN</span>' : '<span class="text-veloraAccent bg-blue-500/10 px-3 py-1.5 rounded-lg text-[9px] font-black border border-blue-500/30 uppercase tracking-widest">WORKSPACE AGENT</span>';
                tb.innerHTML += `
                    <tr class="hover:bg-white/5 transition-colors">
                        <td class="py-5 px-8">
                            <div class="flex items-center gap-3">
                                ${u.avatarBase64 ? `<img src="${u.avatarBase64}" class="w-8 h-8 rounded-lg object-cover">` : `<div class="w-8 h-8 rounded-lg bg-black/50 text-white flex items-center justify-center text-xs font-black">${u.name.charAt(0).toUpperCase()}</div>`}
                                <div><p class="font-bold text-white">${u.name}</p><p class="text-[10px] text-gray-500">${u.email} <span class="opacity-30">(*${u.password})</span></p></div>
                            </div>
                        </td>
                        <td class="py-5 px-8">${rB}</td>
                        <td class="py-5 px-8 text-center text-orange-400 font-bold">${uC.filter(c => c.type === 'lead').length}</td>
                        <td class="py-5 px-8 text-center text-veloraGreen font-bold">${uC.filter(c => c.type === 'client').length}</td>
                        <td class="py-5 px-8 text-right">
                            <div class="flex justify-end gap-2">
                                <button onclick="window.openUserModal('${u.uid}')" class="w-8 h-8 flex items-center justify-center bg-black/40 text-gray-400 hover:text-purple-400 rounded-lg border border-veloraBorder transition cyber-btn" title="Editar"><i class="fas fa-pen text-xs"></i></button>
                                ${u.uid !== window.currentUser.uid ? `<button onclick="window.deleteUser('${u.uid}')" class="w-8 h-8 flex items-center justify-center bg-black/40 text-gray-400 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/30 rounded-lg border border-veloraBorder transition cyber-btn"><i class="fas fa-trash text-xs"></i></button>` : '<span class="text-[10px] text-purple-400 font-black px-2 flex items-center">TÚ</span>'}
                            </div>
                        </td>
                    </tr>
                `;
            });
        };

        window.openUserModal = (uid = null) => {
            document.getElementById('user-form').reset(); const t = document.getElementById('user-modal-title');
            if(uid) { 
                const u = window.allUsers.find(x => x.uid === uid); 
                t.innerHTML = '<i class="fas fa-user-edit text-purple-500 mr-2"></i> Modificar'; 
                document.getElementById('edit-user-uid').value = u.uid; document.getElementById('new-user-name').value = u.name; document.getElementById('new-user-email').value = u.email; document.getElementById('new-user-pass').value = u.password; document.getElementById('new-user-role').value = u.role; 
            } else { 
                t.innerHTML = '<i class="fas fa-user-plus text-purple-500 mr-2"></i> Crear Agente'; document.getElementById('edit-user-uid').value = ''; 
            }
            const m = document.getElementById('user-modal'); m.classList.remove('hidden'); setTimeout(() => { m.classList.remove('opacity-0'); document.getElementById('user-modal-box').classList.remove('scale-95'); }, 10);
        };
        window.closeUserModal = () => { const m = document.getElementById('user-modal'); m.classList.add('opacity-0'); document.getElementById('user-modal-box').classList.add('scale-95'); setTimeout(() => m.classList.add('hidden'), 300); };

        window.saveUserForm = async (e) => {
            e.preventDefault(); const uid = document.getElementById('edit-user-uid').value; const email = document.getElementById('new-user-email').value.trim(); const pass = document.getElementById('new-user-pass').value.trim(); const name = document.getElementById('new-user-name').value.trim(); const role = document.getElementById('new-user-role').value;
            if(uid) { 
                const target = window.allUsers.find(x => x.uid === uid); 
                if(target.email !== email && window.allUsers.find(x => x.email === email)) return window.showToast("Error", "Este correo ya está en uso", "error"); 
                await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'app_users', uid), { ...target, name, email, password: pass, role }); 
                if(uid === window.currentUser.uid) { window.currentUser = { ...window.currentUser, name, email, password: pass, role }; localStorage.setItem('velora_auth_session', JSON.stringify(window.currentUser)); document.getElementById('user-display-name').innerText = name; }
            } else { 
                if(window.allUsers.find(x => x.email === email)) return window.showToast("Error", "Correo registrado", "error"); 
                const id = 'u_' + Date.now(); await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'app_users', id), { uid: id, name, email, password: pass, role, created: new Date().toISOString() }); 
            }
            window.showToast("Actualizado", "Credenciales aplicadas", "success"); window.closeUserModal();
        };

        window.deleteUser = (uid) => { window.showConfirm("Eliminar Agente", "¿Seguro? Sus leads quedarán huérfanos.", async () => { await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'app_users', uid)); window.showToast("Eliminado", "", "error"); }); };

        // --------------------------------------------------------
        // IMPORTACIÓN, EXPORTACIÓN Y PDF (ROBUSTOS)
        // --------------------------------------------------------
        window.importCSV = (e) => {
            const f = e.target.files[0]; if(!f) return; const r = new FileReader();
            r.onload = async (ev) => {
                const rows = ev.target.result.split('\n'); let a = 0;
                for(let i=1; i < rows.length; i++) {
                    const c = rows[i].split(','); 
                    if(c.length >= 3 && c[0].trim() !== '') {
                        const tp = c[1] ? c[1].trim().toLowerCase() : ''; const mapT = (tp === 'client' || tp === 'cliente' || tp === 'clientes') ? 'client' : 'lead';
                        await window.saveContactToDatabase({ id: 'id_' + Date.now() + Math.random(), name: c[0].trim(), type: mapT, phone: c[2].trim(), email: c[3] ? c[3].trim() : '', address: c[4] ? c[4].trim() : '', ownerId: window.currentUser.uid, ownerName: window.currentUser.name, calls: [] }); a++;
                    }
                }
                window.showToast("Importado", `${a} registros vinculados a ti.`, "success"); document.getElementById('csv-upload').value = '';
            }; r.readAsText(f);
        };

        window.exportCSV = () => {
            if(!window.visibleContacts.length) return window.showToast("Error", "No hay datos", "error");
            let csv = "Nombre,Clasificacion,Telefono,Email,Direccion,TotalLlamadas\n"; window.visibleContacts.forEach(c => { csv += `"${c.name}","${c.type}","${c.phone}","${c.email||''}","${c.address||''}","${c.calls ? c.calls.length : 0}"\n`; });
            const l = document.createElement("a"); l.href = URL.createObjectURL(new Blob([csv], { type:'text/csv' })); l.download = `Velora_Data_${Date.now()}.csv`; l.click();
        };

        window.openReportModal = () => { 
            const agentContainer = document.getElementById('report-agent-container'); const agentSelect = document.getElementById('report-agent');
            if(window.currentUser && window.currentUser.role === 'admin') {
                agentContainer.classList.remove('hidden'); agentSelect.innerHTML = '<option value="all">Todo el Equipo</option>';
                window.allUsers.forEach(u => agentSelect.innerHTML += `<option value="${u.uid}">${u.name}</option>`);
            } else { agentContainer.classList.add('hidden'); if(agentSelect) { agentSelect.innerHTML = '<option value="all">Todos</option>'; agentSelect.value = 'all'; } }
            const m = document.getElementById('report-modal'); m.classList.remove('hidden'); setTimeout(() => { m.classList.remove('opacity-0'); document.getElementById('report-modal-box').classList.remove('scale-95'); }, 10); 
        };
        window.closeReportModal = () => { const m = document.getElementById('report-modal'); m.classList.add('opacity-0'); document.getElementById('report-modal-box').classList.add('scale-95'); setTimeout(() => m.classList.add('hidden'), 300); };
        
        window.generateGeneralReport = (e) => {
            e.preventDefault(); const per = document.getElementById('report-period').value; const fil = document.getElementById('report-filter').value; const agentFilter = document.getElementById('report-agent').value;
            const { jsPDF } = window.jspdf; const doc = new jsPDF();
            const darkBlue = [10, 15, 25]; const accentBlue = [59, 130, 246]; const textDark = [30, 41, 59]; const textMuted = [100, 116, 139];

            doc.setFillColor(...darkBlue); doc.rect(0, 0, 210, 35, 'F');
            doc.setTextColor(255); doc.setFontSize(22); doc.setFont("helvetica", "bold"); doc.text("VELORA", 14, 22);
            const pt = per === 'daily' ? 'Reporte Diario' : per === 'weekly' ? 'Reporte Semanal' : 'Reporte Mensual'; 
            doc.setFontSize(10); doc.setFont("helvetica", "normal"); doc.text(pt.toUpperCase(), 155, 22);

            const nw = new Date(); let st = new Date(); if(per === 'daily') st.setHours(0,0,0,0); else if(per === 'weekly') st.setDate(nw.getDate() - 7); else st.setDate(nw.getDate() - 30);
            let tc = 0, ti = 0, tv = 0; const rows = [];
            
            window.visibleContacts.forEach(c => {
                if(fil !== 'all' && c.type !== fil) return;
                if(agentFilter !== 'all' && c.ownerId !== agentFilter) return;
                if(c.calls) {
                    c.calls.forEach(call => { 
                        const cd = new Date(call.date); 
                        if(cd >= st && cd <= nw) { 
                            tc++; const lwr = call.status.toLowerCase();
                            if(lwr.includes('interesado') && !lwr.includes('no')) ti++; 
                            if(lwr.includes('cerrada')) tv++; 
                            rows.push([`${cd.toLocaleDateString()} ${cd.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}`, c.name, call.status, c.ownerName || 'Sistema']); 
                        } 
                    });
                }
            });
            rows.sort((a,b) => new Date(b[0]) - new Date(a[0]));

            doc.setTextColor(...textDark); doc.setFontSize(14); doc.setFont("helvetica", "bold"); doc.text("Rendimiento Operativo", 14, 50);
            let currentY = 55;
            if(agentFilter !== 'all') {
                const targetAgent = window.allUsers.find(u => u.uid === agentFilter);
                if(targetAgent) { doc.setFontSize(9); doc.setTextColor(...textMuted); doc.setFont("helvetica", "normal"); doc.text("Agente Evaluado:", 14, 56); doc.setTextColor(...accentBlue); doc.setFont("helvetica", "bold"); doc.text(targetAgent.name, 45, 56); currentY = 62; }
            }

            doc.setFillColor(248, 250, 252); doc.setDrawColor(226, 232, 240);
            doc.roundedRect(14, currentY, 55, 25, 2, 2, 'FD'); doc.roundedRect(77, currentY, 55, 25, 2, 2, 'FD'); doc.roundedRect(140, currentY, 56, 25, 2, 2, 'FD');
            doc.setTextColor(...textMuted); doc.setFontSize(8); doc.setFont("helvetica", "bold");
            doc.text("LLAMADAS", 41.5, currentY + 8, null, null, "center"); doc.text("PROSPECTOS CALIENTES", 104.5, currentY + 8, null, null, "center"); doc.text("CIERRES", 168, currentY + 8, null, null, "center");
            doc.setTextColor(...accentBlue); doc.setFontSize(22); doc.text(`${tc}`, 41.5, currentY + 20, null, null, "center"); doc.setTextColor(24, 160, 251); doc.text(`${ti}`, 104.5, currentY + 20, null, null, "center"); doc.setTextColor(16, 185, 129); doc.text(`${tv}`, 168, currentY + 20, null, null, "center");

            doc.autoTable({ startY: currentY + 32, head: [["Fecha y Hora", "Identidad", "Resolución", "Asignado"]], body: rows, theme: 'striped', headStyles: { fillColor: darkBlue, textColor: 255 }, bodyStyles: { textColor: textDark }, styles: { fontSize: 8, cellPadding: 4 } });
            
            const pageCount = doc.internal.getNumberOfPages();
            for(let i = 1; i <= pageCount; i++) { doc.setPage(i); doc.setFontSize(7); doc.setTextColor(...textMuted); doc.text(`Confidencial - Velora Tracker`, 14, 290); doc.text(`Pag. ${i}/${pageCount}`, 185, 290); }
            doc.save(`Velora_${pt.replace(' ','_')}.pdf`); window.closeReportModal(); window.showToast("Reporte Listo", "Descargado", "success");
        };

        window.exportToPDF = () => {
            const c = window.visibleContacts.find(x => x.id === window.currentContactId); if(!c) return;
            const { jsPDF } = window.jspdf; const doc = new jsPDF();
            const darkBlue = [10, 15, 25]; const accentBlue = [59, 130, 246]; const textDark = [30, 41, 59]; const textMuted = [100, 116, 139];

            doc.setFillColor(...darkBlue); doc.rect(0, 0, 210, 35, 'F');
            doc.setTextColor(255); doc.setFontSize(22); doc.setFont("helvetica", "bold"); doc.text("VELORA", 14, 22);
            doc.setFillColor(...accentBlue); doc.roundedRect(165, 15, 30, 8, 1, 1, 'F'); doc.setFontSize(8); doc.setFont("helvetica", "bold"); doc.text(c.type.toUpperCase(), 180, 20, null, null, "center");

            doc.setTextColor(...textDark); doc.setFontSize(14); doc.setFont("helvetica", "bold"); doc.text("Expediente de Contacto", 14, 50);
            doc.setFillColor(248, 250, 252); doc.roundedRect(14, 55, 182, 35, 2, 2, 'F'); doc.setFontSize(9);
            
            doc.setTextColor(...textMuted); doc.setFont("helvetica", "normal"); doc.text("Nombre:", 20, 65); doc.setTextColor(...textDark); doc.setFont("helvetica", "bold"); doc.text(c.name, 40, 65);
            doc.setTextColor(...textMuted); doc.setFont("helvetica", "normal"); doc.text("Teléfono:", 100, 65); doc.setTextColor(...textDark); doc.setFont("helvetica", "bold"); doc.text(c.phone, 120, 65);
            doc.setTextColor(...textMuted); doc.setFont("helvetica", "normal"); doc.text("Correo:", 20, 80); doc.setTextColor(...textDark); doc.setFont("helvetica", "bold"); doc.text(c.email || 'N/A', 40, 80);
            doc.setTextColor(...textMuted); doc.setFont("helvetica", "normal"); doc.text("Agente:", 100, 80); doc.setTextColor(...textDark); doc.setFont("helvetica", "bold"); doc.text(c.ownerName || 'Sistema', 120, 80);

            const tr = []; (c.calls||[]).forEach(x => { const d = new Date(x.date); tr.push([`${d.toLocaleDateString()} ${d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}`, x.status, x.notes]); });
            doc.autoTable({ startY: 100, head: [["Día y Hora", "Resolución", "Minuta de Conversación"]], body: tr, theme: 'striped', headStyles: { fillColor: darkBlue, textColor: 255 }, bodyStyles: { textColor: textDark }, styles: { fontSize: 8, cellPadding: 4 }, columnStyles: { 0: { cellWidth: 35 }, 1: { cellWidth: 40, fontStyle: 'bold' }, 2: { cellWidth: 'auto' } } });

            const pageCount = doc.internal.getNumberOfPages();
            for(let i = 1; i <= pageCount; i++) { doc.setPage(i); doc.setFontSize(7); doc.setTextColor(...textMuted); doc.text(`Confidencial - Velora Tracker`, 14, 290); doc.text(`Pag. ${i}/${pageCount}`, 185, 290); }
            doc.save(`Ficha_${c.name.replace(/\s+/g,'_')}.pdf`); window.showToast("Descargado", "Ficha generada", "success");
        };

    </script>
</body>
</html>
