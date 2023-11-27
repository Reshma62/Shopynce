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
      {products?.data?.length === 0 ? (
        <>
          <NotAdded addProduct={true} />
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
