/* eslint-disable @typescript-eslint/no-explicit-any */
const ReviewDetailPage = ({params}: any) => {
    return (  
        <div>
            <h1>
            Review detail page - {params.reviewId} from product {params.productId} 
            </h1>
        </div>
    );
}
///products/2/reivews/3
 
export default ReviewDetailPage;