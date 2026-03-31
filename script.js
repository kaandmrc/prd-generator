/* =========================================
   i18n TRANSLATIONS
   ========================================= */
const translations = {
    tr: {
        app_title: "PRD Oluşturucu",
        nav_dashboard: "PRD Listesine Dön",
        btn_preview: "Önizleme",
        btn_export: "PDF İndir",
        dashboard_title: "PRD Belgeleriniz",
        dashboard_subtitle: "Geçmişte oluşturduğunuz veya yeni yaratacağınız gereksinim dokümanlarını buradan yönetin.",
        btn_create_new: "Yeni PRD Oluştur",
        lbl_summary: "Yönetici Özeti",
        lbl_problem: "Problem Tanımı",
        lbl_goals: "Hedefler ve Başarı Metrikleri",
        help_goals: "Metrik adı (örn: Dönüşüm) ve hedeflenen rakam/yüzde (örn: %5 Artış).<br/><em>(Maddeleri sıralamak için sollarındaki tutamaçtan sürükleyin)</em>",
        btn_add_metric: "Metrik Ekle",
        lbl_personas: "Kullanıcı Personaları ve Hikayeler",
        help_personas: "Hedef kitle, hikayesi ve altında da bu hikayenin başarı kriteri.",
        btn_add_story: "Hikaye Ekle",
        lbl_reqs: "Fonksiyonel Gereksinimler",
        help_reqs: "Sistemin yapması gereken somut işler ve öncelik seviyesi.",
        btn_add_req: "Gereksinim Ekle",
        lbl_ux: "Kullanıcı Deneyimi ve Tasarım",
        lbl_outofscope: "Kapsam Dışı",
        lbl_constraints: "Teknik Kısıtlamalar",
        lbl_edgecases: "Uç Durumlar",
        modal_title: "Doküman Önizlemesi",
        doc_summary: "Yönetici Özeti",
        doc_problem: "Problem Tanımı",
        doc_goals: "Hedefler ve Başarı Metrikleri",
        doc_personas: "Kullanıcı Personaları ve Hikayeler",
        doc_reqs: "Fonksiyonel Gereksinimler",
        doc_ux: "Kullanıcı Deneyimi ve Tasarım",
        doc_outofscope: "Kapsam Dışı",
        doc_constraints: "Teknik Kısıtlamalar",
        doc_edgecases: "Uç Durumlar",
        empty_msg: "Henüz girilmedi.",
        tbl_prio: "Öncelik & Özellik",
        tbl_desc: "Açıklama",
        prio_0: "P0 (Acil)",
        prio_1: "P1 (Orta)",
        prio_2: "P2 (Düşük)",
        persona_label: "Persona",
        story_label: "Hikaye",
        criteria_label: "Kabul Kriterleri",
        ph_summary: "Ürünün ne olduğunu ve neden var olduğunu anlatan 2-3 cümlelik vizyon metni.",
        ph_problem: "Kullanıcı X işlemini yaparken Y engeliyle karşılaşıyor, bu da Z kaybına yol açıyor.",
        ph_metric_desc: "Metrik Açıklaması",
        ph_metric_val: "Hedef / Sayı",
        ph_persona_name: "Persona/Kullanıcı (Örn: Yönetici)",
        ph_persona_story: "Kullanıcı Hikayesi (Örn: ... raporları hızlıca görmek isterim)",
        ph_persona_crit: "Kabul Kriterleri (Acceptance Criteria)...",
        ph_req_feature: "Özellik Adı (Örn: Kayıt Ol)",
        ph_req_desc: "Detaylı Özellik Açıklaması...",
        ph_ux: "Kullanıcı akış şemaları (User Flow) ve tasarım/Figma linkleri.",
        ph_outofscope: "Yanlış beklentileri önlemek için bu fazda YAPILMAYACAK işlerin listesi.",
        ph_constraints: "API gereksinimleri, güvenlik standartları veya performans limitleri.",
        ph_edgecases: "Hata mesajları, çevrimdışı mod senaryoları ve beklenmedik kullanıcı davranışları.",
        ph_prd_title: "PRD Doküman Adı"
    },
    en: {
        app_title: "PRD Generator",
        nav_dashboard: "Back to PRD List",
        btn_preview: "Preview",
        btn_export: "Download PDF",
        dashboard_title: "Your PRD Documents",
        dashboard_subtitle: "Manage your previously created or new product requirements documents here.",
        btn_create_new: "Create New PRD",
        lbl_summary: "Executive Summary",
        lbl_problem: "Problem Statement",
        lbl_goals: "Goals & Success Metrics",
        help_goals: "Metric name (e.g., Conversion) and target number/percentage (e.g., 5% Increase).<br/><em>(Drag the handles on the left to reorder items)</em>",
        btn_add_metric: "Add Metric",
        lbl_personas: "User Personas & Stories",
        help_personas: "Target audience, user story, and its acceptance criteria.",
        btn_add_story: "Add Story",
        lbl_reqs: "Functional Requirements",
        help_reqs: "Concrete tasks the system must perform and their priority level.",
        btn_add_req: "Add Requirement",
        lbl_ux: "User Experience & Design",
        lbl_outofscope: "Out of Scope",
        lbl_constraints: "Technical Constraints",
        lbl_edgecases: "Edge Cases",
        modal_title: "Document Preview",
        doc_summary: "Executive Summary",
        doc_problem: "Problem Statement",
        doc_goals: "Goals & Success Metrics",
        doc_personas: "User Personas & Stories",
        doc_reqs: "Functional Requirements",
        doc_ux: "User Experience & Design",
        doc_outofscope: "Out of Scope",
        doc_constraints: "Technical Constraints",
        doc_edgecases: "Edge Cases",
        empty_msg: "Not provided yet.",
        tbl_prio: "Priority & Feature",
        tbl_desc: "Description",
        prio_0: "P0 (Urgent)",
        prio_1: "P1 (Medium)",
        prio_2: "P2 (Low)",
        persona_label: "Persona",
        story_label: "Story",
        criteria_label: "Acceptance Criteria",
        ph_summary: "2-3 sentence vision statement describing what the product is and why it exists.",
        ph_problem: "User encounters obstacle Y while doing X, leading to loss of Z.",
        ph_metric_desc: "Metric Description",
        ph_metric_val: "Target / Value",
        ph_persona_name: "Persona/User (e.g., Admin)",
        ph_persona_story: "User Story (e.g., I want to view reports quickly...)",
        ph_persona_crit: "Acceptance Criteria...",
        ph_req_feature: "Feature Name (e.g., Sign Up)",
        ph_req_desc: "Detailed Feature Description...",
        ph_ux: "User flows and design/Figma links.",
        ph_outofscope: "List of tasks that will NOT be done in this phase to prevent false expectations.",
        ph_constraints: "API requirements, security standards, or performance limits.",
        ph_edgecases: "Error messages, offline mode scenarios, and unexpected user behaviors.",
        ph_prd_title: "PRD Document Name"
    }
};

