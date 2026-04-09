# 🏆 Regla de Oro: Tipografía "Modern SaaS"

Este documento establece el estándar definitivo de diseño tipográfico para proyectos de software empresarial y ciberseguridad. El objetivo es proyectar autoridad, limpieza y arquitectura modular a través de un sistema estrictamente matemático.

---

## 1. El Sistema de Jerarquía (3+1 Niveles)

Queda prohibido el uso de tamaños ad-hoc. El proyecto debe respirar a través de estos únicos niveles de escala:

| Nivel | Clase (Tailwind) | Tamaño (Desktop / Mobile) | Peso (Weight) | Interlineado (Leading) | Separación (Tracking) | Uso Principal |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero** | `text-7xl` | 80px (4.5rem) / 5xl | **400 (Regular)** | 1.1 | -0.015em | Título de impacto inicial |
| **Título (H2)**| `text-5xl` | 48px (3rem) | **400 (Regular)** | 1.1 | -0.025em | Encabezados de sección |
| **Subtítulo** | `text-2xl` | 24px (1.5rem) | **400 (Regular)** | 1.25 | -0.015em | Bajadas, tarjetas, etiquetas |
| **Base** | `text-lg` | 18px (1.125rem) | **400 (Regular)** | 1.625 | -0.015em | Párrafos y descripciones |

---

## 2. Los 3 Pilares de la Regla de Oro

### ⚖️ Peso Único: Regular (400)
Para un look sofisticado y editorial, **no se utilizan negritas (Bold/Semibold)** en los títulos ni en el cuerpo. La jerarquía se define exclusivamente por el **tamaño** y el **contraste de color**. El peso 400 garantiza una estética ligera pero estructurada.

### 📏 Interlineado Matemático (Leading)
El espacio vertical debe ajustarse según el tamaño para evitar que el texto se "desmorone":
- En títulos grandes (`5xl`, `7xl`), el interlineado es compacto (`1.1`) para dar fuerza.
- En textos de lectura (`lg`), el interlineado es amplio (`1.625`) para evitar la fatiga visual.

### 🛸 Separación de Caracteres (Tracking)
Para evitar que el texto parezca genérico (default de navegador), se aplica un `tracking-tight` global. Los títulos de sección (`5xl`) llevan un ajuste extra de `tracking-tighter` para que los caracteres se sientan deliberadamente posicionados.

---

## 3. Implementación Estricta (CSS Requerido)

Este bloque de CSS debe estar presente en la cabeza del documento para forzar la uniformidad incluso si las clases HTML varían:

```css
/* REGLA DE ORO TIPOGRÁFICA: SentinelOne Style */

/* 1. Normalización Global */
body {
    font-weight: 400 !important;
    letter-spacing: -0.015em !important;
    -webkit-font-smoothing: antialiased;
}

/* 2. Definición de Niveles */
.text-lg {
    font-size: 1.125rem !important;
    line-height: 1.625 !important;
    font-weight: 400 !important;
}

.text-2xl {
    font-size: 1.5rem !important;
    line-height: 1.25 !important;
    font-weight: 400 !important;
}

.text-5xl {
    font-size: clamp(2.5rem, 5vw, 3rem) !important;
    line-height: 1.1 !important;
    letter-spacing: -0.025em !important;
    font-weight: 400 !important;
}

/* 3. Hero (La única excepción de tamaño) */
.hero-title {
    font-size: clamp(3rem, 7vw, 4.5rem) !important;
    line-height: 1.1 !important;
    font-weight: 400 !important;
}
```

> [!IMPORTANT]
> **Consistencia = Profesionalismo.** Cualquier elemento que no encaje exactamente en estos valores debe ser corregido de inmediato al nivel más cercano. No se permiten "puntos medios".
