/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../helpers'
import {Button} from "antd";
import styles from "./Calendar.module.css";

type Props = {
  icon: string
  title: string
  description: string
}

const Card4: FC<Props> = ({icon, title, description}) => {
  return (
    <div className='card h-100'>
      <div className='card-body d-flex justify-content-center text-center flex-column p-8'
      style={
        {
          boxShadow: "2px 2px 10px 3px rgba(0, 0, 0, 0.22)"
        }
      }>
        <a href='#' className='text-gray-800 text-hover-primary d-flex flex-column'>
          <div className='symbol symbol-75px mb-6'>
            <img src={toAbsoluteUrl(icon)} alt='' />
          </div>
          <Button shape='circle' style={
            {
                backgroundColor: '#2B7A0B',
                color: '#EAE509',
              fontWeight: 'bold',
            }
          }>
            {title}
          </Button>
        </a>
        {/*<div className='fs-7 fw-bold text-gray-400 mt-auto'>{description}</div>*/}
      </div>
    </div>
  )
}

export {Card4}
