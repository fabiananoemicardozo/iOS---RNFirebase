import React, { createContext, useEffect, useState } from 'react';
import auth, { firebase, FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Text } from 'react-native';

type ContextProps = {
  user: FirebaseAuthTypes.User | null;
  authenticated: boolean;
  setUser: any;
  loadingAuthState: boolean;
};



const AuthProvider = ({ children }: any) => {

    const [user, setUser] = useState(null)
  

//Todas las funciones dentro de value son asincronicas y por tanto tienen una sintaxis de promesa
// cada una de las funciones dentro de value consume metodos de firebase. 
//Tanto las funciones de inicio de sesion como las de registro, requieren las credenciales de usuario "email y password" para verificar/guardar
//el método de cierre de sesión invoca un método simple "signOut()" 

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email: string, password: string) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
     
  )
}

export default AuthProvider

export const AuthContext = createContext({});


{/* <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        register: async (email: string, password: string) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.error(e);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>  */}