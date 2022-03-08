import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function PrimaryButtonText(props) {
  const { count = 2 } = props;
  return (
    <span>button 123</span>
  );
}

function PrimaryButton({ count }) {
  return (
    <button
      type="button"
      id="btn1"
      onChange={() => alert('1234')}
      style={{ width: '100%' }}>
      <PrimaryButtonText count={count} />
    </button>
  );
}

function getStr() {
  return 'string123';
}

export default function App() {
  const str = 'string';

  const items = [1, 2, 3, 4];

  const spans = items.map((item) => (
    <>
      <span>{`${item} postfix`}</span>
      <br />
    </>
  ));

  return (
    <>
      {[...Array(4)].map((_, index) => (
        <PrimaryButton count={index + 1} />
      ))}
      <p />
      {`asd${str}`}
      {str === '123' ? 'sasdas' : 'adsads'};
      <p />
      {str === '123' ? getStr() : 'adsads'};
      {spans}
      hello react
    </>
  );
}
