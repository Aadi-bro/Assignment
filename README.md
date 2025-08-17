# Assignment Component Library

## Folder Structure

```
Assignment/
├── .storybook/                # Storybook configuration
├── node_modules/              # Node dependencies
├── src/
│   └── components/
│       ├── DataTable/
│       │   ├── DataTable.tsx
│       │   ├── DataTable.types.ts
│       │   ├── DataTable.stories.tsx
│       │   └── DataTable.module.css
│       └── InputField/
│           ├── InputField.tsx
│           ├── InputField.types.ts
│           ├── InputField.stories.tsx
│           └── InputField.module.css
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run Storybook:**
   ```sh
   npm run storybook
   ```
3. **Run tests:**
   ```sh
   npm test
   ```

## Approach

- **Scalable Structure:**
  - Each component is isolated in its own folder with TypeScript types, styles, stories, and tests.
  - Easy to add new components or extend existing ones.
- **Modern React Patterns:**
  - Functional components with hooks and strict TypeScript typing.
  - Props interfaces are defined for clarity and reusability.
- **Styling:**
  - CSS Modules for local, conflict-free styles.
  - Responsive and accessible design.
- **Documentation:**
  - Storybook stories for all states and variants.
  - Stories double as visual documentation and playground.
- **Testing:**
  - Ready for integration with Testing Library and Jest.
- **Accessibility:**
  - ARIA labels and keyboard-friendly controls.

---

Feel free to extend this library with more components or features as needed!
