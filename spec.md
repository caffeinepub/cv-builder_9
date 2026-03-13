# CV Builder Website Template

## Current State
New project with no existing code.

## Requested Changes (Diff)

### Add
- Homepage with hero section, features overview, and template gallery preview
- 5 pre-designed CV templates (Classic, Modern, Minimal, Creative, Executive)
- CV Editor page with live preview and editable fields
- Template selection page/modal
- Placeholder data for all CV fields (Name, Summary, Education, Experience, Skills, Contact)
- Responsive layout throughout

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: store CV template definitions and editor state (sections, fields, active template)
2. Frontend pages:
   - `/` Homepage: hero, feature highlights, template preview cards
   - `/templates` Template gallery: 5 CV template cards with preview
   - `/editor` Editor page: left panel (form fields), right panel (live CV preview)
3. 5 CV template renderers with distinct layouts and styling
4. Placeholder content for all fields (lorem-style professional dummy data)
5. Responsive design, clean typography, easy-to-customize structure
