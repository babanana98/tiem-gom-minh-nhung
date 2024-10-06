import Typography from "@mui/material/Typography";
import LogoIcon from "../../atoms/LogoIcon";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <LogoIcon></LogoIcon>
      <Typography variant="h6" component="h1">
        Tiệm Gốm Minh Nhung
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Typography component={Link} to="/products" sx={{ textDecoration: 'none', color: 'inherit' }}>
          SẢN PHẨM
        </Typography>
        <Typography component={Link} to="/introduction" sx={{ textDecoration: 'none', color: 'inherit' }}>
          GIỚI THIỆU
        </Typography>
        <Typography component={Link} to="/contact" sx={{ textDecoration: 'none', color: 'inherit' }}>
          LIÊN HỆ
        </Typography>
        <Typography component={Link} to="/faq" sx={{ textDecoration: 'none', color: 'inherit' }}>
          HỎI ĐÁP
        </Typography>
      </Stack>
      <TextField
        variant="outlined"
        placeholder="Tên sản phẩm..."
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}

export default Header;
