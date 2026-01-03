# PIN Diplomatura DevOps - GRUPO 1 - Proyecto 1 – CI/CD con GitHub Actions, Terraform y Docker

## 📌 Descripción general

Este proyecto corresponde al **Proyecto N.º 1 del Grupo 1** de la *Diplomatura DevOps*. El objetivo principal es demostrar, de forma práctica, la integración de herramientas fundamentales del ecosistema DevOps mediante la creación de una aplicación simple y su automatización completa.

Integrantes:

Arevalo Boggio, Pablo 
Leiter, Ezequiel
Marzialetti, Juan Antonio
Rocco, Francisco
Zanone, Pablo Andres

El proyecto incluye:

* Una aplicación **Node.js** básica
* Containerización con **Docker**
* Infraestructura como código con **Terraform**
* Automatización de integración continua con **GitHub Actions**

---

## 🎯 Objetivos del proyecto

* Desarrollar una aplicación funcional mínima en Node.js
* Empaquetar la aplicación en un contenedor Docker
* Gestionar el despliegue del contenedor mediante Terraform
* Versionar el código en GitHub
* Implementar un pipeline de CI que valide la construcción del proyecto

---

## 🛠️ Tecnologías utilizadas

* **Node.js** – Aplicación backend
* **Docker** – Containerización
* **Terraform** – Infraestructura como Código (IaC)
* **Git & GitHub** – Control de versiones
* **GitHub Actions** – CI/CD

---

## 📂 Estructura del proyecto

```
.
├── app.js              # Aplicación Node.js
├── package.json        # Dependencias y scripts
├── Dockerfile          # Definición de la imagen Docker
├── main.tf             # Configuración de Terraform
├── .gitignore          # Archivos ignorados por Git
└── .github/
    └── workflows/
        └── ci.yml      # Pipeline de CI con GitHub Actions
```

---

## ▶️ Ejecución local

### 1️⃣ Ejecutar la app sin Docker

```bash
npm install
node app.js
```

Abrir en el navegador: [http://localhost:3000](http://localhost:3000)

---

### 2️⃣ Ejecutar con Docker

```bash
docker build -t pin-grupo-1-proyecto-1 .
docker run -p 3000:3000 pin-grupo-1-proyecto-1
```

---

### 3️⃣ Ejecutar con Terraform

```bash
terraform init
terraform apply
```

Confirmar con `yes` cuando sea solicitado.

---

## 🔄 Integración Continua (CI)

El proyecto cuenta con un pipeline de **GitHub Actions** que se ejecuta automáticamente en cada `push` a la rama `main`.

El pipeline realiza:

* Checkout del repositorio
* Build de la imagen Docker

Esto permite validar que el proyecto es construible de manera automática.

---

## ✅ Resultados obtenidos

* Aplicación funcional
* Contenedor Docker operativo
* Infraestructura reproducible mediante Terraform
* Pipeline CI funcionando correctamente

---

## 👤 Autor

**Pol Zanone**
Proyecto realizado en el marco de la *Diplomatura DevOps*.

---

## 📎 Notas finales

Este proyecto tiene fines educativos y demuestra un flujo DevOps básico pero completo, alineado con buenas prácticas profesionales.