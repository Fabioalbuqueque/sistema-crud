//const express = require('express')
import { PrismaClient } from '@prisma/client'

import express from "express"
import cors from 'cors'


const prisma = new PrismaClient()

const app = express()
app.use( express.json() );
app.use(cors('http://localhost:3000/'))


app.post('/usuarios',async (req, res) =>{
  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    }
  })

});

app.get('/usuarios', async (req, res)=> {

  const users = await prisma.user.findMany()

    res.status(200).json(users)

});
app.put('/usuarios/:id',async (req, res) =>{
  
  await prisma.user.update({
    where: {
        id: req.params.id
    },
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    }
  });
  res.status(201).json(req.body)

});

app.delete('/usuarios/:id', async (req, res) =>{
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json({message: "usuario excluido"})

});
// rever essa funcão de pegar o usuario no banco de dados 
app.get('/usuarios/:id', async (req, res) => {
 
     await prisma.user.push({
      where: {
      email: req.params.email,
     },
    })
    res.status(200).json({message: "usuario encontrado"})
  })
  // Ajuste para o ORM ou banco de dados usado
  //  if (user) {
   //   res.json([user]); // Retorna um array para compatibilidade
   // } else {
   //   res.status(404).send("Usuário não encontrado");
  //  }
 // } catch (error) {
 //   res.status(500).send("Erro ao buscar usuário");
//  }
//});






app.listen(3333, ()=>{
    console.log('servidor ligado')
});
