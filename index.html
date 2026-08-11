<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>La Papa Caliente | App ERP & POS</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

    <script>
        window.tailwind = {
            config: {
                theme: { extend: { colors: { papa: { black: '#0a0a0a', dark: '#141414', yellow: '#FFB800', fire: '#FF3D00' } }, fontFamily: { sans: ['Montserrat', 'sans-serif'], ticket: ['Space Mono', 'monospace'] } } }
            }
        };
    </script>

    <style>
        body { background-color: #050505; color: #ffffff; overflow: hidden; font-family: 'Montserrat', sans-serif; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #FF3D00; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        
        /* SAFE AREAS Y ACELERACION TACTIL iOS */
        @supports (-webkit-touch-callout: none) { input, select, textarea { font-size: 16px !important; } }
        .safe-padding-bottom { padding-bottom: max(env(safe-area-inset-bottom), 1rem); }
        .safe-padding-top { padding-top: max(env(safe-area-inset-top), 0.5rem); }
        button, a, input, select { touch-action: manipulation; -webkit-tap-highlight-color: transparent; }

        .toast-custom { opacity: 0; transform: translateX(100%); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 99999; }
        .toast-custom.show { opacity: 1; transform: translateX(0); }
        .modal-overlay { opacity: 0; pointer-events: none; transition: all 0.3s ease; backdrop-filter: blur(8px); z-index: 500; }
        .modal-overlay.active { opacity: 1; pointer-events: auto; }
        .modal-content { transform: scale(0.95) translateY(-20px); opacity: 0; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .modal-overlay.active .modal-content { transform: scale(1) translateY(0); opacity: 1; }
        
        .sidebar-btn.active { background-color: rgba(255, 61, 0, 0.15); color: #FF3D00; border-left: 4px solid #FF3D00; }
        .kds-card.time-ok { border-top: 4px solid #22c55e; }
        .kds-card.time-warn { border-top: 4px solid #eab308; }
        .kds-card.time-danger { border-top: 4px solid #ef4444; animation: pulse-border 2s infinite; }
        @keyframes pulse-border { 0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }

        /* --- LOGIN STYLES --- */
        #app-login-screen {
            position: fixed; inset: 0; z-index: 999999;
            background: linear-gradient(135deg, rgba(5, 5, 5, 0.9) 0%, rgba(15, 8, 5, 0.95) 100%), url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1920&auto=format&fit=crop') center/cover no-repeat;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            transition: opacity 0.5s ease, transform 0.5s ease; overflow-y: auto; overflow-x: hidden; padding: 1.5rem; min-height: 100dvh;
        }
        #app-login-screen.hidden-auth { opacity: 0; transform: scale(1.02); pointer-events: none; }
        .login-glass-card { width: 100%; max-width: 380px; box-sizing: border-box; background: rgba(20, 20, 20, 0.5); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 61, 0, 0.2); border-radius: 2rem; padding: 2.5rem 2rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.9); display: flex; flex-direction: column; gap: 1.5rem; animation: slideUpFade 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        @keyframes slideUpFade { from { opacity: 0; transform: translateY(40px); filter: blur(5px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }

        .login-logo-container { position: relative; width: 110px; height: 110px; margin: 0 auto; }
        .login-logo-img { position: relative; width: 100%; height: 100%; object-fit: cover; border-radius: 50%; border: 2px solid rgba(255, 255, 255, 0.8); z-index: 10; background-color: #111; }
        .login-title { color: #ffffff; font-size: 1.8rem; font-weight: 800; text-align: center; margin-top: -0.5rem; }
        .login-input-group { position: relative; width: 100%; display: flex; align-items: center; }
        .login-input-icon { position: absolute; left: 1.2rem; color: #666; font-size: 1.3rem; }
        .login-input { width: 100%; box-sizing: border-box; background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.08); color: white; padding: 1.1rem 1.1rem 1.1rem 3.2rem; border-radius: 1rem; font-size: 1rem; outline: none; transition: all 0.3s ease; }
        .login-input:focus { border-color: #FF3D00; background: rgba(0, 0, 0, 0.7); }
        .login-btn-submit { width: 100%; background: linear-gradient(135deg, #FF3D00 0%, #d83400 100%); color: white; font-weight: 700; text-transform: uppercase; padding: 1.1rem; border-radius: 1rem; border: none; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 0.5rem; }

        /* IMPRESION TERMICA */
        #thermal-print-area { display: none; }
        @media print {
            body * { visibility: hidden; }
            body.thermal-printing #thermal-print-area, body.thermal-printing #thermal-print-area * { visibility: visible; color: black !important; }
            body.thermal-printing #thermal-print-area { display: block !important; position: absolute; left: 0; top: 0; width: 80mm; padding: 0 2mm; background: white !important; margin: 0; }
            body.thermal-printing { background-color: white; }
            @page { margin: 0; }
        }
    </style>
</head>
<body class="antialiased selection:bg-papa-fire selection:text-white">

    <audio id="kds-alert" src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=" preload="auto"></audio>
    <div id="toast-container" class="fixed top-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none"></div>

    <div id="app-login-screen">
        <div class="login-glass-card">
            <div class="login-logo-container"><img id="login-brand-logo" src="https://placehold.co/150x150/FF3D00/FFF?text=PC" class="login-logo-img" alt="Logo"></div>
            <h1 class="login-title">La Papa Caliente<br><span class="text-sm text-papa-fire uppercase tracking-widest">App Administrativa</span></h1>
            <div class="flex flex-col gap-4 w-full">
                <div class="login-input-group"><input type="text" id="epic-user" class="login-input" placeholder="Usuario" autocomplete="off" autocapitalize="off"><i class="ph-bold ph-user login-input-icon"></i></div>
                <div class="login-input-group"><input type="password" id="epic-pass" class="login-input" placeholder="Contraseña" autocomplete="off" onkeypress="if(event.key === 'Enter') window.handleEpicLogin()"><i class="ph-bold ph-lock-key login-input-icon"></i></div>
                <button onclick="window.handleEpicLogin()" class="login-btn-submit">Ingresar <i class="ph-bold ph-sign-in"></i></button>
            </div>
        </div>
    </div>

    <!-- MAIN APP DASHBOARD -->
    <div id="adminDashboard" class="fixed inset-0 z-[300] bg-[#070707] hidden flex-col transition-all duration-300 opacity-0 pointer-events-none h-[100dvh]">
        
        <!-- HEADER APP -->
        <div class="min-h-[4rem] border-b border-white/10 flex items-center justify-between px-4 sm:px-6 bg-[#0f0f0f] shrink-0 no-print z-[350] relative shadow-md safe-padding-top">
            <div class="flex items-center gap-3">
                <button onclick="window.toggleAdminSidebar()" class="md:hidden text-white text-3xl hover:text-papa-fire transition p-2 -ml-2 z-[450]"><i class="ph ph-list pointer-events-none"></i></button>
                <div class="w-8 h-8 rounded bg-papa-fire/20 border border-papa-fire flex items-center justify-center"><i class="ph-fill ph-storefront text-papa-fire"></i></div>
                <span class="font-black text-sm uppercase text-white truncate hidden sm:block">App Central</span>
                <span id="role-badge" class="bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[9px] px-2 py-0.5 rounded font-bold uppercase shrink-0">Admin</span>
                <span id="hw-status-badge" class="bg-purple-500/10 text-purple-400 border border-purple-500/30 text-[9px] px-2 py-0.5 rounded font-bold uppercase shrink-0 hidden items-center gap-1"><i class="ph-bold ph-device-mobile"></i> Modo App</span>
            </div>
            <button onclick="window.logoutAdmin()" class="bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-colors shrink-0 flex items-center gap-2"><i class="ph-bold ph-sign-out"></i> <span class="hidden sm:inline">Salir</span></button>
        </div>
        
        <!-- SIDEBAR & CONTENT -->
        <div class="flex-1 flex overflow-hidden relative w-full">
            <div id="sidebar-overlay" onclick="window.toggleAdminSidebar()" class="fixed inset-0 bg-black/80 z-[200] hidden md:hidden backdrop-blur-sm transition-opacity"></div>

            <aside class="fixed inset-y-0 left-0 md:relative transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out z-[250] md:z-10 w-64 bg-[#0a0a0a] border-r border-white/10 flex flex-col py-6 overflow-y-auto no-print shadow-2xl md:shadow-none safe-padding-bottom" id="erp-sidebar">
                <div class="flex justify-between items-center px-4 mb-4 md:hidden">
                    <h3 class="font-black text-white uppercase text-xs">Menú</h3>
                    <button type="button" onclick="window.toggleAdminSidebar()" class="text-zinc-500 hover:text-white bg-zinc-900 p-2 rounded-full"><i class="ph-bold ph-x text-lg pointer-events-none"></i></button>
                </div>

                <div class="space-y-1 px-4 admin-only">
                    <p class="text-[9px] font-black uppercase text-zinc-600 tracking-widest mb-3 ml-2">General</p>
                    <button onclick="window.switchAdminPanel('dashboard')" id="btn-side-dashboard" class="sidebar-btn active w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase text-left transition-all"><i class="ph-bold ph-squares-four text-lg"></i> Resumen</button>
                    <button onclick="window.switchAdminPanel('terminal')" id="btn-side-terminal" class="sidebar-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase text-left transition-all text-papa-yellow"><i class="ph-bold ph-desktop text-lg"></i> Terminal POS</button>
                    <button onclick="window.switchAdminPanel('reports')" id="btn-side-reports" class="sidebar-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase text-left transition-all"><i class="ph-bold ph-chart-pie text-lg text-green-400"></i> Reportes Z (PDF)</button>
                </div>
                <div class="space-y-1 px-4 mt-8">
                    <p class="text-[9px] font-black uppercase text-zinc-600 tracking-widest mb-3 ml-2">Operaciones</p>
                    <button onclick="window.switchAdminPanel('kds')" id="btn-side-kds" class="sidebar-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase text-left transition-all"><i class="ph-bold ph-cooking-pot text-lg"></i> Monitor KDS</button>
                    <button onclick="window.switchAdminPanel('orders')" id="btn-side-orders" class="sidebar-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase text-left transition-all"><i class="ph-bold ph-receipt text-lg"></i> Órdenes Activas</button>
                    <button onclick="window.switchAdminPanel('pos')" id="btn-side-pos" class="sidebar-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase text-left transition-all admin-only"><i class="ph-bold ph-cash-register text-lg"></i> Control de Caja</button>
                </div>
                <div class="space-y-1 px-4 mt-8 admin-only">
                    <p class="text-[9px] font-black uppercase text-zinc-600 tracking-widest mb-3 ml-2">Inventario & Web</p>
                    <button onclick="window.switchAdminPanel('inventory')" id="btn-side-inventory" class="sidebar-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase text-left transition-all"><i class="ph-bold ph-hamburger text-lg"></i> Menú App</button>
                    <button onclick="window.switchAdminPanel('ingredients')" id="btn-side-ingredients" class="sidebar-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase text-left transition-all"><i class="ph-bold ph-scales text-lg"></i> Stock Insumos</button>
                    <button onclick="window.switchAdminPanel('gallery')" id="btn-side-gallery" class="sidebar-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase text-left transition-all"><i class="ph-bold ph-image text-lg"></i> Galería Web</button>
                    <button onclick="window.switchAdminPanel('settings')" id="btn-side-settings" class="sidebar-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase text-left transition-all"><i class="ph-bold ph-gear text-lg"></i> Ajustes / Hardware</button>
                </div>
            </aside>

            <main class="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 bg-[#050505] relative safe-padding-bottom w-full" id="print-area">
                
                <!-- DASHBOARD -->
                <div id="panel-admin-dashboard" class="admin-panel-tab space-y-6 pb-10">
                    <h2 class="text-2xl font-black uppercase text-white tracking-tight">Dashboard General</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="bg-zinc-900 border border-white/5 p-5 rounded-2xl shadow-lg relative overflow-hidden"><div class="absolute -right-4 -bottom-4 text-white/5 text-7xl"><i class="ph-fill ph-currency-dollar"></i></div><p class="text-[10px] font-bold text-zinc-400 uppercase relative z-10">Ventas de Hoy</p><p class="text-3xl font-black text-papa-yellow mt-1 relative z-10" id="dash-ventas-hoy">$0.00</p></div>
                        <div class="bg-zinc-900 border border-white/5 p-5 rounded-2xl shadow-lg relative overflow-hidden"><div class="absolute -right-4 -bottom-4 text-white/5 text-7xl"><i class="ph-fill ph-shopping-bag"></i></div><p class="text-[10px] font-bold text-zinc-400 uppercase relative z-10">Órdenes Hoy</p><p class="text-3xl font-black text-white mt-1 relative z-10" id="dash-ordenes-hoy">0</p></div>
                        <div class="bg-zinc-900 border border-white/5 p-5 rounded-2xl shadow-lg relative overflow-hidden"><div class="absolute -right-4 -bottom-4 text-white/5 text-7xl"><i class="ph-fill ph-trend-up"></i></div><p class="text-[10px] font-bold text-zinc-400 uppercase relative z-10">Ticket Promedio</p><p class="text-3xl font-black text-green-400 mt-1 relative z-10" id="dash-ticket-prom">$0.00</p></div>
                        <div class="bg-zinc-900 border border-white/5 p-5 rounded-2xl shadow-lg relative overflow-hidden"><div class="absolute -right-4 -bottom-4 text-white/5 text-7xl"><i class="ph-fill ph-warning"></i></div><p class="text-[10px] font-bold text-zinc-400 uppercase relative z-10">Alertas Stock</p><p class="text-3xl font-black text-papa-fire mt-1 relative z-10" id="dash-alertas-stock">0</p></div>
                    </div>
                </div>

                <!-- TERMINAL POS -->
                <div id="panel-admin-terminal" class="admin-panel-tab hidden flex-col md:flex-row gap-4 h-auto md:h-full pb-10 md:pb-0">
                    <div class="w-full md:flex-1 flex flex-col h-auto md:h-full bg-black border border-white/10 rounded-2xl p-4 shadow-xl shrink-0 md:shrink min-h-[450px]">
                        <div class="flex justify-between items-center mb-4 border-b border-white/10 pb-4 shrink-0">
                            <h2 class="text-xl font-black uppercase text-white tracking-tight flex items-center gap-2"><i class="ph-bold ph-desktop text-papa-fire"></i> Sistema POS</h2>
                            <span class="text-[10px] text-zinc-500 font-bold uppercase bg-zinc-900 px-2 py-1 rounded hidden sm:inline">Toque un producto para agregar</span>
                        </div>
                        <div class="w-full h-auto md:flex-1 overflow-y-visible md:overflow-y-auto no-scrollbar grid grid-cols-2 lg:grid-cols-3 gap-3 content-start pr-1" id="pos-menu-grid"></div>
                    </div>
                    
                    <div class="w-full md:w-[400px] bg-black border border-white/10 rounded-2xl flex flex-col h-auto md:h-full shrink-0 shadow-2xl relative min-h-[500px]">
                        <div class="bg-gradient-to-r from-zinc-900 to-black p-4 border-b border-white/10 flex justify-between items-center shrink-0">
                            <h3 class="font-black uppercase text-sm flex items-center gap-2"><i class="ph-bold ph-shopping-cart text-papa-fire text-lg"></i> Orden Actual</h3>
                            <span class="bg-papa-fire text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg" id="pos-cart-badge">0 Items</span>
                        </div>
                        <div class="p-3 bg-zinc-950 border-b border-white/10 shrink-0 space-y-2">
                            <div><label class="block text-[9px] text-zinc-500 font-bold uppercase mb-1">Nombre / Cliente</label><input type="text" id="pos-client-name" placeholder="Ej: Juan Perez..." class="w-full bg-black border border-white/10 text-white px-3 py-2.5 rounded-lg text-xs font-bold outline-none focus:border-papa-fire transition"></div>
                            <div class="flex gap-2">
                                <div class="flex-1"><label class="block text-[9px] text-zinc-500 font-bold uppercase mb-1">Modalidad</label><select id="pos-order-type" onchange="document.getElementById('pos-table-input').classList.toggle('hidden', this.value !== 'Mesa')" class="w-full bg-black border border-white/10 text-white px-3 py-2.5 rounded-lg text-xs font-bold outline-none focus:border-papa-fire"><option value="Local">Para Llevar (Local)</option><option value="Mesa">Comer en Mesa</option></select></div>
                                <div class="w-1/3 hidden" id="pos-table-input"><label class="block text-[9px] text-zinc-500 font-bold uppercase mb-1">Mesa</label><input type="text" id="pos-client-table" placeholder="#..." class="w-full bg-black border border-white/10 text-white px-3 py-2.5 rounded-lg text-xs font-bold outline-none focus:border-papa-fire text-center"></div>
                            </div>
                        </div>
                        <div class="w-full min-h-[250px] max-h-[40vh] md:max-h-none md:flex-1 overflow-y-auto p-3 space-y-2 no-scrollbar bg-[#0a0a0a]" id="pos-cart-items"><p class="text-xs text-zinc-500 text-center mt-10 font-medium">El carrito está vacío.</p></div>
                        <div class="p-4 bg-zinc-900 border-t border-white/10 shrink-0 shadow-[0_-10px_20px_rgba(0,0,0,0.5)] z-10 mt-auto">
                            <div class="flex justify-between items-center mb-4 text-sm font-black uppercase"><span>Total a Cobrar:</span><span id="pos-total-price" class="text-3xl text-papa-yellow">$0.00</span></div>
                            <div class="grid grid-cols-2 gap-3 mb-3">
                                <button onclick="window.processTerminalOrder('Efectivo')" class="bg-[#107c41] hover:bg-green-600 text-white py-3.5 rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 shadow-lg transition"><i class="ph-bold ph-money text-lg"></i> Pagar Efectivo</button>
                                <button onclick="window.processTerminalOrder('Tarjeta/Transferencia')" class="bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl text-[10px] font-black uppercase flex items-center justify-center gap-2 shadow-lg transition"><i class="ph-bold ph-credit-card text-lg"></i> Tarjeta / Transf.</button>
                            </div>
                            <button onclick="window.adminCart = []; window.renderAdminCart();" class="w-full bg-red-600/10 border border-red-500/30 text-red-500 hover:bg-red-600 hover:text-white py-2.5 rounded-xl text-[10px] font-bold uppercase transition">Cancelar Orden</button>
                        </div>
                    </div>
                </div>

                <!-- REPORTES FINANCIEROS -->
                <div id="panel-admin-reports" class="admin-panel-tab hidden flex-col w-full space-y-6 pb-10">
                    <h2 class="text-2xl font-black uppercase text-white tracking-tight flex items-center gap-2"><i class="ph-bold ph-chart-bar text-green-400"></i> Reportes y Cierres Z</h2>
                    <div class="bg-black border border-white/10 rounded-2xl p-6 shadow-xl shrink-0">
                        <p class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Seleccione el rango de fechas:</p>
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                            <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-2">Desde</label><input type="date" id="rep-start" class="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-green-500 cursor-pointer" onclick="try{this.showPicker()}catch(e){}"></div>
                            <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-2">Hasta</label><input type="date" id="rep-end" class="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-green-500 cursor-pointer" onclick="try{this.showPicker()}catch(e){}"></div>
                            <div class="md:col-span-2 flex flex-col sm:flex-row gap-3">
                                <button onclick="window.generateReport()" class="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase text-[10px] tracking-widest py-3 rounded-xl shadow-lg transition flex justify-center items-center gap-2"><i class="ph-bold ph-magnifying-glass text-lg"></i> Consultar</button>
                                <button onclick="window.exportReportCSV()" class="flex-1 bg-[#107c41] hover:bg-green-600 text-white font-black uppercase text-[10px] tracking-widest py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2"><i class="ph-bold ph-file-csv text-lg"></i> Excel/CSV</button>
                                <button onclick="window.exportReportPDF()" class="flex-1 bg-red-600 hover:bg-red-500 text-white font-black uppercase text-[10px] tracking-widest py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2"><i class="ph-bold ph-file-pdf text-lg"></i> Guardar PDF</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 bg-black border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden flex flex-col hidden" id="report-results-container">
                        <div id="report-print-area" class="flex-1 overflow-y-auto no-scrollbar bg-white text-black p-8 rounded-xl shadow-inner">
                            <!-- Inyectado por JS -->
                        </div>
                    </div>
                </div>

                <!-- CONTROL CAJA Y POS SUPER AVANZADO -->
                <div id="panel-admin-pos" class="admin-panel-tab hidden space-y-6 pb-10">
                    <h2 class="text-2xl font-black uppercase text-white tracking-tight">Control de Caja y Operaciones</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        
                        <div class="bg-black border border-white/10 p-6 rounded-2xl space-y-4 flex flex-col justify-between">
                            <div>
                                <h3 class="text-sm font-black uppercase text-white border-b border-white/10 pb-2 mb-4"><i class="ph-bold ph-lock-key text-papa-fire"></i> Gestión de Turno</h3>
                                <div id="caja-status" class="text-xl font-bold text-zinc-400 mb-2">Turno Cerrado</div>
                                <div class="text-[10px] text-zinc-500 font-bold uppercase hidden mb-4" id="caja-info-operador">Operador: <span id="caja-operador-name" class="text-white">---</span></div>
                                <div class="text-[10px] text-zinc-500 font-bold uppercase hidden" id="caja-info-time">Abierto desde: <span id="caja-open-time" class="text-white">---</span></div>
                            </div>
                            
                            <div id="caja-apertura-box">
                                <label class="block text-[10px] font-bold text-zinc-400 uppercase mb-2">Fondo Inicial ($)</label>
                                <input type="number" id="caja-monto" class="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-xl text-lg font-bold outline-none focus:border-green-500 transition text-center">
                                <button onclick="window.abrirTurnoCaja()" class="w-full mt-3 bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-xl text-xs uppercase shadow-lg transition">Abrir Turno</button>
                            </div>

                            <div id="caja-cierre-box" class="hidden">
                                <div class="bg-zinc-900/50 border border-white/5 p-4 rounded-xl mb-4 text-center">
                                    <p class="text-[10px] text-zinc-400 font-bold uppercase mb-1">Efectivo Esperado</p>
                                    <p id="caja-total-calc" class="text-3xl font-black text-papa-yellow">$0.00</p>
                                </div>
                                <button onclick="window.cerrarTurnoCaja()" class="w-full bg-red-600 hover:bg-red-500 text-white font-black py-4 rounded-xl text-xs uppercase shadow-lg transition flex items-center justify-center gap-2"><i class="ph-bold ph-clipboard-text text-lg"></i> Cerrar Caja Z</button>
                                <button onclick="window.POS.abrirCaja('Cajero Manual')" class="w-full mt-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-xl text-[10px] uppercase transition flex items-center justify-center gap-2"><i class="ph-bold ph-tray"></i> Abrir Gaveta</button>
                            </div>
                        </div>

                        <!-- Calculadora y Division Cuenta omitidos visualmente para no saturar, pero el código es el mismo -->
                        <div class="bg-black border border-white/10 p-6 rounded-2xl flex flex-col shadow-xl">
                            <h3 class="text-sm font-black uppercase text-white border-b border-white/10 pb-2 mb-4"><i class="ph-bold ph-calculator text-blue-400"></i> Calculadora</h3>
                            <input type="text" id="std-calc-display" class="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-xl text-2xl font-ticket text-right mb-4 outline-none" readonly placeholder="0">
                            <div class="grid grid-cols-4 gap-2 flex-1 mb-4">
                                <button onclick="window.stdCalc('7')" class="bg-zinc-800 text-white font-bold rounded-lg py-3 hover:bg-zinc-700 text-lg">7</button><button onclick="window.stdCalc('8')" class="bg-zinc-800 text-white font-bold rounded-lg py-3 hover:bg-zinc-700 text-lg">8</button><button onclick="window.stdCalc('9')" class="bg-zinc-800 text-white font-bold rounded-lg py-3 hover:bg-zinc-700 text-lg">9</button><button onclick="window.stdCalc('/')" class="bg-zinc-700 text-papa-yellow font-black rounded-lg py-3 hover:bg-zinc-600 text-lg">/</button>
                                <button onclick="window.stdCalc('4')" class="bg-zinc-800 text-white font-bold rounded-lg py-3 hover:bg-zinc-700 text-lg">4</button><button onclick="window.stdCalc('5')" class="bg-zinc-800 text-white font-bold rounded-lg py-3 hover:bg-zinc-700 text-lg">5</button><button onclick="window.stdCalc('6')" class="bg-zinc-800 text-white font-bold rounded-lg py-3 hover:bg-zinc-700 text-lg">6</button><button onclick="window.stdCalc('*')" class="bg-zinc-700 text-papa-yellow font-black rounded-lg py-3 hover:bg-zinc-600 text-lg">*</button>
                                <button onclick="window.stdCalc('1')" class="bg-zinc-800 text-white font-bold rounded-lg py-3 hover:bg-zinc-700 text-lg">1</button><button onclick="window.stdCalc('2')" class="bg-zinc-800 text-white font-bold rounded-lg py-3 hover:bg-zinc-700 text-lg">2</button><button onclick="window.stdCalc('3')" class="bg-zinc-800 text-white font-bold rounded-lg py-3 hover:bg-zinc-700 text-lg">3</button><button onclick="window.stdCalc('-')" class="bg-zinc-700 text-papa-yellow font-black rounded-lg py-3 hover:bg-zinc-600 text-lg">-</button>
                                <button onclick="window.stdCalc('C')" class="bg-red-600/20 text-red-500 font-bold rounded-lg py-3 hover:bg-red-600 hover:text-white text-lg">C</button><button onclick="window.stdCalc('0')" class="bg-zinc-800 text-white font-bold rounded-lg py-3 hover:bg-zinc-700 text-lg">0</button><button onclick="window.stdCalc('=')" class="bg-zinc-600 text-white font-bold rounded-lg py-3 hover:bg-zinc-500 text-lg">=</button><button onclick="window.stdCalc('+')" class="bg-zinc-700 text-papa-yellow font-black rounded-lg py-3 hover:bg-zinc-600 text-lg">+</button>
                            </div>
                            <button onclick="window.cobrarDesdeCalculadora()" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-black uppercase py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-xs"><i class="ph-bold ph-plus-circle text-lg"></i> Usar en Caja</button>
                        </div>

                        <div class="flex flex-col gap-6 lg:col-span-1 xl:col-span-2">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black border border-white/10 p-6 rounded-2xl h-full">
                                <div class="border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6 flex flex-col relative">
                                    <h3 class="text-[10px] font-black uppercase text-zinc-500 mb-4 tracking-widest"><i class="ph-bold ph-users text-green-400"></i> Dividir Cuenta</h3>
                                    <label class="block text-[9px] font-bold text-zinc-400 uppercase mb-1">Total ($)</label>
                                    <input type="number" id="split-total" oninput="window.calcSplitBill()" class="w-full bg-zinc-900 border border-white/10 text-white px-3 py-2 rounded-lg text-sm font-bold outline-none mb-3">
                                    <label class="block text-[9px] font-bold text-zinc-400 uppercase mb-1">Personas</label>
                                    <input type="number" id="split-people" value="1" min="1" oninput="window.calcSplitBill()" class="w-full bg-zinc-900 border border-white/10 text-white px-3 py-2 rounded-lg text-sm font-bold outline-none mb-4 text-center">
                                    <div class="mt-auto pt-2 text-center">
                                        <p class="text-[8px] uppercase font-bold text-zinc-500">C/U Paga:</p>
                                        <p id="split-result" class="text-2xl font-black text-green-400">$0.00</p>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <h3 class="text-[10px] font-black uppercase text-zinc-500 mb-4 tracking-widest"><i class="ph-bold ph-coins text-papa-yellow"></i> Calc. Vuelto</h3>
                                    <label class="block text-[9px] font-bold text-zinc-400 uppercase mb-1">Total</label>
                                    <input type="number" id="vuelto-total" oninput="window.calcVuelto()" class="w-full bg-zinc-900 border border-white/10 text-white px-3 py-2 rounded-lg text-sm font-bold outline-none mb-3">
                                    <label class="block text-[9px] font-bold text-zinc-400 uppercase mb-1">Paga con</label>
                                    <input type="number" id="vuelto-pago" oninput="window.calcVuelto()" class="w-full bg-zinc-900 border border-white/10 text-white px-3 py-2 rounded-lg text-sm font-bold outline-none mb-4 focus:border-papa-fire">
                                    <div class="mt-auto pt-2 text-center relative">
                                        <p class="text-[8px] uppercase font-bold text-zinc-500 relative z-10">Cambio:</p>
                                        <p id="vuelto-result" class="text-2xl font-black text-white relative z-10">$0.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-black border border-white/10 p-6 rounded-2xl flex flex-col lg:col-span-3 xl:col-span-4 shadow-xl">
                            <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-4 mb-4 gap-4">
                                <h3 class="text-sm font-black uppercase text-white"><i class="ph-bold ph-list-dashes text-papa-fire"></i> Movimientos de Caja</h3>
                                <div class="flex items-center gap-2 bg-zinc-900/50 p-2 rounded-xl border border-white/5 w-full md:w-auto">
                                    <input type="text" id="manual-caja-desc" placeholder="Concepto..." class="bg-black border border-white/10 text-white px-3 py-2 rounded-lg text-[10px] outline-none w-full md:w-48">
                                    <input type="number" id="manual-caja-amt" placeholder="$ Monto" class="bg-black border border-white/10 text-white px-3 py-2 rounded-lg text-[10px] outline-none w-24">
                                    <button onclick="window.addManualCaja('out')" class="bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white p-2 rounded-lg transition" title="Retirar Dinero"><i class="ph-bold ph-minus text-lg"></i></button>
                                    <button onclick="window.addManualCaja('in')" class="bg-green-600/20 text-green-400 hover:bg-green-600 hover:text-white p-2 rounded-lg transition" title="Ingresar Dinero"><i class="ph-bold ph-plus text-lg"></i></button>
                                </div>
                            </div>
                            <div class="flex-1 overflow-y-auto no-scrollbar space-y-2 py-2 min-h-[200px]" id="caja-moves"></div>
                        </div>
                    </div>
                </div>

                <!-- KDS -->
                <div id="panel-admin-kds" class="admin-panel-tab hidden w-full h-auto xl:h-full flex-col space-y-4 pb-10 xl:pb-0">
                    <div class="flex justify-between items-center shrink-0">
                        <h2 class="text-2xl font-black uppercase text-white tracking-tight"><i class="ph-bold ph-cooking-pot text-papa-fire"></i> KDS (Cocina)</h2>
                    </div>
                    <div class="flex-1 flex flex-col xl:flex-row gap-5 overflow-y-auto xl:overflow-x-auto xl:overflow-y-hidden min-h-0 pb-4">
                        <div class="w-full xl:min-w-[300px] xl:w-1/4 shrink-0 bg-zinc-950 border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-lg min-h-[300px] xl:h-full"><div class="bg-black p-3 border-b border-white/10 font-black text-xs uppercase text-zinc-300 flex justify-between">Pendientes <span id="kds-cnt-pen" class="bg-zinc-800 px-2 rounded">0</span></div><div class="flex-1 overflow-y-auto p-3 space-y-3 no-scrollbar" id="kds-col-pen"></div></div>
                        <div class="w-full xl:min-w-[300px] xl:w-1/4 shrink-0 bg-zinc-950 border border-blue-500/20 rounded-2xl flex flex-col overflow-hidden shadow-lg min-h-[300px] xl:h-full"><div class="bg-blue-950/30 p-3 border-b border-blue-500/20 font-black text-xs uppercase text-blue-400 flex justify-between">Preparando <span id="kds-cnt-prep" class="bg-blue-500/20 px-2 rounded">0</span></div><div class="flex-1 overflow-y-auto p-3 space-y-3 no-scrollbar" id="kds-col-prep"></div></div>
                        <div class="w-full xl:min-w-[300px] xl:w-1/4 shrink-0 bg-zinc-950 border border-yellow-500/20 rounded-2xl flex flex-col overflow-hidden shadow-lg min-h-[300px] xl:h-full"><div class="bg-yellow-950/30 p-3 border-b border-yellow-500/20 font-black text-xs uppercase text-yellow-400 flex justify-between">Empacando <span id="kds-cnt-pack" class="bg-yellow-500/20 px-2 rounded">0</span></div><div class="flex-1 overflow-y-auto p-3 space-y-3 no-scrollbar" id="kds-col-pack"></div></div>
                        <div class="w-full xl:min-w-[300px] xl:w-1/4 shrink-0 bg-zinc-950 border border-green-500/20 rounded-2xl flex flex-col overflow-hidden shadow-lg min-h-[300px] xl:h-full"><div class="bg-green-950/30 p-3 border-b border-green-500/20 font-black text-xs uppercase text-green-400 flex justify-between">Para Entregar <span id="kds-cnt-ready" class="bg-green-500/20 px-2 rounded">0</span></div><div class="flex-1 overflow-y-auto p-3 space-y-3 no-scrollbar" id="kds-col-ready"></div></div>
                    </div>
                </div>

                <!-- ORDERS -->
                <div id="panel-admin-orders" class="admin-panel-tab hidden flex-col h-full space-y-4 pb-10">
                    <h2 class="text-2xl font-black uppercase text-white tracking-tight"><i class="ph-bold ph-list-numbers text-papa-yellow"></i> Historial de Órdenes</h2>
                    <div class="bg-black border border-white/10 rounded-2xl p-4 flex-1 flex flex-col min-h-[500px] overflow-hidden shadow-xl">
                        <div class="w-full overflow-x-auto flex-1 no-scrollbar">
                            <table class="w-full min-w-[700px] text-left text-xs whitespace-nowrap">
                                <thead class="text-zinc-500 uppercase border-b border-white/10"><tr><th class="pb-4 pl-3">ID</th><th class="pb-4">Fecha/Hora</th><th class="pb-4">Cliente</th><th class="pb-4">Total</th><th class="pb-4">Estado</th><th class="pb-4 pr-3 text-right">Acciones</th></tr></thead>
                                <tbody id="orders-history-table" class="divide-y divide-white/5 font-bold text-white"></tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- INVENTORY & MENU -->
                <div id="panel-admin-inventory" class="admin-panel-tab hidden flex-col h-full space-y-4 pb-10">
                    <div class="flex justify-between items-center shrink-0">
                        <h2 class="text-2xl font-black uppercase text-white tracking-tight">Catálogo Web</h2>
                        <button onclick="window.openEditModal()" class="bg-papa-fire text-white px-4 py-2 rounded-xl text-xs font-black uppercase shadow-lg">Nuevo Plato</button>
                    </div>
                    <div class="flex-1 overflow-y-auto no-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="admin-catalog-grid"></div>
                </div>

                <!-- INGREDIENTS -->
                <div id="panel-admin-ingredients" class="admin-panel-tab hidden space-y-6 pb-10">
                    <div class="flex justify-between items-center shrink-0">
                        <div>
                            <h2 class="text-2xl font-black uppercase text-white tracking-tight"><i class="ph-bold ph-scales text-papa-yellow"></i> Stock de Insumos</h2>
                        </div>
                        <button onclick="window.openIngModal()" class="bg-papa-fire hover:bg-orange-600 text-white px-5 py-3 rounded-xl text-xs font-black uppercase shadow-lg transition flex items-center gap-2"><i class="ph-bold ph-plus"></i> Nuevo Insumo</button>
                    </div>
                    
                    <div class="bg-black border border-white/10 rounded-2xl p-6 flex flex-col overflow-hidden w-full shadow-2xl">
                        <div class="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                            <span class="text-xs font-bold text-zinc-400 uppercase tracking-widest">Valorización Total:</span>
                            <span class="text-3xl font-black text-green-400" id="ing-total-valuation">$0.00</span>
                        </div>
                        <div class="overflow-x-auto no-scrollbar">
                            <table class="w-full text-left text-xs whitespace-nowrap">
                                <thead class="text-zinc-500 uppercase border-b border-white/10">
                                    <tr>
                                        <th class="pb-4 pl-2 font-black">Insumo</th>
                                        <th class="pb-4 font-black">SKU / Cód.</th>
                                        <th class="pb-4 font-black">Unidad</th>
                                        <th class="pb-4 font-black">Costo ($)</th>
                                        <th class="pb-4 font-black">Stock</th>
                                        <th class="pb-4 font-black">Alerta Min.</th>
                                        <th class="pb-4 font-black">Total</th>
                                        <th class="pb-4 text-right pr-2 font-black">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody id="ingredients-table" class="divide-y divide-white/5"></tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- GALLERY -->
                <div id="panel-admin-gallery" class="admin-panel-tab hidden space-y-6 pb-10 no-print">
                    <div class="flex flex-col sm:flex-row justify-between sm:items-center shrink-0 gap-4">
                        <h2 class="text-2xl font-black uppercase text-white tracking-tight"><i class="ph-bold ph-image text-blue-400"></i> Galería Web Pública</h2>
                        <label class="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl text-xs font-black uppercase shadow-lg transition cursor-pointer flex justify-center items-center gap-2">
                            <i class="ph-bold ph-upload-simple"></i> Subir Foto Local
                            <input type="file" accept="image/*" class="hidden" onchange="window.uploadGalleryImage(event)">
                        </label>
                    </div>
                    <div id="admin-gallery-grid" class="grid grid-cols-2 md:grid-cols-4 gap-4"></div>
                </div>

                <!-- SETTINGS & HW -->
                <div id="panel-admin-settings" class="admin-panel-tab hidden space-y-6 pb-10">
                    <h2 class="text-2xl font-black uppercase text-white tracking-tight">Ajustes Web y Hardware</h2>
                    <div class="bg-black border border-white/10 p-6 rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        <div class="space-y-4">
                            <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-2">Clave API Gemini IA</label><input type="password" id="set-api-key" class="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-papa-fire" placeholder="AI Key..."></div>
                            <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-2">WhatsApp Contacto</label><input type="text" id="set-phone" class="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-papa-fire" placeholder="+1..."></div>
                            <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-2">Precio Base Envío ($)</label><input type="number" step="0.01" id="set-base-price" class="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-papa-fire" placeholder="6.00"></div>
                            <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-2">Precio Extra Envío ($)</label><input type="number" step="0.01" id="set-extra-price" class="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-papa-fire" placeholder="1.50"></div>
                        </div>

                        <div class="lg:col-span-2 space-y-4 lg:border-l border-white/10 lg:pl-8">
                            <div class="flex justify-between items-center mb-2">
                                <h3 class="text-sm font-black text-white uppercase"><i class="ph-bold ph-bank"></i> Cuentas Bancarias</h3>
                                <button onclick="window.addBankAccount()" class="bg-papa-fire hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition">+ Agregar</button>
                            </div>
                            <div id="settings-banks-list" class="space-y-2 max-h-48 overflow-y-auto pr-2 no-scrollbar"></div>
                        </div>

                        <div class="lg:col-span-3 border-t border-white/10 pt-6 mt-2"><h3 class="text-sm font-black text-white uppercase mb-4"><i class="ph-bold ph-paint-brush"></i> Identidad Visual (Imágenes)</h3></div>
                        
                        <div class="space-y-4">
                            <label class="block text-[10px] font-bold text-zinc-400 uppercase">Logo Principal</label>
                            <div class="flex items-center gap-4">
                                <img id="adm-preview-logo" src="https://placehold.co/100x100/FF3D00/FFF?text=PC" class="w-16 h-16 rounded-full object-cover border border-white/20">
                                <label class="bg-zinc-800 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase cursor-pointer">Subir Logo <input type="file" accept="image/*" class="hidden" onchange="window.processImageUpload(event, (url) => { document.getElementById('adm-preview-logo').src = url; window.STATE.settings.logo = url; window.secureSave(); })"></label>
                            </div>
                        </div>
                        
                        <div class="space-y-4">
                            <label class="block text-[10px] font-bold text-zinc-400 uppercase">Fondo Portada (Hero)</label>
                            <div class="flex items-center gap-4">
                                <img id="adm-preview-cover" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=200&auto=format&fit=crop" class="w-24 h-16 rounded-lg object-cover border border-white/20">
                                <label class="bg-zinc-800 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase cursor-pointer">Subir Portada <input type="file" accept="image/*" class="hidden" onchange="window.processImageUpload(event, (url) => { document.getElementById('adm-preview-cover').src = url; window.STATE.settings.cover = url; window.secureSave(); })"></label>
                            </div>
                        </div>

                        <div class="lg:col-span-3 border-t border-white/10 pt-6 mt-2 mb-2"><h3 class="text-sm font-black text-white uppercase"><i class="ph-bold ph-map-pin"></i> Ubicación</h3></div>
                        <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-2">Google Maps Embed URL</label><input type="text" id="set-map-embed" class="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-papa-fire"></div>
                        <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-2">Link Botón Mapa</label><input type="text" id="set-map-link" class="w-full bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-papa-fire"></div>

                        <div class="lg:col-span-3 border-t border-white/10 pt-6 mt-2 mb-2"><h3 class="text-sm font-black text-white uppercase"><i class="ph-bold ph-printer"></i> Hardware Bridge</h3></div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-900/50 p-4 rounded-xl border border-white/5 lg:col-span-3">
                            <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-2">URL Bridge</label><input type="text" id="hw-bridge-url" class="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-xs text-white outline-none focus:border-papa-fire"></div>
                            <div class="flex flex-col justify-end gap-2 pb-1"><label class="flex items-center gap-2 text-xs font-bold text-white"><input type="checkbox" id="hw-auto-drawer" class="w-4 h-4 accent-papa-fire"> Auto-Gaveta al cobrar efectivo</label></div>
                        </div>

                        <div class="lg:col-span-3 flex justify-end pt-6 border-t border-white/10">
                            <button onclick="window.saveSettings(); window.saveHardwareConfig();" class="w-full sm:w-auto bg-papa-fire text-white font-black uppercase text-xs px-8 py-3.5 rounded-xl shadow-lg">Guardar Cambios</button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    </div>

    <!-- MODAL EDITOR PLATOS -->
    <div id="editModal" class="modal-overlay fixed inset-0 z-[400] flex items-center justify-center p-4">
        <div class="modal-content bg-[#111] border border-white/10 w-[calc(100%-1.5rem)] md:w-full max-w-2xl rounded-3xl overflow-hidden flex flex-col max-h-[85vh]">
            <div class="bg-black px-6 py-4 border-b border-white/10 flex justify-between items-center"><h2 class="font-black text-lg text-papa-fire uppercase">Editor de Plato</h2><button onclick="window.closeModal('editModal')"><i class="ph-bold ph-x text-xl"></i></button></div>
            <div class="p-6 overflow-y-auto space-y-4 no-scrollbar flex-1 bg-[#0a0a0a]">
                <input type="hidden" id="edit-id">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-1">Nombre</label><input type="text" id="edit-title" class="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-xs text-white outline-none focus:border-papa-fire transition"></div>
                    <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-1">Etiqueta Promocional</label><select id="edit-tag" class="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-xs text-white outline-none focus:border-papa-fire transition"><option value="">Normal</option><option value="Más Vendidos">🔥 Más Vendido</option><option value="Promociones">💰 Promoción</option></select></div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-1">Precio</label><input type="number" step="0.01" id="edit-price" class="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-xs text-white outline-none focus:border-papa-fire transition"></div>
                    <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-1">Categoría General</label><input type="text" id="edit-cat" class="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-xs text-white outline-none focus:border-papa-fire transition"></div>
                </div>
                <div class="flex items-center gap-4">
                    <label class="bg-zinc-800 text-white px-4 py-2 rounded text-[10px] font-bold uppercase cursor-pointer">Subir Foto <input type="file" accept="image/*" class="hidden" onchange="window.processImageUpload(event, (url) => { const img = document.getElementById('edit-img-preview'); img.src = url; img.classList.remove('hidden'); img.dataset.src = url; })"></label>
                    <img id="edit-img-preview" src="" data-src="" class="w-16 h-16 object-cover rounded-xl border border-white/10 hidden">
                </div>
                <div><label class="block text-[10px] font-bold text-zinc-400 uppercase mb-1">Descripción</label><textarea id="edit-desc" class="w-full bg-black border border-white/10 px-4 py-3 rounded-xl text-xs text-white outline-none focus:border-papa-fire transition"></textarea></div>
                <div class="border-t border-white/10 pt-4"><h3 class="text-xs font-bold text-zinc-400 mb-2">Receta (Descuento Auto. Inventario)</h3><div id="recipe-list" class="space-y-2 mb-2"></div><div class="flex flex-col sm:flex-row gap-2"><select id="recipe-ing-select" class="flex-1 bg-black border border-white/10 text-xs text-white p-2.5 rounded-lg outline-none"></select><input type="number" step="any" id="recipe-ing-qty" placeholder="Cant." class="w-full sm:w-20 bg-black border border-white/10 text-xs text-white p-2.5 rounded-lg outline-none"><button onclick="window.addRecipeRow()" class="bg-blue-600 px-4 py-2.5 rounded-lg text-xs text-white font-bold">Añadir</button></div></div>
            </div>
            <div class="bg-black p-4 border-t border-white/10 shrink-0"><button onclick="window.saveProduct()" class="w-full bg-papa-fire text-white py-3.5 rounded-xl font-black uppercase text-xs hover:bg-orange-600 transition">Guardar Cambios</button></div>
        </div>
    </div>

    <!-- MODAL EDITOR INSUMOS -->
    <div id="editIngModal" class="modal-overlay fixed inset-0 z-[400] flex items-center justify-center p-4">
        <div class="modal-content bg-[#111] border border-white/10 w-[calc(100%-1.5rem)] md:w-full max-w-2xl rounded-3xl overflow-hidden flex flex-col shadow-2xl max-h-[85vh]">
            <div class="px-6 py-5 border-b border-white/10 flex justify-between items-center shrink-0 bg-black">
                <h2 id="edit-ing-title-display" class="font-black text-xl uppercase tracking-tight flex items-center gap-3 text-papa-fire"><i class="ph-bold ph-package"></i> <span id="ing-modal-main-title">Ficha Insumo</span></h2>
                <button onclick="window.closeModal('editIngModal')" class="text-zinc-500 hover:text-white transition-colors"><i class="ph-bold ph-x text-2xl"></i></button>
            </div>
            <div class="p-6 overflow-y-auto space-y-6 no-scrollbar flex-1 bg-[#0a0a0a]">
                <input type="hidden" id="edit-ing-id">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label class="block font-bold text-sm text-zinc-400 mb-1.5">SKU / Cód <span class="text-papa-fire">*</span></label><input type="text" id="edit-ing-sku" class="w-full bg-black border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm outline-none"></div>
                    <div><label class="block font-bold text-sm text-zinc-400 mb-1.5">Nombre <span class="text-papa-fire">*</span></label><input type="text" id="edit-ing-name" class="w-full bg-black border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm outline-none"></div>
                    <div><label class="block font-bold text-sm text-zinc-400 mb-1.5">Costo ($) <span class="text-papa-fire">*</span></label><input type="number" step="0.01" id="edit-ing-cost" class="w-full bg-black border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm outline-none"></div>
                    <div><label class="block font-bold text-sm text-zinc-400 mb-1.5">Stock Inicial</label><input type="number" step="any" id="edit-ing-stock" class="w-full bg-black border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm outline-none"></div>
                    <div><label class="block font-bold text-sm text-red-500 mb-1.5">Alerta Mín. *</label><input type="number" step="any" id="edit-ing-min" class="w-full bg-black border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm outline-none"></div>
                    <div>
                        <label class="block font-bold text-sm text-zinc-400 mb-1.5">Unidad</label>
                        <select id="edit-ing-unit" class="w-full bg-black border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm outline-none">
                            <option value="uds">Unidades (uds)</option><option value="gr">Gramos (gr)</option><option value="kg">Kilogramos (kg)</option><option value="lbs">Libras (lbs)</option><option value="L">Litros (L)</option><option value="ml">Mililitros (ml)</option><option value="caja">Cajas / Paquetes</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="bg-black p-6 border-t border-white/10 shrink-0"><button onclick="window.saveIngredient()" class="w-full bg-papa-fire text-white py-3.5 rounded-xl font-black uppercase text-xs shadow-lg">Guardar Insumo</button></div>
        </div>
    </div>

    <!-- MODAL DE EDICIÓN DE ORDEN (KDS) -->
    <div id="editOrderModal" class="modal-overlay fixed inset-0 z-[400] flex items-center justify-center p-4">
        <div class="modal-content bg-[#111] border border-white/10 w-[calc(100%-1.5rem)] md:w-full max-w-lg rounded-3xl overflow-hidden flex flex-col shadow-2xl max-h-[85vh]">
            <div class="bg-blue-900 px-6 py-4 border-b border-white/10 flex justify-between items-center shrink-0">
                <div class="flex flex-col"><h2 id="edit-order-title" class="font-black text-lg uppercase text-white tracking-widest"><i class="ph-bold ph-pencil-simple"></i> Editar Orden</h2><span id="edit-order-total" class="text-[10px] text-papa-yellow font-bold mt-0.5">$0.00</span></div>
                <button onclick="window.closeModal('editOrderModal')"><i class="ph-bold ph-x text-xl"></i></button>
            </div>
            <div class="p-4 overflow-y-auto space-y-3 no-scrollbar bg-[#0a0a0a] flex-1" id="edit-order-items"></div>
            <div class="p-5 bg-zinc-950 border-t border-white/5 shrink-0 flex flex-col gap-3">
                <label class="text-[10px] text-zinc-400 font-bold uppercase"><i class="ph-bold ph-plus-circle text-papa-fire"></i> Agregar extra</label>
                <div class="flex flex-col sm:flex-row gap-3">
                    <select id="edit-order-add-select" class="flex-1 bg-black border border-white/10 text-white px-4 py-3 rounded-xl text-xs outline-none focus:border-blue-500"></select>
                    <button onclick="window.addNewProductToEditOrder()" class="bg-papa-fire text-white font-black px-6 py-3 rounded-xl text-xs uppercase shrink-0">Añadir</button>
                </div>
            </div>
            <div class="bg-black border-t border-white/10 px-6 py-4 shrink-0"><button onclick="window.closeModal('editOrderModal')" class="w-full bg-blue-600 text-white font-black uppercase text-xs py-3.5 rounded-xl">Guardar Cambios</button></div>
        </div>
    </div>

    <!-- VISTA PREVIA TICKETS & ACCIONES -->
    <div id="ticketPreviewModal" class="modal-overlay fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/80">
        <div class="modal-content bg-white w-[calc(100%-1.5rem)] md:w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
            <div class="p-4 overflow-y-auto no-scrollbar flex-1 bg-white relative"><div id="ticketPreviewContent" class="text-black text-sm"></div></div>
            <div class="bg-zinc-100 border-t border-gray-300 p-4 shrink-0 flex flex-col gap-2">
                <div class="flex gap-2">
                    <button onclick="window.printCurrentPreview()" class="flex-1 bg-blue-600 text-white py-3 rounded-xl font-black uppercase text-[10px] flex items-center justify-center gap-2 shadow-md"><i class="ph-fill ph-printer"></i> Imprimir</button>
                    <button onclick="window.POS.abrirCaja('Impresión de Venta')" class="flex-1 bg-[#107c41] text-white py-3 rounded-xl font-black uppercase text-[10px] flex items-center justify-center gap-2 shadow-md"><i class="ph-fill ph-tray"></i> Gaveta</button>
                </div>
                <button onclick="window.shareCurrentPreview()" class="w-full bg-purple-600 text-white py-3 rounded-xl font-black uppercase text-[10px] flex items-center justify-center gap-2 shadow-md"><i class="ph-fill ph-share-network"></i> Enviar / Compartir</button>
                <button onclick="window.closeModal('ticketPreviewModal')" class="w-full bg-zinc-300 text-zinc-800 py-2.5 rounded-xl font-bold uppercase text-[10px]">Cerrar</button>
            </div>
        </div>
    </div>

    <!-- ÁREA OCULTA PARA IMPRESIÓN TÉRMICA WEB -->
    <div id="thermal-print-area"></div>

    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyBmNIL7yk48zqe6Hdk__eG48qwuj3SPdtE",
            authDomain: "lapapacaliente.firebaseapp.com",
            databaseURL: "https://lapapacaliente-default-rtdb.firebaseio.com",
            projectId: "lapapacaliente",
            storageBucket: "lapapacaliente.firebasestorage.app",
            messagingSenderId: "259622247837",
            appId: "1:259622247837:web:ad1b49c5f35aef988ee374"
        };
        
        window.STATE = {
            menu: [], ingredients: [], orders: [], gallery: [],
            caja: { isOpen: false, startAmt: 0, total: 0, moves: [], usuario: null, turnoId: null, startTime: null },
            settings: { logo: '', cover: '', phone: '', apiKey: '', mapEmbed: '', mapLink: '', banks: [], customBasePrice: 6.00, customExtraPrice: 1.50, nos1: '', nos2: '', nos3: '' },
            hardware: { bridgeUrl: 'http://localhost:3000', autoOpenDrawer: true },
            currentUser: null, tempRecipe: []
        };
        
        window.adminCart = []; window.currentEditOrderId = null; window.currentPreviewOrderId = null;
        let app, db, isSaving = false; let isInitialLoad = true; let knownOrderIds = new Set();

        window.sanitize = (str) => {
            if(typeof str !== 'string') return '';
            const div = document.createElement('div'); div.appendChild(document.createTextNode(str)); return div.innerHTML;
        };

        async function initCloudSystem() {
            try {
                app = initializeApp(firebaseConfig); db = getDatabase(app);
                onValue(ref(db, 'lapapacaliente/erp_state'), (snapshot) => {
                    if (snapshot.exists() && !isSaving) {
                        const cloudData = snapshot.val();
                        
                        const cloudOrders = cloudData.orders || [];
                        if (!isInitialLoad && window.STATE.currentUser) {
                            let hasNewOrders = false;
                            cloudOrders.forEach(o => {
                                if (!knownOrderIds.has(o.id) && o.status === 'Pendiente') {
                                    hasNewOrders = true;
                                }
                            });
                            if (hasNewOrders) {
                                window.playNewOrderSound();
                                window.showToast("🔔 ¡NUEVA ORDEN RECIBIDA!", "success");
                            }
                        }
                        cloudOrders.forEach(o => knownOrderIds.add(o.id));
                        isInitialLoad = false;
                        
                        window.STATE = { ...window.STATE, ...cloudData };
                        if (!window.STATE.menu) window.STATE.menu = [];
                        if (!window.STATE.ingredients) window.STATE.ingredients = [];
                        if (!window.STATE.orders) window.STATE.orders = [];
                        if (!window.STATE.gallery) window.STATE.gallery = [];
                        if (!window.STATE.caja) window.STATE.caja = { isOpen: false, startAmt: 0, total: 0, moves: [], usuario: null, turnoId: null, startTime: null };
                        if (!window.STATE.caja.moves) window.STATE.caja.moves = [];
                        if (!window.STATE.settings) window.STATE.settings = { logo: '', cover: '', phone: '', apiKey: '', mapEmbed: '', mapLink: '', banks: [], customBasePrice: 6.00, customExtraPrice: 1.50 };
                        if (!window.STATE.settings.banks) window.STATE.settings.banks = [];
                        if (!window.STATE.hardware) window.STATE.hardware = { bridgeUrl: 'http://localhost:3000', autoOpenDrawer: true };
                        
                        const loginLogoEl = document.getElementById('login-brand-logo');
                        if (loginLogoEl && window.STATE.settings.logo) loginLogoEl.src = window.STATE.settings.logo;
                        window.renderAdminViews();
                    } else if(!snapshot.exists()) { window.secureSave(); }
                }, (error) => {});
            } catch(e) {}
        }

        window.secureSave = async () => {
            if(db) {
                isSaving = true;
                try {
                    window.STATE.menu = window.STATE.menu || []; window.STATE.ingredients = window.STATE.ingredients || []; window.STATE.orders = window.STATE.orders || []; window.STATE.settings.banks = window.STATE.settings.banks || [];
                    await set(ref(db, 'lapapacaliente/erp_state'), window.STATE);
                } 
                catch(e) {} finally { setTimeout(() => isSaving = false, 500); }
            }
        };

        window.POS = {
            isApp: navigator.userAgent.includes("WebIntoApp") || window.location.href.includes("android_asset") || navigator.userAgent.includes("wv"),
            init: () => { if (window.POS.isApp || /Android/i.test(navigator.userAgent)) document.getElementById('hw-status-badge').classList.replace('hidden', 'flex'); },
            imprimir: async (datosHtml, orderId) => {
                if (window.AndroidPOS && typeof window.AndroidPOS.print === 'function') {
                    window.AndroidPOS.print(JSON.stringify({id: orderId, html: datosHtml}));
                    window.showToast("Ticket enviado a la impresora de la App");
                    return;
                }
                
                try {
                    const hwBridgeUrl = window.STATE.hardware.bridgeUrl || 'http://localhost:3000';
                    const res = await fetch(`${hwBridgeUrl}/api/printer/print`, {
                        method: 'POST', headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ html: datosHtml, id: orderId })
                    });
                    if(res.ok) { window.showToast("Impresión Local Enviada"); return; }
                } catch(e) { console.log("Sin bridge local. Usando Web Print."); }

                const isAndroid = /Android/i.test(navigator.userAgent);
                if (window.POS.isApp || isAndroid) {
                    try {
                        const rawbtUrl = "intent://rawbt:" + encodeURIComponent(datosHtml) + "#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dru.a402d.rawbtprinter;end;";
                        
                        let btnVirtual = document.createElement('a');
                        btnVirtual.href = rawbtUrl;
                        btnVirtual.style.display = 'none';
                        document.body.appendChild(btnVirtual);
                        btnVirtual.click();
                        setTimeout(() => document.body.removeChild(btnVirtual), 500);

                        window.showToast("Enviado a impresora móvil"); 
                        return;
                    } catch (err) {
                        window.showToast("Error al enviar a impresora", "error");
                        return;
                    }
                }

                try {
                    window.showToast("Usando impresión web estándar");
                    document.getElementById('thermal-print-area').innerHTML = datosHtml;
                    document.body.classList.add('thermal-printing');
                    setTimeout(() => {
                        try { window.print(); } catch(e) { window.showToast("Tu sistema no soporta impresión", "error"); }
                        document.body.classList.remove('thermal-printing');
                    }, 300);
                } catch (err) {
                    window.showToast("Error crítico al imprimir", "error");
                    document.body.classList.remove('thermal-printing');
                }
            },
            
            abrirCaja: async (reason = "Manual") => {
                if (window.AndroidPOS && typeof window.AndroidPOS.openDrawer === 'function') { window.AndroidPOS.openDrawer(); return; }
                try {
                    const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(), 1500);
                    const res = await fetch(`${window.STATE.hardware.bridgeUrl || 'http://localhost:3000'}/api/drawer/open`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ user: window.STATE.currentUser, reason }), signal: controller.signal });
                    clearTimeout(timeoutId);
                    if(res.ok) return window.showToast("Gaveta Abierta (PC)");
                } catch(e) {}

                const isAndroid = /Android/i.test(navigator.userAgent);
                if (window.POS.isApp || isAndroid) {
                    try {
                        const comandoGaveta = "\x1B\x70\x00\x19\xFA"; // Comando universal ESC/POS
                        const rawbtUrl = "intent://rawbt:" + encodeURIComponent(comandoGaveta) + "#Intent;scheme=rawbt;package=ru.a402d.rawbtprinter;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dru.a402d.rawbtprinter;end;";
                        
                        let btnVirtual = document.createElement('a');
                        btnVirtual.href = rawbtUrl;
                        btnVirtual.style.display = 'none';
                        document.body.appendChild(btnVirtual);
                        btnVirtual.click();
                        setTimeout(() => document.body.removeChild(btnVirtual), 500);
                        
                        return window.showToast("Orden enviada a caja registradora");
                    } catch (err) {
                        window.showToast("Error al abrir caja", "error");
                    }
                }
            },
            
            compartir: async (title, text) => {
                if (window.AndroidPOS && typeof window.AndroidPOS.share === 'function') { window.AndroidPOS.share(text); return; }
                if (navigator.share) { try { await navigator.share({ title, text }); } catch (err) {} } else { window.showToast("No soportado en este equipo", "error"); }
            }
        };

        window.POSBridge = { ping: async () => { try { const res = await fetch(`${window.STATE.hardware.bridgeUrl}/api/hardware`); if(res.ok) window.showToast('Hardware OK'); } catch(e) { window.showToast('Hardware Falló', 'error'); } } };

        window.playNewOrderSound = () => { 
            try { 
                const actx = new (window.AudioContext || window.webkitAudioContext)(); 
                const playBeep = (time) => { 
                    const osc = actx.createOscillator(); const gain = actx.createGain(); 
                    osc.connect(gain); gain.connect(actx.destination); 
                    osc.type = 'triangle'; osc.frequency.value = 800; 
                    gain.gain.setValueAtTime(0.3, actx.currentTime + time); 
                    gain.gain.exponentialRampToValueAtTime(0.01, actx.currentTime + time + 0.3); 
                    osc.start(actx.currentTime + time); osc.stop(actx.currentTime + time + 0.3); 
                }; 
                playBeep(0); playBeep(0.4); 
            } catch(e) {} 
        };

        window.showToast = (msg, type = 'success') => { const c = document.getElementById('toast-container'); const t = document.createElement('div'); t.className = `bg-zinc-900 border ${type === 'success' ? 'border-green-500/30' : 'border-red-500/30'} rounded-xl p-3 flex items-center gap-2 toast-custom`; t.innerHTML = `<span class="font-bold text-xs text-white">${msg}</span>`; c.appendChild(t); setTimeout(() => t.classList.add('show'), 10); setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000); };
        window.openModal = (id) => document.getElementById(id).classList.add('active'); window.closeModal = (id) => document.getElementById(id).classList.remove('active');
        window.toggleAdminSidebar = () => { document.getElementById('erp-sidebar').classList.toggle('-translate-x-full'); document.getElementById('sidebar-overlay').classList.toggle('hidden'); };

        window.processImageUpload = (event, callback) => {
            const file = event.target.files[0]; if(!file) return; const reader = new FileReader();
            reader.onload = (e) => { const img = new Image(); img.onload = () => { const canvas = document.createElement('canvas'); let scaleSize = 600 / img.width; if(scaleSize > 1) scaleSize = 1; canvas.width = img.width * scaleSize; canvas.height = img.height * scaleSize; const ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0, canvas.width, canvas.height); callback(canvas.toDataURL('image/jpeg', 0.6)); }; img.src = e.target.result; }; reader.readAsDataURL(file);
        };

        window.handleEpicLogin = () => {
            const u = window.sanitize(document.getElementById('epic-user').value.trim().toLowerCase()); const p = window.sanitize(document.getElementById('epic-pass').value.trim());
            if (u === 'papitacaliente' && p === '8494648650') { window.STATE.currentUser = 'admin'; } else if (u === 'cocinapapitacaliente' && p === '11223344') { window.STATE.currentUser = 'cocina'; } else { return window.showToast('Credenciales Inválidas', 'error'); }
            
            try { const actx = new (window.AudioContext || window.webkitAudioContext)(); actx.resume(); } catch(e) {}

            document.getElementById('app-login-screen').classList.add('hidden-auth'); const dash = document.getElementById('adminDashboard'); dash.classList.remove('hidden', 'opacity-0', 'pointer-events-none'); dash.classList.add('flex', 'opacity-100', 'pointer-events-auto');
            document.getElementById('role-badge').innerText = window.STATE.currentUser; document.querySelectorAll('.admin-only').forEach(el => { el.style.display = window.STATE.currentUser === 'admin' ? 'block' : 'none'; });
            window.switchAdminPanel(window.STATE.currentUser === 'admin' ? 'dashboard' : 'kds'); window.renderAdminViews(); window.POS.init();
        };

        window.logoutAdmin = () => { window.STATE.currentUser = null; document.getElementById('adminDashboard').classList.add('hidden', 'opacity-0', 'pointer-events-none'); document.getElementById('adminDashboard').classList.remove('flex', 'opacity-100', 'pointer-events-auto'); document.getElementById('epic-user').value = ''; document.getElementById('epic-pass').value = ''; document.getElementById('app-login-screen').classList.remove('hidden-auth'); };

        window.switchAdminPanel = (tab) => {
            document.querySelectorAll('.admin-panel-tab').forEach(e => e.classList.add('hidden')); document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active', 'border-l'));
            const p = document.getElementById(`panel-admin-${tab}`); p.classList.remove('hidden'); if(tab === 'terminal') p.classList.add('flex');
            const btn = document.getElementById(`btn-side-${tab}`); if(btn) btn.classList.add('active');
            if(window.innerWidth < 768) { document.getElementById('erp-sidebar').classList.add('-translate-x-full'); document.getElementById('sidebar-overlay').classList.add('hidden'); }
            if(tab === 'terminal') window.renderAdminTerminal(); if(tab === 'orders') window.renderOrdersHistory(); if(tab === 'ingredients') window.renderIngredients(); if(tab === 'inventory') window.renderAdminCatalog(); if(tab === 'gallery') window.renderGalleryAdmin(); if(tab === 'pos') window.renderCaja(); if(tab === 'settings') window.renderBankAccounts();
        };

        window.renderAdminViews = () => {
            if(!window.STATE.currentUser) return; window.renderKDS();
            if(window.STATE.currentUser === 'admin') {
                window.renderDashboardMetrics(); window.renderCaja(); window.renderBankAccounts();
                if(document.getElementById('set-phone')) document.getElementById('set-phone').value = window.STATE.settings.phone || '';
                if(document.getElementById('set-api-key')) document.getElementById('set-api-key').value = window.STATE.settings.apiKey || '';
                if(document.getElementById('set-map-embed')) document.getElementById('set-map-embed').value = window.STATE.settings.mapEmbed || '';
                if(document.getElementById('set-map-link')) document.getElementById('set-map-link').value = window.STATE.settings.mapLink || '';
                if(document.getElementById('set-base-price')) document.getElementById('set-base-price').value = window.STATE.settings.customBasePrice || 6.00;
                if(document.getElementById('set-extra-price')) document.getElementById('set-extra-price').value = window.STATE.settings.customExtraPrice || 1.50;
                if(document.getElementById('adm-preview-logo') && window.STATE.settings.logo) document.getElementById('adm-preview-logo').src = window.STATE.settings.logo;
                if(document.getElementById('adm-preview-cover') && window.STATE.settings.cover) document.getElementById('adm-preview-cover').src = window.STATE.settings.cover;
                if(document.getElementById('hw-bridge-url')) document.getElementById('hw-bridge-url').value = window.STATE.hardware.bridgeUrl || 'http://localhost:3000';
                if(document.getElementById('hw-auto-drawer')) document.getElementById('hw-auto-drawer').checked = window.STATE.hardware.autoOpenDrawer !== false;
            }
        };

        window.abrirTurnoCaja = () => {
            if(window.STATE.caja.isOpen) return window.showToast('Caja ya abierta', 'error');
            const amt = parseFloat(document.getElementById('caja-monto').value || 0);
            window.STATE.caja = { isOpen: true, startAmt: amt, total: amt, usuario: window.STATE.currentUser, turnoId: 'T-'+Date.now(), startTime: new Date().toLocaleString(), moves: [{ type: 'in', desc: 'Apertura (Fondo)', amt, time: new Date().toLocaleTimeString() }] };
            window.secureSave(); window.renderCaja(); window.showToast('Turno Iniciado');
        };

        window.cerrarTurnoCaja = async () => {
            if(!window.STATE.caja.isOpen) return;
            const { value: montoReal } = await Swal.fire({ title: 'Arqueo Z', text: 'Ingrese el total de EFECTIVO físico contado:', input: 'number', background: '#111', color: '#fff', confirmButtonColor: '#FF3D00' });
            if(montoReal !== undefined && montoReal !== null) {
                const esperado = window.STATE.caja.total; const real = parseFloat(montoReal); const diferencia = real - esperado;
                let msj = diferencia === 0 ? 'Caja Cuadrada Perfectamente' : (diferencia > 0 ? `Sobrante: +$${diferencia.toFixed(2)}` : `Faltante: -$${Math.abs(diferencia).toFixed(2)}`);
                await Swal.fire({ title: 'Resumen de Arqueo', html: `<div class="text-left text-sm space-y-2 mt-4"><p><b>Esperado:</b> $${esperado.toFixed(2)}</p><p><b>Declarado:</b> $${real.toFixed(2)}</p><p class="${diferencia === 0 ? 'text-green-500' : 'text-red-500'} font-black text-lg mt-2">${msj}</p></div>`, background: '#111', color: '#fff' });
                if(window.STATE.hardware.autoOpenDrawer) window.POS.abrirCaja('Cierre Z');
                window.STATE.caja = { isOpen: false, startAmt: 0, total: 0, moves: [], usuario: null, turnoId: null, startTime: null }; window.secureSave(); window.renderCaja();
            }
        };

        window.addManualCaja = (type) => {
            if(!window.STATE.caja.isOpen) return window.showToast('Abra la caja primero', 'error');
            const desc = window.sanitize(document.getElementById('manual-caja-desc').value.trim()); const amt = parseFloat(document.getElementById('manual-caja-amt').value || 0);
            if(!desc || amt <= 0) return window.showToast('Faltan datos', 'error');
            if(type === 'in') window.STATE.caja.total += amt; else window.STATE.caja.total -= amt;
            window.STATE.caja.moves.push({ type, desc: `Manual: ${desc}`, amt, time: new Date().toLocaleTimeString() });
            document.getElementById('manual-caja-desc').value = ''; document.getElementById('manual-caja-amt').value = '';
            if(window.STATE.hardware.autoOpenDrawer) window.POS.abrirCaja(desc); window.secureSave(); window.renderCaja(); window.showToast('Movimiento Registrado');
        };

        window.renderCaja = () => {
            const c = window.STATE.caja;
            document.getElementById('caja-status').innerText = c.isOpen ? 'TURNO OPERATIVO' : 'TURNO CERRADO'; document.getElementById('caja-status').className = `text-xl font-black ${c.isOpen ? 'text-green-500' : 'text-red-500'}`;
            document.getElementById('caja-apertura-box').classList.toggle('hidden', c.isOpen); document.getElementById('caja-cierre-box').classList.toggle('hidden', !c.isOpen);
            document.getElementById('caja-info-operador').classList.toggle('hidden', !c.isOpen); document.getElementById('caja-info-time').classList.toggle('hidden', !c.isOpen);
            if(c.isOpen) { document.getElementById('caja-operador-name').innerText = c.usuario; document.getElementById('caja-open-time').innerText = c.startTime; }
            document.getElementById('caja-total-calc').innerText = `$${(c.total || 0).toFixed(2)}`;
            const movesEl = document.getElementById('caja-moves');
            if(!c.moves || c.moves.length === 0) movesEl.innerHTML = '<p class="text-xs text-zinc-500 text-center">Sin movimientos.</p>';
            else { movesEl.innerHTML = [...c.moves].reverse().map(m => `<div class="flex justify-between bg-zinc-900/80 p-3 rounded-xl text-[10px] font-bold border border-white/5 mb-2"><div class="flex-1"><span class="text-zinc-500 block">${m.time}</span><span class="text-white uppercase">${m.desc}</span></div><div class="text-right"><span class="text-sm font-black ${m.type==='in'?'text-green-400':'text-red-400'}">${m.type==='in'?'+':'-'}$${m.amt.toFixed(2)}</span>${m.orderId ? `<br><button onclick="window.showTicketPreview('${m.orderId}')" class="bg-blue-600 text-white px-2 py-1 rounded mt-1">Factura</button>` : ''}</div></div>`).join(''); }
        };

        let calcInput = ''; window.stdCalc = (val) => { const display = document.getElementById('std-calc-display'); if(val === 'C') { calcInput = ''; display.value = ''; } else if(val === '=') { try { calcInput = Function('"use strict";return (' + calcInput + ')')().toString(); display.value = calcInput; } catch(e) { display.value = 'Error'; calcInput = ''; } } else { if(/^[0-9+\-*/.]$/.test(val)) { calcInput += val; display.value = calcInput; } } };
        window.cobrarDesdeCalculadora = () => { const amt = parseFloat(document.getElementById('std-calc-display').value || 0); if(amt <= 0) return window.showToast("Monto inválido", "error"); document.getElementById('manual-caja-amt').value = amt; document.getElementById('manual-caja-desc').value = "Cobro Calculadora"; window.showToast("Monto transferido. Clicke en +", "success"); window.stdCalc('C'); };
        window.calcSplitBill = () => { const t = parseFloat(document.getElementById('split-total').value || 0); const p = parseInt(document.getElementById('split-people').value || 1); document.getElementById('split-result').innerText = `$${(t / Math.max(1, p)).toFixed(2)}`; };
        window.calcVuelto = () => { const t = parseFloat(document.getElementById('vuelto-total').value || 0); const p = parseFloat(document.getElementById('vuelto-pago').value || 0); const c = p - t; const r = document.getElementById('vuelto-result'); if(t === 0) { r.innerText = '$0.00'; r.className = 'text-2xl font-black text-white relative z-10'; } else if(c < 0 && p > 0) { r.innerText = 'FALTA'; r.className = 'text-xl font-black text-red-500 relative z-10'; } else { r.innerText = `$${Math.max(0, c).toFixed(2)}`; r.className = `text-3xl font-black relative z-10 ${c > 0 ? 'text-green-400' : 'text-white'}`; } };

        window.renderAdminTerminal = () => { 
            const menuGrid = document.getElementById('pos-menu-grid');
            if(!window.STATE.menu || window.STATE.menu.length === 0) {
                menuGrid.innerHTML = '<div class="col-span-full text-center text-zinc-500 text-xs py-10">No hay productos en el menú.</div>';
            } else {
                menuGrid.innerHTML = window.STATE.menu.map(m => {
                    const price = parseFloat(m.price) || 0;
                    const title = m.title || 'Sin Nombre';
                    const img = m.img || 'https://placehold.co/600x400/222/FFF';
                    return `<div onclick="window.addToAdminCart('${m.id}')" class="bg-zinc-900 border border-white/5 rounded-xl p-3 cursor-pointer hover:border-papa-fire flex flex-col items-center text-center active:scale-95 transition-transform"><img src="${img}" class="w-16 h-16 object-cover rounded-lg mb-2"><p class="text-[10px] font-bold text-white uppercase leading-tight line-clamp-2">${title}</p><p class="text-xs font-black text-papa-yellow mt-1">$${price.toFixed(2)}</p></div>`;
                }).join('');
            }
            window.renderAdminCart(); 
        };
        
        window.addToAdminCart = (id) => { 
            const i = window.STATE.menu.find(m => m.id === id); 
            if(i) { 
                const cartItem = JSON.parse(JSON.stringify(i));
                cartItem.price = parseFloat(cartItem.price) || 0;
                window.adminCart.push(cartItem); 
                window.renderAdminCart(); 
            } 
        };
        
        window.renderAdminCart = () => {
            const c = document.getElementById('pos-cart-items'); 
            document.getElementById('pos-cart-badge').innerText = `${window.adminCart.length} Items`;
            if(window.adminCart.length === 0) { 
                c.innerHTML = '<p class="text-xs text-zinc-500 text-center mt-10">El carrito está vacío.</p>'; 
                document.getElementById('pos-total-price').innerText = '$0.00'; 
                return; 
            }
            let s = 0; 
            c.innerHTML = window.adminCart.map((item, idx) => { 
                const price = parseFloat(item.price) || 0;
                s += price; 
                return `<div class="bg-black border border-white/5 p-2 rounded-lg flex justify-between items-center mb-2"><div class="flex-1 truncate"><p class="text-[10px] font-bold text-white uppercase">${item.title}</p><p class="text-[10px] text-zinc-500 font-bold">$${price.toFixed(2)}</p>${item.note ? `<p class="text-[9px] text-blue-400 font-bold bg-blue-900/20 px-1 rounded inline-block truncate max-w-[120px]">${item.note}</p>` : ''}</div><div class="flex gap-1"><button onclick="window.editAdminCartItemNote(${idx})" class="bg-blue-600/20 text-blue-400 p-1.5 rounded"><i class="ph-bold ph-pencil-simple"></i></button><button onclick="window.adminCart.splice(${idx},1); window.renderAdminCart();" class="bg-red-600/20 text-red-500 p-1.5 rounded"><i class="ph-bold ph-trash"></i></button></div></div>`; 
            }).join('');
            document.getElementById('pos-total-price').innerText = `$${s.toFixed(2)}`;
        };
        
        window.editAdminCartItemNote = async (idx) => { const item = window.adminCart[idx]; const { value: text } = await Swal.fire({ title: 'Nota', input: 'text', inputValue: item.note || '', background: '#111', color: '#fff' }); if(text !== undefined) { item.note = window.sanitize(text.trim()); window.renderAdminCart(); } };
        window.processTerminalOrder = (paymentType) => {
            if(window.adminCart.length === 0) return window.showToast('Vacío', 'error');
            const name = window.sanitize(document.getElementById('pos-client-name').value.trim() || 'Cliente POS'); const type = document.getElementById('pos-order-type').value; const table = window.sanitize(document.getElementById('pos-client-table').value.trim());
            if(type === 'Mesa' && !table) return window.showToast('Ingrese Mesa', 'error');
            const total = window.adminCart.reduce((a, i) => a + parseFloat(i.price), 0); const id = 'POS-' + Math.floor(1000 + Math.random() * 9000);
            
            window.adminCart.forEach(c => { (c.recipe||[]).forEach(r => { const ing = window.STATE.ingredients.find(i => i.id === r.id); if(ing) ing.stock -= r.qty; }); });
            if(window.STATE.caja.isOpen && paymentType === 'Efectivo') { window.STATE.caja.total += total; window.STATE.caja.moves.push({ type: 'in', desc: `Venta POS ${id}`, amt: total, time: new Date().toLocaleTimeString(), orderId: id }); }
            
            if(!window.STATE.orders) window.STATE.orders = []; window.STATE.orders.push({ id, name, type: type === 'Mesa' ? 'Mesa' : 'Local', table, payment: paymentType, items: [...window.adminCart], total, status: 'Pendiente', timestamp: Date.now() });
            
            knownOrderIds.add(id);
            window.secureSave(); window.adminCart = []; window.renderAdminCart(); document.getElementById('pos-client-name').value = ''; document.getElementById('pos-client-table').value = '';
            if(window.STATE.hardware.autoOpenDrawer && paymentType === 'Efectivo') window.POS.abrirCaja('Venta Efectivo');
            window.showToast('Éxito', 'success'); window.showTicketPreview(id);
        };

        window.getInvoiceHtml = (orderId) => {
            const o = window.STATE.orders.find(x => x.id === orderId); if(!o) return ''; const sub = o.total / 1.18; const itbis = o.total - sub;
            const itemsHtml = o.items.map(i => `<div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom: 2px; font-weight:bold;"><span style="flex:1;">- ${i.title}</span><span>$${parseFloat(i.price).toFixed(2)}</span></div>${i.note ? `<div style="font-size: 10px; font-weight:bold; color: #000; padding-left: 10px; margin-bottom: 4px; text-transform: uppercase;">!!! NOTA: ${i.note}</div>` : ''}`).join('');
            return `<div style="font-family:'Space Mono', monospace; color:#000; width:100%; padding: 0 2mm; box-sizing: border-box;"><div style="text-align:center; border-bottom:2px dashed #000; padding-bottom:10px; margin-bottom:10px;"><h2 style="font-size:20px; font-weight:900; margin:0; text-transform:uppercase;">LA PAPA CALIENTE</h2><p style="font-size:11px; margin:4px 0; border:1px solid #000; display:inline-block; padding: 2px 6px;">COMPROBANTE</p><p style="font-size:11px; margin:4px 0 0 0;">${new Date(o.timestamp).toLocaleString()}</p></div><div style="font-size:12px; margin-bottom:10px; line-height: 1.5; padding: 5px; background: #eee; border-radius: 4px;"><p style="margin:0; font-weight:900; font-size:14px;">TICKET: ${o.id}</p><p style="margin:0;"><strong>TIPO:</strong> ${o.type} ${o.table ? `(#${o.table})` : ''}</p><p style="margin:0;"><strong>CLIENTE:</strong> ${o.name}</p><p style="margin:0;"><strong>PAGO:</strong> ${o.payment}</p></div><div style="border-top:2px solid #000; border-bottom:2px solid #000; padding:10px 0; margin-bottom:10px;">${itemsHtml}</div><div style="font-size:12px; line-height: 1.5; font-weight:bold;"><div style="display:flex; justify-content:space-between;"><span>Subtotal:</span><span>$${sub.toFixed(2)}</span></div><div style="display:flex; justify-content:space-between;"><span>ITBIS (18%):</span><span>$${itbis.toFixed(2)}</span></div></div><div style="font-size:18px; font-weight:900; display:flex; justify-content:space-between; margin-top:5px; border-top:2px dashed #000; padding-top:8px;"><span>TOTAL:</span><span>$${o.total.toFixed(2)}</span></div><div style="text-align:center; margin-top:20px;"><svg id="barcode-ticket"></svg></div><div style="text-align:center; font-size:11px; font-weight:bold; margin-top:5px;">¡VUELVE PRONTO!</div></div>`;
        };
        window.showTicketPreview = (orderId) => { window.currentPreviewOrderId = orderId; const html = window.getInvoiceHtml(orderId); if(!html) return; document.getElementById('ticketPreviewContent').innerHTML = html; try { JsBarcode("#barcode-ticket", orderId, { format: "CODE128", width: 1.5, height: 40, displayValue: true, fontSize: 12, margin: 0, background: "transparent", lineColor: "#000", fontOptions: "bold" }); } catch(e) {} window.openModal('ticketPreviewModal'); };
        window.printCurrentPreview = () => { if(window.currentPreviewOrderId) window.POS.imprimir(document.getElementById('ticketPreviewContent').innerHTML, window.currentPreviewOrderId); };
        window.shareCurrentPreview = () => { if(window.currentPreviewOrderId) { const o = window.STATE.orders.find(x => x.id === window.currentPreviewOrderId); if(o) window.POS.compartir(`Ticket ${o.id}`, `Factura\nTicket: ${o.id}\nCliente: ${o.name}\nTotal: $${o.total.toFixed(2)}\nFecha: ${new Date(o.timestamp).toLocaleString()}`); } };

        window.filteredReportOrders = [];
        window.generateReport = () => {
            const start = document.getElementById('rep-start').value; const end = document.getElementById('rep-end').value;
            if(!start || !end) return window.showToast('Seleccione fecha inicio y fin', 'error');
            const startDate = new Date(start).setHours(0,0,0,0); const endDate = new Date(end).setHours(23,59,59,999);
            window.filteredReportOrders = (window.STATE.orders || []).filter(o => o.timestamp >= startDate && o.timestamp <= endDate && o.status !== 'Cancelada');
            if (window.filteredReportOrders.length === 0) return window.showToast('No hay datos en esas fechas', 'error');

            const totalV = window.filteredReportOrders.reduce((acc, o) => acc + o.total, 0);
            const totalE = window.filteredReportOrders.filter(o => (o.payment||'').toLowerCase().includes('efectivo')).reduce((acc, o) => acc + o.total, 0);
            const totalD = totalV - totalE;

            document.getElementById('report-print-area').innerHTML = `
            <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px;">
                <h1 style="font-size: 20px; font-weight: 900; text-transform: uppercase; margin: 0;">Reporte Z Administrativo</h1>
                <p style="font-size: 10px; color: #555; margin-top: 5px;">Período: ${start} al ${end}</p>
            </div>
            <div style="display: flex; gap: 10px; margin-bottom: 20px; text-align: center;">
                <div style="flex: 1; background: #f3f4f6; padding: 10px; border-radius: 6px; border: 1px solid #ddd;"><p style="font-size: 9px; color: #666; margin: 0; text-transform: uppercase;">Órdenes</p><p style="font-size: 18px; font-weight: 900; margin: 2px 0 0 0;">${window.filteredReportOrders.length}</p></div>
                <div style="flex: 1; background: #f3f4f6; padding: 10px; border-radius: 6px; border: 1px solid #ddd;"><p style="font-size: 9px; color: #666; margin: 0; text-transform: uppercase;">Efectivo</p><p style="font-size: 18px; font-weight: 900; margin: 2px 0 0 0; color: #15803d;">$${totalE.toFixed(2)}</p></div>
                <div style="flex: 1; background: #f3f4f6; padding: 10px; border-radius: 6px; border: 1px solid #ddd;"><p style="font-size: 9px; color: #666; margin: 0; text-transform: uppercase;">Digital</p><p style="font-size: 18px; font-weight: 900; margin: 2px 0 0 0; color: #1d4ed8;">$${totalD.toFixed(2)}</p></div>
            </div>
            <div style="background: #000; color: #fff; padding: 10px 15px; border-radius: 6px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 900; text-transform: uppercase; font-size: 12px;">Total Ingresos</span><span style="font-size: 20px; font-weight: 900;">$${totalV.toFixed(2)}</span>
            </div>
            <table style="width: 100%; text-align: left; font-size: 10px; border-collapse: collapse;">
                <thead><tr style="background: #e5e7eb; border-bottom: 2px solid #000;"><th style="padding: 8px;">Orden</th><th style="padding: 8px;">Fecha</th><th style="padding: 8px;">Cliente</th><th style="padding: 8px;">Pago</th><th style="padding: 8px; text-align: right;">Total</th></tr></thead>
                <tbody>${window.filteredReportOrders.map(o => `<tr style="border-bottom: 1px solid #ddd;"><td style="padding: 8px; font-weight: bold;">${o.id}</td><td style="padding: 8px; color: #555;">${new Date(o.timestamp).toLocaleString()}</td><td style="padding: 8px;">${window.sanitize(o.name||'N/A')}</td><td style="padding: 8px; font-weight:bold; color: ${(o.payment||'').toLowerCase().includes('efectivo')?'#15803d':'#1d4ed8'};">${o.payment||'N/A'}</td><td style="padding: 8px; text-align: right; font-weight: 900;">$${o.total.toFixed(2)}</td></tr>`).join('')}</tbody>
            </table>`;
            document.getElementById('report-results-container').classList.remove('hidden'); window.showToast('Reporte Generado');
        };

        window.exportReportCSV = () => {
            if(/Android.*Version\/[0-9].[0-9]|wv/i.test(navigator.userAgent) || window.POS.isApp) return Swal.fire({ title: 'Acción Bloqueada', text: 'Para extraer archivos (Excel/PDF), inicie sesión en el sistema usando Google Chrome. Las aplicaciones (APK) bloquean las descargas locales por seguridad.', icon: 'info', background: '#111', color: '#fff', confirmButtonColor: '#FF3D00' });
            if(!window.filteredReportOrders.length) return window.showToast('Genere un reporte primero', 'error');
            let csv = "ID,Fecha,Cliente,Tipo,Pago,Total\n";
            window.filteredReportOrders.forEach(o => { csv += `${o.id},${new Date(o.timestamp).toLocaleString().replace(/,/g, '')},${(o.name||'N/A').replace(/,/g, ' ')},${o.type||'N/A'},${o.payment||'N/A'},${o.total.toFixed(2)}\n`; });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' }); const file = new File([blob], `Reporte_${Date.now()}.csv`, { type: 'text/csv' });
            if (navigator.canShare && navigator.canShare({ files: [file] })) { navigator.share({ title: 'Reporte CSV', files: [file] }).catch(e => {}); } 
            else { const link = document.createElement('a'); link.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv); link.download = file.name; document.body.appendChild(link); link.click(); document.body.removeChild(link); }
        };

        window.exportReportPDF = () => {
            if(/Android.*Version\/[0-9].[0-9]|wv/i.test(navigator.userAgent) || window.POS.isApp) return Swal.fire({ title: 'Acción Bloqueada', text: 'Para extraer archivos (Excel/PDF), inicie sesión en el sistema usando Google Chrome. Las aplicaciones (APK) bloquean las descargas locales por seguridad.', icon: 'info', background: '#111', color: '#fff', confirmButtonColor: '#FF3D00' });
            if(!window.filteredReportOrders.length) return window.showToast('Genere un reporte primero', 'error');
            const element = document.getElementById('report-print-area');
            const opt = { margin: 10, filename: `Reporte_${Date.now()}.pdf`, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } };
            html2pdf().set(opt).from(element).output('blob').then(function(blob) {
                const file = new File([blob], opt.filename, { type: 'application/pdf' });
                if (navigator.canShare && navigator.canShare({ files: [file] })) { navigator.share({ title: 'Reporte Z', files: [file] }).catch(e => {}); } 
                else { const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = opt.filename; document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url); }
            }).catch(e => window.showToast('Error generando PDF', 'error'));
        };

        window.cancelarOrdenTotal = async (orderId) => {
            const { isConfirmed } = await Swal.fire({ title: '¿Anular Orden?', text: 'Devolverá insumos a inventario.', icon: 'warning', showCancelButton: true, background: '#111', color: '#fff', confirmButtonColor: '#d33' });
            if(isConfirmed) {
                const o = window.STATE.orders.find(x => x.id === orderId);
                if(o && o.status !== 'Cancelada') {
                    o.status = 'Cancelada'; o.items.forEach(item => { (item.recipe||[]).forEach(r => { const ing = window.STATE.ingredients.find(i => i.id === r.id); if(ing) ing.stock += r.qty; }); });
                    window.secureSave(); window.renderOrdersHistory(); window.renderDashboardMetrics(); window.renderKDS(); window.showToast('Orden Anulada', 'success');
                }
            }
        };

        window.renderDashboardMetrics = () => { 
            const elVentas = document.getElementById('dash-ventas-hoy');
            if(!elVentas) return; 
            const tOrders = (window.STATE.orders||[]).filter(o => new Date(o.timestamp).toDateString() === new Date().toDateString() && o.status !== 'Cancelada'); 
            const tVentas = tOrders.reduce((s,o) => s + (o.total || 0), 0); 
            elVentas.innerText = `$${tVentas.toFixed(2)}`; 
            const elOrdenes = document.getElementById('dash-ordenes-hoy'); if(elOrdenes) elOrdenes.innerText = tOrders.length; 
            const elProm = document.getElementById('dash-ticket-prom'); if(elProm) elProm.innerText = tOrders.length ? `$${(tVentas/tOrders.length).toFixed(2)}` : '$0.00'; 
            const elStock = document.getElementById('dash-alertas-stock'); if(elStock) elStock.innerText = (window.STATE.ingredients||[]).filter(i => (parseFloat(i.stock||0) <= parseFloat(i.min||0))).length; 
        };

        window.renderKDS = () => {
            const cols = { 'Pendiente': 'pen', 'Preparando': 'prep', 'Empacando': 'pack', 'Lista': 'ready' };
            Object.values(cols).forEach(c => { document.getElementById(`kds-col-${c}`).innerHTML = ''; document.getElementById(`kds-cnt-${c}`).innerText = '0'; });
            let counts = { pen:0, prep:0, pack:0, ready:0 }; const now = Date.now();
            (window.STATE.orders || []).forEach(o => {
                if(o.status === 'Entregada' || o.status === 'Cancelada') return;
                const colId = cols[o.status]; if(!colId) return; counts[colId]++;
                const mins = Math.floor((now - o.timestamp) / 60000); let timeClass = 'time-ok'; if(mins > 10) timeClass = 'time-warn'; if(mins > 20) timeClass = 'time-danger';
                const itemsStr = o.items.map(i => `<div class="text-[10px] font-bold text-zinc-300">- ${i.title} ${i.note ? `<span class="bg-red-600 text-white px-1 rounded ml-1 uppercase animate-pulse block mt-1">NOTA: ${i.note}</span>` : ''}</div>`).join('');
                let btn = '';
                if(o.status === 'Pendiente') btn = `<button onclick="window.chgStatus('${o.id}','Preparando')" class="w-full bg-blue-600 py-2 rounded-lg mt-2 text-[10px] font-bold uppercase transition">Cocinar</button>`;
                else if(o.status === 'Preparando') btn = `<button onclick="window.chgStatus('${o.id}','Empacando')" class="w-full bg-yellow-600 py-2 rounded-lg mt-2 text-[10px] text-black font-bold uppercase transition">A Empaque</button>`;
                else if(o.status === 'Empacando') btn = `<button onclick="window.chgStatus('${o.id}','Lista')" class="w-full bg-green-600 py-2 rounded-lg mt-2 text-[10px] font-bold uppercase transition">Lista</button>`;
                else if(o.status === 'Lista') btn = `<button onclick="window.chgStatus('${o.id}','Entregada')" class="w-full bg-zinc-600 py-2 rounded-lg mt-2 text-[10px] font-bold uppercase transition">Finalizar</button>`;

                document.getElementById(`kds-col-${colId}`).innerHTML += `<div class="bg-black p-3 rounded-xl border border-white/5 kds-card shadow-lg ${timeClass}"><div class="flex justify-between items-start mb-2"><div class="flex items-center gap-2"><span class="font-black text-xs text-white">${o.id}</span><button onclick="window.openEditOrderModal('${o.id}')" class="text-blue-400 bg-blue-500/20 p-1 rounded"><i class="ph-bold ph-pencil-simple"></i></button></div><span class="text-[9px] text-zinc-400 bg-zinc-900 px-1 rounded">${mins}m</span></div><div class="text-[9px] text-papa-yellow font-bold uppercase mb-2">${o.type} <br><span class="text-white">${o.name}</span></div><div class="bg-zinc-900 p-2 rounded-lg border border-white/5 space-y-1">${itemsStr}</div>${btn}</div>`;
            });
            Object.keys(counts).forEach(k => document.getElementById(`kds-cnt-${k}`).innerText = counts[k]);
        };
        window.chgStatus = (id, stat) => { const o = window.STATE.orders.find(x => x.id === id); if(o) { o.status = stat; window.secureSave(); window.renderKDS(); window.renderOrdersHistory(); } };

        window.openEditOrderModal = (id) => { window.currentEditOrderId = id; window.renderEditOrderModal(); window.openModal('editOrderModal'); };
        window.renderEditOrderModal = () => {
            const o = window.STATE.orders.find(x => x.id === window.currentEditOrderId); if(!o) return;
            document.getElementById('edit-order-title').innerHTML = `<i class="ph-bold ph-pencil-simple"></i> Editando: ${o.id}`; document.getElementById('edit-order-total').innerText = `Total: $${(o.total || 0).toFixed(2)}`;
            document.getElementById('edit-order-items').innerHTML = o.items.map((item, idx) => `<div class="bg-black border border-white/10 p-3 rounded-xl flex justify-between items-center"><div class="flex-1 pr-2"><p class="text-xs font-bold text-white uppercase">${item.title} <span class="text-[9px] text-papa-yellow">($${(item.price||0).toFixed(2)})</span></p>${item.note ? `<p class="text-[10px] text-red-400 font-bold bg-red-900/20 px-2 rounded mt-1">${item.note}</p>` : ''}</div><div class="flex gap-2"><button onclick="window.editOrderItemNote(${idx})" class="bg-blue-600/20 text-blue-400 p-2 rounded"><i class="ph-bold ph-pencil-simple"></i></button><button onclick="window.removeOrderItem(${idx})" class="bg-red-600/20 text-red-500 p-2 rounded"><i class="ph-bold ph-trash"></i></button></div></div>`).join('');
            document.getElementById('edit-order-add-select').innerHTML = `<option value="" disabled selected>-- Seleccione plato --</option>` + (window.STATE.menu||[]).filter(m=>m.available!==false).map(m => `<option value="${m.id}">${m.title} (+ $${m.price.toFixed(2)})</option>`).join('');
        };
        window.addNewProductToEditOrder = () => { const o = window.STATE.orders.find(x => x.id === window.currentEditOrderId); const pId = document.getElementById('edit-order-add-select').value; if(!o || !pId) return; const pt = window.STATE.menu.find(m => m.id === pId); if(!pt) return; const newItem = JSON.parse(JSON.stringify(pt)); newItem.note = 'AGREGADO EXTRA'; (newItem.recipe||[]).forEach(r => { const ing = window.STATE.ingredients.find(i => i.id === r.id); if(ing) ing.stock -= r.qty; }); o.total += newItem.price; o.items.push(newItem); window.secureSave(); window.renderEditOrderModal(); window.renderKDS(); };
        window.editOrderItemNote = async (idx) => { const o = window.STATE.orders.find(x => x.id === window.currentEditOrderId); if(!o) return; const { value: text } = await Swal.fire({ title: 'Editar Nota', input: 'text', inputValue: o.items[idx].note || '', background: '#111', color: '#fff' }); if(text !== undefined) { o.items[idx].note = window.sanitize(text.trim()); window.secureSave(); window.renderEditOrderModal(); window.renderKDS(); } };
        window.removeOrderItem = async (idx) => { const o = window.STATE.orders.find(x => x.id === window.currentEditOrderId); if(!o) return; const { isConfirmed } = await Swal.fire({ title: '¿Eliminar plato?', icon: 'warning', showCancelButton: true, background: '#111', color: '#fff' }); if(isConfirmed) { (o.items[idx].recipe||[]).forEach(r => { const ing = window.STATE.ingredients.find(i => i.id === r.id); if(ing) ing.stock += r.qty; }); o.total -= o.items[idx].price; o.items.splice(idx, 1); if(o.items.length === 0) { o.status = 'Cancelada'; window.closeModal('editOrderModal'); } else window.renderEditOrderModal(); window.secureSave(); window.renderKDS(); } };

        window.renderOrdersHistory = () => {
            document.getElementById('orders-history-table').innerHTML = [...(window.STATE.orders||[])].sort((a,b) => b.timestamp - a.timestamp).map(o => `<tr class="hover:bg-white/5 border-b border-white/5 ${o.status === 'Cancelada' ? 'opacity-50' : ''}"><td class="py-2 pl-2">${o.id}</td><td class="py-2 text-[10px] text-zinc-400">${new Date(o.timestamp).toLocaleString()}</td><td class="py-2 font-black">${o.name}</td><td class="py-2 text-papa-yellow">$${(parseFloat(o.total)||0).toFixed(2)}</td><td class="py-2"><span class="text-[9px] px-2 py-1 bg-zinc-900 rounded uppercase">${o.status}</span></td><td class="py-2 pr-2 text-right flex justify-end gap-2"><button onclick="window.showTicketPreview('${o.id}')" class="bg-blue-600 text-white p-2 rounded"><i class="ph-bold ph-printer"></i></button>${o.status !== 'Cancelada' ? `<button onclick="window.cancelarOrdenTotal('${o.id}')" class="bg-red-600/20 text-red-500 p-2 rounded"><i class="ph-bold ph-x-circle"></i></button>` : ''}</td></tr>`).join('');
        };

        window.renderAdminCatalog = () => { 
            const catalogGrid = document.getElementById('admin-catalog-grid');
            if(!window.STATE.menu || window.STATE.menu.length === 0) {
                catalogGrid.innerHTML = '<div class="col-span-full text-center text-zinc-500 text-xs py-10">No hay productos creados en el menú.</div>';
            } else {
                catalogGrid.innerHTML = window.STATE.menu.map(m => {
                    const price = parseFloat(m.price) || 0;
                    const title = m.title || 'Sin Nombre';
                    const img = m.img || 'https://placehold.co/600x400/222/FFF';
                    return `<div class="bg-zinc-900 border border-white/5 p-3 rounded-xl flex gap-3 items-center shadow-lg"><img src="${img}" class="w-12 h-12 rounded object-cover"><div class="flex-1 min-w-0"><p class="text-[10px] font-bold text-white uppercase truncate">${title}</p><p class="text-[10px] text-papa-yellow">$${price.toFixed(2)}</p></div><button onclick="window.openEditModal('${m.id}')" class="bg-blue-600/20 text-blue-400 p-2 rounded transition"><i class="ph-bold ph-pencil"></i></button><button onclick="window.deleteProduct('${m.id}')" class="bg-red-600/20 text-red-500 p-2 rounded transition"><i class="ph-bold ph-trash"></i></button></div>`;
                }).join(''); 
            }
        };
        window.deleteProduct = (id) => { window.STATE.menu = window.STATE.menu.filter(m => m.id !== id); window.secureSave(); window.renderAdminCatalog(); };
        
        window.renderIngredients = () => {
            let totalValue = 0; const tbody = document.getElementById('ingredients-table');
            if(!window.STATE.ingredients || window.STATE.ingredients.length === 0) { tbody.innerHTML = '<tr><td colspan="8" class="text-center py-6 text-zinc-500 font-bold">No hay insumos.</td></tr>'; document.getElementById('ing-total-valuation').innerText = '$0.00'; return; }
            tbody.innerHTML = window.STATE.ingredients.map(i => {
                const c = parseFloat(i.cost || 0); const s = parseFloat(i.stock || 0); const m = parseFloat(i.min || 0); const v = s * c; totalValue += v;
                return `<tr class="hover:bg-white/5 border-b border-white/5"><td class="py-3 pl-2 text-white font-bold">${i.name}</td><td class="py-3 text-[10px]">${i.sku || 'N/A'}</td><td class="py-3 text-[10px]">${i.unit || 'uds'}</td><td class="py-3">$${c.toFixed(2)}</td><td class="py-3 ${s<=m?'text-red-500 font-black':'text-green-400'}">${s}</td><td class="py-3 text-zinc-500">${m}</td><td class="py-3 text-white font-black">$${v.toFixed(2)}</td><td class="py-3 pr-2 text-right"><div class="flex justify-end gap-1"><button onclick="window.addStock('${i.id}')" class="bg-green-600/20 text-green-400 p-1.5 rounded"><i class="ph-bold ph-plus"></i></button><button onclick="window.editIng('${i.id}')" class="bg-blue-600/20 text-blue-400 p-1.5 rounded"><i class="ph-bold ph-pencil-simple"></i></button><button onclick="window.deleteIng('${i.id}')" class="bg-red-600/20 text-red-500 p-1.5 rounded"><i class="ph-bold ph-trash"></i></button></div></td></tr>`;
            }).join('');
            document.getElementById('ing-total-valuation').innerText = `$${totalValue.toFixed(2)}`;
        };

        window.addStock = async (id) => { const i = window.STATE.ingredients.find(x=>x.id===id); if(!i) return; const {value:a} = await Swal.fire({ title:`Reponer: ${i.name}`, input:'number', background:'#111', color:'#fff' }); if(a && parseFloat(a) > 0){ i.stock += parseFloat(a); window.secureSave(); window.renderIngredients(); } };
        
        window.openIngModal = (id = null) => {
            if(id) {
                const i = window.STATE.ingredients.find(x => x.id === id); if(!i) return;
                document.getElementById('ing-modal-main-title').innerText = `Editando: ${i.name}`;
                document.getElementById('edit-ing-id').value = i.id; document.getElementById('edit-ing-sku').value = i.sku || ''; document.getElementById('edit-ing-name').value = i.name || ''; document.getElementById('edit-ing-cost').value = i.cost || 0; document.getElementById('edit-ing-stock').value = i.stock || 0; document.getElementById('edit-ing-min').value = i.min || 0; document.getElementById('edit-ing-unit').value = i.unit || 'uds';
            } else {
                document.getElementById('ing-modal-main-title').innerText = `Nuevo Producto`;
                ['edit-ing-id', 'edit-ing-sku', 'edit-ing-name', 'edit-ing-cost', 'edit-ing-stock', 'edit-ing-min'].forEach(field => { const el = document.getElementById(field); if(el) el.value = ''; });
                document.getElementById('edit-ing-unit').value = 'uds'; 
            }
            window.openModal('editIngModal');
        };

        window.saveIngredient = () => {
            const name = window.sanitize(document.getElementById('edit-ing-name').value.trim()); if(!name) return window.showToast('Nombre obligatorio', 'error');
            const id = document.getElementById('edit-ing-id').value || ('ing-' + Date.now());
            const ingData = { id, sku: window.sanitize(document.getElementById('edit-ing-sku').value.trim()), name, cost: parseFloat(document.getElementById('edit-ing-cost').value || 0), stock: parseFloat(document.getElementById('edit-ing-stock').value || 0), min: parseFloat(document.getElementById('edit-ing-min').value || 0), unit: document.getElementById('edit-ing-unit').value };
            if(!window.STATE.ingredients) window.STATE.ingredients = [];
            const idx = window.STATE.ingredients.findIndex(x => x.id === id); if(idx > -1) { window.STATE.ingredients[idx] = ingData; } else { window.STATE.ingredients.push(ingData); }
            window.secureSave(); window.renderIngredients(); window.closeModal('editIngModal'); window.showToast('Guardado');
        };

        window.editIng = (id) => { window.openIngModal(id); };
        window.deleteIng = async (id) => { const { isConfirmed } = await Swal.fire({ title: '¿Eliminar?', icon: 'warning', showCancelButton: true, background: '#111', color: '#fff' }); if(isConfirmed) { window.STATE.ingredients = window.STATE.ingredients.filter(x => x.id !== id); if(window.STATE.menu) { window.STATE.menu.forEach(m => { if(m.recipe) m.recipe = m.recipe.filter(r => r.id !== id); }); } window.secureSave(); window.renderIngredients(); window.showToast('Eliminado'); } };

        window.addBankAccount = async () => { const { value: f } = await Swal.fire({ title: 'Cuenta', html: `<input id="bb" class="swal2-input bg-zinc-900 border-white/10 text-white" placeholder="Banco"><input id="bo" class="swal2-input bg-zinc-900 border-white/10 text-white" placeholder="Titular"><input id="bt" class="swal2-input bg-zinc-900 border-white/10 text-white" placeholder="Tipo"><input id="bn" class="swal2-input bg-zinc-900 border-white/10 text-white" placeholder="Número">`, background:'#111', color:'#fff', preConfirm: () => ({ bank: window.sanitize(document.getElementById('bb').value.trim()), owner: window.sanitize(document.getElementById('bo').value.trim()), type: window.sanitize(document.getElementById('bt').value.trim()), num: window.sanitize(document.getElementById('bn').value.trim()) }) }); if(f && f.bank) { window.STATE.settings.banks.push(f); window.secureSave(); window.renderBankAccounts(); } };
        window.deleteBankAccount = (idx) => { window.STATE.settings.banks.splice(idx, 1); window.secureSave(); window.renderBankAccounts(); };
        window.renderBankAccounts = () => { const list = document.getElementById('settings-banks-list'); if(!window.STATE.settings.banks.length) list.innerHTML = '<p class="text-xs text-zinc-500">Ninguna.</p>'; else list.innerHTML = window.STATE.settings.banks.map((b, idx) => `<div class="flex justify-between items-center bg-black border border-white/10 p-3 rounded"><div class="text-xs text-white"><span class="text-papa-yellow uppercase">${b.bank}</span> - ${b.num}</div><button onclick="window.deleteBankAccount(${idx})" class="text-red-500"><i class="ph-bold ph-trash"></i></button></div>`).join(''); };

        window.openEditModal = (id = null) => {
            window.STATE.tempRecipe = []; document.getElementById('recipe-ing-select').innerHTML = `<option value="" disabled selected>-- Elige Insumo --</option>` + window.STATE.ingredients.map(i => `<option value="${i.id}">${i.name} (${i.unit})</option>`).join('');
            const imgPreview = document.getElementById('edit-img-preview');
            if(id) { const p = window.STATE.menu.find(x => x.id === id); document.getElementById('edit-id').value = p.id; document.getElementById('edit-title').value = p.title; document.getElementById('edit-tag').value = p.cat || ''; document.getElementById('edit-cat').value = p.cat || ''; document.getElementById('edit-price').value = p.price; document.getElementById('edit-desc').value = p.desc; imgPreview.src = p.img; imgPreview.dataset.src = p.img; imgPreview.classList.remove('hidden'); window.STATE.tempRecipe = JSON.parse(JSON.stringify(p.recipe || [])); } 
            else { ['edit-id','edit-title','edit-tag','edit-cat','edit-price','edit-desc'].forEach(i => document.getElementById(i).value = ''); imgPreview.classList.add('hidden'); imgPreview.src = ''; imgPreview.dataset.src = ''; }
            window.renderRecipeList(); window.openModal('editModal');
        };
        window.addRecipeRow = () => { const id = document.getElementById('recipe-ing-select').value; const qty = parseFloat(document.getElementById('recipe-ing-qty').value); if(id && qty > 0) { const ex = window.STATE.tempRecipe.find(r => r.id === id); if(ex) ex.qty += qty; else window.STATE.tempRecipe.push({id, qty}); window.renderRecipeList(); document.getElementById('recipe-ing-qty').value = ''; } };
        window.renderRecipeList = () => { document.getElementById('recipe-list').innerHTML = window.STATE.tempRecipe.map((r, idx) => { const ing = window.STATE.ingredients.find(i => i.id === r.id); if(!ing) return ''; return `<div class="flex justify-between bg-zinc-900 border border-white/5 p-2 rounded text-[10px] text-zinc-300"><span>${ing.name}</span><span class="text-white">${r.qty} ${ing.unit} <button onclick="window.STATE.tempRecipe.splice(${idx},1); window.renderRecipeList();" class="text-red-500 ml-2">X</button></span></div>`; }).join(''); };
        window.saveProduct = () => { 
            const title = window.sanitize(document.getElementById('edit-title').value.trim()); if(!title) return window.showToast('Nombre obligatorio', 'error');
            if(!window.STATE.menu) window.STATE.menu = [];
            const tagValue = document.getElementById('edit-tag').value;
            const p = { id: document.getElementById('edit-id').value || 'p'+Date.now(), title, cat: window.sanitize(tagValue || document.getElementById('edit-cat').value), price: parseFloat(document.getElementById('edit-price').value || 0), img: document.getElementById('edit-img-preview').dataset.src || 'https://placehold.co/600x400/222/FFF', desc: window.sanitize(document.getElementById('edit-desc').value), recipe: JSON.parse(JSON.stringify(window.STATE.tempRecipe)), available: true }; 
            const idx = window.STATE.menu.findIndex(x => x.id === p.id); if(idx > -1) window.STATE.menu[idx] = p; else window.STATE.menu.push(p); 
            window.secureSave(); window.closeModal('editModal'); window.renderAdminCatalog(); window.showToast('Plato guardado'); 
        };

        window.uploadGalleryImage = (event) => { window.processImageUpload(event, (url) => { window.STATE.gallery.push(url); window.secureSave(); window.renderGalleryAdmin(); window.showToast('Foto subida'); }); };
        window.renderGalleryAdmin = () => { document.getElementById('admin-gallery-grid').innerHTML = (window.STATE.gallery||[]).map((url, idx) => `<div class="h-32 bg-black rounded-xl border border-white/10 overflow-hidden relative group shadow-lg"><img src="${url}" class="w-full h-full object-cover"><button onclick="window.STATE.gallery.splice(${idx},1); window.secureSave(); window.renderGalleryAdmin();" class="absolute inset-0 bg-red-600/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><i class="ph-bold ph-trash text-3xl"></i></button></div>`).join(''); };

        window.saveSettings = () => { 
            window.STATE.settings.apiKey = window.sanitize(document.getElementById('set-api-key').value.trim()); 
            window.STATE.settings.phone = window.sanitize(document.getElementById('set-phone').value.trim()); 
            window.STATE.settings.mapEmbed = window.sanitize(document.getElementById('set-map-embed').value.trim()); 
            window.STATE.settings.mapLink = window.sanitize(document.getElementById('set-map-link').value.trim()); 
            
            const basePriceEl = document.getElementById('set-base-price');
            const extraPriceEl = document.getElementById('set-extra-price');
            
            window.STATE.settings.customBasePrice = basePriceEl ? parseFloat(basePriceEl.value) || 6.00 : 6.00; 
            window.STATE.settings.customExtraPrice = extraPriceEl ? parseFloat(extraPriceEl.value) || 1.50 : 1.50; 
            
            window.secureSave(); 
            window.showToast('Configuración Guardada'); 
        };
        window.saveHardwareConfig = () => { window.STATE.hardware.bridgeUrl = window.sanitize(document.getElementById('hw-bridge-url').value); window.STATE.hardware.autoOpenDrawer = document.getElementById('hw-auto-drawer').checked; window.secureSave(); window.showToast('Hardware configurado'); window.POSBridge.ping(); };

        setInterval(() => { if(window.STATE.currentUser && !document.getElementById('panel-admin-kds').classList.contains('hidden')) { window.renderKDS(); window.renderDashboardMetrics(); } }, 15000);
        initCloudSystem();
    </script>
</body>
</html>
