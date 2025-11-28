# AI Task: Create a Responsive Navbar Component

## 1. Project Context
*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS
*   **Component Library:** Shadcn UI (Radix UI primitives)
*   **Icons:** Lucide React (Standard for Shadcn) or Heroicons (specify if different)

## 2. The Task
I need you to generate the code for a responsive Navbar component (`components/Navbar.tsx` or similar). 

## 3. Specific Requirements
*   **Visual Design:** The navbar **must** match the screenshot I am about to upload. Pay close attention to:
    *   Logo placement.
    *   Spacing and padding.
    *   Font weights and colors.
    *   Button styles (outline vs. solid).
*   **Responsiveness:**
    *   **Desktop:** Full navigation links visible.
    *   **Mobile:** Links should collapse into a hamburger menu (Sheet/Drawer component from Shadcn UI is preferred for this).
*   **Shadcn UI Integration:** Use existing Shadcn components where appropriate (e.g., `Button`, `Sheet`, `DropdownMenu`, `NavigationMenu`).
*   **Theme Consistency:** You must utilize CSS variables defined in my `app/globals.css` (e.g., `bg-background`, `text-foreground`, `border-border`) to ensure it works with light/dark modes.

## 4. Input Files
I will provide the following inputs:
1.  **Screenshot:** A visual reference of the desired navbar.
2.  **`app/globals.css`:** My current CSS variables configuration.

## 5. Output Expectations
Please provide:
1.  **Full Component Code:** The complete code for the Navbar component.
2.  **Client Component Directives:** Ensure `"use client"` is used if state is required (e.g., for the mobile menu).
3.  **Installation Instructions:** If I need to install specific Shadcn components (e.g., `npx shadcn-ui@latest add sheet`), list them.

---

**[Action Required]**: Please wait for me to upload the screenshot