const devUrl = 'http://devurl';
const productionUrl = 'https://production';
const stageUrl = 'https://stage';
const status = process.env.REACT_APP_ENV || 'stage'; //default set to staging

export const apiURL =
  status === 'production'
    ? productionUrl
    : status === 'stage'
    ? stageUrl
    : devUrl;

const config = () => {
  return {
    url: `${apiURL}/endpoint`,
  };
};

export default config();
