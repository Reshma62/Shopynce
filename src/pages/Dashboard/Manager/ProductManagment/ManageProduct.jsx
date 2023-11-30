import useGetAllProduct from "../../../../Hooks/useGetAllProduct";
import DynamicTitle from "../../../../components/Shared/DynamicTitle/DynamicTitle";
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
      <DynamicTitle title={"Manage Shop"} />
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
