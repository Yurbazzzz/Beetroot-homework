// Создать HTML-страницу для отображения/редактирования текста.
// При открытии страницы текст отображается с помощью тега div.
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом,
// который теперь можно редактировать. При нажатии Ctrl + ,
// вместо textarea появляется div с уже измененным текстом.
// Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

document.addEventListener('keydown', function(event) {
    
  if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
    document.write('<textarea>text</textarea>')
  } else if(event.code == 'Key,' && (event.ctrlKey || event.metaKey)) {
    document.write('<div>TeXt</div>')
  }
});

