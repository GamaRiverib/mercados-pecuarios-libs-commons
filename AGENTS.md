## Guía para: Bibliotecas Compartidas (core, commons, persistence)

Esta guía es para generar código en bibliotecas reutilizables. La pureza arquitectónica es **CRÍTICA** aquí.

### **Propósito de la Biblioteca**

El propósito principal de esta librería es abstraer la complejidad de la creación y manipulación de archivos de Excel, proporcionando una API de alto nivel para trabajar con ellos.

### **Principios Clave**

- **Clean Architecture:** El `core` es el centro del universo, sin dependencias externas.
- **Flujo de Dependencias:** `microservices` -> `persistence` -> `core`. La dependencia nunca va en sentido contrario.
- **Inversión de Dependencias (SOLID):** `core` define interfaces; `persistence` las implementa.

### **Estándares Generales (aplican a todas las bibliotecas)**

- **Idioma:** Nombres en **inglés**.
- **Nomenclatura:** `PascalCase` para clases/interfaces, `camelCase` para variables/funciones, `kebab-case.ts` para archivos.
- **TypeScript:** Usa tipos estrictos. **El uso de `any` está prohibido.**
- **Comillas:** Usa **comillas dobles (`"`)** para todo.
- **Anti-Patrón CRÍTICO:** **NO** importar NADA de **NestJS, Angular o Firebase** dentro de las librerías `core` o `commons`.

---

### **`core/` (Lógica de Dominio)**

- **Regla de Oro:** **100% TypeScript puro.** Cero dependencias de frameworks.
- **Contenido:**
  - **Entidades:** Clases o interfaces que modelan los objetos de negocio. El archivo debe tener el mismo nombre que la entidad en minusculas y con la terminación `.entity.ts` (ej. `user.entity.ts`).
  - **Interfaces de Repositorio (`.repository.ts`):** Contratos para la persistencia de datos (ej. `IUserRepository`). Definen el _qué_, no el _cómo_. El archivo debe tener el mismo nombre que el repositorio en minusculas y con la terminación `.repository.ts` (ej. `user.repository.ts`).
  - **Servicios de Dominio:** Lógica de negocio pura e independiente de casos de uso (ej. algoritmos complejos). El archivo debe tener el mismo nombre que el servicio en minusculas y con la terminación `.service.ts` (ej. `user.service.ts`).
  - **Eventos y Excepciones de Dominio:** Define eventos de negocio (`UserCreatedEvent`) y excepciones personalizadas (`InvalidEmailException`). El archivo debe tener el mismo nombre que el evento o excepción en minusculas y con la terminación `.event.ts` o `.exception.ts` (ej. `user-created.event.ts`, `invalid-email.exception.ts`).

---

### **`commons/` (Utilidades Compartidas)**

- **Regla de Oro:** **100% TypeScript puro.** Cero dependencias de frameworks.
- **Contenido:**
  - **Interfaces Base:** Interfaces genéricas reutilizables (ej. `BaseEntity`, `Auditable`).
  - **Utilidades:** Funciones puras y genéricas (validadores, formateadores, helpers).
  - **Tipos y Constantes:** Tipos TypeScript y constantes compartidas entre toda la solución (ej. `Pagination`, `SearchCriteria`).

---

### **`persistence/` (Capa de Persistencia)**

- **Propósito:** Implementar las interfaces de repositorio definidas en `core`.
- **Stack:** `firebase-admin` SDK para interactuar con Firestore.
- **Acoplamiento Controlado (LA ÚNICA EXCEPCIÓN):**
  - Las clases de repositorio **pueden y deben** usar el decorador `@Injectable()` de `@nestjs/common` para permitir la inyección de dependencias en los microservicios. **Esta es la única dependencia de NestJS permitida.**
- **Lógica:**
  - Contiene el código específico de la base de datos (`db.collection('...').doc(...)`).
  - Modela los datos para optimizar lecturas, usando desnormalización si es necesario.
  - **NO** debe publicar eventos en Pub/Sub. Esa es responsabilidad de los `microservices`.

### **Pruebas**

- Las bibliotecas `core`, `commons` y `persistence` deben tener una alta cobertura de **pruebas unitarias**.

### **Mensajes de Commit**

- Usa **Conventional Commits**: `type(scope): subject` (ej. `refactor(core): improve validation in User entity`).

### **Estructura de Carpetas (según aplique por el tipo de proyecto)**

```shell
src/
  ├── core/
  │   ├── entities/
  │   ├── repositories/
  │   ├── services/
  │   └── events/
  ├── commons/
  │   ├── interfaces/
  │   ├── utils/
  │   └── types/
  └── persistence/
      ├── repositories/
      └── models/
```

---
