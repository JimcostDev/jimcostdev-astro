# 🔄 Actualizar dependencias en proyectos Node / Astro

Este documento explica cómo revisar y actualizar las dependencias de un proyecto.

---

## 📌 Ver dependencias desactualizadas

Ejecutar:

```bash
npm outdated
```

Esto muestra una tabla con:

* **Current** → versión instalada actualmente
* **Wanted** → versión más alta permitida por `package.json`
* **Latest** → última versión publicada en npm

---

## 📌 Actualizar dentro de los rangos de `package.json`

```bash
npm update
```

Esto sube las dependencias a la versión **más nueva posible**, pero **sin saltar de major version** (ej: `5.x` → `5.y`, pero no `6.x`).

---

## 📌 Actualizar a las últimas versiones (incluyendo major)

1. Usar [npm-check-updates](https://www.npmjs.com/package/npm-check-updates):

```bash
npx npm-check-updates -u
```

Esto reescribe `package.json` con las versiones más recientes (incluso major).

2. Instalar las nuevas dependencias:

```bash
npm install
```

---

## 📌 Verificar proyecto después de actualizar

```bash
npm run dev
npm run build
```

Asegúrate de que no haya errores y revisa si alguna dependencia requiere cambios de configuración (por breaking changes).

---

## 📌 Manejar vulnerabilidades

* Revisar vulnerabilidades:

  ```bash
  npm audit
  ```

* Arreglar automáticamente (seguro):

  ```bash
  npm audit fix
  ```

* Forzar el fix (puede traer breaking changes):

  ```bash
  npm audit fix --force
  ```

---

✅ Recomendación: Antes de actualizar dependencias, hacer un **commit de respaldo** en Git:

```bash
git add .
git commit -m "chore: backup antes de actualizar dependencias"
```
