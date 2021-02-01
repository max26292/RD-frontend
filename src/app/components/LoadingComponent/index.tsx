/**
 *
 * LoadingComponent
 *
 */
import * as React from 'react';
import { Spinner } from 'reactstrap';
import styled from 'styled-components/macro';
import './styles.scss'
import LoadingImage from './loading.svg';
interface Props {
  color?:string
}


export function LoadingComponent(props: Props) {
  return (
    <div className="container-fluid align-middle">
      <div className="row d-flex vh-100  justify-content-center align-items-center ">
        <div>
        <div className="col-12 text-center">
          <img className='w-25' src={LoadingImage}/>
        </div>
        <div className="col-12 text-center">
          <h4 className='dot-loading mt-2'>Loading 
          <span>.</span>
          <span>.</span>
          <span>.</span></h4>
        </div>
        </div>
      </div>
    </div>
  );
}