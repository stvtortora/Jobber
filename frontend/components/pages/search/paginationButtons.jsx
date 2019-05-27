import React from 'react'

export default ({ totalCount, limit, offset, updateSearch }) => {
  const totalPages = Math.ceil(totalCount / limit)
  const currentPage = offset
  const firstButton = offset - 1 > 0 ? offset - 1 : offset
  const lastButton = offset + 1 <= totalPages ? offset + 1 : offset <= totalPages ? offset : firstButton

  const buttons = []
  let buttonNumber = firstButton
  while (buttonNumber <= lastButton) {
    const newOffset = buttonNumber.toString()
    buttons.push(
      <li className={buttonNumber === currentPage ? 'current-page-button page-button' : 'page-button'} onClick={() => updateSearch('offset')(newOffset)}>{buttonNumber}</li>
    )
    buttonNumber++
  }

  return (
    <ul className='pagination-buttons'>
      {
        firstButton !== 1 ?
        <div className='page-scroll'>
          <div onClick={() => updateSearch('offset')((offset - 1).toString())} className='page-button'>←</div>
        </div> :
        <div/>
      }
      {
        buttons.map(button => button)
      }
      {
        lastButton !== totalPages ?
        <div className='page-scroll'>
          <div className='last-page-dot-dot-dot'>{`... ${totalPages}`}</div>
          <div onClick={() => updateSearch('offset')((offset + 1).toString())} className='page-button'>→</div>
        </div>
        :
        <div/>
      }
    </ul>
  )
}
