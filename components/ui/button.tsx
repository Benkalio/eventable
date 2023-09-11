import React from 'react';
import Link from 'next/link';
import classes from './button.module.css';

function Button(props) {


  return (
    <div>
      <Link
        className={classes.btn}
        href={props.link}
      >{props.children}
      </Link>
    </div>
  )
}

export default Button;