let currentLang = localStorage.getItem('prd_app_lang') || 'tr';

function applyTranslations() {
    document.getElementById('langSwitcher').value = currentLang;
    const dict = translations[currentLang];
    
    // Update simple texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerHTML = dict[key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });
}

document.getElementById('langSwitcher').addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('prd_app_lang', currentLang);
    applyTranslations();
    if(currentPrdId) {
        // Re-render editor UI forms that use text fallbacks
        renderMetricsUI();
        renderPersonasUI();
        renderReqsUI();
    } else {
        renderDashboard();
    }
    // Update live previews
    triggerFormUpdates();
});

/* =========================================
   LOCAL STORAGE & APP STATE
   ========================================= */
const STORAGE_KEY = 'prd_app_data_v4';
let prdList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentPrdId = null;

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prdList));
}

function createNewPRD(name) {
    const newPrd = {
        id: Date.now().toString(),
        name: name || "Yeni PRD Dokümanı",
        updatedAt: Date.now(),
        data: {
            f_summary: "",
            f_problem: "",
            f_ux: "",
            f_outofscope: "",
            f_constraints: "",
            f_edgecases: "",
            metrics: [],
            personas: [],
            reqs: []
        }
    };
    prdList.push(newPrd);
    saveToLocalStorage();
    return newPrd;
}

function updateCurrentPRDData() {
    if (!currentPrdId) return;
    const prd = prdList.find(p => p.id === currentPrdId);
    if (prd) {
        prd.updatedAt = Date.now();
        const titleVal = document.getElementById('prd_title_input').value.trim();
        if(titleVal) prd.name = titleVal;
        prd.data.f_summary = document.getElementById('f_summary').value;
        prd.data.f_problem = document.getElementById('f_problem').value;
        prd.data.f_ux = document.getElementById('f_ux').value;
        prd.data.f_outofscope = document.getElementById('f_outofscope').value;
        prd.data.f_constraints = document.getElementById('f_constraints').value;
        prd.data.f_edgecases = document.getElementById('f_edgecases').value;
        prd.data.metrics = [...metricsManager.data];
        prd.data.personas = [...personasManager.data];
        prd.data.reqs = [...reqsManager.data];
        saveToLocalStorage();
    }
}

