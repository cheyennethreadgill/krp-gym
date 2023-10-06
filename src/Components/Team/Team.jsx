import PageHeadersInfo from "../Global/PageHeadersInfo";
import MainNav from "../Global/MainNav";
import header from "../../images/Team/Team-header.jpg";
import members from "../Team/teamList";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Footer from "../Global/Footer";
import HeaderAccent from "../Global/headerAccent";
import Socials from "../Global/socials";
import { useState, useEffect } from 'react';
import Members from '../Team/memeberNames';

const Team = ({ darkMode, cartLength }) => {
  return (
    <section className='team '>
      <MainNav
        darkMode
        cartLength={cartLength}
      />
      <PageHeadersInfo
        name='Our Team'
        img={require('../../images/Team/Team-header.jpg')}
      />
      <section className='team_members text-light text-center bg-dark'>
        <Container className=' py-5 '>
          <h2 className='h1-secondary fw-bold pt-5 mt-3 position-relative'>
            <HeaderAccent />
            Meet Our strongest team
          </h2>
          <h5 className='fw-light'>Find your perfect mentor! Join us!</h5>
          {/* ROW--------------------------------------------------------- */}
          <Row className=' py-5 team_members_container'>
            {/* Memebers map backup---------------------------------------------- */}
            {members.map((person) => {
              return (
                <Col
                  lg='4'
                  md='12'
                  sm='12'
                  className='team_members_info '
                >
                  <div className='team_members_info_bio'>
                    {/* <Members /> */}
                    <h2 className='fw-bold m-0'>{person.fname}</h2>
                    <h2 className='fw-bold m-0'>{person.lname}</h2>
                    <p className='text-light team_members_info_bio_position'>
                      {person.position}
                    </p>
                  </div>
                  <div className='team_members_info_socials'>
                    <span>
                      <svg
                        className='position-absolute home_trainer_element'
                        xmlns='http://www.w3.org/2000/svg'
                        width='195.337'
                        height='195.337'
                        viewBox='0 0 195.337 195.337'
                      >
                        <path
                          d='M40.269,0,.37,39.9H125.879L0,165.778,28.222,194,154.082,68.121V193.63L194,153.712V0Z'
                          transform='translate(194.5 194.837) rotate(180)'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='1'
                        ></path>
                      </svg>
                      <div className='team_members_info_socials_icons'>
                        <Socials />
                      </div>
                    </span>
                  </div>

                  <Image
                    fluid
                    width='180'
                    roundedCircle
                    className='team_members_info_img'
                    src={person.img}
                    alt={person.lname + '' + person.position}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className='team_subscribe bg-dark text-light'>
        <Container className='pt-5 pb-4'>
          <Form className='text-light w-75 m-0 m-auto py-5'>
            <Form.Group className='text-center pb-5'>
              <Form.Label>
                <h2 className='h1-secondary fw-bold pt-5 mt-3 position-relative '>
                  <HeaderAccent />
                  subscribe
                </h2>
              </Form.Label>
              <Form.Text>
                <h5 className='text-light fw-light mb-5'>
                  Find your perfect mentor! Join us!
                </h5>
              </Form.Text>
              <Row className='gap-3 gap-lg-0'>
                <Col
                  lg='4'
                  md='12'
                >
                  <Form.Control
                    className=''
                    placeholder='Name'
                  ></Form.Control>
                </Col>
                <Col
                  lg='4'
                  md='12'
                >
                  <Form.Control
                    className=''
                    placeholder='Email'
                  ></Form.Control>
                </Col>
                <Col
                  lg='2'
                  md='12'
                >
                  <a className=' btn-light'>
                    Subscribe
                    <div className='button-container'>
                      <Button
                        type='submit'
                        variant='outline-light'
                      >
                        <span></span>
                      </Button>
                    </div>
                  </a>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Container>
      </section>
      <Footer />
    </section>
  );
};

export default Team;
