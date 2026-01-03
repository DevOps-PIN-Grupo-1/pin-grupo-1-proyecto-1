# PIN Diplomatura DevOps – GRUPO 1 – Proyecto 1

## CI/CD con GitHub Actions, Terraform y Docker

---

## 📌 Descripción general

Este proyecto corresponde al **Proyecto N.º 1 del Grupo 1** de la **Diplomatura DevOps**. El objetivo principal es demostrar, de forma práctica, la integración de herramientas fundamentales del ecosistema DevOps mediante la creación de una aplicación simple y su automatización completa.

El proyecto incluye:

* Una aplicación **Node.js** básica
* Containerización con **Docker**
* Infraestructura como código con **Terraform**
* Automatización de integración continua con **GitHub Actions**

---

## 👥 Integrantes

* Arevalo Boggio, Pablo
* Leiter, Ezequiel
* Marzialetti, Juan Antonio
* Rocco, Francisco
* Zanone, Pol Andrés

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
├── README.md           # Documentación del proyecto
├── .gitignore          # Archivos ignorados por Git
└── .github/
    └── workflows/
        └── ci.yml      # Pipeline de CI con GitHub Actions
```

---

## 📋 Requisitos previos

Para ejecutar y validar el proyecto es necesario contar con:

* **Node.js v18 o superior** (solo para ejecución sin Docker)
* **Docker Desktop** instalado y en ejecución
* **Terraform v1.5 o superior**
* **Git** (opcional, solo para clonar el repositorio)

Sistema operativo probado:

* macOS
* Linux

⚠️ **Nota:** Docker debe estar corriendo antes de ejecutar comandos con Terraform.

---

## ▶️ Ejecución local

### 1️⃣ Ejecutar la aplicación sin Docker

```bash
npm install
node app.js
```

Abrir en el navegador:

```
http://localhost:3000
```

---

### 2️⃣ Ejecutar la aplicación con Docker

```bash
docker build -t pin-grupo-1-proyecto-1 .
docker run -p 3000:3000 pin-grupo-1-proyecto-1
```

Abrir en el navegador:

```
http://localhost:3000
```

📌 **Nota:** si el puerto 3000 se encuentra ocupado, detener el proceso previo o modificar el puerto expuesto.

---

### 3️⃣ Ejecutar la aplicación con Terraform

```bash
terraform init
terraform apply
```

Confirmar con `yes` cuando sea solicitado.

Abrir en el navegador:

```
http://localhost:3000
```

---

## 🔄 Integración Continua (CI)

El proyecto cuenta con un pipeline de **GitHub Actions** que se ejecuta automáticamente en cada `push` a la rama `main`.

El pipeline realiza las siguientes acciones:

* Checkout del repositorio
* Build de la imagen Docker

Esto permite validar que el proyecto es construible de manera automática ante cada cambio.

---

## ✅ Resultados obtenidos

* Aplicación Node.js funcional
* Contenedor Docker operativo
* Infraestructura reproducible mediante Terraform
* Pipeline de Integración Continua funcionando correctamente

---

## 🔗 Repositorio

Repositorio GitHub del proyecto:

[https://github.com/pol-zanone/pin-grupo-1-proyecto-1](https://github.com/pol-zanone/pin-grupo-1-proyecto-1)

---

## 👤 Autor

**Grupo 1 – Diplomatura DevOps**

Integrantes:

* Arevalo Boggio, Pablo
* Leiter, Ezequiel
* Marzialetti, Juan Antonio
* Rocco, Francisco
* Zanone, Pol Andrés

Proyecto realizado en el marco de la **Diplomatura DevOps**.

---

## 📎 Notas finales

Este proyecto tiene fines educativos y demuestra un flujo DevOps básico pero completo, alineado con buenas prácticas profesionales y reproducibilidad del entorno.