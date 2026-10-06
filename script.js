function downloadCV(e){
  e.preventDefault();
  const a=document.createElement('a');
  a.href='C.V.pdf';
  a.download='Muhammad_Qasim_CV.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
