console.log("hola");
console.warn("facundo");
console.error("brisa es una mal amiga");
console.debug(document);
console.info(document);
console.dir(document);
console.trace(document);

document.getElementbyId('btn-add').addEventListener('click', () => {
            const texto = document.getElementById('texto').value.trim();
            if(!texto) return;

           /*const tag = document.createElement('h4'); creara etiqueta h4*/ 
            const tag = document.createElement('h4');
            tag.className = 'etiquetah4';
            tag.textContent = texto;
            
            const tag1 = document.createElement('h3');
            tag1.className = 'etiquetah3';
            tag1.textContent = texto;

            const tag2 = document.createElement('h2');
            tag2.className = 'etiquetah2';
            tag2.textContent = texto; 

            const tag3 = document.createElement('h1');
            tag3.className = 'etiquetah1';
            tag3.textContent = texto; 

            const tag4 = document.createElement('h3');
            tag4.className = 'etiquetah3';
            tag4.textContent = texto; 

            /*aplica la etiqueta h4*/ 
            document.getElementById('tags').appendChild(tag);
            /*borra el input*/
            document.getElementById('texto').value = '';
 
        });