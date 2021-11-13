import React from 'react';
import { Grid } from '@material-ui/core';

import Product from '../Product/Product'

const products = [
    { id: 1, name: "MacBook", description: "Apple MacBook", price: "$2,849", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-gallery2-202110?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1632799174000" },
    { id: 2, name: "Shoes", description: "Running shoes", price: "$40", image: "https://pbs.twimg.com/media/EqrLzNSXIAEy_fC?format=jpg&name=900x900" },
]

const Products = () => {
    return (
        <main >
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products