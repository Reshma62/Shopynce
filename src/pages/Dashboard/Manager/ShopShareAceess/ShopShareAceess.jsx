import { useState } from "react";
import {
  Typography,
  ButtonGroup,
  Button,
  Grid,
  Container,
} from "@mui/material";
import Loading from "../../../../components/Shared/Loading/Loading";
import useGetAllShopIds from "../../../../Hooks/getAllshop/useGetAllShopIds";

const ShopShareAceess = () => {
  const { data: allShopIds, isLoading } = useGetAllShopIds();
  const [copyStatus, setCopyStatus] = useState({});

  const handleCopyClick = async (id) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopyStatus((prevCopyStatus) => ({
        ...prevCopyStatus,
        [id]: "Copied!",
      }));
    } catch (err) {
      setCopyStatus((prevCopyStatus) => ({
        ...prevCopyStatus,
        [id]: "Failed to copy!",
      }));
    } finally {
      setTimeout(() => {
        setCopyStatus((prevCopyStatus) => ({
          ...prevCopyStatus,
          [id]: undefined,
        }));
      }, 1500);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Typography variant="h4" color="initial" mb={4}>
        All Shop Ids
      </Typography>
      {allShopIds.map((shopId) => (
        <Grid
          key={shopId._id}
          container
          spacing={4}
          mb={2}
          justifyContent={"space-between"}
        >
          <Grid item xs={6} md={8}>
            <Typography
              border={"2px solid #5F1E2E"}
              borderRadius={2}
              py={1}
              px={2}
              variant="subtitle2"
              color="initial"
            >
              {shopId._id}
            </Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <ButtonGroup variant="contained" color="primary" aria-label="">
              <Button onClick={() => handleCopyClick(shopId._id)}>
                {copyStatus[shopId._id] ? "Copied!" : "Copy"}
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default ShopShareAceess;