function getPRD(id) {
    return prdList.find(p => p.id === id);
}

function deletePRD(id) {
    prdList = prdList.filter(p => p.id !== id);
    saveToLocalStorage();
    renderDashboard();
}

function renamePRD(id, newName) {
    const prd = getPRD(id);
    if(prd && newName.trim()) {
        prd.name = newName.trim();
        saveToLocalStorage();
        renderDashboard();
    }
}

/* =========================================
   UI VIEWS ROUTING (Dashboard vs Editor)
   ========================================= */
const dashboardView = document.getElementById('dashboard-view');
const editorView = document.getElementById('editor-view');
const navDashboardBtn = document.getElementById('navDashboardBtn');
const editorActions = document.getElementById('editorActions');

function showDashboard() {
    currentPrdId = null;
    dashboardView.style.display = 'flex';
    editorView.style.display = 'none';
    navDashboardBtn.style.display = 'none';
    editorActions.style.display = 'none';
    renderDashboard();
}

function showEditor(id) {
    currentPrdId = id;
    dashboardView.style.display = 'none';
    editorView.style.display = 'flex';
    navDashboardBtn.style.display = 'inline-flex';
    editorActions.style.display = 'flex';
    loadEditorData(id);
}

navDashboardBtn.addEventListener('click', showDashboard);

document.getElementById('createNewPrdBtn').addEventListener('click', () => {
    const defaultName = currentLang === 'tr' ? "Yeni PRD Dokümanı" : "New PRD Document";
    const name = prompt(currentLang === 'tr' ? "PRD Adını Girin:" : "Enter PRD Name:", defaultName);
    if(name !== null) {
        const prd = createNewPRD(name);
        showEditor(prd.id);
    }
});

