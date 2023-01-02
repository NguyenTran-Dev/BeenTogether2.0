import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import loveGif from '../assets/images/love-hug-icegif.gif';
import mieAvt from '../assets/images/mie-avt.JPG';
import soriAvt from '../assets/images/soi-avt.JPG';
const Home = () => {
  const [togetherDate, setTogetherDate] = useState(0);
  const [loveDate, setLoveDate] = useState(0);
  const infor = [
    {
      id: 1,
      fullName: 'Sori',
      birthday: '29/08/2000',
      avtUrl: soriAvt
    },
    {
      id: 2,
      fullName: 'Mie',
      birthday: '07/01/2001',
      avtUrl: mieAvt
    }
  ];
  const startTogetherDate = new Date(2022, 6, 8); //start 2022/07/08 in js month - 1
  const startLoveDate = new Date(2022, 11, 24); //start 2022/12/24 in js month - 1
  useEffect(() => {
    /*eslint-disable */
    setTogetherDate(
      Math.floor(Math.floor((new Date() - startTogetherDate) / 86400000))
    );
    setLoveDate(
      Math.floor(Math.floor((new Date() - startLoveDate) / 86400000))
    );
  }, []);
  /*eslint-enable */
  return (
    <div className="home">
      <h2 className="text-center mt-1 mb-2">BEEN TOGETHER</h2>
      <div className="home--content">
        <Row className="mb-1">
          {infor.map((user, index) => {
            return (
              <Col xs={6}>
                <div className="home--card" key={index}>
                  <div className="home--card__img mx-auto">
                    <img className="w-100" src={user.avtUrl} alt="avt" />
                  </div>
                  <h4 className="text-center mt-2">{user.fullName}</h4>
                  <p className="text-center">{user.birthday}</p>
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-heart-fill text-danger"
            viewBox="0 0 16 16"
          >
            <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </div>
        <div className="text-center mt-1">
          <h3 className="text-danger">Love: {loveDate} days</h3>
          <h5 className="text-secondary">Together: {togetherDate} days</h5>
        </div>
        <p className="text-center home--content__note mb-0">
          Già Cùng Nhau Là được!
        </p>
      </div>
      <div className="mt-2 text-center w-100">
        <img src={loveGif} alt="icon-love" />
      </div>
    </div>
  );
};

export default Home;
