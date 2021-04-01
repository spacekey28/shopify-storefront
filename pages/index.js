import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { client } from '../utils/shopify-client'

const HomePage = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Spacekey28 Merch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world!</h1>
    </div>
  )
}

export default HomePage;

export const getServerSideProps = async(context) => {
  const products = await client.product.fetchAll();
  const info = await client.shop.fetchInfo();
  const policies = await client.shop.fetchPolicies();

  return {
    props: {
      info: JSON.parse(JSON.stringify(info)),
      policies: JSON.parse(JSON.stringify(policies)),
      products: JSON.parse(JSON.stringify(products)),
    }
  }
};