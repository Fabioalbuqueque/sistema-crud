"use client";

import React, { useEffect, useState, useRef } from 'react';

import styles from '../home/home.module.css';
import Useruario from '../components/user/user';
import api from '@/services/api';


const Home = () => {
  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputEmail = useRef();
  const inputAge = useRef();


  async function getUsers() {
    try {
      const usersFromApi = await api.get('/usuarios');
      setUsers(usersFromApi.data);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  }

  async function createUser() {
    try {
      await api.post('/usuarios', {
        name: inputName.current.value,
        email: inputEmail.current.value,
        age: parseInt(inputAge.current.value, 10),

      
      },
      
     alert("usuario cadastrado com sucesso"),
     console.log("usuario cadastrado com sucesso"),
    
      getUsers()

   
     //router.push('/login')
    );
    

      // Após criar o usuário, redireciona para a página de login
      
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Cadastro de Usuários</h1>
      <form className={styles.form}>
        <div>
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Nome"
            ref={inputName}
            
          />
        </div>
        <div>
          <input
            className={styles.input}
            name="age"
            type="number"
            placeholder="Idade"
            ref={inputAge}
            
          />
        </div>
        <div>
          <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="Email"
            ref={inputEmail}
            
          />
        </div>
        <button
          className={styles.btn}
          type="button"
          onClick={createUser}
        >
          Cadastrar
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <Useruario user={user} />
        </div>
      ))}
    </div>
  );
};

export default Home;
