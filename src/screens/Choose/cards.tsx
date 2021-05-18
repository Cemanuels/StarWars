import colors from '../../config/colors';

export const cards = [
  {
    name: 'PERSONAGENS',
    icon: `${require('../../assets/images/personagens.png')}`,
    color: `${colors.darkBlue}`,
    small: true,
    params: { urlData: 'people', name: "name", desc:"gender"}
  },
  {
    name: 'PLANETAS',
    icon: `${require('../../assets/images/planetas.png')}`,
    color: `${colors.blue}`,
    params: { urlData: 'planets', name: "name", desc:"terrain"}
  },
  {
    name: 'NAVES',
    icon: `${require('../../assets/images/naves.png')}`,
    color: `${colors.darkGray}`,
    params: {urlData: 'starships', name: "name", desc:"model"}
  },
  {
    name: 'FILMES',
    icon: `${require('../../assets/images/filmes.png')}`,
    color: `${colors.purple}`,
    params: {urlData: 'films', name: "title", desc:"episode_id"}
  },
  {
    name: 'VEÍCULOS',
    icon: `${require('../../assets/images/veiculos.png')}`,
    color: `${colors.red}`,
    params: {urlData: 'vehicles', name: "name", desc:"model"}
  },
  {
    name: 'ESPÉCIES',
    icon: `${require('../../assets/images/especies.png')}`,
    color: `${colors.yellow}`,
    params: {urlData: 'species', name: "name", desc:"classification"}
  },
];
