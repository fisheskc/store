import ProductsContainer from '@/components/products/ProductsContainer';
function ProductsPage({searchParams}:{searchParams:{layout?:string, search?:string}}) {
  // if it is not present, we have a default value
  const layout = searchParams.layout || 'grid'
  const search = searchParams.search || ''
  // In here we do want access the search params
  // We want to pass both searchParams layout & search as props
  console.log(searchParams)
  return (
    <ProductsContainer layout={layout} search={search} />
  )
}

export default ProductsPage