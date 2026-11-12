document.documentElement.classList.add('js');
const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

if ('IntersectionObserver' in window) {
  const observer=new IntersectionObserver((entries,obs)=>entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}
  }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
}

const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(max?scrollY/max*100:0)+'%';
});

// Add your real profile URLs here before publishing.
const profileLinks={github:'https://github.com/Areebashahzadi-dot',linkedin:''};

// Add the user's own deployed demo and repository URLs here when supplied.
const projectLinks={
  gallery:{demo:'',repo:''},
  calculator:{demo:'',repo:''},
  portfolio:{demo:'',repo:''},
  mouse:{demo:'',repo:''}
};
document.querySelectorAll('[data-demo],[data-repo]').forEach(a=>{
  const kind=a.dataset.demo?'demo':'repo';
  const project=a.dataset[kind];
  const url=projectLinks[project]?.[kind];
  if(url){a.href=url;a.target='_blank';a.rel='noopener';}
  else {a.addEventListener('click',e=>{
    e.preventDefault();
    alert('The '+kind+' link for this project will be added after you share its URL.');
  });}
});
document.querySelectorAll('[data-profile]').forEach(a=>{
  const url=profileLinks[a.dataset.profile];
  if(url){a.href=url;a.target='_blank';a.rel='noopener';}
  else {a.addEventListener('click',e=>{
    e.preventDefault();
    alert('Add your '+a.dataset.profile+' profile URL in script.js first.');
  });}
});

// The form opens the visitor's email application with a pre-filled message.
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const n=document.getElementById('senderName').value.trim();
  const m=document.getElementById('senderEmail').value.trim();
  const msg=document.getElementById('senderMessage').value.trim();
  location.href='mailto:nomibrother60@gmail.com?subject='+
    encodeURIComponent('Portfolio message from '+n)+'&body='+
    encodeURIComponent('Name: '+n+'\nEmail: '+m+'\n\n'+msg);
});
