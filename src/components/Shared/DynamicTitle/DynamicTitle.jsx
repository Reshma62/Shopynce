import { Helmet } from "react-helmet-async";

const DynamicTitle = ({ title }) => {
  return (
    <Helmet>
      <title> Shopynce | {title}</title>
    </Helmet>
  );
};

export default DynamicTitle;
