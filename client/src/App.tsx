import React from "react";
import { RouterProvider, createRouter, RootRoute} from "@tanstack/react-router";
import LoginTemplates from "./components/templates/LoginTemplates";

// Composant Login
const Login = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <LoginTemplates email="user@example.com" password="12345" onClick={() => alert("Connexion réussie")} />
  </div>
);

// Définir la route racine qui rend directement Login
const rootRoute = new RootRoute({
  component: Login, // Rendre directement Login ici
});

// Création de l'arbre des routes (aucune route enfant requise)
const routeTree = rootRoute;

// Création du routeur
const router = createRouter({
  routeTree, // Fournir directement l'arborescence des routes
});

// Composant principal
const App = () => {
  return (
    <RouterProvider router={router}>
      {/* Le contenu est géré par le routeur */}
    </RouterProvider>
  );
};

export default App;



















