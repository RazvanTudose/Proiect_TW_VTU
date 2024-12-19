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
- **Bază de date**: MongoDB pentru stocarea activităților și feedback-ului.
- **Front-End**: HTML, CSS și React.js pentru interfața SPA.

## Instalare și Rulare

Urmează pașii de mai jos pentru a configura și rula aplicația pe mașina ta locală.

### 1. Clonarea Repozitoriului

Clonează proiectul pe mașina ta locală și navighează în directorul proiectului.

### 2. Configurarea Backend-ului (Node.js + MongoDB)

Accesează directorul în care se află backend-ul aplicației și instalează dependențele necesare.

Asigură-te că ai **MongoDB** instalat local sau folosești **MongoDB Atlas** (cloud). Dacă folosești MongoDB local, pornește serverul MongoDB.

Rularea serverului backend:

Serverul va rula pe `http://localhost:5000`.
