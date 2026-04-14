export async function generateStaticParams() {
  try {
    // We intentionally fetch up to 1000 items (or all) if the API supports it
    // If getting all products requires pagination, we can fetch all or just the first page.
    const res = await fetch('https://api.nexzoneuae.com/v1/api/web/product/get-products?limit=1000');
    const responseData = await res.json();
    
    // The data is inside responseData.data as an array
    if (responseData?.data && Array.isArray(responseData.data)) {
      return responseData.data.map((product) => ({
        id: product._id.toString(),
      }));
    }
  } catch (error) {
    console.error('Error generating static params for products:', error);
  }
  
  // Return an empty array if failed
  return [];
}

export default function ProductDetailLayout({ children }) {
  return <>{children}</>;
}
