import db from '@/utils/db';

export const fetchFeaturedProducts = async() => {
   const products = await db.product.findMany({
    where:{
        // We get the products where the featured flag is set to true
        featured:true
    }
   })
   return products
}

// We set up a function to fetch all of the prodcut
export const fetchAllProducts = () => {
    // We want to return the DB
    return db.product.findMany({
         // In this case, we want to set up the order
         // The newest product is going to be displayed first
         orderBy: {
            createdAt: 'desc'
         }
    })
   
}