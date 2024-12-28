import PopularProduct from "./PopularProduct"

const PopularProducts = () => {
  return (
    <div className="max-w-screen-2xl lg:mx-auto mx-10 mt-10">
      <h1 className="text-3xl font-semibold pb-10">Popular Products</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />

        <PopularProduct />
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />

        <PopularProduct />
        <PopularProduct />
      </div>
    </div>
  )
}

export default PopularProducts