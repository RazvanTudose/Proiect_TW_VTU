# Aplicație Web pentru Acordarea de Feedback Continuu

## Descriere

Această aplicație web permite acordarea de **feedback continuu** pentru activități precum cursuri sau seminarii. Aplicația este construită ca o **Single Page Application (SPA)**, accesibilă pe **desktop**, **mobile** și **tablete**.

### Funcționalități:

- **Profesori**:
  - Crearea activităților (cu dată, descriere și cod unic de acces).
  - Vizualizarea feedback-ului continuu și anonim (cu timestamp-uri asociate).
  
- **Studenți**:
  - Introducerea unui cod de activitate pentru a participa.
  - Oferirea de feedback prin selectarea unor emoticoane (smiley, frowny, surprised, confused) pe parcursul activității.

## Tehnologii Utilizate

- **Back-End**: Node.js cu Express.js pentru API-ul RESTful.
- **Bază de date**: MongoDB pentru stocarea activităților și feedback-ului, prin configurarea si utilizarea MongoAtlas.
- **Front-End**: HTML, CSS și React.js pentru interfața SPA.

## Instalare și Rulare

Urmati pașii de mai jos pentru a configura și rula aplicația pe mașina dumneavoastra locală.

### 1. Clonarea Repozitoriului

Clonati proiectul pe mașina dumneavoastra locală și navigati în directorul proiectului.
Folositi comanda **git clone https://github.com/RazvanTudose/Proiect_TW_VTU.git**

### 2. Configurarea Backend-ului (Node.js + MongoDB)

Folositi comanda **cd Proiect_TW_VTU** in terminal.
Folositi comanda **npm install** pentru a instala dependentele necesare proiectului.
Folositi comanda **node backend/server.js** pentru a rula aplicatia.


Serverul va rula pe `http://localhost:5000`.
