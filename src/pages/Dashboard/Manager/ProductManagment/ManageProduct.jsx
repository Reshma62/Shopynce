import useGetAllProduct from "../../../../Hooks/useGetAllProduct";
import Loading from "../../../../components/Shared/Loading/Loading";
import NotAdded from "../../../../components/Shared/NotAdded/NotAdded";
import ProductManage from "./ProductManagment";
import Title from "./Title";

const ManageProduct = () => {
  const { data: products, isLoading } = useGetAllProduct();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {products.length === 0 ? (
        <>
          <NotAdded />
        </>
      ) : (
        <>
          <Title />
          <ProductManage />
        </>
      )}
    </>
  );
};

export default ManageProduct;
