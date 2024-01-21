import React from 'react';

export default function ShopifyBuyButtonBeach () {
 return (
    <>
    
        <div id='product-component-1705793510423'></div>
        
        {function () {
        let scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
            } else {
            loadScript();
            }
        } else {
            loadScript();
        }
    
    
            function loadScript() {
                let script = document.createElement('script');
                script.async = true;
                script.src = scriptURL;
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
                script.onload = ShopifyBuyInit;
            }


            function ShopifyBuyInit() {
                let client = ShopifyBuy.buildClient({
                domain: '3e988b-3.myshopify.com',
                storefrontAccessToken: 'f83b19b39b8275d4f4d6df297d4f1fa1',
                });
                ShopifyBuy.UI.onReady(client).then(function (ui) {
                ui.createComponent('product', {
                    id: '8215419519201',
                    node: document.getElementById('product-component-1705793510423'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
            "product": {
                "styles": {
                // "product": {
                //     "@media (min-width: 601px)": {
                //     "max-width": "calc(25% - 20px)",
                //     "margin-left": "20px",
                //     "margin-bottom": "50px"
                //     }
                // },
                "button": {
                    "padding-left": "100px",
                    "padding-right": "100px"
                }
                },
                "text": {
                "button": "Add to cart"
                }
            },
            "productSet": {
                "styles": {
                "products": {
                    "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                    }
                }
                }
            },
            "modalProduct": {
                "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
                },
                "styles": {
                "product": {
                    "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                    }
                },
                "button": {
                    "padding-left": "100px",
                    "padding-right": "100px"
                }
                },
                "text": {
                "button": "Add to cart"
                }
            },
            "option": {},
            "cart": {
                "text": {
                "total": "Subtotal",
                "button": "Checkout"
                }
            },
            "toggle": {}
            },
        
                })
                })
            }
        }()
        }
        
       
    
</>
  );
};


