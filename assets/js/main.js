(() => {
  'use strict';
  const config = window.PORTFOLIO_CONFIG;
  if (!config) return;
  const grid = document.getElementById('projects-grid');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  let selectedFilter = 'todos';
  document.getElementById('year').textContent = String(new Date().getFullYear());
  const hasGithub = /^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/.test(config.githubUser);
  const escapeHTML = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
  const render = () => {
    const projects = config.proyectos.filter(p => selectedFilter==='todos' || selectedFilter===p.categoria);
    grid.innerHTML = projects.map((p,i) => {
      const tags = p.tecnologias.map(s=>`<span>${escapeHTML(s)}</span>`).join('');
      const link = hasGithub ? `https://github.com/${encodeURIComponent(config.githubUser)}/${encodeURIComponent(p.repo)}` : '#contacto';
      return `<article class="project-card">
        <div class="project-art" style="--art-color:${escapeHTML(p.color)}"><span class="project-count">PROYECTO ${String(i+1).padStart(2,'0')}</span><span class="art-symbol">${escapeHTML(p.simbolo)}</span></div>
        <div class="project-body"><div class="project-type">${escapeHTML(p.etiqueta)}</div>
        <h3>${escapeHTML(p.titulo)}</h3><p>${escapeHTML(p.descripcion)}</p>
        <div class="tech-chips">${tags}</div><a class="project-link ${hasGithub?'':'is-unavailable'}" href="${link}" ${hasGithub?'target="_blank" rel="noopener noreferrer"':''}>${hasGithub?'Ver código en GitHub ↗':'Configurar enlace GitHub ↗'}</a></div>
      </article>`;
    }).join('');
  };
  buttons.forEach(button => button.addEventListener('click',() => {
    selectedFilter = button.dataset.filter;
    buttons.forEach(b => { const active = b===button; b.classList.toggle('selected',active); b.setAttribute('aria-pressed',String(active)); });
    render();
  }));
  const navToggle=document.querySelector('.nav-toggle');
  const navLinks=document.querySelector('.nav-links');
  navToggle.addEventListener('click',()=>{
    const expanded=navToggle.getAttribute('aria-expanded')==='true';
    navToggle.setAttribute('aria-expanded',String(!expanded));
    navToggle.setAttribute('aria-label',expanded?'Abrir menú de navegación':'Cerrar menú de navegación');
    navLinks.classList.toggle('is-open',!expanded);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>{
    navToggle.setAttribute('aria-expanded','false');navLinks.classList.remove('is-open');
  }));
  const email = document.getElementById('email-link');
  const github = document.getElementById('github-link');
  const hint = document.getElementById('contact-hint');
  if(config.correo && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(config.correo)){
    email.href=`mailto:${config.correo}?subject=${encodeURIComponent('Contacto desde tu portafolio')}`;
  }else{
    email.textContent='Configurar correo ↗';
    hint.textContent='Agrega tu correo y usuario de GitHub en assets/js/config.js antes de publicar.';
  }
  if(hasGithub){ github.href=`https://github.com/${encodeURIComponent(config.githubUser)}`;github.target='_blank';github.rel='noopener noreferrer'; }
  else{github.href='#proyectos';}
  render();
})();
