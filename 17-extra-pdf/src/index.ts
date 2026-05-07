import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({size: 'A4'}); // cria a constante com o objeto + tamanho da folha

doc.pipe(fs.createWriteStream('pdfgerado.pdf'));// nome do pdf

doc.fontSize(12); // tamanho padão da fonte
doc.fontSize(20).text("Titulo do pdf", 200, 100); // titulo
// doc.fontSize('tamanho da fonte').text("texto inserido", X, Y); -> X e Y = posição

let frase = "um texto aqui";

doc.text(frase, 110, 140);

doc.image('natan_uno.jpg',{
    fit: [400, 400]
});

doc.end();