import React from 'react'

const options = [
  { title: 'Quem somos', div: '' },
  { title: 'Destino das doações', div: '' },
  { title: 'Como doações acontecem', div: '' },
  { title: 'Gestão social', div: '' },
  { title: 'Arquivos', div: '' },
  { title: 'Porquê ser guardião', div: '' },
  { title: 'FAQ', div: '' },
]

const MenuVertical = () => (
  <div className='pl-4'>
    <p className='pb-4 uppercase'>Conteúdo</p>

    {options.map(({ title, div }) => (
      <div className='' id={div}>
        <div className='border br-2'></div>
        <span className=''>{title}</span>
      </div>
    ))}
  </div>
)

export default MenuVertical