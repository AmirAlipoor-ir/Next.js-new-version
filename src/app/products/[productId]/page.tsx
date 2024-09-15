/* eslint-disable @typescript-eslint/no-explicit-any */
function ProductDetailPage({params}: any) {
    console.log(params);
    
  return (
    <div>
      <h1>ProductDetailPage - {params.productId}</h1>
    </div>
  );
}

export default ProductDetailPage;
