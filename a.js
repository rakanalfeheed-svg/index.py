// تبديل المظهر
const root = document.documentElement;
document.getElementById('themeToggle').addEventListener('click', ()=>{
  root.classList.toggle('light');
});

// تبديل العروض
const views = ['overview','tickets','network','assets','maintenance','settings'];
const buttons = document.querySelectorAll('.nav-item');
function showView(name){
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.hidden = v !== name;
  });
  buttons.forEach(b => b.classList.toggle('active', b.dataset.view === name));
}
buttons.forEach(b => b.addEventListener('click', ()=> showView(b.dataset.view)));
showView('overview');

// بيانات 
const tickets = [
  
];
const services = [
  
];
const assets = [
  
];

// نظرة عامة: أرقام ومصغّرات
function renderOverview(){
  document.getElementById('openTickets').textContent = tickets.filter(t=>t.status!=='closed').length;
  document.getElementById('uptime').textContent = (99.5 + Math.random()*0.4).toFixed(2) + '%';
  const secCount = Math.floor(1 + Math.random()*3);
  document.getElementById('secAlerts').textContent = secCount;
  const mini = document.getElementById('miniAlerts');
  mini.innerHTML = '';
  Array.from({length:secCount}).forEach((_,i)=>{
    const li=document.createElement('li');
   
    mini.appendChild(li);
  });
  renderSpark('sparkTickets');
}
function renderSpark(id){
  const el=document.getElementById(id);
  const w=el.clientWidth,h=el.clientHeight;
  const pts=Array.from({length:24},(_,i)=>{
    const t=i/23, y=0.5 + Math.sin(i*0.5)*0.25 + (Math.random()-0.5)*0.12;
    return [t*w,(1-y)*h];
  });
  const d=pts.map((p,i)=> i?`L${p[0]},${p[1]}`:`M${p[0]},${p[1]}`).join(' ');
  el.innerHTML = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#22d3ee"/>
    </linearGradient></defs>
    <path d="${d}" fill="none" stroke="url(#g)" stroke-width="2"/></svg>`;
}
window.addEventListener('resize', ()=>renderSpark('sparkTickets'));
renderOverview();

// جدول الأعطال الحديث
const incidents = [
  
];
function renderIncidents(){
  const tbody=document.querySelector('#incidentsTable tbody');
  tbody.innerHTML='';
  incidents.forEach(x=>{
    const tr=document.createElement('tr');
    tr.innerHTML=`<td>${x.date}</td><td>${x.svc}</td><td>${x.status}</td><td>${x.dur}</td>`;
    tbody.appendChild(tr);
  });
}
renderIncidents();

// تذاكر الدعم
function renderTickets(list=tickets){
  const tbody=document.querySelector('#ticketsTable tbody');
  tbody.innerHTML='';
  list.forEach(t=>{
    const pr = t.priority==='high'?'red':(t.priority==='med'?'amber':'green');
    const st = t.status==='closed'?'green':(t.status==='inprogress'?'amber':'red');
    const tr=document.createElement('tr');
    tr.innerHTML = `
      <td>${t.id}</td>
      <td>${t.title}</td>
      <td><span class="badge ${pr}">${t.priority.toUpperCase()}</span></td>
      <td><span class="badge ${st}">${t.status}</span></td>
      <td>${t.dept}</td>
      <td>${t.updated}</td>`;
    tbody.appendChild(tr);
  });
}
renderTickets();

document.getElementById('ticketFilter').addEventListener('change', e=>{
  const v=e.target.value;
  const q=document.getElementById('ticketSearch').value.toLowerCase();
  filterTickets(q,v);
});
document.getElementById('ticketSearch').addEventListener('input', e=>{
  const v=document.getElementById('ticketFilter').value;
  filterTickets(e.target.value.toLowerCase(), v);
});
function filterTickets(q, f){
  const out = tickets.filter(t=>{
    const fitsFilter = f==='all' || t.status===f;
    const fitsQuery = !q || (String(t.id).includes(q) || t.title.toLowerCase().includes(q));
    return fitsFilter && fitsQuery;
  });
  renderTickets(out);
}

// إضافة تذكرة
const dialog = document.getElementById('ticketDialog');
document.getElementById('addTicketBtn').addEventListener('click', ()=> dialog.showModal());
document.getElementById('tSubmit').addEventListener('click', (e)=>{
  e.preventDefault();
  const title=document.getElementById('tTitle').value.trim();
  if(!title) return;
  tickets.unshift({
    id: Math.floor(1000+Math.random()*9000),
    title,
    priority: document.getElementById('tPriority').value,
    status: 'open',
    dept: document.getElementById('tDept').value,
    updated: 'الآن'
  });
  dialog.close();
  renderTickets();
  renderOverview();
});


renderServices();

function renderNetChart(){
  const el=document.getElementById('netChart');
  const w=el.clientWidth,h=el.clientHeight;
  const pts=Array.from({length:60},(_,i)=>{
    const t=i/59, y=Math.abs(Math.sin(i*0.18))*0.6 + (Math.random()*0.15);
    return [t*w,(1-y)*h];
  });
  const d=pts.map((p,i)=> i?`L${p[0]},${p[1]}`:`M${p[0]},${p[1]}`).join(' ');
  el.innerHTML=`<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
    <path d="${d}" fill="none" stroke="#34d399" stroke-width="2"/></svg>`;
}
window.addEventListener('resize', renderNetChart);
renderNetChart();

// الأصول
function renderAssets(list=assets){
  const tbody=document.querySelector('#assetsTable tbody');
  tbody.innerHTML='';
  list.forEach(a=>{
    const tr=document.createElement('tr');
    tr.innerHTML = `<td>${a.name}</td><td>${a.type}</td><td>${a.ip}</td><td>${a.site}</td><td>${a.status}</td>`;
    tbody.appendChild(tr);
  });
}
renderAssets();

document.getElementById('assetType').addEventListener('change', e=>{
  applyAssetFilters();
});
document.getElementById('assetSearch').addEventListener('input', e=>{
  applyAssetFilters();
});
function applyAssetFilters(){
  const type=document.getElementById('assetType').value;
  const q=document.getElementById('assetSearch').value.toLowerCase();
  const out=assets.filter(a=>{
    const okType = type==='all' || a.type===type;
    const okQ = !q || a.name.toLowerCase().includes(q) || a.ip.includes(q);
    return okType && okQ;
  });
  renderAssets(out);
}
document.getElementById('exportAssets').addEventListener('click', ()=>{
  const rows=[['Asset','Type','IP','Site','Status'], ...assets.map(a=>[a.name,a.type,a.ip,a.site,a.status])];
  const csv=rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob=new Blob([csv],{type:'text/csv'}); const url=URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download='assets.csv'; a.click(); URL.revokeObjectURL(url);
});

// الصيانة
const maint = [];
document.getElementById('maintForm').addEventListener('submit', e=>{
  e.preventDefault();
  const title=document.getElementById('maintTitle').value.trim();
  const when=document.getElementById('maintWhen').value;
  const notes=document.getElementById('maintNotes').value.trim();
  if(!title || !when) return toast('أدخل العنوان والموعد.');
  maint.unshift({title, when, notes});
  e.target.reset();
  renderMaint();
});
function renderMaint(){
  const list=document.getElementById('maintList');
  list.innerHTML='';
  maint.forEach(m=>{
    const li=document.createElement('li');
    const d=new Date(m.when);
    li.innerHTML = `<span>${m.title} — ${d.toLocaleString('ar-EG')}</span><span class="muted">${m.notes||''}</span>`;
    list.appendChild(li);
  });
}
renderMaint();



// إشعار بسيط
function toast(txt){
  const n=document.createElement('div');
  Object.assign(n.style,{position:'fixed',bottom:'20px',left:'50%',transform:'translateX(-50%)',
    background:'rgba(2,6,23,.96)',color:'#e5e7eb',border:'1px solid #334155',
    padding:'10px 14px',borderRadius:'10px',boxShadow:'0 10px 30px rgba(0,0,0,.35)',zIndex:9999});
  n.textContent=txt; document.body.appendChild(n); setTimeout(()=>n.remove(),2000);
}