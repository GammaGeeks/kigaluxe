/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Pagination } from 'react-bootstrap'

import { propertiesAction } from '../../../redux/actions'

import './index.scss'
import {  Row, Col } from 'react-bootstrap'

import HomeCard from './HomeCard'

const SectionTwo = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(propertiesAction.fetchAllProperties(1, 4))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const properties = useSelector(state => state.properties)
  
  // eslint-disable-next-line no-unused-vars
  const { listOfProperties, Next, Prev, getProperties } = properties


  // console.log(properties);
  

  const nextPagination = () => {
    const nextPage = Next.page
    console.log('NextPage', nextPage);
    if(nextPage) dispatch(propertiesAction.fetchAllProperties(nextPage, 4));
  };

  const prevPagination = (e) => {
    const prevPage = Prev.page
    console.log('PrevPage', prevPage);
    if(prevPage) dispatch(propertiesAction.fetchAllProperties(prevPage, 4))
  };

  // const currentPage = Next && !Next.page ? (
  //   Prev.page + 1
  // ) : (
  //   Prev && Prev.page ? (
  //     Prev.page + 1
  //   ) : (
  //     Next.page - 1
  //   )
  // )

  return (
    <Row className='sectionTwo'>
      <div className='row title'>
        <h2 className='text-center'>Top Ranked Appartments</h2>
      </div>
      <div className="row card-container">
        { properties && listOfProperties ? listOfProperties.map((item, key) => {
          return (
            <Col key={key} md={6}>
              <HomeCard property={item} />
            </Col>
          )
        }) : ''}
        <div className='d-flex justify-content-center align-content-center'>
            <Pagination>
              <Pagination.Prev onClick={prevPagination} />
              {/* <Pagination.Item>{currentPage ? currentPage : 1}</Pagination.Item> */}
              <Pagination.Next onClick={nextPagination}  />
            </Pagination>
        </div>
      </div>
    </Row>
  )
}

export default SectionTwo