function renderDashboard() {
    const grid = document.getElementById('prdListGrid');
    grid.innerHTML = '';
    
    // Sort descending by date
    prdList.sort((a,b) => b.updatedAt - a.updatedAt).forEach(prd => {
        const dateObj = new Date(prd.updatedAt);
        const dateStr = dateObj.toLocaleDateString(currentLang === 'tr' ? 'tr-TR' : 'en-US', {
            year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        const row = document.createElement('div');
        row.className = 'bg-white border border-border rounded-lg p-4 shadow-sm hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-all duration-200 hover:-translate-y-px hover:shadow-md';
        row.onclick = () => showEditor(prd.id); // Direct click to open
        
        row.innerHTML = `
            <div class="flex items-center gap-3 flex-1">
                <div class="text-[1.1rem] font-semibold text-primary flex items-center gap-2">
                    <i data-feather="file-text" class="w-[18px] h-[18px]"></i>
                    <span>${prd.name}</span>
                </div>
            </div>
            
            <div class="flex items-center gap-8">
                <div class="text-[0.85rem] text-gray-500 whitespace-nowrap">${currentLang === 'tr' ? 'Son Güncelleme' : 'Last Update'}: ${dateStr}</div>
                <div class="flex items-center">
                    <button class="bg-transparent border-none cursor-pointer text-danger p-2 rounded hover:bg-red-50 flex items-center justify-center transition-colors" onclick="event.stopPropagation(); deleteConfirm('${prd.id}')" title="${currentLang==='tr'?'Sil':'Delete'}">
                        <i data-feather="trash-2" class="w-[18px] h-[18px]"></i>
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(row);
    });
    feather.replace();
}

window.deleteConfirm = function(id) {
    if(confirm(currentLang === 'tr' ? 'Bu PRD silinecek, emin misiniz?' : 'Are you sure you want to delete this PRD?')) {
        deletePRD(id);
    }
}

/* =========================================
   EDITOR LOGIC & FORM AUTO-SAVE
   ========================================= */
const simpleFields = ['f_summary', 'f_problem', 'f_ux', 'f_outofscope', 'f_constraints', 'f_edgecases'];

function formatEmptyMsg() {
    return `<span class="empty-msg">${translations[currentLang].empty_msg}</span>`;
}

function loadEditorData(id) {
    const prd = getPRD(id);
    if (!prd) return;
    
    document.getElementById('prd_title_input').value = prd.name;

    // Set form fields
    simpleFields.forEach(fId => {
        document.getElementById(fId).value = prd.data[fId] || "";
    });

    // Populate managers
    metricsManager.data = prd.data.metrics ? [...prd.data.metrics] : [];
    personasManager.data = prd.data.personas ? [...prd.data.personas] : [];
    reqsManager.data = prd.data.reqs ? [...prd.data.reqs] : [];

    // Render lists
    metricsManager.render();
    personasManager.render();
    reqsManager.render();

    // Trigger preview update
    triggerFormUpdates();
}

document.getElementById('prd_title_input').addEventListener('input', () => {
    updateCurrentPRDData();
});

// Attach Auto-Save listener to basic textareas
simpleFields.forEach(fId => {
    document.getElementById(fId).addEventListener('input', (e) => {
        const val = e.target.value.trim();
        const pId = fId.replace('f_', 'p_');
        document.getElementById(pId).innerHTML = val || formatEmptyMsg();
        updateCurrentPRDData(); // Auto save
    });
});

function triggerFormUpdates() {
    simpleFields.forEach(fId => {
        const val = document.getElementById(fId).value.trim();
        const pId = fId.replace('f_', 'p_');
        document.getElementById(pId).innerHTML = val || formatEmptyMsg();
    });
}

/* =========================================
   DRAG & DROP MANAGER AND DYNAMIC TIER
   ========================================= */
class DynamicList {
    constructor(listName) {
        this.data = [];
        this.listName = listName; // 'metrics', 'personas', 'reqs'
    }

    add(item) {
        this.data.push(item);
        this.render();
        updateCurrentPRDData();
    }

    delete(id) {
        this.data.splice(id, 1);
        this.render();
        updateCurrentPRDData();
    }

    reorder(fromIndex, toIndex) {
        const element = this.data[fromIndex];
        this.data.splice(fromIndex, 1);
        this.data.splice(toIndex, 0, element);
        this.render();
        updateCurrentPRDData();
    }

    render() {
        if(this.listName === 'metrics') renderMetricsUI();
        if(this.listName === 'personas') renderPersonasUI();
        if(this.listName === 'reqs') renderReqsUI();
        feather.replace(); // Re-render icons after DOM modification
        attachDragAndDropListeners(this.listName);
    }
}

const metricsManager = new DynamicList('metrics');
const personasManager = new DynamicList('personas');
const reqsManager = new DynamicList('reqs');

// ADD FUNCTIONS
window.addMetric = function() {
    const desc = document.getElementById('metric_desc').value.trim();
    const val = document.getElementById('metric_val').value.trim();
    if (!desc || !val) { showAlert(currentLang==='tr'?"Açıklama ve Rakam zorunludur.":"Description and Value are required."); return; }
    metricsManager.add({ desc, val });
    document.getElementById('metric_desc').value = '';
    document.getElementById('metric_val').value = '';
    document.getElementById('metric_desc').focus();
};

window.addPersona = function() {
    const name = document.getElementById('persona_name').value.trim();
    const story = document.getElementById('persona_story').value.trim();
    const criteria = document.getElementById('persona_criteria').value.trim();
    if (!name || !story) { showAlert(currentLang==='tr'?"Persona ve Hikaye zorunludur.":"Persona and Story are required."); return; }
    personasManager.add({ name, story, criteria });
    document.getElementById('persona_name').value = '';
    document.getElementById('persona_story').value = '';
    document.getElementById('persona_criteria').value = '';
    document.getElementById('persona_name').focus();
};

window.addReq = function() {
    const feature = document.getElementById('req_feature').value.trim();
    const desc = document.getElementById('req_desc').value.trim();
    const prio = document.getElementById('req_priority').value;
    if (!feature || !desc) { showAlert(currentLang==='tr'?"Özellik ve Açıklama zorunludur.":"Feature and Description are required."); return; }
    reqsManager.add({ feature, desc, prio });
    document.getElementById('req_feature').value = '';
    document.getElementById('req_desc').value = '';
    document.getElementById('req_feature').focus();
};

// EDIT FUNCTIONS
window.editMetric = function(idx) {
    const m = metricsManager.data[idx];
    document.getElementById('metric_desc').value = m.desc;
    document.getElementById('metric_val').value = m.val;
    metricsManager.delete(idx);
    document.getElementById('metric_desc').focus();
};

window.editPersona = function(idx) {
    const p = personasManager.data[idx];
    document.getElementById('persona_name').value = p.name;
    document.getElementById('persona_story').value = p.story;
    document.getElementById('persona_criteria').value = p.criteria;
    personasManager.delete(idx);
    document.getElementById('persona_name').focus();
};

window.editReq = function(idx) {
    const r = reqsManager.data[idx];
    document.getElementById('req_feature').value = r.feature;
    document.getElementById('req_desc').value = r.desc;
    document.getElementById('req_priority').value = r.prio;
    reqsManager.delete(idx);
    document.getElementById('req_feature').focus();
};

// GLOBAL DELETE 
window.deleteItem = function(listName, idx) {
    if(listName === 'metrics') metricsManager.delete(idx);
    if(listName === 'personas') personasManager.delete(idx);
    if(listName === 'reqs') reqsManager.delete(idx);
};

// RENDERERS
function renderMetricsUI() {
    const eCont = document.getElementById('editor_metricsList');
    const pCont = document.getElementById('p_metrics');
    eCont.innerHTML = ''; pCont.innerHTML = '';

    if (metricsManager.data.length === 0) {
        pCont.innerHTML = `<li class="empty-msg">${translations[currentLang].empty_msg}</li>`; return;
    }
    metricsManager.data.forEach((m, idx) => {
        let content = `<span><strong>${m.desc}:</strong> ${m.val}</span>`;
        eCont.innerHTML += createCardHTML(idx, 'metrics', content);
        pCont.innerHTML += `<li><strong>${m.desc}:</strong> ${m.val}</li>`;
    });
}

function renderPersonasUI() {
    const eCont = document.getElementById('editor_personasList');
    const pCont = document.getElementById('p_personas');
    eCont.innerHTML = ''; pCont.innerHTML = '';
    
    if (personasManager.data.length === 0) {
        pCont.innerHTML = `<span class="empty-msg !ml-0" data-i18n="empty_msg">${translations[currentLang].empty_msg}</span>`;
    }

    const t = translations[currentLang];

    personasManager.data.forEach((p, idx) => {
        let content = `<strong>${t.persona_label}:</strong> ${p.name}<br/><strong>${t.story_label}:</strong> ${p.story}`;
        if(p.criteria) content += `<br/><strong>${t.criteria_label}:</strong><br/>${p.criteria.replace(/\n/g, '<br/>')}`;
        
        eCont.innerHTML += createCardHTML(idx, 'personas', content);
        
        let pCrit = p.criteria ? `<br/><strong>${t.criteria_label}:</strong><br/>${p.criteria.replace(/\n/g, '<br/>')}` : '';
        pCont.innerHTML += `<div class="persona-doc-item"><strong>${t.persona_label}:</strong> ${p.name}<br/><strong>${t.story_label}:</strong> ${p.story}${pCrit}</div>`;
    });
}

function renderReqsUI() {
    const eCont = document.getElementById('editor_reqsList');
    const tbody = document.getElementById('p_requirements_body');
    const pEmpty = document.getElementById('p_requirements_empty');
    eCont.innerHTML = ''; tbody.innerHTML = '';
    
    if (reqsManager.data.length === 0) {
        pEmpty.style.display = 'block'; return;
    } else { pEmpty.style.display = 'none'; }

    reqsManager.data.forEach((r, idx) => {
        let badge = r.prio === 'P0' ? `<span style="color:var(--danger-color);font-weight:bold;">[${r.prio}]</span>` : `<span style="color:var(--text-secondary)">[${r.prio}]</span>`;
        let content = `<div>${badge} <strong>${r.feature}</strong> <p style="font-size:0.8rem; color:#666; margin-top:2px;">${r.desc}</p></div>`;
        eCont.innerHTML += createCardHTML(idx, 'reqs', content);

        tbody.innerHTML += `
            <tr>
                <td>${r.prio === 'P0' ? '<strong>'+r.prio+'</strong>' : r.prio} - ${r.feature}</td>
                <td>${r.desc}</td>
            </tr>
        `;
    });
}

function createCardHTML(index, listName, contentHTML) {
    const editFn = `edit${listName.charAt(0).toUpperCase() + listName.slice(1, -1)}(${index})`;
    
    return `
        <div class="flex items-start justify-between bg-white border border-border p-3 rounded-md text-sm shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-100 draggable" draggable="true" data-index="${index}" data-list="${listName}">
            <div class="card-grip text-gray-400 pr-2 pt-0.5" title="${currentLang==='tr'?'Sürükle':'Drag'}">
                <i data-feather="grid" class="w-[18px] h-[18px]"></i>
            </div>
            <div class="flex-1 flex flex-col gap-1 pr-4 [&>div>strong]:text-primary [&>span>strong]:text-primary">
                ${contentHTML}
            </div>
            <div class="flex gap-1">
                <button type="button" class="bg-transparent border border-transparent rounded cursor-pointer w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-primary hover:border-gray-200 transition-colors" onclick="${editFn}" title="${currentLang==='tr'?'Düzenle':'Edit'}">
                    <i data-feather="edit-2" class="w-4 h-4"></i>
                </button>
                <button type="button" class="bg-transparent border border-transparent rounded cursor-pointer w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-danger hover:border-red-200 transition-colors" onclick="deleteItem('${listName}', ${index})" title="${currentLang==='tr'?'Sil':'Delete'}">
                    <i data-feather="trash-2" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `;
}

/* =========================================
   HTML5 DRAG AND DROP ENGINE
   ========================================= */
let draggedItem = null;
let startIndex = null;
let currentListManager = null;

function attachDragAndDropListeners(listName) {
    const container = document.getElementById(`editor_${listName}List`);
    const draggables = container.querySelectorAll('.draggable');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            draggedItem = draggable;
            startIndex = parseInt(draggable.getAttribute('data-index'));
            
            if(listName === 'metrics') currentListManager = metricsManager;
            if(listName === 'personas') currentListManager = personasManager;
            if(listName === 'reqs') currentListManager = reqsManager;

            setTimeout(() => draggable.classList.add('dragging'), 0);
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
            draggedItem = null;
            startIndex = null;
            currentListManager = null;
        });
    });

    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    });

    container.addEventListener('drop', (e) => {
        e.preventDefault();
        if(!draggedItem || !currentListManager) return;
        
        const currentCards = Array.from(container.querySelectorAll('.draggable'));
        const endIndex = currentCards.indexOf(draggedItem);
        
        if (endIndex !== -1 && startIndex !== null && startIndex !== endIndex) {
            currentListManager.reorder(startIndex, endIndex);
        }
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

/* =========================================
   MODAL, PDF EXPORT & UTILS
   ========================================= */
let timer;
function showAlert(msg) {
    const alertBox = document.getElementById('alertBox');
    document.getElementById('alertMessage').innerText = msg;
    alertBox.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => alertBox.classList.remove('show'), 4000);
}

const modal = document.getElementById('previewModal');

document.getElementById('previewBtn').addEventListener('click', () => {
    // Generate date specifically for preview
    const dateEl = document.getElementById('p_date');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const localeStr = currentLang === 'tr' ? 'tr-TR' : 'en-US';
    const prefix = currentLang === 'tr' ? 'Oluşturulma Tarihi: ' : 'Generated on: ';
    dateEl.innerText = prefix + new Date().toLocaleDateString(localeStr, options);
    
    // Setup document main title based on prd name
    const prd = getPRD(currentPrdId);
    if(prd && prd.name) {
        document.getElementById('p_main_title').innerText = prd.name;
    }
    
    modal.classList.add('show');
});

document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.remove('show'));
window.addEventListener('click', (e) => { 
    if (e.target === modal || e.target.classList.contains('modal-content')) {
        modal.classList.remove('show');
    }
});

document.getElementById('exportBtn').addEventListener('click', () => {
    // Validation
    if (!document.getElementById('f_summary').value.trim()) { 
        showAlert(currentLang === 'tr' ? 'Özet (Executive Summary) zorunludur!' : 'Executive Summary is required!'); 
        return; 
    }
    if (metricsManager.data.length === 0) { 
        showAlert(currentLang === 'tr' ? 'En az 1 adet Metrik girmelisiniz!' : 'At least 1 Metric is required!'); 
        return; 
    }

    const prd = getPRD(currentPrdId);
    const fileName = prd && prd.name ? prd.name.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '_prd.pdf' : 'prd_document.pdf';

    // Simulate clicking preview to populate date/title real quick
    document.getElementById('previewBtn').click();
    modal.classList.remove('show');

    const element = document.getElementById('document-sheet');
    
    // Modal is conditionally positioned to be rendered while hidden
    modal.classList.add('show');
    modal.style.position = 'absolute';
    modal.style.left = '-9999px';

    const opt = {
        margin:       [10, 0, 10, 0],
        filename:     fileName,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        modal.classList.remove('show');
        modal.style.position = '';
        modal.style.left = '';
    });
});

/* =========================================
   BOOTSTRAP APP
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    showDashboard(); // Entry Point
});
