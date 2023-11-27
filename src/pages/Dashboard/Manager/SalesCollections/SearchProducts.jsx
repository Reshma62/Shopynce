import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const SearchProducts = ({ search, register }) => {
  return (
    <Stack
      component="form"
      spacing={0}
      sx={{ width: "80%" }}
      direction="row"
      mb={3}
      onSubmit={search}
    >
      <TextField
        fullWidth
        label={"search by product by id"}
        {...register("id")}
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Stack>
  );
};

export default SearchProducts;
