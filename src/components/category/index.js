import React from "react"
import { Link } from "wouter"

import "./Category.css"

const Category = ({ name, options = [] }) => (
  <div className='Category'>
    <h3 className="Category-title">{name}</h3>
    <ul className="Category-list">
      {
        options.map(singleOption => (
          <li key={singleOption}>
            <Link className="Category-link" to={`/search/${singleOption}/g`}>
              {singleOption}
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Category
