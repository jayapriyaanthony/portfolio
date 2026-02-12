# Portfolio Architecture

## Folder Structure
```
src/
├── assets/           # Static assets (images, fonts)
├── components/       # Reusable UI components
│   ├── ui/          # Base UI components
│   └── cards/       # Content cards (Project, Article)
├── composables/     # Vue composition functions
├── data/           # Static JSON data files
├── layouts/        # Layout components
├── router/         # Vue Router configuration
├── stores/         # Pinia stores
├── styles/         # Global styles and CSS variables
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── views/          # Page components
```

## Architectural Decisions

1. **Composition API**: All components use Composition API for better TypeScript integration and logic reuse
2. **Pinia**: Centralized state management for profile, skills, and projects data
3. **TypeScript**: Full type safety across the application
4. **CSS Variables**: Theme system ready for light/dark mode
5. **Data-driven**: Content stored in JSON files, consumed via Pinia stores
6. **Scalable Structure**: Clear separation of concerns, easy to extend

## Data Flow
JSON Files → Pinia Stores → Components → UI