import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const SalesChart = ({ productData }) => {
  console.log("productData", productData);
  return (
    <div>
      <ComposedChart
        width={600}
        height={400}
        data={productData?.map((item) => ({
          name: item.productId.name,
          "Total-Production-Cost":
            item.productId.production_cost * item.productId.sale_count,
          quantity: item.productId.quantity,
          "Total-sale": item.productId.sale_count,
          "Total-Sell-Price":
            item.productId.sale_count * item.productId.selling_price,
          "Total-Profit":
            item.productId.profitAmount * item.productId.sale_count,
        }))}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="Total-Production-Cost"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="Total-Sell-Price" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="Total-Profit" stroke="#ff7300" />
        <Scatter dataKey="quantity" fill="#5F1E2E" />
      </ComposedChart>
    </div>
  );
};

export default SalesChart;
