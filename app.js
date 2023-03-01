const portugueseBtn = document.querySelector('.portugues');
portugueseBtn.addEventListener('click', () => {
  translatePage('en','pt');

});

const englishBtn = document.querySelector('.ingles');
englishBtn.addEventListener('click', () => {
  translatePage('pt','en');

});


function translateText(text, actualLanguage, targetLanguage) {
  let  url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${actualLanguage}|${targetLanguage}`;

 return fetch(url)
    .then(response => {
        return response.json().then(data => {
           const translatedText  = data.responseData.translatedText;
           return translatedText 
        })
    })
    .catch(err => {
        console.error('Não foi possível achar a tradução', err);
    });

}

function translatePage(actualLanguage,targetLanguage) {
  const elementsToTranslate = document.querySelectorAll('p:not(:empty), h1:not(:empty), h2:not(:empty), label:not(:empty), option:not(:empty), adress:not(:empty),li:not(:empty), h3:not(:empty),input:not(:empty),ul:not(:empty), a:not(:empty), ul a label:not(:empty');
  
    elementsToTranslate.forEach(element => {
      const textToTranslate = element.textContent;
      return translateText(textToTranslate, actualLanguage,targetLanguage).then(translatedText => {
        element.textContent = translatedText;
      });
     });
  }
  


const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu_lateral')


botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
    botaoMenu.classList.toggle('menu-lateral--ativo_icone')
})