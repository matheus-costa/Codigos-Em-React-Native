import { StatusBar } from 'expo-status-bar';
import App from "../View/App";

objApp = new App();

export default function ModalApp(login, Senha) {
    return (
      
      function Enviar ( Login, Senha) {
        if ( !sessionStorage ) {
          alert('Armazenamento não suportado.');
          return false;
        }
        var log;
        var sen;
        log = sessionStorage.getItem("Login");
        sen = sessionStorage.getItem("Senha");
         
        if(Login.value == log && Senha.value == sen){
          alert("bem-vindo ao App");
          submit();
        }
        else if(Login.value != log && Senha.value != sen){
          alert("senha incorreta");
          submit();
        } 
      }
      
    );
  
     
  
  }
