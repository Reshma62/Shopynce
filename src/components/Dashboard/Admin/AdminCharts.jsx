/* const AdminCharts = () => {
  return <div>Hello I am AdminCharts</div>;
};

export default AdminCharts;
 */
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

const AdminCharts = ({ productData }) => {
  console.log("productData", productData);
  return (
    <div>
      <ComposedChart
        width={600}
        height={400}
        data={productData}
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
          dataKey="production_cost"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="selling_price" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="profitAmount" stroke="#ff7300" />
        <Scatter dataKey="quantity" fill="#5F1E2E" />
      </ComposedChart>
    </div>
  );
};

export default AdminCharts;
