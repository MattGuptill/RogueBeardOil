import React from 'react'
import ShopifyBuyButtonBeach from './buy-button'
import ShopifyBuyButtonForest from './buy-button-forest'

export default function Shop () {
    

    const article = 'h-fit flex flex-col items-center pt-24 lg:h-dvh '
    const title = 'text-3xl font-titles underline pt-6 lg:pb-10'
    const divCon = 'flex flex-col w-4/5 justify-evenly lg:flex-row'
    const beachDiv = 'pt-10 '
    const forestDiv = 'pt-10'

  return (
    <>
        <article className={article}>
            <h1 className={title}>PRODUCTS</h1>
            <div className={divCon}>
                <div className={beachDiv}>
                    <ShopifyBuyButtonBeach />
                </div>
                <div className={forestDiv}>
                    <ShopifyBuyButtonForest />
                </div>
            </div>
        </article>
    </>
  )
}


