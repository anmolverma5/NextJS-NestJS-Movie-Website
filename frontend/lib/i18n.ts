'use client';

import { useState, useEffect, useCallback } from 'react';

// Simple i18n implementation
export type Locale = 'en' | 'es' | 'fr';

export const translations = {
  en: {
    // Auth
    'auth.signIn': 'Sign in',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.rememberMe': 'Remember me',
    'auth.login': 'Login',
    'auth.loggingIn': 'Logging in...',
    'auth.invalidEmail': 'Please enter a valid email address (e.g., user@example.com)',
    'auth.passwordRequired': 'Password is required',
    'auth.passwordTooShort': 'Password must be at least 6 characters long',
    
    // Movies
    'movies.myMovies': 'My movies',
    'movies.addNew': 'Add a new movie',
    'movies.empty': 'Your movie list is empty',
    'movies.create': 'Create a new movie',
    'movies.edit': 'Edit movie',
    'movies.title': 'Title',
    'movies.publishingYear': 'Publishing year',
    'movies.poster': 'Poster',
    'movies.search': 'Search by title...',
    'movies.filterYear': 'Filter by year',
    'movies.clearFilters': 'Clear Filters',
    'movies.found': 'Found',
    'movies.movie': 'movie',
    'movies.movies': 'movies',
    'movies.noResults': 'No movies found matching your criteria',
    'movies.delete': 'Delete',
    'movies.deleteConfirm': 'Are you sure you want to delete this movie?',
    'movies.published': 'Published',
    'movies.added': 'Added',
    'movies.noImage': 'No Image',
    
    // Actions
    'actions.submit': 'Submit',
    'actions.cancel': 'Cancel',
    'actions.update': 'Update',
    'actions.delete': 'Delete',
    'actions.edit': 'Edit',
    'actions.logout': 'Logout',
    'actions.prev': 'Prev',
    'actions.next': 'Next',
    'actions.loading': 'Loading...',
    'actions.view': 'View',
    
    // Validation
    'validation.required': 'is required',
    'validation.invalidYear': 'Publishing year must be between 1000 and 2035',
    'validation.wholeNumber': 'Publishing year must be a whole number (e.g., 1999, 2000)',
    'validation.titleRequired': 'Title is required',
    
    // Errors
    'error.loadFailed': 'Failed to load movies',
    'error.createFailed': 'Failed to create movie. Please check your input.',
    'error.updateFailed': 'Failed to update movie. Please check your input.',
    'error.deleteFailed': 'Failed to delete movie',
    'error.loginFailed': 'Login failed. Please try again.',
  },
  es: {
    'auth.signIn': 'Iniciar sesión',
    'auth.email': 'Correo electrónico',
    'auth.password': 'Contraseña',
    'auth.rememberMe': 'Recordarme',
    'auth.login': 'Iniciar sesión',
    'auth.loggingIn': 'Iniciando sesión...',
    'auth.invalidEmail': 'Por favor, introduce una dirección de correo electrónico válida (ej. usuario@ejemplo.com)',
    'auth.passwordRequired': 'La contraseña es obligatoria',
    'auth.passwordTooShort': 'La contraseña debe tener al menos 6 caracteres',
    'movies.myMovies': 'Mis películas',
    'movies.addNew': 'Añadir nueva película',
    'movies.empty': 'Tu lista de películas está vacía',
    'movies.create': 'Crear nueva película',
    'movies.edit': 'Editar película',
    'movies.title': 'Título',
    'movies.publishingYear': 'Año de publicación',
    'movies.poster': 'Póster',
    'movies.search': 'Buscar por título...',
    'movies.filterYear': 'Filtrar por año',
    'movies.clearFilters': 'Limpiar filtros',
    'movies.found': 'Encontrado',
    'movies.movie': 'película',
    'movies.movies': 'películas',
    'movies.noResults': 'No se encontraron películas que coincidan con tus criterios',
    'movies.delete': 'Eliminar',
    'movies.deleteConfirm': '¿Estás seguro de que quieres eliminar esta película?',
    'movies.published': 'Publicado',
    'movies.added': 'Añadido',
    'movies.noImage': 'Sin imagen',
    'actions.submit': 'Enviar',
    'actions.cancel': 'Cancelar',
    'actions.update': 'Actualizar',
    'actions.delete': 'Eliminar',
    'actions.edit': 'Editar',
    'actions.logout': 'Cerrar sesión',
    'actions.prev': 'Anterior',
    'actions.next': 'Siguiente',
    'actions.loading': 'Cargando...',
    'actions.view': 'Ver',
    'validation.required': 'es obligatorio',
    'validation.invalidYear': 'El año de publicación debe estar entre 1000 y 2035',
    'validation.wholeNumber': 'El año de publicación debe ser un número entero (ej. 1999, 2000)',
    'validation.titleRequired': 'El título es obligatorio',
    'error.loadFailed': 'Error al cargar películas',
    'error.createFailed': 'Error al crear película. Por favor, verifica tu entrada.',
    'error.updateFailed': 'Error al actualizar película. Por favor, verifica tu entrada.',
    'error.deleteFailed': 'Error al eliminar película',
    'error.loginFailed': 'Error al iniciar sesión. Por favor, inténtalo de nuevo.',
  },
  fr: {
    'auth.signIn': 'Se connecter',
    'auth.email': 'E-mail',
    'auth.password': 'Mot de passe',
    'auth.rememberMe': 'Se souvenir de moi',
    'auth.login': 'Connexion',
    'auth.loggingIn': 'Connexion...',
    'auth.invalidEmail': 'Veuillez entrer une adresse e-mail valide (ex. utilisateur@exemple.com)',
    'auth.passwordRequired': 'Le mot de passe est requis',
    'auth.passwordTooShort': 'Le mot de passe doit contenir au moins 6 caractères',
    'movies.myMovies': 'Mes films',
    'movies.addNew': 'Ajouter un nouveau film',
    'movies.empty': 'Votre liste de films est vide',
    'movies.create': 'Créer un nouveau film',
    'movies.edit': 'Modifier le film',
    'movies.title': 'Titre',
    'movies.publishingYear': 'Année de publication',
    'movies.poster': 'Affiche',
    'movies.search': 'Rechercher par titre...',
    'movies.filterYear': 'Filtrer par année',
    'movies.clearFilters': 'Effacer les filtres',
    'movies.found': 'Trouvé',
    'movies.movie': 'film',
    'movies.movies': 'films',
    'movies.noResults': 'Aucun film trouvé correspondant à vos critères',
    'movies.delete': 'Supprimer',
    'movies.deleteConfirm': 'Êtes-vous sûr de vouloir supprimer ce film ?',
    'movies.published': 'Publié',
    'movies.added': 'Ajouté',
    'movies.noImage': 'Pas d\'image',
    'actions.submit': 'Soumettre',
    'actions.cancel': 'Annuler',
    'actions.update': 'Mettre à jour',
    'actions.delete': 'Supprimer',
    'actions.edit': 'Modifier',
    'actions.logout': 'Déconnexion',
    'actions.prev': 'Précédent',
    'actions.next': 'Suivant',
    'actions.loading': 'Chargement...',
    'actions.view': 'Voir',
    'validation.required': 'est requis',
    'validation.invalidYear': 'L\'année de publication doit être entre 1000 et 2035',
    'validation.wholeNumber': 'L\'année de publication doit être un nombre entier (ex. 1999, 2000)',
    'validation.titleRequired': 'Le titre est requis',
    'error.loadFailed': 'Échec du chargement des films',
    'error.createFailed': 'Échec de la création du film. Veuillez vérifier votre saisie.',
    'error.updateFailed': 'Échec de la mise à jour du film. Veuillez vérifier votre saisie.',
    'error.deleteFailed': 'Échec de la suppression du film',
    'error.loginFailed': 'Échec de la connexion. Veuillez réessayer.',
  },
};

