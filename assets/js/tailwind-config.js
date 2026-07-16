tailwind.config = {
            darkMode: "class",
            theme: {
              extend: {
                "colors": {
                        "error-container": "rgb(var(--color-error-container) / <alpha-value>)",
                        "surface-bright": "rgb(var(--color-surface-bright) / <alpha-value>)",
                        "primary-fixed": "rgb(var(--color-primary-fixed) / <alpha-value>)",
                        "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
                        "on-secondary-container": "rgb(var(--color-on-secondary-container) / <alpha-value>)",
                        "tertiary-fixed-dim": "rgb(var(--color-tertiary-fixed-dim) / <alpha-value>)",
                        "on-primary-fixed-variant": "rgb(var(--color-on-primary-fixed-variant) / <alpha-value>)",
                        "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
                        "tertiary": "rgb(var(--color-tertiary) / <alpha-value>)",
                        "secondary-fixed": "rgb(var(--color-secondary-fixed) / <alpha-value>)",
                        "on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
                        "secondary-container": "rgb(var(--color-secondary-container) / <alpha-value>)",
                        "secondary": "rgb(var(--color-secondary) / <alpha-value>)",
                        "surface-container": "rgb(var(--color-surface-container) / <alpha-value>)",
                        "primary-container": "rgb(var(--color-primary-container) / <alpha-value>)",
                        "inverse-primary": "rgb(var(--color-inverse-primary) / <alpha-value>)",
                        "on-tertiary-fixed": "rgb(var(--color-on-tertiary-fixed) / <alpha-value>)",
                        "surface-dim": "rgb(var(--color-surface-dim) / <alpha-value>)",
                        "surface-container-highest": "rgb(var(--color-surface-container-highest) / <alpha-value>)",
                        "outline-variant": "rgb(var(--color-outline-variant) / <alpha-value>)",
                        "on-secondary-fixed": "rgb(var(--color-on-secondary-fixed) / <alpha-value>)",
                        "surface-container-high": "rgb(var(--color-surface-container-high) / <alpha-value>)",
                        "background": "rgb(var(--color-background) / <alpha-value>)",
                        "surface-container-lowest": "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
                        "on-error-container": "rgb(var(--color-on-error-container) / <alpha-value>)",
                        "surface-variant": "rgb(var(--color-surface-variant) / <alpha-value>)",
                        "surface-tint": "rgb(var(--color-surface-tint) / <alpha-value>)",
                        "error": "rgb(var(--color-error) / <alpha-value>)",
                        "on-tertiary": "rgb(var(--color-on-tertiary) / <alpha-value>)",
                        "primary-fixed-dim": "rgb(var(--color-primary-fixed-dim) / <alpha-value>)",
                        "on-secondary-fixed-variant": "rgb(var(--color-on-secondary-fixed-variant) / <alpha-value>)",
                        "on-tertiary-fixed-variant": "rgb(var(--color-on-tertiary-fixed-variant) / <alpha-value>)",
                        "primary": "rgb(var(--color-primary) / <alpha-value>)",
                        "surface-container-low": "rgb(var(--color-surface-container-low) / <alpha-value>)",
                        "surface": "rgb(var(--color-surface) / <alpha-value>)",
                        "inverse-on-surface": "rgb(var(--color-inverse-on-surface) / <alpha-value>)",
                        "inverse-surface": "rgb(var(--color-inverse-surface) / <alpha-value>)",
                        "secondary-fixed-dim": "rgb(var(--color-secondary-fixed-dim) / <alpha-value>)",
                        "tertiary-fixed": "rgb(var(--color-tertiary-fixed) / <alpha-value>)",
                        "on-error": "rgb(var(--color-on-error) / <alpha-value>)",
                        "on-surface-variant": "rgb(var(--color-on-surface-variant) / <alpha-value>)",
                        "on-tertiary-container": "rgb(var(--color-on-tertiary-container) / <alpha-value>)",
                        "outline": "rgb(var(--color-outline) / <alpha-value>)",
                        "on-background": "rgb(var(--color-on-background) / <alpha-value>)",
                        "on-primary-container": "rgb(var(--color-on-primary-container) / <alpha-value>)",
                        "tertiary-container": "rgb(var(--color-tertiary-container) / <alpha-value>)",
                        "on-primary-fixed": "rgb(var(--color-on-primary-fixed) / <alpha-value>)"
                },
                "borderRadius": {
                        "DEFAULT": "1rem",
                        "lg": "2rem",
                        "xl": "3rem",
                        "full": "9999px"
                },
                "spacing": {
                        "margin-mobile": "20px",
                        "gutter": "24px",
                        "margin-desktop": "48px",
                        "container-max": "1280px",
                        "unit": "8px"
                },
                "fontFamily": {
                        "display-lg": ["Inter"],
                        "label-md": ["Inter"],
                        "headline-lg": ["Inter"],
                        "body-lg": ["Inter"],
                        "display-lg-mobile": ["Inter"],
                        "headline-xl": ["Inter"],
                        "body-md": ["Inter"]
                },
                "fontSize": {
                        "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.04em", "fontWeight": "700"}],
                        "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500"}],
                        "headline-lg": ["30px", {"lineHeight": "38px", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "display-lg-mobile": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-xl": ["36px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
                }
              }
            }
          }
