import React from "react";
import { RouterProvider, createRouter, RootRoute, Route, useNavigate } from "@tanstack/react-router";
import LoginTemplates from "./components/templates/LoginTemplates";

// Composant Dashboard
const Dashboard = () => (
  <div className="min-h-screen flex items-center justify-center bg-green-100">
    {/* Ici mettre le components qui permet de récupérer les cours */}
    <h1 className="text-xl font-bold">Bienvenue sur le Dashboard</h1>
  </div>
);

// Composant Login
const Login = () => {
  const navigate = useNavigate(); // Hook pour la navigation

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Empêche le rechargement de la page
    alert("Connexion réussie !");
    navigate({ to: "/dashboard" }); // Redirige vers /dashboard
  };

  return (
    <LoginTemplates email="user@example.com" password="12345" onClick={handleLogin} />
    
  );
};

// Définir la route racine
const rootRoute = new RootRoute();

// Définir les routes enfants
const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/", // Route pour Login
  component: Login,
});

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/dashboard", // Route pour Dashboard
  component: Dashboard,
});

// Arbre des routes
const routeTree = rootRoute.addChildren([loginRoute, dashboardRoute]);

// Création du routeur
const router = createRouter({
  routeTree, // Fournir l'arbre des routes
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






















