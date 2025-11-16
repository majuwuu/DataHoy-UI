import React from 'react';
import { Header } from './Header';

export default {
  title: 'Organisms/Header',
  component: Header,
  argTypes: {
    navItems: { control: 'object' },
    date: { control: 'text' },
    searchPlaceholder: { control: 'text' },
  },
};

const Template = (args: any) => <Header {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  date: 'Domingo, 9 de Noviembre 2025',
  searchPlaceholder: 'Buscar noticias...',
  navItems: [
    { label: 'Fútbol', href: '#' },
    { label: 'Básquetbol', href: '#' },
    { label: 'Competencias', subItems: [
      { label: 'Liga', href: '#' },
      { label: 'Copa', href: '#' },
      { label: 'Internacional', href: '#' }
    ]},
    { label: 'Tenis', href: '#' },
    { label: 'Automovilismo', href: '#' },
    { label: 'Ciclismo', href: '#' },
    { label: 'Natación', href: '#' },
    { label: 'Estadísticas', href: '#' },
    { label: 'Análisis', href: '#' },
  ],
  showSubscribe: true,
  subscribeLabel: 'Suscribirse',
};