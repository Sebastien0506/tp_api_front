// Permet de créer une instance de gestion de l'api qui va interagir avec le backend
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { authEndpoints} from "../endpoints/auth";
import { modulesEndpoints} from "../endpoints/";

