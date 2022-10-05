import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';

import Head from 'next/head';
import Header from '../components/Header';
import axios from 'axios';
import List from '../components/List';

import { Expense } from '@prisma/client';
import Filters from '../components/Filters';
import NewExpense from '../components/NewExpense';

interface Props {
  expenses: Expense[];
}

const Home: NextPage<Props> = ({ expenses }) => {
  return (
    <div>
      <Head>
        <title>Spending Tracker</title>
        <meta name="description" content="Track your budget!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Filters />
      <NewExpense />
      <List expenses={expenses} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const expenses = await axios.get('expenses').then((res) => res.data);
  return {
    props: { expenses }, // will be passed to the page component as props
  };
};

export default Home;
