import React from 'react';

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  return <div>ProductDetailsPage</div>;
};

export default ProductDetailsPage;
