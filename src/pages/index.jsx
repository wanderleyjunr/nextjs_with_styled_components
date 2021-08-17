import P from 'prop-types';

import config from '../config';
import { mapData } from '../api/map-data';

import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';
export default function Index({ data }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data;
  try {
    data = await loadPages(config.defaultSlug);
  } catch (e) {
    //
  }
  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
