import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {Snapshot} from "../src/Component/Snapshot";

const Home: NextPage = () => {
  return (
      <div>
        <Snapshot/>
      </div>
  )
}

export default Home
