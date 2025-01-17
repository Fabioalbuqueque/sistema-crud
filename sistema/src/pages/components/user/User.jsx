import React from 'react'
import styles from '../user/user.module.css'
import { FaRegTrashAlt } from "react-icons/fa";
import api from '@/services/api';



const Useruario = ({user}) => {
    const { age, name, email } = user;

    async function deleteUser(id) {
      try {
          const response = await api.delete(`/usuarios/${id}`);
          console.log('User deleted successfully:', response.data);
         
      } catch (error) {
          console.error('Error deleting user:', error);
      }
  }

    
  return (
  
    <div key={user.id} className={styles.card}>
        <div>
             <p>age:{age} </p>
             <p>Nome:{name}</p>
             <p>Email:{email}</p>
         </div>
          <button className={styles.trash} onClick={() => deleteUser(user.id)}><FaRegTrashAlt  /></button>
    </div>
       
  )
}

export default Useruario