// Create a custom event for locale changes
const LOCALE_CHANGE_EVENT = 'localeChange';

let currentLocale: Locale = 'en';

// Initialize locale from localStorage
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('locale') as Locale;
  if (saved && ['en', 'es', 'fr'].includes(saved)) {
    currentLocale = saved;
  }
}

export const i18n = {
  setLocale: (locale: Locale) => {
    currentLocale = locale;
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
      // Dispatch custom event to notify components
      window.dispatchEvent(new CustomEvent(LOCALE_CHANGE_EVENT, { detail: locale }));
    }
  },
  getLocale: (): Locale => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('locale') as Locale;
      if (saved && ['en', 'es', 'fr'].includes(saved)) {
        return saved;
      }
    }
    return currentLocale;
  },
  t: (key: string, params?: Record<string, string | number>): string => {
    const locale = i18n.getLocale();
    const translation = translations[locale][key as keyof typeof translations.en] || 
                       translations.en[key as keyof typeof translations.en] || 
                       key;
    
    if (params) {
      return Object.entries(params).reduce(
        (str, [paramKey, paramValue]) => str.replace(`{${paramKey}}`, String(paramValue)),
        translation
      );
    }
    
    return translation;
  },
};

// React hook for using i18n with automatic re-renders
export function useI18n() {
  const [locale, setLocaleState] = useState<Locale>(i18n.getLocale());

  useEffect(() => {
    const handleLocaleChange = (event: CustomEvent<Locale>) => {
      setLocaleState(event.detail);
    };

    window.addEventListener(LOCALE_CHANGE_EVENT as any, handleLocaleChange);
    return () => {
      window.removeEventListener(LOCALE_CHANGE_EVENT as any, handleLocaleChange);
    };
  }, []);

  const t = useCallback((key: string, params?: Record<string, string | number>): string => {
    return i18n.t(key, params);
  }, [locale]);

  return { t, locale };
}

