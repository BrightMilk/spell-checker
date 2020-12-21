var s = '';
 
document.addEventListener('keydown', function(e) {
 
  if((e.keyCode == 32) || (e.keyCode == 13) ){
 
    s = $('#text_field').val();
 
s = s.replace(/\Bкое кто\B/gi, 'кое-кто');
s = s.replace(/\Bкое что\B/gi, 'кое-что');
s = s.replace(/\Bв течени\W\B/gi, 'в течение');
s = s.replace(/\Bвообщем\W\B/gi, 'в общем');
s = s.replace(/\Bвобще\W\B/gi, 'вообще');
s = s.replace(/\Bдичайше\B/gi, 'в высшей степени');
s = s.replace(/\Bоху\Wть\B/gi, 'Надо же');
s = s.replace(/\Bоху\Wть\B/gi, 'подозрительно');
s = s.replace(/\Bя\sе\W+л\sтак\W+(работу|задачи)\B/gi, 'подобная постановка вопроса в высшей степени возмутительна');
s = s.replace(/\Bоху\Wл\W?\b/gi, 'позволяет себе лишнего');
s = s.replace(/\Bоху\Wвший\B/gi, 'недопустимый');
s = s.replace(/\Bоху\Wвшая\B/gi, 'вызывающая опасения');
s = s.replace(/\B[иИ]ди(те)?\s(на|в)\s?\W{3,5}\B/gi, 'заранее спасибо');
s = s.replace(/\Bп[адир]{4}с\W?/gi, 'уважаемые коллеги');
s = s.replace(/\BТЗ\B/gi, 'техническое задание');
s = s.replace(/\Bчушь\sполная\B/gi, 'недостоверные сведения');
s = s.replace(/\Bнужно\sвчера\B/gi, 'это срочно');
s = s.replace(/\Bполная\sж[аоп]{3}\B/gi, 'присутствуют существенные проблемы');
 
    $('#text_field').val(s);
  }
});