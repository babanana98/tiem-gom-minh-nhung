import Typography from "@mui/material/Typography";
import LogoIcon from "../../atoms/LogoIcon/LogoIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div>
      <Typography variant="h6" component="h1">
        Tiệm Gốm Minh Nhung
      </Typography>
      <LogoIcon></LogoIcon>
      <Menu
        id="basic-menu"
        open={true}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        variant="selectedMenu"
      >
        <MenuItem>SẢN PHẨM</MenuItem>
        <MenuItem>GIỚI THIỆU</MenuItem>
        <MenuItem>LIÊN HỆ</MenuItem>
        <MenuItem>HỎI ĐÁP</MenuItem>
      </Menu>
      <TextField
        label="Tìm kiếm tên sản phẩm"
        variant="outlined"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        fullWidth
      />
    </div>
  );
}

export default Header;
