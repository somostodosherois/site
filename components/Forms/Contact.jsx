import React, { useState } from 'react'
import { BsWhatsapp, BsFolder } from "react-icons/bs";
import swal from 'sweetalert';

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import api from '../../pages/api/config'

const FormContact = ({ data, setOpenSnack, setMessageSnack }) => {

  if (!data) return null
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [to, setTo] = useState('presidencia@sth.org.br')
  const [text, setText] = useState('')

  const cleanForm = () => {
    setName('')
    setEmail('')
    setSubject('')
    setTo('presidencia@sth.org.br')
    setText('')
  }

  const handleClick = () => {
    api
      .post("/sendContact", {
        name: name,
        email: email,
        subject: subject,
        to: to,
        text: text
      })
      .then(() => {
        setMessageSnack('E-mail enviado com sucesso!')
        setOpenSnack(true)

        setTimeout(() => {
          setOpenSnack(false)
        }, 3000);
       
        cleanForm();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <div className="bg-red-600 pb-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:items-center pt-12">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h2 className="text-3xl lg:text-6xl font-bold text-white">{data.title}</h2>
              <p className="mt-1 text-sm text-white pb-8 sm:pb-16">{data.description}</p>

              <div className='grid gap-y-8'>
                <a href="#!" className="text-white text-lg">
                  <span className="flex gap-2">
                    <BsWhatsapp className='mt-1' /> WhatsApp
                  </span>
                  <span className="lg:grid font-bold hover:text-gray-600" style={{ alignItems: 'center' }}>
                    {data.wpp}
                  </span>
                </a>

                <a href="#!" className="text-white text-lg">
                  <span className="flex gap-2">
                    <BsFolder className='mt-1' /> E-mail
                  </span>
                  <span className="mb-4 font-bold hover:text-gray-600" style={{ alignItems: 'center' }}>
                    {data.email}
                  </span>
                </a>
              </div>

            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2 bg-white rounded-lg">
            <form action="#" method="POST">
              <Grid container spacing={5} className='p-8'>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Nome'
                    size="small"
                    color='error'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    size="small"
                    color='error'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Assunto'
                    size="small"
                    color='error'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Select
                    label="Setor"
                    value={to}
                    size="small"
                    color='error'
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <MenuItem value='presidencia@sth.org.br'>Selecione o setor responsável</MenuItem>
                    <MenuItem value='financeiro@sth.org.br'>Financeiro</MenuItem>
                    <MenuItem value='thays.lacerda@sth.org.br'>Tecnologia</MenuItem>
                    <MenuItem value='luana.silva@sth.org.br'>Marketing</MenuItem>
                    <MenuItem value='rafaela.raeski@sth.org.br'>Missões</MenuItem>
                    <MenuItem value='natashapelizari@sth.org.br'>Jurídico</MenuItem>
                    <MenuItem value='stephane.oliveira@sth.org.br'>Outros</MenuItem>
                  </Select>
                </Grid>
                <Grid item sm={12}>
                  <TextField
                    fullWidth
                    type='email'
                    label='Conteúdo'
                    color='error'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Grid>
                <Grid sm={12} className='flex align-center justify-center text-center mt-8'>
                  <Button variant='outlined' color='error' sx={{ marginRight: 3.5 }} onClick={handleClick}>
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div >
    </div >
  )
}

export default FormContact