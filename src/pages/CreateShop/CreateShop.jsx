import Box from "@mui/material/Box";
import {
  TextField,
  Container,
  Stack,
  Typography,
  Button,
  styled,
  Avatar,
} from "@mui/material";

import { CloudUpload } from "@mui/icons-material";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const CreateShop = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ border: "2px solid #ddd", pb: 5, mt: 10, pt: 5 }}
    >
      <Typography
        fontWeight={600}
        variant="h3"
        color="primary"
        textAlign={"center"}
        pb={5}
      >
        Create your Own Shop
      </Typography>
      <Box component="form" autoComplete="off">
        <div>
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Box sx={{ width: "48%", mb: 2 }}>
              <TextField
                id="outlined-shopName-input"
                label="Shop Name"
                type="text"
                fullWidth
              />
            </Box>
            <Box sx={{ width: "48%", mb: 2 }}>
              <TextField fullWidth label="Shop Location" id="shop_location" />
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Box sx={{ width: "48%", mb: 2 }}>
              <TextField
                id="outlined-read-only-input"
                label="Email"
                defaultValue="useremail@gmail.com"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Box>
            <Box sx={{ width: "48%", mb: 2 }}>
              <TextField
                id="outlined-read-only-input"
                label="Name"
                defaultValue="user name"
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
              />
            </Box>
          </Stack>

          <TextField
            variant="outlined"
            fullWidth
            multiline
            label="Shop description"
            minRows={4}
            size="small"
          />
          <Stack direction={"row"} gap={3} sx={{ mt: 2 }}>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUpload />}
            >
              Upload shop logo
              <VisuallyHiddenInput required type="file" />
            </Button>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Stack>
        </div>
        <Button
          sx={{ mt: 5 }}
          type="submit"
          variant="contained"
          color="secondary"
        >
          create Shop
        </Button>
      </Box>
    </Container>
  );
};

export default CreateShop;
