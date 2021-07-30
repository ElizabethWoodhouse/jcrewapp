/*
SIMPLE EXAMPLE JSON FORMAT: 
Highlighting Info I need for now:
JSON:
{
    categoryHeader: {},
    sortByOrderType: [],
    productList: [],
    navigation: {},
    shopByList: [],
    resultCount: num,
    pagination: {},
    seoProperties: {}
}

categoryHeader: (obj) <=== key:value from JSON
{
    name: "sweaters"
    seo_h1: "Sweaters for Women"
}

productList: (array of objects) <=== key:value from JSON
[
    header: 'pullovers',
    products: []
]

products: (array of objects)  <=== key:value from productList
[
    {
    show-all-colors: false,
    styledWithSkus: "AY830_NA6434,AY943_NA6167",
    apiLink: "/data/v1/US/products/full/AY830/c/womens_category/sweaters/pullover",
    colors: [],
    productId: 845524441923471,
    productDescription: "Rollneck pullover sweater",
    listPrice: {amount: 69.50, formatted: "$69.50"},
    url: "/p/womens_category/sweaters/pullover/rollneck-pullover-sweater/AY830",
    productCode: "AY830",
    defaultColorCode: "NA6434",
    }
]
colors: (array of objects) <== key:value from products
[
    {
    show-on-sale: false,
    colorName: "VINTAGE SURPLUS",
    colorCode: "GR6062",
    }
]

*/

// const GET_PRODUCT_LIST = 'GET_PRODUCT_LIST';

// const getProductList = products => ({
//         type: GET_PRODUCT_LIST,
//         payload: products
//     })

